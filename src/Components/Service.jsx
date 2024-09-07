
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Service = (service) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="lg:w-[22vw] w-[80vw]  overflow-hidden relative rounded-2xl h-[50vh]  lg:h-[60vh]"
      onClick={() => {
        setShowOverlay(!showOverlay);
      }}
      onHoverStart={() => {
        setShowOverlay(true);
      }}
      onHoverEnd={() => {
        setShowOverlay(false);
      }}
    >
      <img
        src={service.service.image}
        alt={service.service.title}
        className=" h-full -z-10 object-center object-cover absolute "
      />
      <div className="w-full bg-zinc-950/40 h-full flex py-12 flex-col justify-between items-center">
        <h4 className="text-3xl text-zinc-50 font-bold">
          {service.service.title}
        </h4>
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overlay w-full h-full absolute top-0 left-0 bg-zinc-950/70 flex justify-center items-center"
            >
              <motion.a
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.3, delay: -0.3, ease: "easeInOut" }}
                href="/coming-soon"
                //   {service.service.link}
                className="text-xl  hover:translate-x-1 transition-all duration-300 ease-in-out "
              >
                <button
                  type="button"
                  className="bg-white text-center w-40 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                >
                  <div className="bg-[#FBD601] rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[150px] z-10 duration-500">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      className="rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="-translate-x-5">View More</p>
                </button>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="text-sm text-center text-zinc-300">
          {service.service.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default Service;
