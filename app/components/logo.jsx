'use client'
import NextImage from "next/image"
import NextLink from 'next/link'
import { Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, } from "@nextui-org/react"
import { toast } from 'sonner'
import logos from './logoinfo'
function Logo({ item }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Tooltip content={
                <div className="px-1 py-2">
                    <div className=" font-bold">{item.tooltip}</div>
                    <div className="">To see more, click on the icon</div>
                </div>
            } >

                <Image onClick={onOpen} src={`/logos${item.path}`} alt="logo" as={NextImage} width={500} height={500} className=" aspect-square h-20 w-20 cursor-pointer  flex-wrap m-0 p-0 hover:scale-110 duration-500 transition-all" />

            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{item.tooltip}</ModalHeader>
                            <ModalBody>
                                <Image as={NextImage} width={1000} height={1000} alt="" src={`/${item.modalImages[0]}`}></Image>
                                <p>{item.shortDesc}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="bordered" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" variant="bordered" as={NextLink} href={`/products/${item.tooltip.replace(/ /g, '-')}`}> 
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
