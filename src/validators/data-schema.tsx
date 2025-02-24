import { z } from "zod";

// form zod validation schema for user registration
export const dataSchema = z.object({
    name: z.string().min(2, "Must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    role: z.string().min(2, "Invalid role"),
    company: z.string().min(2, "Invalid company"),
    branch: z.string().min(2, "Invalid branch"),

  
});

export type DataSchema = z.infer<typeof dataSchema>;