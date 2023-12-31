
'use client'
import { Image, Button, Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import NextLink from 'next/link'
import TextStroke from '../components/text-stroke'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import logos from '../components/logoinfo'
import React, { useRef } from "react";
import P from "../components/P";

export default function Page() {
  return (
    <motion.div className=" my-16 sm:mb-52 sm:mt-20">
      <h2 className="my-auto text-6xl text-center font-poppins font-bold"> Here are all of our products</h2>
      <ul className="mt-5 ">
        {logos.map((obj) => (
          <LiImage obj={obj} key={obj.tooltip} />
        ))}
      </ul>
    </motion.div>
  )
}
function LiImage({ obj }) {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    const newWidth = window.innerWidth
    setWidth(newWidth)
  }, [])
  const ref = useRef(null)
  return (
    <motion.li key={obj.tooltip} className="h-screen mt-20 box-border" ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>


      {width > 800 ? (
        <>
          <TextStroke baseVelocity={3}>dupri group</TextStroke>
          <TextStroke baseVelocity={-3}>{obj.tooltip}</TextStroke>


          <div className="relative group/image mt-20 mx-3 p-2  h-full box-border">

            <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} className="shadow z-0 absolute top-0 left-0 right-0 group-hover/image:brightness-50 duration-500 transition-all ">

              <Image isBlurred as={NextImage} alt={`${obj.tooltip} image`} src={`/${obj.modalImages[0]}`} width={2000} height={1000} className="" />
            </motion.div>

            <div className="z-20 absolute top-10 bottom-10 right-10 left-10 opacity-0 group-hover/image:opacity-100 transition-all duration-500">
              <p className="font-bold mb-4 text-6xl font-poppins">{obj.tooltip}</p>
              <p>{obj.fullDesc}</p>
              <ul className="flex flex-wrap">
                {obj.tags.map((tag) => (
                  <Chip key={tag} className="m-3 backdrop-blur-sm" color="foreground" variant='faded'>
                    {tag}
                  </Chip>
                ))}
              </ul>

              <Button as={NextLink} className='group/btn my-10 w-full border-dashed bg-[rgba(0,0,0,0.32)] backdrop-blur-sm ' color="foreground" variant='bordered' href={`/products/${obj.tooltip.replace(/ /g, '-')}`} endContent={(
                <AiOutlineArrowLeft className="rotate-180 group-hover/btn:translate-x-2 duration-500 transition-all" />
              )}>Learn More About <span className=" text-primary font-bold text-md font-poppins">{obj.tooltip}</span></Button>

            </div>
          </div>
        </>
      ) : (
        <div className="my-20 sm:my-52 py-2">
          <TextStroke baseVelocity={3}>dupri group</TextStroke>
          <TextStroke baseVelocity={-3}>{obj.tooltip}</TextStroke>

          <Card className="mt-5  h-full box-border">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
              <p className="font-bold mb-4 text-6xl">{obj.tooltip}</p>
              <p>{obj.fullDesc}</p>
              <ul className="flex flex-wrap">
                {obj.tags.map((tag) => (
                  <Chip key={tag} className="m-2" color="foreground" variant='faded'>
                    {tag}
                  </Chip>
                ))}
              </ul>
              <Button as={NextLink} className='group/btn my-10 w-full' color="background" variant='ghost' href={`/products/${obj.tooltip.replace(/ /g, '-')}`} endContent={(
                <AiOutlineArrowLeft className="rotate-180 group-hover/btn:translate-x-2 duration-500 transition-all" />
              )}>Learn More About <span className=" text-primary text-md font-poppins">{obj.tooltip}</span>
              </Button>

            </CardHeader>
            <CardBody className=" py-2">
              <Image isBlurred as={NextImage} alt={`${obj.tooltip} image`} src={`/${obj.modalImages[0]}`} width={2000} height={1000} className="" />
            </CardBody>
          </Card>
        </div >
      )}



    </motion.li>
  )
}