import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  skuID: z.string(),
  name: z.string(),
  receivedQty: z.string(),
  purchaseSKU: z.string(),
  purchaseSKU2: z.string(),
})

export type Task = z.infer<typeof taskSchema>
