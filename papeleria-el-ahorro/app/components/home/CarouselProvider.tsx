"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const CarouselProvider: React.FC = () => {
  const marcas = [
    "logo_lg.png",
    "logo_samsung.png",
    "logo_amazon.png",
    "logo_apple.png",
    "logo_indurama.png",
    "logo_sony.png",
    "logo_whirlpool.png",
    "logo_xiaomi.png",
    "logo_electrolux.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="pt-8 ">Marcas Destacadas</h2>
      <Slider {...settings} className="pb-0">
        {marcas.map((marca, index) => (
          <div key={index}>
            <Image
              src={`/${marca}`}
              alt={`Marca ${index + 1}`}
              width={300}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselProvider;
