"use client";

import HorizontalScrollCarousel from './components/horizontal'
import { motion } from 'framer-motion'
import Accordeon from "./components/accordeon";
import TypeIt from "typeit-react";
import Logo from './components/main-logo'
import AiText from './components/typed-text-by-ai'

import Logos from './components/logo'
import H2 from './components/H2'
import { Link, Button } from "@nextui-org/react";
import P from './components/P';
import AnimText from './components/animtext';
export default function Home() {
  const data = [
    {
      title: 'What can you offer?',
      text: `DUPRI has developed many AI products including:

      - App for generating texts 
      - Chatbots 
      - News writing system
      - Witty conversational AI
      - AI coding assistant
      - Image and language models
      - Recommendation systems
      
      DUPRI constantly develops new AI/ML products and invests in research.`
    },
    {
      title: 'How can I invest?',
      text: 'DUPRI went public in 2020 and trades on NASDAQ. You can invest by buying shares on the exchange or via a broker. DUPRI may also periodically raise funds from venture capital.'
    },
    {
      title: 'What new products is DUPRI planning to release in the near future?',
      text: `DUPRI plans to launch new AI products:

      - DUPRI Home: a virtual home assistant to control devices, lights, music and answer questions.
      - DUPRI Drive: a driving assistant using computer vision to help avoid accidents and monitor the road.
      - DUPRI Docs: an intelligent search service for corporate docs and databases to quickly find information.`
    },
    {
      title: 'What is DUPRI NEWS app?',
      text: 'DUPRI NEWS is a mobile app by DUPRI that uses AI to generate personalized news articles and bulletins based on user interests and preferences. It analyzes information and provides the most important and interesting news conveniently.'
    },

  ]

  return (
    // hero
    // <Image src={`/bg.svg`} height={1} width={2} className="w-[200vw] absolute z-0 moving"/>
    <motion.div>

      {/* Header */}
      <section className="moving bg-main min-h-screen flex flex-col items-center justify-center bg-fixed" id="hero">

        <Logo type='dragable' />
        <h1 className=" text-yellow-500 text-9xl xs:text-8xl font-mitrsSemi">DUPRI</h1>

        <div className=" text-4xl bg-clip-text bg-gradient-to-r from-primary to-accent text-transparent font-bold min-w-[8em] backdrop-blur-md rounded border  border-[#555555] text-center">
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

      </section>
      {/* about us */}

      <H2 h2Text='About Us' />

      <section className="flex flex-col">

        <div className=" my-3 p-4">

          <P>
            <span className=" font-mitrMed">DUPRI</span>  - one of the largest players on AI market right now. We create content for millions. We also have a lot of little apps, that make your life easier. Here are some of them:

          </P>
          <AnimText>

          <Logos />
          </AnimText>
        </div>

      </section>
      <H2 h2Text='WHY SHOULD YOU CHOSE US' />
      <section className="  justify-center items-center gap-3 ">
        {/* <Image src={`/times.jpg`} width={1000} height={1000} alt="photo from time journal" className="float-left w-[30%] max-w-xl rounded-sm" /> */}
        <AnimText notLift={true}>

        <div className=" bg-[url('/times.jpg')] w-full h-96 bg-cover bg-fixed contrast-75 my-3"></div>
        </AnimText>
        <AnimText>

        <p >
          This is a publication of the esteemed Time Magazine, which elucidates upon one hundred prominent individuals in the AI market. Remarkably, a notable thirty percent of them are affiliated with the esteemed Dupri Group. This affirms the magnitude of our influential prowess in the sphere of Artificial Intelligence development.
        </p>
        </AnimText>

      </section>
      <section className="w-full flex items-center flex-col">
        <H2 h2Text='WHY SHOULD YOU CHOSE US' />
        <AiText />

      </section>
      <H2 h2Text={`Still don't believe us? Here are some numbers:`} />




      <HorizontalScrollCarousel />

      <section id="news">
        {/* <p>Want to recieve news from us?</p>
        <form className="w-full">
          <input type="email" className="button" class="mx-auto px-2 p-2 border-gradient-br-red-purple-gray-900 border-transparent border-solid border-2 rounded-xl bg-[#202020] w-full max-w-xl" />
          <button className=" bg-gradient-to-r from-[#4693d4] to-[#d18eed] rounded-xl -ml-10 px-2.5 py-0.5 text-black font-semibold">send</button>
        </form> */}
        {/* <div className="divider">OR</div> */}

        <p>Check out our new web app, all posts there are written only by a neural network, this is the first neural network of this kind in the world</p>
        <Button
          href="https://dupri.ru"
          as={Link}
          showAnchorIcon
          variant='shadow'
          color='primary'
          className='w-full text-stone-800 font-bold bg-gradient-to-r from-primary to-accent shadow-2xl'
        >
          Visit Dupri News
        </Button>
      </section>
      {/* q&a */}

      <H2 h2Text='Still have questions?' />
      <Accordeon data={data} />

    </motion.div>

  );
}
