import { z } from "zod";


export const formSchema = z.object({
  eEmail: z.string()
    .min(3, { message: "Please enter at least 3 characters" })
    .max(50, { message: "Please enter at most 50 characters" })
    .email({ message: "Please enter a valid email address" }),
  ePassword: z.string()
    .min(8, { message: "Please enter at least 8 characters" })
    .max(50, { message: "Please enter at most 50 characters" }),
});
