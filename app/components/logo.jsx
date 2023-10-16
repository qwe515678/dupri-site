'use client'
import NextImage from "next/image"
import NextLink from 'next/link'
import { Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, } from "@nextui-org/react"
import { toast } from 'sonner'
const logos = [
    {
        path: '/logo.svg',
        tooltip: 'Dupri News',
        modalDesc: 'The Dupri News app uses advanced artificial intelligence algorithms to create a personalized news feed for each user. Dupri News analyzes your interests and preferences to show the most important and interesting news from reliable sources.',
        modalImages: ['screen.jpg']
    },
    {
        path: '/logo-messanger.svg',
        tooltip: 'Dupri Messanger',
        modalDesc: 'An artificial intelligence-enabled messaging app. Dupri Messenger allows you not only to communicate with friends, but also to receive smart recommendations, use a virtual assistant, make payments and much more.',
        modalImages: ['screen.jpg']
    },
    {
        path: '/logo-music.svg',
        tooltip: 'Dupri Music',
        modalDesc: 'This is a music service that uses AI for personalization - selection of playlists, recommendations of new artists, search for similar tracks. Dupri Music analyzes your music preferences and makes playlists that you will definitely like.',
        modalImages: ['screen.jpg']
    },
    {
        path: '/logo-store.svg',
        tooltip: "Dupri Store",
        modalDesc: 'An online store that simplifies shopping with the help of artificial intelligence - you will see products that are perfect for you. Dupri Shop examines your previous purchases and patterns and makes personalized recommendations.',
        modalImages: ['screen.jpg']
    },
    {
        path: '/logo-ai.svg',
        tooltip: 'Dupri AI app',
        modalDesc: "The Dupri AI platform provides access to various services based on the company's artificial intelligence by subscription. Chatbots, speech and image recognition systems, recommendation services, automation tools and much more from DUPRI are available to you.",
        modalImages: ['screen.jpg']
    },
    {
        path: '/logo-platform.svg',
        tooltip: 'Dupri Platform',
        modalDesc: 'A cloud platform for the development, deployment and scaling of web applications and services. All DUPRI applications work on the basis of the Dupri Platform - this makes it easy to integrate them with each other and with other products.',
        modalImages: ['screen.jpg']
    }
]
function Logo({ item }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Tooltip content={
                <div className="px-1 py-2">
                    <div className=" font-bold">{item.tooltip}</div>
                    <div className="">To see more, click on the icon</div>
                </div>
            } className=" cursor-pointer hover:scale-110 duration-500 transition-transform">

                <Image onClick={onOpen} src={`/logos${item.path}`} alt="logo" as={NextImage} width={500} height={500} className=" aspect-square h-20 w-20 cursor-pointer  flex-wrap m-0 p-0" />

            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{item.tooltip}</ModalHeader>
                            <ModalBody>
                                <Image as={NextImage} width={1000} height={1000} alt="" src={`/${item.modalImages[0]}`}></Image>
                                <p>{item.modalDesc}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" variant="ghost" as={NextLink} href={`/products/${item.tooltip.replace(/ /g, '-')}`}> 
                                    Learn More
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default function Logos() {
    const notify = () => toast('This app is stil in developement');
    const infoList = logos.map(
        item =>
            <>
                <Logo item={item} />

            </>



    )
    return (
        <>
            <ul className="w-full flex mt-4 items-center justify-center gap-3 flex-wrap">
                {infoList}
            </ul>

        </>

    )
}
