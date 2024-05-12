import { z } from 'zod';

export const contactFormSchema = z.object({
   name: z
      .string({
         required_error: 'Name is required',
      })
      .min(3, { message: 'Name must be at least 3 characters long' })
      .max(50, { message: 'Name must be at most 50 characters long' }),
   email: z
      .string({
         required_error: 'Name is required',
      })
      .email({ message: 'Invalid email address' }),
   message: z.string().min(5).max(1000),
});

export type contactFormSchema = z.infer<typeof contactFormSchema>;
