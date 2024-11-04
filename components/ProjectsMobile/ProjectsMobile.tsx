import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";

type Props = {
  data: any;
};

const ProjectsMobile = (props: Props) => {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center text-center md:flex-row max-w-full mx-auto z-0">
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Projects
      </h3>
      <h3 className="absolute top-28 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default">
        Swipe to explore
      </h3>

      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="relative w-full flex items-center justify-center mt-20 sm:mt-24 z-20"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          className="mySwiper w-[320px] sm:w-[360px] h-[450px] mt-10"
        >
          {props.data.projectsData.map((item: any, key: any) => (
            <SwiperSlide key={key} className="flex items-center justify-center">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full w-full bg-[#292929] hover:shadow-xl transition-shadow duration-200">
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center p-4"
                >
                  <Image
                    src={item.projectImage}
                    priority={true}
                    alt={`${item.projectName} Image`}
                    className="w-full h-[200px] object-cover rounded-md border border-gray-400"
                    width={400}
                    height={200}
                    quality={100}
                  />
                  <p className="text-center mt-4 font-semibold text-[20px] text-[#F7AB0A]">
                    {item.projectName}
                  </p>
                  <p className="text-center mt-1 font-light text-[15px] text-gray-300">
                    {item.projectDuration}
                  </p>
                  <p className="mt-3 font-light text-justify text-[14px] text-gray-400 px-4">
                    {item.projectDesc}
                  </p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default ProjectsMobile;
