import React from "react";
import Hero from "../../components/hero/hero";
import Service from "../../components/servic/service";
import News from "../../components/News/News";
import Statistic from "../../components/Statistics";
import About from "../../components/about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <News />
      <Statistic />
      <About />
    </>
  );
};

export default Home;
