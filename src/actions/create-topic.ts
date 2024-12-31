"use server";
import { z } from "zod";
import { auth } from "@/auth";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, "must be lowerccase letters or dashes without spaces"),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: Record<string, string[]>;
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");

  const result = createTopicSchema.safeParse({ name, description });

  if (!result.success) {
    console.log("server victor", {
      errors: result.error.flatten().fieldErrors,
    });

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
  return {
    errors: {
      name: [],
      description: [],
    },
  };
}
