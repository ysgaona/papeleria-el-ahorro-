import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Container from "../components/container/Container";
import Image from "next/image";
const Contact = () => {
  return (
    <Container>
      <section className="py-8">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800">Contáctanos</h1>
            <p className="text-lg text-gray-600 mt-2 mb-2">
              Estamos aquí para ayudarte en lo que necesites.
            </p>
            <Image
            src="/contact.png"
            alt="contact"
            width={1440}
            height={40}
            />
           
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-6">
                <span className="inline-block p-3 text-gray-600 bg-gray-200 rounded-full">
                  <MdEmail className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    Correo Electrónico
                  </h2>
                  <p className="text-sm text-gray-600">
                    Nuestro equipo amigable está aquí para ayudarte.
                  </p>
                  <p className="mt-1 text-sm text-gray-800">
                    electrocreditos-ahorro@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="inline-block p-3 text-gray-600 bg-gray-200 rounded-full">
                  <MdLocationOn className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    Oficina
                  </h2>
                  <p className="text-sm text-gray-600">
                    Estamos ubicados en:
                  </p>
                  <p className="mt-1 text-sm text-gray-800">
                    Via a la Bramadora Calle 3 - La Bramadora
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="inline-block p-3 text-gray-600 bg-gray-200 rounded-full">
                  <MdPhone className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    Teléfono
                  </h2>
                  <p className="text-sm text-gray-600">
                    Horario de atención: Lunes a viernes de 8am a 5pm.
                  </p>
                  <p className="mt-1 text-sm text-gray-800">
                    (+593) 986228963
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-white mt-2 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Juan"
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Pérez"
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="juanperez@example.com"
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">
                    Número de celular
                  </label>
                  <input
                    type="tel"
                    placeholder="1234567890"
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mensaje"
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-[#282828] rounded-md hover:bg-[#2f313a] focus:outline-none ">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-800">Showroom</h1>
        <div className="flex flex-wrap justify-around py-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.66560112632!2d-79.56666696600581!3d-0.5000000089143505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902ada0c90a77ed5%3A0x6668c943efcfaddc!2sLa%20Bramadora!5e0!3m2!1ses!2sec!4v1711855917465!5m2!1ses!2sec" width="900" height="450"   loading="lazy"></iframe>
        </div>
        </div>
      </section>
     
    </Container>
  );
};

export default Contact;
