"use client";

import Link from "next/link";
import { useState } from "react";
import { MdDisabledByDefault, MdMenu } from "react-icons/md";

function Menu() {
  const [navbar, setNavbar] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const toggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
  };

  return (
    <div>
      <nav className="w-full bg-[#E8EAED] top-14 left-0 right-0 z-10">
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden flex items-center justify-between flex-1">
              <span className="font-semibold">Categorías</span>
              <button
                className="p-1 text-slate-800 rounded-md outline-none focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MdDisabledByDefault
                    className="focus:border-none active:border-none"
                    size={30}
                  />
                ) : (
                  <MdMenu
                    className="focus:border-none active:border-none"
                    size={30}
                  />
                )}
              </button>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-0 mt-2 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-4 mt-4 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-2 text-md font-semibold py-2 md:px-12 text-center text-sm border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>

                <li className="pb-2 text-md  font-semibold py-2 md:px-12 text-center text-sm border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li
                  className="pb-2 text-md font-semibold  py-2 px-12 text-center  text-sm border-b-2 md:border-b-0   md:hover:bg-transparent relative"
                  onMouseEnter={toggleSubcategories}
                  onMouseLeave={toggleSubcategories}
                >
                  <Link href="/productos">
                  <p>Productos</p>
                  </Link>
                 
                  {showSubcategories && (
                    <div className="absolute bg-gray-100 w-48 py-2 px-4 mt-2 rounded-md shadow-md">
                      <ul>
                        <Link href="/electrodomesticos">
                        <li className="text-sm py-1">Electrodomésticos</li>
                        </Link>
                        <Link href="/lavanderia">
                        <li className="text-sm py-1">Lavandería</li>
                        </Link>
                        <Link href="/linea-de-hogar">
                        <li className="text-sm py-1">Línea de Hogar</li>
                        </Link>
                        <Link href="/tecnologia">
                        <li className="text-sm py-1">Tecnología</li>
                        </Link>
                        <Link href="/celulares">
                        <li className="text-sm font-semibold py-1">Celulares</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="pb-2 text-sm font-semibold   py-2 px-12 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link href="/contacto" onClick={() => setNavbar(!navbar)}>
                    Contacto
                  </Link>
                </li>
                <li className="w-full pt-12 pb-2 flex justify-center text-md md:hover:bg-transparent md:hidden">
                  <Link href="/login">
                    <button className="inline-block bg-[#515f8d] text-white py-2 px-4 rounded-lg w-full">
                      Login
                    </button>
                  </Link>
                </li>
                <li className="w-full pb-2 flex justify-center text-md md:hover:bg-transparent md:hidden">
                  <Link href="/register">
                    <button className="bg-[#365f66] text-white py-2 px-4 rounded-lg w-full">
                      Register
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
