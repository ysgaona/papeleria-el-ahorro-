"use client";

import { useCallback, useState } from "react";
import Avatar from "react-avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { destroyCookie } from "nookies";
import BackDrop from "./BackDrop";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import { IoPersonOutline } from "react-icons/io5";

import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSignOut = async () => {
    destroyCookie(null, "cartCookie");
    await signOut();
    router.replace("/");
    toggleOpen();
  };

  const renderMyAccountLink = () => {
    if (currentUser && currentUser.role === "ADMIN") {
      return (
        <Link href="/admin">
          <MenuItem onClick={toggleOpen}>Mi Cuenta</MenuItem>
        </Link>
      );
    } else if (currentUser) {
      return (
        <Link href="/profile">
          <MenuItem onClick={toggleOpen}>Mi Cuenta</MenuItem>
        </Link>
      );
    }
    return (
      <>
        <Link href="/login">
          <MenuItem onClick={toggleOpen}>Iniciar Sesión</MenuItem>
        </Link>
        <Link href="/register">
          <MenuItem onClick={toggleOpen}>Registrarse</MenuItem>
        </Link>
      </>
    );
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={toggleOpen}
         
        >
          {currentUser && currentUser.image ? (
            <Avatar src={currentUser.image} alt="" size="25" round={true} />
          ) : (
            <div
              style={{
                marginTop:"10px",
                marginBottom:"-12px",
                width: "30px",
                height: "30px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoPersonOutline size={28} color="#343a40" />
            </div>
          )}

          
        </div>
        {isOpen && (
          <div
            className="absolute
            rounded-md
            shadow-md
            w-[130px]
            bg-white
            overflow-hidden
            right-0
            text-sm
            flex
            flex-col
            cursor-pointer
            z-index
            "
          >
            {renderMyAccountLink()}
            {currentUser && (
              <>
                <MenuItem onClick={handleSignOut}>Cerrar Sesión</MenuItem>
              </>
            )}
          </div>
        )}
        <br />
      </div>
    </>
  );
};

export default UserMenu;
