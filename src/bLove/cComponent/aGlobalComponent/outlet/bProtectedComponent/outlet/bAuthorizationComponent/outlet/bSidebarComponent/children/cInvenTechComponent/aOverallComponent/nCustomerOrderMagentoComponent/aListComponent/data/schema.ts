import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  purchaseDate: z.string(),
  billingName: z.string(),
  shippingName: z.string(),
  orderCost: z.string(),
  email: z.string(),
  name: z.string(),
})

export type Task = z.infer<typeof taskSchema>
