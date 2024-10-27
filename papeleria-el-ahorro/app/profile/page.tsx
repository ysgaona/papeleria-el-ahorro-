"use client";

import React from "react";
import Container from "@/app/components/container/Container";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineUser, AiOutlineMail, AiOutlineCheckCircle } from "react-icons/ai";
import ProtectedRoute from "@/app/components/ProtectedRoute";

function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <ProtectedRoute>
    <Container>
      <div className="pt-8 flex flex-col items-center">
        <h1 className="font-bold text-xl mb-8">Perfil de Usuario</h1>

        <div className="bg-zinc-100 rounded-lg p-6 max-w-md w-full">
          {session && (
            <>
              <p className="mb-4 text-md font-semibold text-left">
                Información Personal
              </p>

              <p className="mb-4 flex items-center">
                <AiOutlineUser className="mr-2" />
                 {/* @ts-ignore */}
                <strong className="mr-2">Nombre: </strong> {session.user?.firstname}
              </p>
              <p className="mb-4 flex items-center">
                <AiOutlineUser className="mr-2" />
                {/* @ts-ignore */}
                <strong className="mr-2">Apellido: </strong> {session.user?.lastname}
              </p>
              <p className="mb-4 flex items-center">
                <AiOutlineMail className="mr-2" />
                <strong className="mr-2">Email: </strong> {session.user?.email}
              </p>
              <p className="mb-4 flex items-center">
                <AiOutlineCheckCircle className="mr-2 " />
                <strong className="mr-2">Status: </strong> {status}
              </p>
            </>
          )}
        </div>

        <div className="pb-8">
          <button
            className="mt-8 bg-[#282828] text-white py-2 px-4 rounded hover:bg-gray-400 hover:text-gray-950 transition duration-300"
            onClick={handleSignOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </Container>
    </ProtectedRoute>
  );
}

export default ProfilePage;
