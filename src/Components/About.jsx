import React from "react";
import vectors from "../../src/Assets/vectors.svg";
import aboutImage1 from "../../src/Assets/aboutImage1.png";
import aboutImage2 from "../../src/Assets/aboutImage2.png";
import aboutImage3 from "../../src/Assets/aboutImage3.png";
import aboutImage4 from "../../src/Assets/aboutImage4.png";
import iconAbout from "../../src/Assets/iconAbout.svg";
import AboutIllustration1 from "../../src/Assets/AboutIllustration1.svg";
import AboutIllustration2 from "../../src/Assets/AboutIllustration2.svg";

import locationicon from "../../src/Assets/locationicon.svg";
import calender from "../../src/Assets/calender.svg";
import localguide from "../../src/Assets/localguide.svg";
import sustainable from "../../src/Assets/sustainable.svg";
import aeroplane from "../../src/Assets/aeroplane.svg";

import Travellerwithsuitcase from "../../src/Assets/Travellerwithsuitcase.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className=" w-screen min-h-screen">
      <div className="flex lg:flex-row flex-col w-full bg-gradient-to-b from-transparent via-white to-white min-h-screen relative">
        <div className="lg:w-[64%] w-screen min-h-full lg:pr-12 px-0 lg:pl-[121px] py-12 lg:py-[101px] flex flex-col">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            className={`text-7xl font-bold  text-[#060644] lg:text-start text-center relative before:w-[74%] lg:before:w-[30%] before:h-[3px] lg:before:left-0 before:-bottom-4 before:bg-[#FBD601] before:absolute`}
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            className={`left-0 px-8 lg:px-0 mt-16 w-full  lg:text-start text-justify leading-6 text-md text-zinc-500 font-normal`}
          >
            Welcome to Paryatan Tours, your gateway to unforgettable travel
            experiences. We are a passionate team of travel enthusiasts
            dedicated to curating exceptional tours that inspire adventure,
            discovery, and connection. <br /> <br /> Founded on the belief that
            travel enriches the soul and broadens the mind, Paryatan has been
            helping explorers like you embark on journeys filled with wonder and
            excitement. Whether you&apos;re seeking the thrill of uncharted
            territories, the tranquility of serene landscapes, or a deep dive
            into cultural wonders, we have a perfect itinerary tailored just for
            you. <br /> <br /> At Paryatan, we pride ourselves on delivering
            personalized, high-quality travel experiences. Our carefully crafted
            tours combine expert local knowledge with a commitment to
            sustainable and responsible tourism, ensuring that every trip not
            only meets your expectations but exceeds them.
            <br /> <br /> Join us as we navigate the world, one adventure at a
            time. Let us take care of the details while you focus on making
            memories that will last a lifetime.
          </motion.p>
        </div>
        <div className="hidden justify-center items-center lg:w-[40%] w-screen  p-6 lg:flex flex-col">
          <div className="illustrations w-full mt-20 relative h-[80vh] ">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            >
              <img src={vectors} alt="Vectors" className="absolute" />
            </motion.div>
            <div className="flex flex-row">
              <motion.div
                initial={{ x: -160, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="top-24 left-12 absolute"
              >
                <img src={aboutImage1} className="" alt="About-Image-1" />
              </motion.div>
              <motion.div
                initial={{ y: -160, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="top-20 right-32 absolute "
              >
                <img src={aboutImage2} className="" alt="About-Image-2" />
              </motion.div>
              <motion.div
                initial={{ y: 160, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bottom-24 left-12 absolute"
              >
                <img src={aboutImage3} alt="About-Image-3" className="" />
              </motion.div>
              <motion.div
                initial={{ x: 160, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bottom-36 right-32 absolute"
              >
                <img src={aboutImage4} className="" alt="About-Image-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen flex lg:-mb-24 min-h-screen  flex-col items-center ">
        <div className="w-screen px-40 py-6 flex lg:flex-row flex-col items-center justify-between gap-12">
          <div className="flex items-start flex-col">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              className="flex gap-2"
            >
              <img src={iconAbout} alt="icon" />
              <p className="text-zinc-950 font-bold uppercase text-xl">
                Our Vision
              </p>
            </motion.div>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              className="text-zinc-500 mt-4 font-regular text-lg lg:w-[50vw] w-[80vw] text-left"
            >
              To be a trusted leader in the travel industry, known for our
              innovation, excellence, and commitment to responsible tourism.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            className="w-[80vw] flex justify-center lg:justify-end "
          >
            <img
              src={AboutIllustration1}
              alt="AboutIllustration1"
              className=""
            />
          </motion.div>
        </div>

        <div className="w-screen px-40 py-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <div className="flex items-end flex-col">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              className="flex gap-2"
            >
              <img src={iconAbout} alt="icon " />
              <p className="text-zinc-950 font-bold uppercase text-xl">
                Our mission
              </p>
            </motion.div>
            <motion.h2
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              className="text-zinc-500 mt-4 font-regular text-lg lg:w-[50vw] w-[80vw] text-right"
            >
              To create inspiring and meaningful travel experiences that connect
              people with the beauty and diversity of the world.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            className="w-[80vw] flex justify-center lg:justify-start "
          >
            <img src={AboutIllustration2} alt="AboutIllustration2" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen min-h-screen flex flex-col items-center py-16">
        <h4 className="text-4xl text-zinc-950 font-bold relative before:w-[75%] before:h-[3px] before:bg-[#FBD601] before:-bottom-4 before:absolute before:mx-10">
          Why Choose Us ?
        </h4>
        <div className="w-screen flex flex-col lg:flex-row ">
          <div className="flex flex-col py-24 lg:px-36 gap-6 items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              className="quality flex gap-6 lg:w-[45vw] w-[90vw] px-4 py-3 rounded-xl  shadowStyle"
            >
              <div className="p-4 my-auto h-fit rounded-xl w-fit bg-[#1D1DA4DE]">
                <img
                  src={locationicon}
                  alt="locationIcon"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-2xl text-xl -mt-1 font-bold text-zinc-950">
                  Expertly Curated Tours
                </h4>
                <p className="text-zinc-500 font-medium text-md">
                  Chooce your favorite location
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              className="quality flex gap-6  lg:w-[45vw] w-[90vw] px-4 py-3 rounded-xl  shadowStyle"
            >
              <div className="p-4 my-auto h-fit rounded-xl w-fit bg-[#FF8126]">
                <img src={calender} alt="locationIcon" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-2xl text-xl -mt-1 font-bold text-zinc-950">
                  Personalized Itineraries
                </h4>
                <p className="text-zinc-500 font-medium text-md">
                  Set the date you want
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              className="quality flex gap-6 lg:w-[45vw] w-[90vw] px-4 py-3 rounded-xl  shadowStyle"
            >
              <div className="p-4 my-auto h-fit rounded-xl w-fit bg-[#FFD966]">
                <img src={sustainable} alt="sustainable" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-2xl text-xl -mt-1 font-bold text-zinc-950">
                  Sustainable Travel Practices
                </h4>
                <p className="text-zinc-500 font-medium text-md">
                  Travel responsibly, preserve nature.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              className="quality flex gap-6 lg:w-[45vw] w-[90vw] px-4 py-3 rounded-xl  shadowStyle"
            >
              <div className="p-4 my-auto h-fit rounded-xl w-fit bg-[#1572A1]">
                <img src={localguide} alt="localguide" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-2xl text-xl -mt-1 font-bold text-zinc-950">
                  Local Guides with Insider Knowledge
                </h4>
                <p className="text-zinc-500 font-medium text-md">
                  Discover hidden gems with local experts.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
              className="quality flex gap-6 lg:w-[45vw] w-[90vw] px-4 py-3 rounded-xl  shadowStyle"
            >
              <div className="p-4 my-auto h-fit rounded-xl w-fit bg-[#F675A8]">
                <img src={aeroplane} alt="aeroplane" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="lg:text-2xl text-xl -mt-1 font-bold text-zinc-950">
                  Unforgettable Experiences Tailored to You
                </h4>
                <p className="text-zinc-500 font-medium text-md">
                  Customized adventures just for you.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="lg:mt-24 lg:mx-0 mx-auto lg:mb-0 mb-16 lg:p-0 p-12"
          >
            <img src={Travellerwithsuitcase} alt="Travellerwithsuitcase" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
