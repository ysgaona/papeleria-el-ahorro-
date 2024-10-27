"use client";

import { useState } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importa los íconos de ojo abierto y cerrado

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
}) => {
  // Estado para manejar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  // Estado para almacenar el valor actual del campo de entrada
  const [inputValue, setInputValue] = useState("");

  // Función para manejar el cambio de valor en el campo de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        value={inputValue} 
        onChange={handleInputChange} 
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={`peer
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
          ${
            errors[id]
              ? "border-[#474747] focus:border-[#474747]"
              : "border-slate-300 focus:border-[#474747]"
          }
        `}
      />
      {/* Mostrar el texto de entrada solo si el campo está vacío */}
      {inputValue === "" && (
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
            ${
              errors[id]
                ? "text-[#474747]"
                : "text-gray-500"
            }
          `}
        >
          {label}
        </label>
      )}
      {/* Botón para mostrar u ocultar la contraseña */}
      {type === "password" && (
        <button
          type="button"
          className="absolute top-6 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
};

export default Input;