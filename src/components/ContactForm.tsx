'use client';

import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

import Input from './Input';

import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = () => {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg flex flex-col items-center gap-5"
    >
      <h1 className="text-white font-semibold text-3xl">Me mande um email</h1>
      <Input
        label="Name"
        icon={AiOutlineUser}
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Your Email"
        icon={AiOutlineMail}
        error={errors.email?.message}
        {...register('email')}
      />
      <div className="relative w-full">
        <textarea
          id="Message"
          {...register('message')}
          className={`resize-none block px-3 pt-6 pb-1 w-full text-md text-white bg-transparent border-2 ${
            errors.message?.message ? 'border-orange-500' : 'border-red-600'
          } rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition`}
          placeholder=" "
        />
        <label
          htmlFor="Message"
          className="absolute flex gap-2 text-md text-white duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          <AiOutlineMessage className="w-5 h-5 text-white" /> Message{' '}
          {errors.message?.message && (
            <span className="text-orange-500">
              {' '}
              - {errors.message?.message}
            </span>
          )}
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="p-5 bg-red-500 text-white w-full rounded-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
