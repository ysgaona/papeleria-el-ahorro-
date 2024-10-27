"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  disabled: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative resize-none">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`
          peer
          w-full
          p-2
          mt-1
          mb-1
          outline-none
          bg-white
          font-light
          border-2
          rounded-md
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-rose-400" : "border-slate-300"}
          ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
        `}
      />
      <label
        htmlFor={id}
        className={`absolute 
        cursor-text 
        text-xm 
        duration-150 
        tranform
        -translate-y-1
        top-4
        z-10
        origin-[0]
        left-2
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
      ${errors[id] ? "text-rose-500" : "text-slate-900"}

      `}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
