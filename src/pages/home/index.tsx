import React, { useEffect } from "react";
import Header from "components/Header";
import WaveSection from "components/WaveSection";
import Carousel from "components/Carousel";
import GlobalSection from "components/GlobalSection/Global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".container-global", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".container-global",
        start: "top 90%",
        end: "bottom 60%",
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <Header />
      <WaveSection />
      <GlobalSection />
      <Carousel />
    </>
  );
}
