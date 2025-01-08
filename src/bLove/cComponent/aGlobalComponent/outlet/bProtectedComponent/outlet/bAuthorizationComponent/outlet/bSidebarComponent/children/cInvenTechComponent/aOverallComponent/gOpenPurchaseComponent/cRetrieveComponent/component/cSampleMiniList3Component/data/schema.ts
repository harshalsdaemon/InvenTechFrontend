import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  entryNo: z.string(),
  skuID: z.string(),
  name: z.string(),
  receivedQty: z.string(),
  purchaseSKU: z.string(),
  dateOfEntry: z.string(),
  barcode: z.string(),
})

export type Task = z.infer<typeof taskSchema>
