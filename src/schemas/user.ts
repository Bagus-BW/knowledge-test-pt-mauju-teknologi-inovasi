import { z } from "zod"

const userSchema = () => {
  const schema = z.object({
    name: z.string().min(1),
    job: z.string().min(1),
  })

  return schema;
}

export const userValidationSchema = userSchema();
export type UserValidationSchema = z.infer<typeof userValidationSchema>

