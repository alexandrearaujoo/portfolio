import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ContactRequest, contactSchema } from '@/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactRequest>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactRequest) => {
    const res = await fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL}`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ...data })
      }
    );

    if (res.ok) {
      toast.success('Message sent successfully');
      reset();
      return;
    }

    if (!res.ok) {
      toast.error('Something went wrong');
      return;
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
