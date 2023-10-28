
'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsCheck } from 'react-icons/bs'

const data = [{
  name: 'free',
  desc: 'Start communicating rn. Suitable for ordinary users',
  cost: '$0',
  advantages: ['Free chatting', 'Up to 150 generations per day', 'Support in Chat', '12 hours of music per day'],
  bg: 'linear-gradient(140deg, rgba(87, 139, 254, 0.12) 3%, rgba(87, 139, 254, 0) 25%), rgb(11, 15, 23);',
  id: 1,
  text: 'Start Chatting',

},
{
  name: 'Pro',
  desc: 'Everything in FREE, plus higher limits and personal manager',
  cost: '$20',
  advantages: ['Free chatting', 'Anlimited generations', 'personal assistant', 'Up to 50000 generations with API'],
  bg: 'linear-gradient(140deg, rgba(107, 102, 255, 0.16) 3%, rgba(107, 102, 255, 0) 25%), rgb(11, 15, 23);',
  id: 2,
  text: 'Upgrade now',

},
{
  name: 'Enterprise',
  desc: 'Choose your own rate',
  cost: 'Custom',
  advantages: ['Choose your own Pluses'],
  bg: 'linear-gradient(140deg, rgba(213, 80, 173, 0.2) -5%, rgba(107, 102, 255, 0) 25%), rgb(11, 15, 23);',
  id: 3,
  text: 'Contact Sales',

},
]
export default function Page() {
  const cards = data.map((item) => (
    // <motion.li key={item.name} className='border border-stone-700 rounded h-full  w-full box-border min-h-[50vh] min-w-[20vw] p-3 m-3 relative shadow-sm shadow-stone-600' style={{background: item.bg}} >
    <motion.li key={item.name} className={`border-2 border-b-3 border-r-3 border-dashed even:border-solid border-primary rounded-lg h  w-full box-border h-full min-h-[50vh] xl:max-h-56  min-w-[20vw] max-w-[30vw] xl:max-w-none py-5 px-7 m-3 relative hover:-translate-y-2 transition-transform duration-300 ${item.id === 2 ? `border-primary scale-110 xl:scale-100 shadow-2xl shadow-[#041f00]` : ``}`}  >
      {item.id === 2 && (
        <div className="absolute -top-3  text-center grid place-items-center   right-0 left-0 px-2 w-full">
          <div className='text-sm bg-white w-36 text-black whitespace-nowrap rounded-full'> Most Popular</div>
        </div>
      )}
      <p className={`w-full  uppercase tracking-widest`}>{item.name}</p>


      <div className="">
        <span className=' text-3xl font-mitrsSemi tracking-normal mr-0.5'>{item.cost}</span>
        <span className={`font-mitrReg text-stone-200 ${item.id === 3 && 'hidden'}`}>/mo</span>
      </div>
      <p className='text-sm text-stone-300 mt-3 mb-10'>{item.desc}</p>
      <ul class="flex flex-col gap-y-1.5 my-3 border-[#515252]">
        {item.advantages.map((advantage) => (
          <li className='flex justify-start xs:items-start items-center gap-2 whitespace-nowrap xs:whitespace-normal text-sm' key={advantage}> <BsCheck className=' w-5 h-5 stroke-2' /> <span>{advantage}</span></li>
        ))}
      </ul>
      <Link href={`/`} className={` ${item.id === 2 ? `border-gradient-bl-blue-green-black border-transparent` : `border-primary`} border-solid overflow-hidden mb-2  rounded-lg border border-b-4 border-r-4 hover:border-r-2  hover:border-b-2 active:border transition-all duration-100 absolute bottom-0.5 left-1 right-1 text-center m-3 px-2 py-1`}>{item.text}</Link>

    </motion.li>
  ))
  return (
    <motion.div className=" h-screen flex flex-col items-center justify-center gap-5 box-border xl:my-96">
      <h2 className=' text-6xl text-center my-3 mb-16 sm:mt-5 font-poppins font-bold'>Pricing</h2>
      <ul className='flex  items-center justify-center gap-5 xl:flex-wrap sm:flex-col xl:w-[80vw] xs:w-[98vw] mx-auto w-full'>{cards}</ul>
    </motion.div>
  )
}