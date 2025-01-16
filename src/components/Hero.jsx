import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

import ur from "../images/ur5e-2-md.png";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 50vh"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={ref} className="flex h-screen w-full flex-col gap-5 bg-slate-50">
      <div className="h-[85vh] lg:flex lg:flex-row">
        <div className="relative flex w-full items-center justify-center lg:w-1/2 lg:flex-row">
          <div className="absolute right-80 top-44 z-20 h-96 w-96 rounded-full bg-blue-400 opacity-25 blur-3xl"></div>
          <div className="absolute right-0 top-10 z-10 h-[34rem] w-[34rem] rounded-full bg-purple-300 opacity-30 blur-3xl"></div>
          <div className="ml-auto mr-auto flex w-[31rem] flex-col pt-28 font-inter lg:mr-0 lg:pt-0">
            <motion.div
              style={{ y: sm }}
              className="z-30 text-6xl font-semibold italic tracking-tight"
            >
              I Study Mechatronics & Computer Science.
            </motion.div>
            <motion.div
              style={{ y: md }}
              className=" z-30 ml-auto mr-2 mt-4  text-right italic"
            >
              Hi I’m Nick, I work on robotics, automation, and software. <br />
              Currently a final year student studying at UNSW!q
            </motion.div>
            <motion.div style={{ y: lg }} className="ml-auto mr-2 flex">
              <a
                href="/"
                className="special-button z-30 mt-4 flex h-11 w-40 items-center justify-center rounded-full bg-black font-semibold text-white"
              >
                View My Stuff
              </a>
              <a
                href="/"
                className="special-button z-30 ml-4 mt-4 flex h-11 w-36 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-blue-200 to-purple-100 font-semibold text-black"
              >
                Contact Me!{" "}
              </a>
            </motion.div>
          </div>
        </div>

        <div className="z-30 flex h-full w-full lg:w-[35rem]">
          <motion.div style={{ y: xl }} className="mb-auto mt-10 lg:mt-auto">
            <img src={ur} className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
