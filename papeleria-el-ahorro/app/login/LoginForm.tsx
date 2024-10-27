"use client";

import Heading from "@/app/components/home/Heading";
import { useCallback, useEffect, useState } from "react";
import Input from "@/app/components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { SafeUser } from "@/types";
import { on } from "events";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit = useCallback<SubmitHandler<FieldValues>>(
    (data) => {
      setIsLoading(true);
      signIn("credentials", {
        ...data,
        redirect: false,
      }).then((callback) => {
        setIsLoading(false);

        if (callback?.ok) {
          router.push("/");
          router.refresh();
          toast.success("Sesión iniciada");
        }
        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    },
    [router]
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleSubmit, onSubmit]);

  if (currentUser) {
    return <p className="text-center">Iniciando sesión. Redirigiendo....</p>;
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="m-4">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <div className="mb-0">
            <Image
              src="/logoA.png"
              alt="logo"
              width={180}
              height={65}
              className="mb-0 "
              style={{ width: "180px", height: "55px" }}
            />
          </div>
          <h2 className="mt-5 text-center text-xl font-bold leading-4 tracking-tight text-gray-900">
            Iniciar sesión en su cuenta
          </h2>
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Input
          id="email"
          label="Correo"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      {errors.password?.message && (
        <p className="text-red-500 text-sm">
          {errors.password.message as string}
        </p>
      )}

      <div className="pt-1 flex justify-end">
        <Link
          className="underline text-[#474747] transition-colors hover:text-black"
          href="#"
          onClick={handleOpenModal}
        >
          <p className="text-sm  text-[#474747] hover:text-black">
            ¿Olvidaste tu contraseña?
          </p>
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            {/* Fondo borroso */}
            <div className="fixed inset-0 bg-black opacity-30"></div>
            {/* Modal */}
            <div className="bg-white rounded p-8  max-w-xl relative">
              <h2 className="text-center text-xl font-bold mb-4 pb-4">
                Recuperar Contraseña
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Aquí puedes agregar la lógica para enviar la solicitud de reseteo de contraseña
                  // Por ejemplo:
                  // enviarSolicitudResetContraseña();
                  // Y luego mostrar el mensaje de confirmación con toast
                  toast.success(
                    "Revise su bandeja de entrada para restablecer su contraseña."
                  );
                  handleCloseModal();
                }}
              >
                <div className="mb-2">
                  <p className="text-md text-justify">
                    Por favor ingrese su correo electrónico para <br />{" "}
                    restablecer su contraseña
                  </p>

                  <input
                    type="email"
                    id="email"
                    className="p-2 mt-2 block w-full border border-gray-50 rounded-md shadow-sm focus:ring-indigo-50 focus:border-gray-100 sm:text-sm bg-gray-100"
                    placeholder="example@example.com"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
                    onClick={(e) => {
                      const emailInput = document.getElementById(
                        "email"
                      ) as HTMLInputElement;
                      if (!emailInput || !emailInput.checkValidity()) {
                        toast.error(
                          "Por favor ingrese un correo electrónico válido."
                        );
                        return;
                      }
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="pl-4 mt-4 text-sm text-[#474747] hover:bg-[#282828] hover:text-white focus:outline-none rounded py-2 px-6 transform hover:scale-105 transition duration-300"
                  onClick={handleCloseModal} // Utiliza handleCloseModal para cerrar el modal
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Iniciar sesión con </p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <FcGoogle size={30} />
        </button>
        <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
          <FaFacebook size={30} className="text-[#1877F2]" />
        </button>
      </div>

      <div className="pt-4 mb-8 p-2 flex flex-col items-center">
        <Button
          label={isLoading ? "Loading" : "Iniciar Sesión"}
          onClick={handleSubmit(onSubmit)}
        />
        <p className="text-sm mt-2">
          No tienes una cuenta ?{" "}
          <Link
            className="underline  text-[#474747] transition-colors hover:text-black"
            href="./register"
          >
            Registrarse ahora
          </Link>
        </p>
      </div>
    </form>
    </>
    
  );
};

export default LoginForm;


