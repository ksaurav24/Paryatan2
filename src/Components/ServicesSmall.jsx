import React from "react";
import { servicesData } from "./data";
import Service from "./Service";
const ServicesSmall = () => {
  return (
    <div className="w-screen flex flex-col items-center min-h-screen">
      <h4 className="text-4xl text-zinc-950 font-bold relative before:w-[75%] before:h-[3px] before:bg-[#FBD601] before:-bottom-4 before:absolute before:mx-8">
        Our Services
      </h4>
      <div className="flex flex-col gap-8 mt-32 mb-20">
        {servicesData.map((service, index) => {
          return (
            <div key={index}>
              <Service service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSmall;
