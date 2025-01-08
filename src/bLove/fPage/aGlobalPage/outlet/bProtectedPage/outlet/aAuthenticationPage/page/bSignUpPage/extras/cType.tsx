import { z } from "zod";


export const formSchema = z.object({
  eFirstname: z.string()
    .min(5, { message: "Please enter at least 5 characters" })
    .max(15, { message: "Please enter at most 15 characters" }),
  eLastname: z.string()
    .min(5, { message: "Please enter at least 5 characters" })
    .max(15, { message: "Please enter at most 15 characters" }),
  eEmail: z.string().email({ message: "Please enter a valid email address" }),
  eMobile: z.string().regex(/^[0-9]{10}$/, { message: "Please enter a valid mobile number" }),
  ePassword: z.string()
    .min(8, { message: "Please enter at least 8 characters" })
    .max(15, { message: "Please enter at most 15 characters" }),
  eConfirmPassword: z.string()
    .min(8, { message: "Please enter at least 8 characters" })
    .max(15, { message: "Please enter at most 15 characters" }),
}).refine((data) => data.ePassword === data.eConfirmPassword, {
  message: "Passwords do not match",
  path: ["eConfirmPassword"],
});
