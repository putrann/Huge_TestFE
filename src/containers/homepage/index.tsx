import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionSecond from './components/SectionSecond';
import Carousel from './components/Carousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionSecond />
      <Carousel />
    </>
  );
}
