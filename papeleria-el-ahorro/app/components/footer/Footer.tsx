import Container from "@/app/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#D32B2B] text-white pt- flex flex-col sm:flex-row items-center justify-center">
        <p className="ml-2 mr-4 text-sm">Aceptamos transferencias Bancarias</p>
        <div className="flex items-center">
          <Image
            src="/cards.svg"
            alt="image"
            width={120}
            height={80}
            className="mx-auto"
            style={{ width: "auto", height: "auto" }}
            priority={false}
          />
        </div>
        <div className="flex items-center ">
          <Image
            src="/tarjetas.png"
            alt="image"
            width={320}
            height={80}
            className="mx-auto pl-8"
          />
        </div>
      </div>

      <footer className=" bg-[#282828] pt-4">
        <Container>
          <div className=" px-2 pb-2  lg:px-8 lg:pt-8 ">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3  ">
              <div>
                <div className="flex justify-center sm:justify-start pt-2 ">
                  <Link href="/">
                    <Image
                      src="/electrocredits-logoA.png"
                      alt="logo"
                      width={200}
                      height={65}
                      className="mt-0 "
                      style={{
                        filter: "invert(50%)",
                        width: "180",
                        height: "65",
                      }}
                    />
                  </Link>
                </div>

                <p
                  className="mt-2 max-w-md  sm:text-left leading-relaxed text-white text-sm mx-auto hidden sm:block"
                  style={{ textAlign: "justify" }}
                >
                  Electrocréditos en una empresa dedicada a la comercialización
                  de electrodomésticos y productos del hogar
                </p>

                <ul className="mt-3 flex justify-center gap-4 sm:justify-start md:gap-4 ">
                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.whatsapp.com/?lang=es_LA"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">WhatsApp</span>
                        <FaWhatsapp size={25} />
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.facebook.com/?locale=es_LA"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebookSquare size={25} />
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram size={25} />
                      </Link>
                    </div>
                  </li>

                  
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">
                    Contacto
                  </p>

                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Link className="flex items-center text-white" href="#">
                        <IoMdMail size={20} className="mr-2" />
                        <span className="text-white pr-8 text-xs">
                          {" "}
                          electrocreditoselahorro2024@gmail.com
                        </span>
                      </Link>
                    </li>

                    <li className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Link className="flex items-center text-white" href="#">
                        <IoMdCall size={20} className="mr-2" />
                        <span className="text-white ">
                          {" "}
                          +593 986228963
                        </span>
                      </Link>
                    </li>

                    <li className="flex text-white  items-center justify-center sm:justify-start gap-1.5">
                      <IoLocationSharp size={20} className="mr-0" />
                      <address className="text-white">
                        {" "}
                        Manabí, El Carmen
                      </address>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">
                    Nuestros Productos
                  </p>

                  <ul className="mt-4 space-y-3 text-sm">
                    <li>
                      <Link
                        href="/electrodomesticos"
                        className="transition text-white dark:hover:text-white/75"
                      >
                        Electrodomésticos
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/lavanderia"
                        className="transition text-white dark:hover:text-white/75"
                      >
                        Lavanderia
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/linea-de-hogar"
                        className="transition text-white dark:hover:text-white/75"
                      >
                        Linea de hogar
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/tecnologia"
                        className="transition text-white dark:hover:text-white/75"
                      >
                        Tecnologia
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white hidden sm:block">
                    Enlaces Útiles
                  </p>

                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="hidden sm:block">
                      <Link
                        className="transition text-white dark:hover:text-white/75"
                        href="/faqs"
                      >
                        FAQs
                      </Link>
                    </li>

                    <li className="hidden sm:block">
                      <Link
                        className="transition text-white dark:hover:text-white/75"
                        href="/support"
                      >
                        Soporte
                      </Link>
                    </li>

                    <li className="hidden sm:block">
                      <Link
                        href="/terms-conditions"
                        className="transition text-white dark:hover:text-white/75"
                      >
                        Términos y Condiciones
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-auto mt-2 border-t border-gray-100 pt-2 dark:border-white flex flex-col sm:flex-row items-center justify-between">
              <div className="flex justify-center w-full">
                <p className="text-sm text-white justify-center items-center text-center sm:text-left">
                  Todos los derechos reservados &copy; {currentYear}.
                  Electrocréditos el Ahorro
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
