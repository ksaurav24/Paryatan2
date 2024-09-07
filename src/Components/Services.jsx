import React, { useEffect } from "react";
import { servicesData } from "./data";
import useMeasure from "react-use-measure";
import Service from "./Service";
import { animate, useMotionValue, motion } from "framer-motion";
const Services = () => {
  let [ref, { width }] = useMeasure();
  const Xtranslation = useMotionValue(0);
  const FAST_DURATION = 35;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = React.useState(FAST_DURATION);
  const [mustfinish, setMustFinish] = React.useState(false);
  const [renderer, setRenderer] = React.useState(false);

  useEffect(() => {
    let controls;
    let FinalPosition = -width / 2 - 16;
    if (mustfinish) {
      controls = animate(Xtranslation, [Xtranslation.get(), FinalPosition], {
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 0,
        onComplete: () => {
          setMustFinish(false);
          setRenderer(!renderer);
        },
      });
    } else {
      controls = animate(Xtranslation, [0, FinalPosition], {
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 0,
      });
    }
    return controls.stop;
  }, [Xtranslation, width, duration, renderer, mustfinish]);
  return (
    <div className="w-screen h-full flex flex-col items-center py-12">
      <h4 className="text-4xl text-zinc-950 font-bold relative before:w-[75%] before:h-[3px] before:bg-[#FBD601] before:-bottom-4 before:absolute before:mx-8">
        Our Services
      </h4>

      <motion.div
        className="servicesContainer  left-0 absolute flex gap-8 mt-32 "
        ref={ref}
        style={{ x: Xtranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...servicesData, ...servicesData].map((service, index) => {
          return <Service service={service} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default Services;
