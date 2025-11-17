import { z } from "zod";

// form zod validation schema for user registration
export const UsersSchema = z.object({
  user_name: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid"),
  phone_number: z.string().min(10, "Invalid phone number"),
  password_hash: z.string().min(5, "Invalid password"),
  company_name: z.string().min(2, "Must be at least 2 characters"),
  action: z.string().optional(),
  // is_active: z.literal(true).optional().default(true), // ✅ valid
});

export type UsersSchema = z.infer<typeof UsersSchema>;
