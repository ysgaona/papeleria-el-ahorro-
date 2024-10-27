"use client";

import { useCallback, useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "@/app/api/models/userSchema";
import Image from "next/image";

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      privacyAccepted: false,
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit = useCallback<SubmitHandler<FieldValues>>((data) => {
    if (!privacyAccepted) {
      toast.error("Debe aceptar la política de privacidad para registrarse");
      return;
    }
  
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Cuenta creada");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("./");
            router.refresh();
            toast.success("Sesión Iniciada");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Algo salió mal"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [privacyAccepted, router]);
  
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
  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center m-3 lg:px-2">
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
          <h2 className="mt-5 mb-5 text-center text-xl font-bold leading-4 tracking-tight text-gray-900">
            Formulario de Registro
          </h2>
       
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Input
            id="firstname"
            label="Nombre"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.firstname?.message && (
            <p className="text-red-500 text-sm">
              {errors.firstname.message as string}
            </p>
          )}

          <Input
            id="lastname"
            label="Apellido"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.lastname?.message && (
            <p className="text-red-500 text-sm">
              {errors.lastname.message as string}
            </p>
          )}
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
        </div>
       
        <div className="flex items-center mt-2 mb-2">
          <input
            type="checkbox"
            id="privacy"
            className="mr-2"
            required // Se cambia a required para que sea realmente requerido
            disabled={isLoading}
            onChange={(e) => setPrivacyAccepted(e.target.checked)} // Actualiza el estado cuando cambia la casilla
          />
          <label htmlFor="privacy" className="text-sm">
            He leído y acepto la 
            <Link href="/terms-conditions" target="_blank">
            <span className="underline"> política de privacidad</span>
            </Link>
          </label>
        </div>
      </div>
      <div className="pt-4 mb-3 p-2 flex flex-col items-center">
        <Button
          label={isLoading ? "Loading" : "Registrarse"}
          onClick={handleSubmit(onSubmit)}
        />
      
      </div>
      <p className="text-sm  lex flex-col text-center">
        Ya tienes una cuenta?{" "}
        <Link
          className="underline text-[#474747] transition-colors hover:text-black "
          href="./login"
        >
          Inicia Sesión
        </Link>
      </p>
    </div>
   
  );
};

export default RegisterForm;

