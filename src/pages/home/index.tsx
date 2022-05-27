import React from "react";
import Header from "components/Header";
import WaveSection from "components/WaveSection";
import Carousel from "components/Carousel";
import GlobalSection from "components/GlobalSection/Global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <WaveSection />
      <GlobalSection />
      <Carousel />
    </>
  );
}
