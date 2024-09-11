import { z } from "zod"

const registerSchema = () => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1)
  })

  return schema;
}

export const registerValidationSchema = registerSchema();
export type RegisterValidationSchema = z.infer<typeof registerValidationSchema>

