import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
// import Skills from "components/OldSkills/Skills";
import Projects from "components/Projects/Projects";
import ContactMe from "components/Contact/ContactMe";
import Certifications from "components/Certifications/Certifications";
import axios from "axios";
import React from "react";
import SkillsSection from "components/SkillsSection/SkillsSection";
import Carousel from "components/Carousel/Carousel";
import { useState, useEffect } from "react";
import ProjectsMobile from "components/ProjectsMobile/ProjectsMobile";
import data from "data.json"

const inter = Inter({ subsets: ["latin"] });
export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
type Props = {
  data: any;
};

export default function Home(props: Props) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full">
      <Head>
        <title>{`Salsabila Niarno`}</title>
      </Head>
      <Header data={props.data[5]} />
      <section id="hero" className="snap-start">
        <Hero data={props.data[1]} />
      </section>

      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About data={props.data[0]} />
      </section>

      <section
        id="certifications"
        className="snap-start snap-mandatory snap-always"
      >
        <Certifications data={props.data[2]} />
      </section>
      <section id="skills" className="snap-start snap-mandatory  snap-always">
        <SkillsSection data={props.data[3]} />
      </section>
      <section id="projects" className="snap-start snap-mandatory  snap-always max-h-screen overflow-clip">
        {width > 768 ? (
          <Carousel data={props.data[4]} />
        ) : (
          <ProjectsMobile data={props.data[4]}/>
        )}
        
      </section>
      <section id="contact" className="snap-start snap-mandatory  snap-always">
        <ContactMe />
      </section>
    </div>
  );
}
