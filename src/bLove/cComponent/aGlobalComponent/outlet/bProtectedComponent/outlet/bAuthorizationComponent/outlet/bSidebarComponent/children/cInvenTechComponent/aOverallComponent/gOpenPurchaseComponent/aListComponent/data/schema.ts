import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  id: z.string(),
  supplier: z.string(),
  status: z.string(),
  dateCreated: z.string(),
  lastUpdatedOn: z.string(),
  poValueAED: z.string(),
  close: z.string(),
})

export type Task = z.infer<typeof taskSchema>
