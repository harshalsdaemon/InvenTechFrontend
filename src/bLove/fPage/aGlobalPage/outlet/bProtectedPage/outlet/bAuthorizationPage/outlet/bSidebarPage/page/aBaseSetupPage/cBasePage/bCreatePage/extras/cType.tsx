import { z } from "zod";


export const formSchema = z.object({
  aImage: z.object({
    pid: z.string(),
    url: z.string()
  }),
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
  
  cBaseOneToOne: z.string(),
  cBaseOneToMany: z.array(z.string()),
  cBaseManyToOne: z.string(),
  cBaseManyToMany: z.array(z.string()),

});
