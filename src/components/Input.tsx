'use client';

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef
} from 'react';
import { IconType } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: IconType;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, icon: Icon, error, ...rest },
  ref
) => {
  return (
    <div className="relative w-full">
      <input
        id={label}
        ref={ref}
        {...rest}
        className={`block px-3 pt-6 pb-1 w-full text-md text-white bg-transparent border-2 ${
          error ? 'border-orange-500' : 'border-red-500'
        } rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition`}
        placeholder=" "
      />
      <label
        htmlFor={label}
        className="absolute flex gap-2 text-md text-white duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        <Icon className="w-5 h-5 text-white" /> {label}{' '}
        {error && <span className="text-orange-500"> - {error}</span>}
      </label>
    </div>
  );
};

export default forwardRef(Input);
