import { z } from "zod"

const loginSchema = () => {
  const schema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1)
  })

  return schema;
}

export const loginValidationSchema = loginSchema();
export type LoginValidationSchema = z.infer<typeof loginValidationSchema>

