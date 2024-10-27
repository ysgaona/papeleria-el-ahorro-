import React from 'react';
import Container from '../components/container/Container';
import Image from 'next/image';

type Props = {};

function AboutPage({}: Props) {
  return (
    <Container>
      <h1 className='text-left text-2xl font-serif text-slate-800 mt-8 mb-8 '>
        Acerca de Papelería El Ahorro
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>HISTORIA</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
          La historia de Electrocréditos El Ahorro está marcada por un compromiso inquebrantable: brindar a 
          nuestra comunidad acceso a los mejores electrodomésticos con un servicio personalizado y confiable. 
          Desde nuestros inicios en 2014, hemos evolucionado continuamente para adaptarnos a las cambiantes 
          necesidades de nuestros clientes y los rápidos avances tecnológicos en la industria de los electrodomésticos. 
          A lo largo de los años, nos hemos enorgullecido de mantener nuestra integridad y dedicación a la 
          calidad de los productos que ofrecemos día tras día. Nuestra historia es la historia de nuestro 
          compromiso constante con la excelencia y la satisfacción del cliente. En nuestras instalaciones, 
          nuestros clientes encontrarán una amplia gama de electrodomésticos, desde lavadoras y refrigeradores
           hasta televisores y pequeños electrodomésticos.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/empresa.png"
            alt="Empresa"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>MISIÓN</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>

           En Electrocréditos el Ahorro, nuestra dedicación se centra en proporcionar productos de la más 
           alta calidad, excediendo constantemente las expectativas de nuestros clientes. Nos comprometemos
           a garantizar durabilidad y completa satisfacción en cada compra realizada. Este compromiso se 
           materializa a través de una meticulosa selección de proveedores, asegurando que cada producto 
           cumpla rigurosamente con nuestros exigentes estándares de calidad. Nuestra principal prioridad 
           es tu confianza, y trabajamos incansablemente para mantenerla en cada interacción que tenemos contigo.

          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/frase.png"
            alt="Misión"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

  
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>VISIÓN</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
          Nos dedicamos a consolidarnos como una empresa líder en el mercado, distinguiéndonos por nuestra 
          constante exploración de las tendencias tecnológicas más recientes. Nuestro compromiso se centra
           en ofrecer una atención personalizada, junto con productos innovadores a precios competitivos. 
           Priorizamos la excelencia en el servicio al cliente, con el fin de generar confianza y garantizar
            la satisfacción total en cada experiencia.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/escaleras.png"
            alt="Visión"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300 mb-8">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>NUESTROS CLIENTES</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
          Nuestros clientes son nuestra inspiración y nuestra motivación. Continuaremos adaptándonos y 
          evolucionando para satisfacer sus necesidades en un mundo en constante cambio. Su satisfacción
           y fidelidad son nuestra mayor recompensa, y esperamos seguir siendo parte de sus vidas durante
            muchos años más.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300 mb-8">
          <Image
            src="/clientes.jpg"
            alt="Clientes"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
