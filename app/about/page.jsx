
'use client'

import { useState } from "react"



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
  console.log("🚀 ~ file: page.jsx:36 ~ Page ~ opened:", opened)

  return (
    <div className=" my-16">
      <div className=" h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 text-stone-800 flex justify-center items-center flex-col gap-10 w-full">
        <h2 className="text-8xl xl:text-6xl sm:text-5xl xs:text-3xl">Entertainment meets the internet.</h2>
        <p className="w-full p-5">We create technologies that bring people together. </p>
        <svg className="sticky bottom-0 mt-auto w-full" viewBox="0 0 900 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="w-full" d="M0 49L21.5 44.3C43 39.7 86 30.3 128.8 32.3C171.7 34.3 214.3 47.7 257.2 41.3C300 35 343 9 385.8 9.5C428.7 10 471.3 37 514.2 41.7C557 46.3 600 28.7 642.8 17.8C685.7 6.99999 728.3 2.99999 771.2 1.29999C814 -0.300012 857 0.300012 878.5 0.700012L900 1V228H878.5C857 228 814 228 771.2 228C728.3 228 685.7 228 642.8 228C600 228 557 228 514.2 228C471.3 228 428.7 228 385.8 228C343 228 300 228 257.2 228C214.3 228 171.7 228 128.8 228C86 228 43 228 21.5 228H0V49Z" fill="#A09BFB" />
          <path className="w-full" d="M0 65L21.5 66.8C43 68.7 86 72.3 128.8 70.2C171.7 68 214.3 60 257.2 60.8C300 61.7 343 71.3 385.8 67.2C428.7 63 471.3 45 514.2 42.3C557 39.7 600 52.3 642.8 65.5C685.7 78.7 728.3 92.3 771.2 87.8C814 83.3 857 60.7 878.5 49.3L900 38V228H878.5C857 228 814 228 771.2 228C728.3 228 685.7 228 642.8 228C600 228 557 228 514.2 228C471.3 228 428.7 228 385.8 228C343 228 300 228 257.2 228C214.3 228 171.7 228 128.8 228C86 228 43 228 21.5 228H0V65Z" fill="#7F7ABF" />
          <path className="w-full" d="M0 83.9998L21.5 90.7998C43 97.6998 86 111.3 128.8 114.2C171.7 117 214.3 109 257.2 103.8C300 98.6998 343 96.2998 385.8 90.2998C428.7 84.2998 471.3 74.6998 514.2 73.2998C557 71.9998 600 78.9998 642.8 81.9998C685.7 84.9998 728.3 83.9998 771.2 84.7998C814 85.6998 857 88.2999 878.5 89.6999L900 90.9998V228H878.5C857 228 814 228 771.2 228C728.3 228 685.7 228 642.8 228C600 228 557 228 514.2 228C471.3 228 428.7 228 385.8 228C343 228 300 228 257.2 228C214.3 228 171.7 228 128.8 228C86 228 43 228 21.5 228H0V83.9998Z" fill="#5F5B86" />
          <path className="w-full" d="M0 125L21.5 125.2C43 125.3 86 125.7 128.8 131.5C171.7 137.3 214.3 148.7 257.2 146.2C300 143.7 343 127.3 385.8 127.5C428.7 127.7 471.3 144.3 514.2 147.7C557 151 600 141 642.8 142.3C685.7 143.7 728.3 156.3 771.2 154.2C814 152 857 135 878.5 126.5L900 118V228H878.5C857 228 814 228 771.2 228C728.3 228 685.7 228 642.8 228C600 228 557 228 514.2 228C471.3 228 428.7 228 385.8 228C343 228 300 228 257.2 228C214.3 228 171.7 228 128.8 228C86 228 43 228 21.5 228H0V125Z" fill="#403D51" />
          <path className="w-full" d="M0 174L21.5 177.2C43 180.3 86 186.7 128.8 186.2C171.7 185.7 214.3 178.3 257.2 175.3C300 172.3 343 173.7 385.8 171.5C428.7 169.3 471.3 163.7 514.2 160C557 156.3 600 154.7 642.8 153.5C685.7 152.3 728.3 151.7 771.2 157.7C814 163.7 857 176.3 878.5 182.7L900 189V228H878.5C857 228 814 228 771.2 228C728.3 228 685.7 228 642.8 228C600 228 557 228 514.2 228C471.3 228 428.7 228 385.8 228C343 228 300 228 257.2 228C214.3 228 171.7 228 128.8 228C86 228 43 228 21.5 228H0V174Z" fill="#222222" />
        </svg>
      </div>
      <section className=" border-none rounded-t-none">

        <h2>About Us</h2>
        <p>DUPRI is one of the most famous and successful companies in the field of artificial intelligence and automation. Founded in 2010 by a group of graduates from Russia, over the past decade DUPRI has grown into a major player in the global technology market.

          {opened ? (
            <span className="ml-1">DUPRI products help automate everyday tasks, generate useful content, maintain communication with customers, and much more.

              Thanks to an innovative approach and a talented team of developers, DUPRI managed to achieve impressive results in the field of artificial intelligence in a relatively short time. Today, millions of people around the world use DUPRI technologies in their daily lives. The company specializes in creating services and applications based on advanced neural networks and machine learning algorithms. </span>
          ) : (
            <button className=" text-blue-600 ml-1" onClick={() => setOpened(true)}> More</button>
          )}
        </p>

      </section>
      
        <div className=" m-4">
          <div className=" border-l-2 border-gray-200 pl-4">

            {data.map((event, index) => (

              <div key={index} className=" flex mb-4">



                <div className="timeline-content ">
                  <p className="font-bold text-blue-700">{event.year}</p>
                  <p className="text-gray-400">{event.event}</p>
                </div>

              </div>

            ))}

          </div>
        </div>
      
    </div>
  )
}
