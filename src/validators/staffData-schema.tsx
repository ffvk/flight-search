import { z } from "zod";

// form zod validation schema for user registration
export const StaffdataSchema = z.object({
    id: z.string().min(2,"invalid id"),
    name: z.string().min(2, "Must be at least 2 characters"),
    role: z.string().min(2, "Invalid role"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    

  
});

export type StaffDataSchema = z.infer<typeof StaffdataSchema>;