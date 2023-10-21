'use client'

import { Button, Divider, Image, Link } from "@nextui-org/react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import NextImage from 'next/image'
import NextLink from 'next/link'
import logos from '../../components/logoinfo'
import { AiFillWarning } from 'react-icons/ai'
import P from "../../components/P"
import AnimText from "../../components/animtext"
export default function Page({ params }) {
    console.log("🚀 ~ file: page.jsx:9 ~ logos:", logos)
    const { scrollY } = useScroll();
    const springScroll = useSpring(scrollY)
    const y2 = useTransform(springScroll, [0, 400], [-170, -240], { clamp: false });

    const data = logos.find(obj => obj.tooltip.replace('-', ' ') === params.product.replace('-', ' '));

    return (
        <motion.div className=" min-h-screen my-16 relative">
            <div className=" flex justify-center sm:items-start items-center relative md:static md:flex w-full gap-7 flex-col">
                <Button color="primary" as={NextLink} href="/products" className="group absolute md:static left-0 top-0 bottom-0" variant="bordered" startContent={(
                    <AiOutlineArrowLeft className=" group-hover:-translate-x-1 duration-500 transition-all" />
                )}>
                    Back to Products
                </Button>
                <h2 className="my-auto text-5xl"> {params.product}</h2>
            </div>
            <Divider className="my-5" />
            <div className="-z-10 w-full flex items-center justify-start my-2">

                <Image className=" mx-auto -z-10" as={NextImage} src={`/${data.modalImages[0]}`} alt={`Photo of ${data.tooltip}}`} width={1000} height={1000} />
            </div>
            <motion.div style={{ y: y2 }} className="z-10 absolute right-10 sm:hidden ">

                <Image className={`stroke-white w-40 lg:w-30 md:w-25 sm:w-20 mx-auto `} as={NextImage} src={`/logos/${data.path}`} alt={`Logo of ${data.tooltip}}`} width={1000} height={1000} />
            </motion.div>
            <div className="z-0 bg-blend-multiply ">
            <P>{data.largeDesc}</P>

            </div>
            {data.ready ? (
                <AnimText>
                    <Link as={NextLink} showAnchorIcon href={data.link} color="primary" variant='ghost' className={`border-dashed border-2 border-primary w-full box-border m-5 p-1 rounded-xl mx-auto text-center font-mitrsSemi flex items-center justify-center`}>Visit</Link>
                </AnimText>

            ) : (

                <AnimText>
                    <p className="flex items-center justify-center gap-5 my-5 "><AiFillWarning className="fill-yellow-400" /> Unfortunately this app is still in development</p>
                </AnimText>
            )}
        </motion.div>
    )
}
