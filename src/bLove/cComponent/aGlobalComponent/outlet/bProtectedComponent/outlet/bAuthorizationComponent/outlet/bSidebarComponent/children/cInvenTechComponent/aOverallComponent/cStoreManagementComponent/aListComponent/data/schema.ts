import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  id: z.string(),
  name: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  pin: z.string(),
  contactPerson: z.string(),
})

export type Task = z.infer<typeof taskSchema>
