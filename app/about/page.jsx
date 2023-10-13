
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
  const waveScroll = useTransform(scrollY, [0, 200], [0, 300])
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" my-16">

      <div style={{ y: waveScroll }} className="moving bg-about h-screen text-stone-800 flex justify-center items-center flex-col gap-10 w-full">
        {/* <h2 className="text-8xl xl:text-6xl sm:text-5xl xs:text-3xl mx-2  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">Entertainment meets the internet.</h2> */}
        <h2 className="text-8xl xl:text-6xl sm:text-5xl xs:text-3xl mx-2 text-slate-300">Entertainment meets the internet.</h2>
        <p className="w-full p-5 text-slate-300 z-10 ">We create technologies that bring people together. </p>

      </div>
      <svg  className="sticky bottom-0 mt-auto w-full h-fit z-0" width="900" height="226" viewBox="0 0 900 226" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 77H100V105H200V66H300V52H400V0H500V22H600V57H700V112H800V86H900V6V226H800H700H600H500H400H300H200H100H0V77Z" fill="#00FF00"/>
<path d="M0 36H100V29H200V59H300V40H400V82H500V123H600V88H700V99H800V70H900V90V226H800H700H600H500H400H300H200H100H0V36Z" fill="#28DC1C"/>
<path d="M0 52H100V61H200V112H300V135H400V52H500V86H600V108H700V107H800V68H900V85V226H800H700H600H500H400H300H200H100H0V52Z" fill="#34BA26"/>
<path d="M0 123H100V146H200V108H300V123H400V142H500V80H600V106H700V133H800V153H900V83V226H800H700H600H500H400H300H200H100H0V123Z" fill="#38992A"/>
<path d="M0 171H100V130H200V115H300V109H400V155H500V106H600V171H700V174H800V155H900V114V226H800H700H600H500H400H300H200H100H0V171Z" fill="#37792B"/>
<path d="M0 168H100V186H200V167H300V178H400V146H500V151H600V189H700V147H800V189H900V149V226H800H700H600H500H400H300H200H100H0V168Z" fill="#335B2A"/>
<path d="M0 162H100V194H200V203H300V186H400V153H500V188H600V152H700V169H800V166H900V193V226H800H700H600H500H400H300H200H100H0V162Z" fill="#2C3D27"/>
<path d="M0 181H100V177H200V207H300V208H400V199H500V196H600H700V213H800V198H900V178V226H800H700H600H500H400H300H200H100H0V181Z" fill="#222222"/>
</svg>

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
