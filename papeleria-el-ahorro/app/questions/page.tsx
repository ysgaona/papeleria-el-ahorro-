'use client'; 

import React from 'react';
import Image from 'next/image';
import Container from '../components/Container';

const FaqPage: React.FC = () => {
    const questions = [
        {
            question: "¿Cuál es el tiempo de entrega?",
            answer: "El tiempo de entrega de los muebles varía según el producto o pedido solicitado por el cliente. Por lo general, intentamos entregar los pedidos dentro de 5 - 14 días calendario."
           
        },
        {
            question: "¿Ofrecen entrega gratuita?",
            answer: "Sí, ofrecemos entrega gratuita en pedidos superiores a $200 dólares. Para pedidos inferiores, se aplican tarifas de envío estándar."
        },
        {
            question: "¿El costo de los muebles incluye la instalación?",
            answer: "En la ciudad de Quito y Valles, el costo de los muebles incluye la instalación en domicilio. Para provincias, realizamos envíos y los costos de instalación pueden ser acordados con el cliente.",
            image: "/image1.png"
        },
        {
            question: "¿Cómo puedo realizar un seguimiento de mi pedido?",
            answer: "Puedes realizar un seguimiento de tu pedido contactándonos a través de nuestros medios de comunicación o por WhatsApp para obtener información sobre el avance y aclarar cualquier duda relacionada con el pedido.",
        },
        {
            question: "¿Ofrecen descuentos por compras al por mayor?",
            answer: "Sí, ofrecemos descuentos especiales para compras al por mayor. Ponte en contacto con nuestro equipo de ventas para obtener más información.",
            
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos pagos por transferencia bancaria y efectivo."
        },
        {
            question: "¿Cuál es el proceso de garantía?",
            answer: "Todos nuestros productos vienen con una garantía de 6 meses contra defectos de fabricación. Si encuentras algún problema, contáctanos y te ayudaremos a resolverlo.",
            
        },
        {
            question: "¿Tienen tiendas físicas donde pueda ver los productos?",
            answer: "No contamos con tiendas físicas, sin embargo, te invitamos a visitar nuestro punto de fabricación. Por favor, contáctanos para obtener más detalles sobre nuestra ubicación y horarios de atención.",
            
        },
       
        // Agrega más preguntas aquí si es necesario
    ];

    return (
        <Container>
            <div className="max-w-5xl mx-auto py-8 px-4">
                <h1 className="text-center text-2xl font-bold mb-4">Preguntas Frecuentes - Muebles Maldonado</h1>

                {questions.map((question, index) => (
                    <div className="mb-8" key={index}>
                        <h2 className="text-xl font-bold mb-2">{question.question}</h2>
                        <p className="text-justify mb-4">{question.answer}</p>
                        {question.image && (
                            <div className=" relative p-2 flex items-center justify-center rounded-md  overflow-hidden">
                            <Image
                                src={question.image}
                                alt="Imagen representativa"
                                width={400}
                                height={200}
                                objectFit="contain"
                                className="m-auto"
                                style={{width:"360px",height:"200px"}}
                            />
                        </div>
                        
                        )}
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default FaqPage;
