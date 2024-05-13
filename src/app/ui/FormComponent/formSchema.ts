import { z } from 'zod';

export const contactFormSchema = z.object({
   name: z
      .string({
         required_error: 'Name is required',
      })
      .min(3, { message: 'Name must contain at least 3 characters' })
      .max(50, { message: 'Name must contain at most 50 characters' }),
   email: z.string().email(),
   message: z
      .string()
      .min(5, { message: 'Message must contain at least 5 characters' })
      .max(1000, { message: 'Message must contain at most 1000 characters' }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
