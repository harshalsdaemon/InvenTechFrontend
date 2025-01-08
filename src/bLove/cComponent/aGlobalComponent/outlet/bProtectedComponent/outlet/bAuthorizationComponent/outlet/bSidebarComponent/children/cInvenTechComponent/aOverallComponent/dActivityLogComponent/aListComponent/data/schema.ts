import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  timestamp: z.string(),
  username: z.string(),
  emloyee: z.string(),
  role: z.string(),
  module: z.string(),
  crud: z.string(),
  status: z.string(),
})

export type Task = z.infer<typeof taskSchema>
