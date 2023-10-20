
'use client'
import { Image, Button, Chip, Spacer, Link } from "@nextui-org/react";
import NextLink from 'next/link'
import TextStroke from '../components/text-stroke'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import logos from '../components/logoinfo'
import { useRef } from "react";
import P from "../components/P";
import AnimText from "../components/animtext";

export default function Page() {
  return (
    <motion.div className=" my-16">
      <h2 className="my-auto text-6xl text-center"> Here are all of our products</h2>
      <ul className="mt-5 ">
        {logos.map((obj) => (
          <LiImage obj={obj} key={obj.tooltip} />
        ))}
      </ul>
    </motion.div>
  )
}
function LiImage({ obj }) {
  const ref = useRef()
  return (
    <motion.li key={obj.tooltip} className="h-screen mt-20 box-border" ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

      <TextStroke baseVelocity={3}>dupri group</TextStroke>
      <TextStroke baseVelocity={-3}>{obj.tooltip}</TextStroke>

      <div className="relative group/image mt-20 p-2  h-full box-border">

        <div className="shadow z-0 absolute   top-0 left-0 right-0 group-hover/image:brightness-50 duration-500 transition-all ">

          <Image isBlurred as={NextImage} alt={`${obj.tooltip} image`} src={`/${obj.modalImages[0]}`} width={2000} height={1000} className="" />
        </div>

        <div className="z-20 absolute top-10 bottom-10 right-10 left-10 opacity-0 group-hover/image:opacity-100 transition-all duration-500">
          <p className="font-bold mb-4 text-6xl">{obj.tooltip}</p>
          <p>{obj.modalDesc}</p>
          <ul className="flex flex-wrap">
            {obj.tags.map((tag) => (
              <Chip key={tag} className="m-3" color="foreground" variant='faded'>
                {tag}
              </Chip>
            ))}
          </ul>

          <Button as={NextLink} className='group/btn my-10 w-full' color="background" variant='ghost' href={`/products/${obj.tooltip.replace(/ /g, '-')}`} endContent={(
            <AiOutlineArrowLeft className="rotate-180 group-hover/btn:translate-x-2 duration-500 transition-all" />
          )}>Learn More About <span className=" text-primary text-md font-poppins">{obj.tooltip}</span></Button>

        </div>
      </div>



    </motion.li>
  )
}