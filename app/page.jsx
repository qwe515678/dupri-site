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
     
      <section className="moving min-h-screen flex flex-col items-center justify-center mt-2 bg-fixed" id="hero">
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
      <footer className="footer p-10  text-base-content border-t border-gray-600">
        <aside>
          {/* <svg width="50" height="50" viewBox="0 0 1065 1163" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0096321 1061.65V101.347C-0.215267 86.058 3.5011 70.9383 10.8534 57.2284C16.7508 46.614 24.6937 37.0746 34.2955 29.0749C53.3283 13.0039 77.5485 3.106 103.261 0.891173C109.123 0.293154 115.016 -0.00434699 120.913 4.79869e-05H521.517C628.585 4.79869e-05 723.323 18.8295 805.73 56.4883C888.136 94.1471 951.896 147.036 997.009 215.154C1042.12 283.272 1064.68 361.082 1064.68 448.583V711.088C1065.09 760.601 1056.92 809.857 1040.5 857.005C1029.5 887.949 1014.6 917.598 996.106 945.348C950.638 1013.35 885.393 1068.27 807.764 1103.88C806.487 1104.48 805.207 1105.08 803.925 1105.67C745.339 1132.49 682.247 1149.98 617.321 1157.41C585.553 1161.19 553.55 1163.06 521.517 1162.99H120.913C105 1163.14 89.185 1160.68 74.2085 1155.73C59.8127 1150.82 46.5712 1143.41 35.1982 1133.92C23.127 1124.22 13.6412 1112.09 7.47408 1098.47C2.40446 1086.76 -0.131384 1074.25 0.0096321 1061.65ZM241.816 971.93H503.472C573.181 971.93 631.68 962.229 678.97 942.825C701.753 933.638 722.893 921.324 741.669 906.304C775.992 878.189 800.293 841.185 811.389 800.14C818.082 777.222 821.85 752.054 822.692 724.636C822.813 720.674 822.873 716.712 822.872 712.749V445.26C823.098 419.928 820.165 394.654 814.129 369.938C802.186 322.915 778.033 284.888 741.669 255.859C699.093 221.895 640.9 201.284 567.09 194.024C545.956 192 524.72 191.012 503.472 191.063H241.816V971.93Z" fill="black"/>

</svg>
*/}
          <Image height={75} width={75} src={`/logo.svg`} alt="logo" />
          <p>Dupri Group<br />Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        {/* <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative ">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="border border-gray-500 btn bg-gradient-to-r from-[#4693d4] to-[#d18eed] text-[#222222] absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </motion.div>
  );
}
