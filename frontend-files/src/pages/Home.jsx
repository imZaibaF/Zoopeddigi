import React from "react";
import Banner from "../components/Banner";
import Herosection from "../components/Home/Herosection";
import Solutions from "../components/Home/Solutions";
import Offer from "../components/Home/Offer";
import ClientWord from "../components/Home/Clientword";
import Whyus from "../components/Home/Whyus";
import Testimonials from "../components/Home/Testimonials";
import Faq from "../components/Home/Faq";
import Connectus from "../components/Home/Connectus";
import Project from "../components/Home/Project";

export const Home = () => {
  return (
    <div>
      <Herosection />

      <Solutions />
      <Offer />
      <ClientWord />
      <Whyus />
      <Testimonials />
      <Faq />
      <Connectus />
      <Project />
      <div className="max-w-7xl mx-auto">{/* <BlogPage /> */}</div>
    </div>
  );
};
