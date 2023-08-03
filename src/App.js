import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Information from "./Pages/Information";
import Agency from "./Pages/Agency";
import Meyoriy from "./Pages/Meyoriy/Index";
import Content from "./components/agency/Content";
import Content3 from "./components/agency/Content3";
import Content2 from "./components/agency/Content2";
import Content4 from "./components/agency/Content4";
import Content5 from "./components/agency/Content5";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Information />} />
        <Route path="video" element={<Meyoriy />} />
        <Route path="agency" element={<Agency />}>
          <Route index element={<Content />} />
          <Route path="manage" element={<Content2 />} />
          <Route path="system" element={<Content3 />} />
          <Route path="posters" element={<Content4 />} />
          <Route path="connection" element={<Content5 />} />
        </Route>
        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  );
};

export default App;
