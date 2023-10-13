
'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import H2 from '../components/H2'

const data = [
  {
    year: 2010,
    event: 'The company was founded by a group of graduates from Russia. Launch of the first product - an application for generating shorttexts.'
  },
  {
    year: 2013,
    event: 'Attracting investments in the amount of $ 5 million from a venture fund. Expanding the functionality of artificial intelligence.',
  },
  {
    year: 2016,
    event: 'The release of the DUPRI Messages application, a popular AI-enabled messenger.',
  },
  {
    year: 2018,
    event: `Creation of the world's first neural network capabl of joking and maintaining a witty conversation.`,
  },
  {
    year: 2020,
    event: `IPO and placement of shares on the stock exchange. The company's valuation reaches $ 10 billion.`,
  },
  {
    year: 2022,
    event: 'Opening of the DUPRI global research center for the study of ethical aspects of the use of AI.',
  },
]
export default function Page() {
  const [opened, setOpened] = useState(false)
  const { scrollY } = useScroll()
  const waveScroll = useTransform(scrollY, [0, 200], [0,300])
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" my-16">

      <div style={{y:waveScroll}} className="moving bg-about h-screen text-stone-800 flex justify-center items-center flex-col gap-10 w-full">
        {/* <h2 className="text-8xl xl:text-6xl sm:text-5xl xs:text-3xl mx-2  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">Entertainment meets the internet.</h2> */}
        <h2 className="text-8xl xl:text-6xl sm:text-5xl xs:text-3xl mx-2 text-slate-300">Entertainment meets the internet.</h2>
        <p className="w-full p-5 text-slate-300 z-10 ">We create technologies that bring people together. </p>

      </div>
        <motion.svg  className="sticky bottom-0 mt-auto w-full h-fit z-0" width="900" height="226" viewBox="0 0 900 226" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path className="w-full" d="M0 49H50V77H100V21H150V83H200V37H250V0H300V32H350V92H400V68H450V49H500V26H550V68H600V41H650V43H700V23H750V110H800V80H850V53H900V34V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V49Z" fill="#00FF00" />
          <path className="w-full" d="M0 81H50V56H100V37H150V100H200V98H250V107H300V67H350V84H400V97H450V112H500V59H550V124H600V71H650V97H700V68H750V66H800V47H850V55H900V78V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V81Z" fill="#25DA19" />
          <path className="w-full" d="M0 59H50V73H100V111H150V89H200V141H250V50H300V96H350V114H400V125H450V73H500V133H550V111H600V66H650V70H700V91H750V90H800V81H850V123H900V143V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V59Z" fill="#2FB621" />
          <path className="w-full" d="M0 90H50V76H100V147H150V140H200V117H250V139H300V96H350V138H400V118H450V116H500V121H550V127H600V141H650V129H700V79H750V150H800V91H850V96H900V156V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V90Z" fill="#329425" />
          <path className="w-full" d="M0 160H50V132H100V151H150V175H200V170H250V174H300V167H350V130H400V120H450V159H500V110H550V135H600V164H650V172H700V122H750V120H800V133H850V157H900V163V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V160Z" fill="#317325" />
          <path className="w-full" d="M0 188H50V137H100V188H150V158H200V140H250V160H300V169H350V134H400V149H450V128H500V126H550V165H600V186H650V134H700V156H750V145H800V180H850V182H900V162V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V188Z" fill="#2C5323" />
          <path className="w-full" d="M0 200H50V197H100V167H150H200V180H250V160H300V152H350V158H400V198H450V186H500V183H550V157H600V200H650V183H700V184H750V179H800V168H850V158H900V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V200Z" fill="#24351F" />
          <path className="w-full" d="M0 201H50V212H100V202H150V191H200V196H250V188H300V199H350V211H400V202H450V191H500V214H550V201H600V216H650V218H700V196H750V188H800V200H850V187H900V210V226H850H800H750H700H650H600H550H500H450H400H350H300H250H200H150H100H50H0V201Z" fill="#222222" />
        </motion.svg>
      <section className=" border-none rounded-t-none">

        <H2 h2Text={`About us`}></H2>
        <p>DUPRI is a leading AI/automation company founded in 2010 by Russian graduates. Over the past decade, it has grown into a major global tech player. DUPRI's products help automate tasks, generate content, communicate with customers, and more using innovative AI and talented developers.

          {opened ? (
            <span className="ml-1">DUPRI products help automate everyday tasks, generate useful content, maintain communication with customers, and much more.

              The company specializes in services and apps using advanced neural networks and ML algorithms. Millions worldwide now use DUPRI's AI technologies daily. </span>
          ) : (
            <button className=" text-blue-600 ml-1" onClick={() => setOpened(true)}> More</button>
          )}
         
        </p>

      </section>

      <div className=" m-4">
        <div className=" border-l-2 border-gray-200 pl-4">

          {data.map((event, index) => (

            <div key={index} className=" flex mb-4">



              <motion.div className="timeline-content" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }} viewport={{ once: true }}>
                <p className="font-bold text-blue-700">{event.year}</p>
                <p className="text-gray-400">{event.event}</p>
              </motion.div>

            </div>

          ))}

        </div>
      </div>

    </motion.div>
  )
}
