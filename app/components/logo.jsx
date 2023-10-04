'use client'
import Image from "next/image"
import toast from 'react-hot-toast'
const logos = [
    {
        path: '/logo.svg',
        tooltip: 'Dupri News'
    },
    {
        path: '/logo-messanger.svg',
        tooltip:'Dupri Messanger'
    },
    {
        path: '/logo-music.svg',
        tooltip:'Dupri Music'
    },
    {
        path:'/logo-store.svg',
        tooltip:"Dupri Store"
    },
    {
        path: '/logo-ai.svg',
        tooltip: 'Dupri AI app'
    },
    {
        path: '/logo-platform.svg',
        tooltip: 'Dupri Platform'
    }
]
export default function Logos() {
    const notify = () => toast.error('This app is stil in developement');

    const logoList = logos.map(
        item => <li key={item.tooltip} className="tooltip hover:scale-105 duration-500 transition-transform" data-tip={item.tooltip}><button onClick={notify}><Image src={`/logos${item.path}`} alt="logo" width={30} height={30} className="w-20 cursor-pointer" /></button></li>
    )
    return (
        <ul className="w-full flex mt-4 items-center justify-center gap-3">
            {logoList}
        </ul>
    )
}
