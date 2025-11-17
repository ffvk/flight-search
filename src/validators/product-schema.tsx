import { z } from "zod";

// form zod validation schema for user registration
export const productSchema = z.object({
  products_name: z.string().min(2, "Must be at least 2 characters"),
  url: z.string().min(2, "Invalid "),
  products_price: z.number().min(1, "Invalid phone number"),
  // is_active: z.boolean(true),
});

export type ProductSchema = z.infer<typeof productSchema>;
