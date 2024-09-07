import React from "react";
import Logo from "../../src/Assets/logo.png";
import Clouds from "../../src/Assets/clouds.png";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { navLinks } from "./data";
const Hero = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="w-screen data-scroll-smooth data-scroll-section  overflow-hidden h-screen">
      <div className="w-screen h-screen sliderImage bg-cover bg-no-repeat bg-center">
        <div className="bg-gradient-to-b  from-black/95 via-black/40 lg:via-black/20 to-black/90 w-full h-full">
          <div className="flex flex-row w-screen h-fit">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="px-[42px] py-[28px] z-30"
            >
              <img src={Logo} alt="logo" className="w-[130px] " />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="lg:flex hidden  justify-around w-full items-center "
            >
              {navLinks.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    key={index}
                    className="navLink uppercase "
                  >
                    {item.name}
                  </a>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              className=" lg:hidden flex justify-end w-full items-center px-4 py-2 z-30"
            >
              <Hamburger
                size={20}
                color="#FBD601"
                toggled={isOpen}
                toggle={setOpen}
              />
            </motion.div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100vh" }}
                  exit={{ height: 0 }}
                  className="flex flex-col   lg:hidden  absolute z-20  w-screen bg-zinc-950/80 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    exit={{ opacity: 0, transition: { delay: -0.1 } }}
                    className="flex flex-col mt-24  justify-start"
                  >
                    {[...navLinks].map((link, idx) => {
                      return (
                        <a
                          href={link.link}
                          key={idx}
                          className={`w-[90%] mx-auto uppercase border-yellow-100 font-normal text-sm text-start py-3 border-b-[1px] text-yellow-100 ${
                            idx === 0 ? "border-t-[1px]" : ""
                          }`}
                        >
                          {link.name}
                        </a>
                      );
                    })}
                    <a
                      href="mailto:paryatanofficial@gmail.com"
                      className={`w-[90%] mx-auto uppercase border-yellow-100 font-normal text-xs text-start py-3  text-yellow-100 `}
                    >
                      paryatanofficial@gmail.com
                    </a>
                    <a
                      href="tel:+919834709817"
                      className={`w-[90%] mx-auto uppercase border-yellow-100 font-normal text-xs text-start py-3 border-b-[1px] text-yellow-100 `}
                    >
                      +91 98347 09817
                    </a>

                    <p className="uppercase text-yellow-100 font-normal px-5 pt-2">
                      Follow us on
                    </p>
                    <div className="flex flex-row  ml-3 socialIconsMobile ">
                      <a href="https://www.facebook.com/profile.php?id=61564387239334&mibextid=ZbWKwL">
                        <svg
                          className="w-[30px] text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/paryatan_official?igsh=aDNyZHl4NmFlbnR1">
                        <svg
                          className="w-[30px] text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                      </a>
                      <a href="https://x.com/paryatan_?t=xmlPIlKsI58Z2Q1QdzlK6Q&s=09">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                      </a>
                      {/* <a href="https://linkedin.com/">
                        <svg
                          className="w-[30px] text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                      </a> */}
                      <a href="https://wa.me/+919834709817">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              className="absolute w-screen h-[72px] lg:block hidden bg-gradient-to-b from-transparent  to-white bottom-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              className="absolute lg:block hidden -bottom-0 w-screen "
            >
              <img src={Clouds} alt="clouds" className="w-screen " />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1 }}
            className="lg:text-[3.5rem] text-[3rem]   w-[90vw]   text-center leading-tight  lg:w-[70vw] mx-auto lg:mt-20 mt-[4vh]  text-white font-bold "
          >
            Discover the Undiscovered with{" "}
            <span className="text-[#FBD601]">Paryatan Tours.</span>{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1 }}
            className="lg:w-[70vw] w-[90vw] mx-auto text-zinc-50 leading-5 sm:text-[0.8rem] md:text-[2.5rem] lg:text-[1rem] mt-4 text-center font-medium"
          >
            Embark on unforgettable journeys crafted with passion, personalized
            just for you. Experience the beauty of the world with our expert
            guides and sustainable travel practices.
          </motion.p>
          <motion.a
            href="/coming-soon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.2 }}
            className="flex w-screen mt-6 items-center justify-center "
          >
            <button disabled className="cursor-pointer  relative rounded-md group overflow-hidden border-2 px-8 py-2 border-[#FBD601]">
              <span className="font-bold text-zinc-950 text-xl relative z-10 group-hover:text-[#FBD601] duration-500">
                Get In Touch
              </span>
              <span className="absolute top-0 left-0 w-full bg-[#FBD601] duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-[#FBD601] duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-[#FBD601] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-[#FBD601] duration-500 group-hover:translate-y-full h-full"></span>
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
