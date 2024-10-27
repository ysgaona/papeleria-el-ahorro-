import { z } from "zod";

const userSchema = z.object({
  firstname: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre debe tener menos de 20 caracteres",
    })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios",
    }),
  lastname: z
    .string()
    .min(3, {
      message: "El apellido debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El apellido debe tener menos de 20 caracteres",
    })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: "El apellido solo puede contener letras y espacios",
    }),

  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido",
  }),
  
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }).regex(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/, {
    message: "La contraseña debe contener al menos una letra y un número",
  }),
});

export default userSchema;
