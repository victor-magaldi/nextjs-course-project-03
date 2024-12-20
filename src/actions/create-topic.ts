"use server";
import { error } from "console";
import { z } from "zod";

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
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {
      name: [],
      description: [],
    },
  };
}
