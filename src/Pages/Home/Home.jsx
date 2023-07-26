import React from "react";
import Hero from "../../components/hero/hero";
import Service from "../../components/servic/service";
import News from "../../components/News/News";
import Statistic from "../../components/Statistics";
import About from "../../components/about/About";
import Media from "../../components/media/media";
import Queston from "../../components/questions/queston";
import Useful from "../../components/useful/useful";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <News />
      <Statistic />
      <About />
      <Media />
      <Queston />
      <Useful />
    </>
  );
};

export default Home;
