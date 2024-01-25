"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
  import TabButton from "./TabButton";
import aboutImage from '../images/about-image.png'
import tsImage from '../images/tech/ts.png'
import jsImage from "../images/tech/js.webp"
import reactImage from '../images/tech/react..png'
import nextImage from '../images/tech/next.png'
import dartImage from '../images/tech/dart.webp'
import cSharpImage from '../images/tech/c.png'
import net from '../images/tech/net.webp'
import dart from '../images/tech/dart.webp'
import flutter from '../images/tech/flutter.webp'
import cssImage from '../images/tech/css.webp'
import figma from '../images/tech/figma.webp'





const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={aboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Coding</h2>
          <p className="text-base lg:text-lg">
         2+ years of digital solutions and information technology

          </p>
          <div className="flex flex-row justify-start items-start mt-8">
            <button className="text-4xl font-bold capitalize">
               tecnologies we use
            </button>
            
          </div>
          <div className="mt-8 flex justify-between items-center flex-wrap bg-gray-900 p-5 rounded-md">
            <Image src={tsImage} alt="not found" className="w-[50px] h-[50px] m-8 mt-3 rounded-lg"/>
            <Image src={jsImage} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            <Image src={reactImage} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            <Image src={nextImage} alt="not found" className="w-[50px] h-[50px] m-8 mt-3 rounded-full"/>
            <Image src={cSharpImage} alt="not found" className="w-[50px] h-[50px] m-8 mt-3 rounded-lg"/>
            <Image src={net} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            <Image src={dart} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            <Image src={flutter} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            <Image src={figma} alt="not found" className="w-[50px] h-[50px] m-8 mt-3"/>
            
            
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
