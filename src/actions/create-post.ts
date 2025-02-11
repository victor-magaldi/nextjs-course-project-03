"use server";

import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/paths";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: Record<string, string[]>;
}
export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const title = formData.get("title");
  const content = formData.get("content");

  const result = createPostSchema.safeParse({ title, content });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);

    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session?.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }
  const topic = await db.topic.findFirst({
    where: { slug },
    select: { id: true },
  });
  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find topic."],
      },
    };
  }

  let post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id as string,
        topicId: topic.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create new post"],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
}
