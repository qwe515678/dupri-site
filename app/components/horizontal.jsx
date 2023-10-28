'use client'
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { LinearGradient } from 'react-text-gradients'
import Image from "next/image";
const data = [
  {
    number: 10000,
    text: 'Messages in our chat app',
    format: 'jpg',
    url: 'messages.jpg'
  },
  {
    number: 1000,
    text: 'Purchases  made in our online store',
    format: 'jpg',
    url: 'store.jpg'
  },
  {
    number: 1000,
    text: 'Generations with our AI',
    format: 'svg',
    url: 'ai.svg',
    code: `<svg width="2632" height="1955" viewBox="0 0 2632 1955" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.5 0V1955M2626.5 0V1955M0 1949.5H2615M0 19.345H2615M0 1900.47H2615M0 1846.46H2615M0 1787.48H2615M0 1723.52H2615M0 1654.59H2615M0 1580.67H2615M0 1501.79H2615M0 1417.93H2615M0 1329.09H2615M0 1235.28H2615M0 1136.49H2615M0 1032.73H2615M0 923.989H2615M0 810.277H2615M0 691.585H2615M0 567.918H2615M0 439.279H2615M0 305.664H2615M0 167.069H2615M0 23.5H2615" stroke="url(#paint0_linear_53_18336)" stroke-width="11"/>
    <defs>
    <linearGradient id="paint0_linear_53_18336" x1="1313" y1="248" x2="1313" y2="1975.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF004D"/>
    <stop offset="0.486386" stop-color="#FF0099" stop-opacity="0.67"/>
    <stop offset="1" stop-color="#5200FF" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>`

  },
  {
    number: 10000,
    text: 'Songs on our free music service',
    format: 'jpg',
    url: 'music.jpg'
  }
]

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const temporaryx = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  const x = useTransform(temporaryx, [0, 1], ["1%", "-98%"]);
  const statList = data.map((item) => {
    return (
      <div className="group relative aspect-square w-[20vw] xl:w-[30vw] lg:w-[40vw] md:w-[50vw] sm:w-[60vw] xs:w-[70vw] border-2 border-[#3a3a3a] rounded-lg p-5 mx-5 flex items-center justify-center cursor-pointer " key={item.number}>
        <div className="rounded-lg absolute top-0 left-0 w-full h-full z-0 overflow-clip ">
          <Image src={`/bgs/${item.url}`} alt="" layout="fill" objectFit="cover" className="blur-sm scale-105 group-hover:scale-110 transition-all duration-500" />
        </div>
        <Stat number={item.number} desc={item.text} />


      </div>
    )
  })
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-800 ">

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20" >
          {statList}
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ number, desc }) => {
  return (
    <div className="rounded-lg p-2 text-stone-200 z-10 w-fit backdrop-blur-sm bg-[#222222] border border-[#3a3a3a]">

      <div className="stat-title text-2xl">Over</div>
      <p className="stat-value font-mono text-primary text-3xl font-bold">{number}</p>
      <p className=" text-xl text-stone-300 whitespace-normal">{desc}</p>

    </div>
  )
}

export default HorizontalScrollCarousel;

