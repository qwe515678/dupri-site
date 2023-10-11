
'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsCheck } from 'react-icons/bs'

const data = [{
  name: 'free',
  desc: 'for basic users',
  cost: '$2',
  advantages: ['first', 'second', 'third', 'fourth'],
  bg: 'linear-gradient(140deg, rgba(87, 139, 254, 0.12) 3%, rgba(87, 139, 254, 0) 25%), rgb(11, 15, 23);',
  id: 1

},
{
  name: 'PRO',
  desc: 'for pro users',
  cost: '$2',
  advantages: ['first', 'second', 'third', 'fourth'],
  bg: 'linear-gradient(140deg, rgba(107, 102, 255, 0.16) 3%, rgba(107, 102, 255, 0) 25%), rgb(11, 15, 23);',
  id: 2

},
{
  name: 'Custom',
  desc: 'Choose your own rate',
  cost: '$2',
  advantages: ['first', 'second', 'third', 'fourth'],
  bg: 'linear-gradient(140deg, rgba(213, 80, 173, 0.2) -5%, rgba(107, 102, 255, 0) 25%), rgb(11, 15, 23);',
  id: 3

},
]
export default function Page() {
  const cards = data.map((item) => (
    // <motion.li key={item.name} className='border border-stone-700 rounded h-full  w-full box-border min-h-[50vh] min-w-[20vw] p-3 m-3 relative shadow-sm shadow-stone-600' style={{background: item.bg}} >
    <motion.li key={item.name} className={`border-2 border-[#515252] rounded-lg h  w-full box-border h-full min-h-[50vh] max-h-56  min-w-[20vw] max-w-[30vw] xl:max-w-none p-5 m-3 relative shadow-sm shadow-stone-200 hover:-translate-y-2 transition-transform duration-300 ${item.id === 2 ? `border-gradient-br-red-purple-gray-900 border-transparent border-solid border-2 scale-110 xl:scale-100` : ``}`}  >
      {item.id === 2 ? (
        // <p className={`w-full text-center uppercase font-bold`}><LinearGradient gradient={['to left','#4693d4, #d18eed']} fallbackColor="white">{item.name}</LinearGradient></p>
        <p className={`w-full text-center bg-clip-text text-transparent  uppercase font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400`}>{item.name}</p>
      ) : (
        <p className={`w-full text-center uppercase font-bold`}>{item.name}</p>
      )}

      <div className='divider'></div>
      <p>{item.desc}</p>
      <div className="">
        <span className=' text-3xl font-mitrsSemi'>{item.cost}</span>
        <span className=' font-mitrReg'>/mo</span>
      </div>
      <ul class="flex flex-col gap-y-1 my-3 border-l-2 p-3 border-[#515252]">
        {item.advantages.map((advantage) => (
          <li className='flex justify-start items-center gap-2' key={advantage}> <BsCheck className=' stroke-2' /> <span>{advantage}</span></li>
        ))}
      </ul>
      <Link href={`/`} className='border-gradient-br-red-purple-gray-900 border-transparent border-solid overflow-hidden mb-2 rounded-lg border border-b-4 border-r-4 hover:border-r-2  hover:border-b-2 active:border transition-all duration-100 absolute bottom-0.5 left-0 right-0 text-center m-3 px-2 py-1'>Select</Link>

    </motion.li>
  ))
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" h-screen flex flex-col items-center justify-center gap-5 box-border xl:my-96">
      <h2 className=' text-6xl text-center my-3 mb-10 sm:mt-5'>Pricing</h2>
      <ul className='flex  items-center justify-center gap-5 xl:flex-wrap sm:flex-col xl:w-[80vw] xs:w-[98vw] mx-auto w-full'>{cards}</ul>
    </motion.div>
  )
}