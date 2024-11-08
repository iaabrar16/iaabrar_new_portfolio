"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedWord from "../motion/AnimatedWord";

// Define an interface for the accordion data
interface AccordionItem {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null); // State to manage which accordion item is open
  const dataArr: AccordionItem[] = [
    // Array of accordion items
    {
      title: "About Me",
      description:
        "In 2020, I joined United International University (UIU) for a B.Sc. in Computer Science and Engineering (CSE). During my time at UIU, I developed a passion for programming, which laid the foundation for my journey into software development.",
    },
    {
      title: "My Journey",
      description:
        "My web development journey began with a comprehensive web development course, where I gained hands-on experience in building dynamic applications. Additionally, as a Trainee SQA Engineer at CDIP (Center for Development of IT Professionals), I developed a strong understanding of software quality assurance, further enhancing my skills in both web development and testing.",
    },
  ];

  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx)); // Toggle the open state
  };
  return (
    <section className="bg-black text-white ">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <AnimatedWord
          text="About Me"
          className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
        />
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-xl lg:mb-24 font-pilcrow-regular">
        I’m a dedicated software developer with a strong focus on front-end web development. Since 2023, I’ve gained experience working with React, JavaScript, and other modern web technologies. I’m passionate about creating meaningful digital experiences and am always eager to learn new skills. As a SQA Engineer and UI/UX Designer, I strive to contribute to innovative projects that deliver value to users.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:h-[650px]">
          <div className="relative h-[500px] lg:h-auto">
            <div className="h-12 w-40 bg-black absolute top-0 left-0 rounded-br-[30px]  z-10">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute -right-10 -top-[2px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute left-0 top-10"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <Image
              src="/profile-pic.png"
              alt=""
              fill
              quality={80}
              objectFit="cover"
              className="inline-block h-full w-full rounded-2xl object-cover"
            />

            <div className="h-12 w-60 bg-black absolute rounded-tl-full bottom-0 right-0  z-10">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute right-0 -top-10 rotate-180 "
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute -left-10 -bottom-5 rotate-180"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black px-10 ">
            <h3 className="text-2xl font-bonny-regular">
              Hello, I&apos;m Ismail Aabrar
            </h3>
            <h2 className="text-3xl md:text-6xl font-pilcrow-regular">
              Passionate software developer.
            </h2>

            <div className="w-full max-w-[500px] rounded-lg ">
              {dataArr.map((PerAccordion, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-500/50 py-5 last-of-type:border-b-0 "
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="flex h-full w-full items-center justify-between  text-white outline-none"
                  >
                    <span className="text-5xl font-bonny-regular">
                      {PerAccordion.title}
                    </span>
                    <span className="rounded-full p-2">
                      <svg
                        className="ml-8 size-3 shrink-0 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="5"
                          width="12"
                          height="2"
                          rx="1"
                          className={`origin-center transform transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="5"
                          width="12"
                          height="2"
                          rx="1"
                          className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                      isOpen === idx
                        ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pr-4 text-sm md:text-lg font-pilcrow-regular">
                      {PerAccordion.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
