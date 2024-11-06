import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(1, "Username is required"),
    fullname: z.string().min(1, "Full name is required"),
    password: z
        .string()
        .min(8, "The password must be at least 8 characters long.")
        .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
            "🚨The password must include numbers, uppercase and lowercase letters, and special characters."),
    email: z.string().email("Must be a valid email address"),
    birthdate: z.string().optional(),
    nationality: z.string().optional(),
    role: z.string().optional(),
});



export const userUpdateSchema = z.object({
    userId: z.string().optional(),
    username: z.string().min(1, "🚩Username is required").optional(),
    fullname: z.string().min(1, "🚩Fullname is required").optional(),
    password: z.string()
        .min(8, "🚩The password must be at least 8 characters long")
        .regex(/(?=.*[0-9])/, "🚨The password must include at least one number")
        .regex(/(?=.*[a-z])/, "🚨The password must include at least one lowercase letter")
        .regex(/(?=.*[A-Z])/, "🚨The password must include at least one uppercase letter")
        .regex(/(?=.*[\W_])/, "🚨The password must include at least one special character")
        .optional(),
    email: z.string().email("🖖🏼Must be a valid email address").optional(),
    birthdate: z.string().optional(),
    nationality: z.string().optional(),
}).partial();
