import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, 'Name is required'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email')
    .min(2, 'Email is required'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(3, 'Message is required')
    .max(256, 'Message is too long')
});

export type ContactRequest = z.infer<typeof contactSchema>;
