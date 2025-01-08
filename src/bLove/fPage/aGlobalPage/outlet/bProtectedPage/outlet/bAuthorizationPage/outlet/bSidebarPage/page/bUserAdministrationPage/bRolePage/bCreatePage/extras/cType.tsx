import { z } from "zod";


const accessSchema = z.object({
  list: z.boolean().default(true),
  create: z.boolean().default(true),
  retrieve: z.boolean().default(true),
  update: z.boolean().default(true),
  delete: z.boolean().default(true),
});

// Define the cMenu item schema
const cMenuItemSchema = z.object({
  menu: z.string().optional(), // Expecting ObjectId as a string
  access: accessSchema,
});

export const formSchema = z.object({
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aSubtitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(500, { message: "Please enter atmost 500 characters" }),
  aDescription: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(5000, { message: "Please enter atmost 5000 characters" }),
  aDetail: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(50000, { message: "Please enter atmost 50000 characters" }),
  aStatus: z.string()
    .min(5, { message: "Please select status" })
    .max(15, { message: "Please select status" }),
  aSlug: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  
  cMenu: z.array(cMenuItemSchema).optional(), // Optional in case there are no menu items initially

});
