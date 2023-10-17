
'use client'
import { Image, Button } from "@nextui-org/react";
import NextLink from 'next/link'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import logos from '../components/logoinfo'
export default function Page() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" my-16">
      <h2 className="my-auto text-5xl"> Here are all of our products</h2>
      <ul>

        {logos.map((obj) => (
          <li key={obj.tooltip} className="flex flex-wrap gap-10 my-10">
            <div className="w-full flex justify-center items-center">

            <Image as={NextImage} src={`/${obj.modalImages[0]}`} width={1000} height={1000} className=" mx-auto w-full object-cover"/>
            </div>
            <div>
              <p className="font-bold mb-4 text-2xl">{obj.tooltip}</p>
              <p>{obj.modalDesc}</p>

            </div>
            <Button as={NextLink} color="secondary" variant="ghost" className="w-full my-2"  href={`/products/${obj.tooltip.replace(/ /g, '-')}`}>Learn More About {obj.tooltip}</Button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
