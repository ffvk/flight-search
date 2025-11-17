import { z } from "zod";

// form zod validation schema for user registration
export const TeacherdataSchema = z.object({
    name: z.string().min(2, "Must be at least 2 characters"),
    subject: z.string().min(2,"invalid subject"),
    experience:  z.string().min(2,"invalid experience"),
    email: z.string().email("Invalid email address"),
    rating: z.string().min(2,"Invalid rating"),


  
});

export type TeacherDataSchema = z.infer<typeof TeacherdataSchema>;