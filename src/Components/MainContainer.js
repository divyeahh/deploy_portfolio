import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Header from "./Header";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import DetaileProjectView from "../Pages/DetaileProjectView";

const MainContainer = () => {
  return (
    <div>
      <Header />
      <Routes basename="/">
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/detailedProject" element={<DetaileProjectView />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
