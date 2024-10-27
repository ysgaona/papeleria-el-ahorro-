"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Usar useRouter en lugar de next/navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRef, useState } from "react";
import Container from "./Container";

const Hero = () => {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);

  const SliderCarrusel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: "0px",
      appendDots: (dots: any) => (
        <div style={{ textAlign: "center", bottom: "10px" }}>
          <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i: number) => (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: currentSlide === i ? "white" : "transparent",
            border: "1px solid white",
            display: "inline-block",
            margin: "0 5px",
          }}
        />
      ),
      afterChange: (current: number) => {
        setCurrentSlide(current);
      },
    };

    return (
      <div className="home-slider relative">
        <Slider ref={sliderRef} {...settings} className="w-full px-0">
          <section className="w-full relative">
            <Link href="/electrodomesticos">
              <Image
                src="/banner2.png"
                alt="Imagen Dos"
                width={1440}
                height={360}
                className="mx-auto slider-image"
              />
            </Link>
          </section>
          <section className="w-full relative">
            <Link href="/electrodomesticos">
              <Image
                src="/banner5.png"
                alt="Imagen Tres"
                width={1440}
                height={360}
                className="mx-auto slider-image"
              />
            </Link>
          </section>
          <section className="w-full relative">
            <Link href="/electrodomesticos">
              <Image
                src="/banner4.png"
                alt="Imagen Cuatro"
                width={1440}
                height={360}
                className="mx-auto slider-image"
              />
            </Link>
          </section>
        </Slider>
      </div>
    );
  };

  return (
    <div className="text-black w-full h-full">
      <Container>
        <SliderCarrusel />
      </Container>
    </div>
  );
};

export default Hero;