"use client";
import Image from "next/image";
import HorizontalScrollCarousel from './components/horizontal'
import { BsArrowRightSquare } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Accordeon from "./components/accordeon";
import TypeIt from "typeit-react";
import { BsQuestionCircleFill } from 'react-icons/bs'
import Logo from './components/main-logo'
import AiText from './components/typed-text-by-ai'
import Logos from './components/logo'
import H2 from './components/H2'
import { Toaster } from "react-hot-toast";
import Acc from './components/acc'
export default function Home() {
  const data = [
    {
      title: 'What AIs do you have?',
      text: 'nothing'
    },
    {
      title: 'How can i invest?',
      text: 'nothing'
    },
    {
      title: 'What services do you offer?',
      text: 'nothing'
    },
    {
      title: 'What is DUPRI NEWS app?',
      text: 'DUPRI NEWS app, is one of our main products, the this is that we created the first app, in which posts are written only by AI. (It was really hard to create AI, that can make jokes)ing'
    },

  ]

  return (
    // hero
    // <Image src={`/bg.svg`} height={1} width={2} className="w-[200vw] absolute z-0 moving"/>
    <motion.div className="" layout>
      <Toaster />
      {/* Header */}
      <section className="moving min-h-screen flex flex-col items-center justify-center bg-fixed" id="hero">
        <Logo type='dragable' />
        <h1 className=" text-yellow-500 text-9xl font-khan">DUPRI</h1>

        <div className="block text-4xl hero-type font-bold min-w-[8em] backdrop-blur-md rounded border  border-[#555555] text-center">
          <TypeIt
            options={{
              strings: ['future', 'technology', 'fun', ''],
              speed: 75,
              deleteSpeed: 50,
              loop: true,
              breakLines: false,
              lifeLike: true,
              waitUntilVisible: true,
              nextStringDelay: 4000,
            }}
            className='z-10'
            />
        </div>
        {/* <Logo type='spinning' />
        <Logo type='spinning' />
        <Logo type='spinning' />
      <Logo type='spinning' /> */}
        {/* <Logo type='spinning' />
        <Logo type='spinning' /> */}

      </section>
      {/* about us */}

      <H2 text='About Us' />
      
      <section className="flex md:flex-col">

        {/* <Sidebar/> */}
        <div className=" my-3 p-4">

          <p className=""><span className="">DUPRI</span>  - one of the largest players on AI market right now. We create content for millions. We also have a lot of little apps, that make your life easier. Here are some of them:</p>
          <Logos />
        </div>

      </section>
      <H2 text='WHY SHOULD YOU CHOSE US' />
      <section className="  justify-center items-center gap-3 ">
        {/* <Image src={`/times.jpg`} width={1000} height={1000} alt="photo from time journal" className="float-left w-[30%] max-w-xl rounded-sm" /> */}
        <div className=" bg-[url('/times.jpg')] w-full h-96 bg-cover bg-fixed contrast-75 my-3"></div>
        <p >
          This is a publication of the esteemed Time Magazine, which elucidates upon one hundred prominent individuals in the AI market. Remarkably, a notable thirty percent of them are affiliated with the esteemed Dupri Group. This affirms the magnitude of our influential prowess in the sphere of Artificial Intelligence development.
        </p>

      </section>
      <section className="w-full flex items-center flex-col">
        <H2 text='WHY SHOULD YOU CHOSE US' />
        <AiText />

      </section>
      <H2 text={`Still don't believe us? Here are some numbers:`} />

       


      <HorizontalScrollCarousel />

      <section id="news">
        {/* <p>Want to recieve news from us?</p>
        <form className="w-full">
          <input type="email" className="button" class="mx-auto px-2 p-2 border-gradient-br-red-purple-gray-900 border-transparent border-solid border-2 rounded-xl bg-[#202020] w-full max-w-xl" />
          <button className=" bg-gradient-to-r from-[#4693d4] to-[#d18eed] rounded-xl -ml-10 px-2.5 py-0.5 text-black font-semibold">send</button>
        </form> */}
        {/* <div className="divider">OR</div> */}

        <p>Check out our new web app, all posts there are written only by a neural network, this is the first neural network of this kind in the world</p>
        <a href="https://www.dupri.ru" className="flex pl-1 py-2 pr-5 rounded-md items-center justify-center gap-3 bg-green-700 group hover:bg-green-600 ">Go there <BsArrowRightSquare className="group-hover:translate-x-2 duration-300 transition-all" /></a>

      </section>
      {/* q&a */}

      <H2 text='Still have questions?' />
      <section>
        <Accordeon data={data} />
      </section>
      
    </motion.div>
  );
}
