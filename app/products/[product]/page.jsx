'use client'

import { Button, Divider } from "@nextui-org/react"
import { motion } from "framer-motion"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import NextLink from 'next/link'
import logos from '../../components/logoinfo'
export default function Page({ params }) {
    console.log("🚀 ~ file: page.jsx:9 ~ logos:", logos)
    
    const data = logos.find(obj => obj.tooltip.replace('-', ' ') === params.product.replace('-', ' '));

    return (
        <motion.div className=" my-16">
            <div className=" flex justify-center items-center relative md:static md:flex w-full gap-7 flex-col">
                <Button color="primary" as={NextLink} href="/products" className="group absolute md:static left-0 top-0 bottom-0" variant="bordered" startContent={(
                    <AiOutlineArrowLeft className=" group-hover:-translate-x-1 duration-500 transition-all"/>
                )}>
                    Back to Products
                </Button>
                <h2 className="my-auto text-5xl"> {params.product}</h2>
            </div>
            <Divider className="my-5" />
                    <p>{JSON.stringify(data)}</p>
        </motion.div>
    )
}
