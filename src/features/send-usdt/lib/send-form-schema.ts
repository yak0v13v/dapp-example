import { isAddress } from "viem/utils";
import { z } from "zod";

export const sendFormSchema = z
  .object({
    addressTo: z
      .string({ required_error: "Address is required" })
      .refine(isAddress, { message: "Address not valid" }),
    amount: z.coerce.number().min(0, { message: "Amount must be possitive" }),
  })
  .required();

export type SendFormSchema = z.infer<typeof sendFormSchema>;
