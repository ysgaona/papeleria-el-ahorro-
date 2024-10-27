import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/app/api/actions/getCurrentUser";
import Container from "../container/Container";
import UserMenu from "./UserMenu";
import CartCount from "./CartCount";
import Menu from "./Menu";
import { FaWhatsapp } from "react-icons/fa";
import SearchBar from "@/app/search/SearchBar";

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="top-0 w-full bg-slate-40 z-20 shadow-sm relative">
      <div className="top-0 w-full bg-slate-40 z-25 shadow-sm">
        <div className="bg-[#D32B2B] text-white pb-1">
          <p className="text-sm font-medium pt-1 text-center justify-center">
            Compra online desde tu móvil{" "}
            <span className="inline-block">
              <FaWhatsapp />
            </span>{" "}
            +593 986228963 .{" "}
            <Link href="/tecnologia" className="inline-block underline">
              Revisa nuestras promociones!
            </Link>
          </p>
        </div>
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-1">
            {/* Logo centrado para dispositivos móviles */}
            <div className="flex justify-center items-center md:justify-start md:items-center">
              <Link href="/">
                <Image
                  src="/electrocredits-logoA.png"
                  alt="logo"
                  width={180}
                  height={65}
                  className="mb-0"
                  style={{ width: "180px", height: "65px" }}
                  priority={false}
                />
              </Link>
            </div>
           
            <div className="flex items-center justify-between w-full md:w-auto md:gap-5 cursor-pointer">
              <div className="flex">
                <Menu />
              </div>
              
              <div className="flex items-center gap-[0.8rem] ">
                <SearchBar  />
                <UserMenu currentUser={currentUser} />
                <CartCount />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;

