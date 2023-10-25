'use client'
import React from "react";
import { Navbar, NavbarBrand, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Chip, Divider } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./icons.jsx";
import NextLink from 'next/link.js'
import AnimatedLink from "./clientnavlink.jsx";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const links = [
        { name: "Home", id: 1, lowerName: '' },
        { name: "About", id: 2, lowerName: 'about' },
        { name: "Products", id: 3, lowerName: 'products' },
        { name: "Prices", id: 2, lowerName: 'prices' },
    ];
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full " isBordered >
            <NavbarContent className="w-full ">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="hidden lg:flex"
                />
                <NavbarBrand>
                    <Link className=" text-4xl font-mitrsSemi tracking-widest shadow-orange-50 drop-shadow-lg" href={`/`}>

                        <div className="h-10  text-4xl flex gap-1 text-white">
                            <span className=" font-bold">D</span>
                            <span className="flex items-center justify-center -ml-1">

                                <svg className="h-7 m-0 p-0 w-fit" width="1004" height="1005" viewBox="0 0 1004 1005" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M281.467 1.79966C259.734 6.59966 245.334 14.733 229.334 30.8663C215.734 44.5997 208.134 57.2663 203.067 74.9997C198.801 90.1997 198.801 114.466 203.067 129.666C208.267 147.8 215.601 159.933 230.001 174.333C251.467 195.8 271.867 204.333 302.001 204.333C332.134 204.333 352.534 195.8 374.001 174.333C395.467 152.866 404.001 132.466 404.001 102.333C404.001 72.1997 395.467 51.7997 374.001 30.333C359.734 16.0663 347.467 8.59966 330.001 3.66633C316.667 -0.200336 294.001 -1.00034 281.467 1.79966Z" fill="url(#paint0_linear_23_598)" />
                                    <path d="M681.467 1.79966C659.734 6.59966 645.334 14.733 629.334 30.8663C615.734 44.5997 608.134 57.2663 603.067 74.9997C598.801 90.1997 598.801 114.466 603.067 129.666C608.267 147.8 615.601 159.933 630.001 174.333C651.467 195.8 671.867 204.333 702.001 204.333C732.134 204.333 752.534 195.8 774.001 174.333C795.467 152.866 804.001 132.466 804.001 102.333C804.001 72.1997 795.467 51.7997 774.001 30.333C759.734 16.0663 747.467 8.59966 730.001 3.66633C716.667 -0.200336 694.001 -1.00034 681.467 1.79966Z" fill="url(#paint1_linear_23_598)" />
                                    <path d="M81.4667 401.8C59.7333 406.6 45.3333 414.733 29.3333 430.866C15.7333 444.6 8.26667 457.266 3.06667 475L0 485.666V702.333V919L3.06667 929.666C8.2 947.8 15.6 959.933 30 974.333C44.2 988.733 56.5333 995.933 74.6667 1001.27L85.3333 1004.33H502H918.667L929.333 1001.27C947.467 995.933 959.6 988.733 974 974.333C988.2 959.933 995.6 947.8 1000.93 929.666L1004 919V702.333V485.666L1000.93 475C995.6 456.866 988.2 444.733 974 430.333C952.533 408.866 932.133 400.333 902 400.333C871.867 400.333 851.467 408.866 830 430.333C815.867 444.466 808.533 456.466 803.2 474.333C800.133 484.333 800.133 484.333 799.333 602.333C798.533 710.2 798.267 721 796.133 728.333C786.8 759.8 762.8 785 732 795.4L721.333 799H503.333H285.333L274.667 795.933C243.333 786.866 218.8 762.333 207.867 729C205.6 722.2 205.333 712.866 204.667 603C203.867 484.333 203.867 484.333 200.8 474.333C195.467 456.466 188.133 444.466 174 430.333C159.733 416.066 147.467 408.6 130 403.666C116.667 399.8 94 399 81.4667 401.8Z" fill="url(#paint2_linear_23_598)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_23_598" x1="339.04" y1="38.6403" x2="208.386" y2="205.368" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00FF47" />
                                            <stop offset="1" stop-color="#00D1FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_23_598" x1="739.04" y1="38.6403" x2="608.386" y2="205.368" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00FF47" />
                                            <stop offset="1" stop-color="#00D1FF" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_23_598" x1="684.5" y1="514.07" x2="377.372" y2="1165.55" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00FF47" />
                                            <stop offset="1" stop-color="#00D1FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </span>
                            <span className=" font-bold">pri</span>
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="flex rounded-xl lg:hidden bg-[rgba(100,100,100,0.3)] p-1 gap-4 h-fit my-1 pr-2" justify="center">
                <NavbarItem className="h-fit">
                    <AnimatedLink>

                        <Link prefetch color="foreground" href="/about" className="h-fit font-bold" as={NextLink}>
                            About Us
                        </Link>
                    </AnimatedLink>
                </NavbarItem>
                <NavbarItem className="-ml-3">
                    <AnimatedLink>

                        <Link prefetch color="foreground" href="/prices" aria-current="page" className="h-fit font-bold" as={NextLink}>
                            Prices
                        </Link>
                    </AnimatedLink>
                </NavbarItem>
                <NavbarItem className="-ml-3">
                    <AnimatedLink>

                        <Link prefetch color="foreground" href="/products" className="h-fit font-bold" as={NextLink}>
                            Products
                        </Link>
                    </AnimatedLink>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem className="h-fit">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="tracking-widest text-foreground p-0 bg-transparent h-fit text-base font-poppins  font-bold"
                                endContent={icons.chevron}
                                radius="sm"
                                color="foreground"
                            >
                                Contact
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                        endContent='Contacts'
                    >
                        <DropdownItem
                            key="Email"
                            description="We will be happy to hear your suggestions "
                        >
                            <p>Email</p>
                            <Chip variant="flat" color="primary" className="my-2"> <a href="mailto:mail@htmlacademy.ru&body=Dear Dupri developers?subject=suggestion">mail@dupri.ru</a></Chip>
                        </DropdownItem>
                       
                        <DropdownItem
                            key="Email"
                        >
                            <p>Socials</p>
                            <ul className="flex gap-2">
                                <Chip variant="flat" color="primary"><a href="">Telegram</a></Chip>
                                <Chip variant="flat" color="primary"><a href="">Vk</a></Chip>
                                <Chip variant="flat" color="primary"><a href="">Viber</a></Chip>
                            </ul>
                        </DropdownItem>


                    </DropdownMenu>
                </Dropdown>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:hidden flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className=" p-5">
                {links.map((item, index) => (
                    <NavbarMenuItem key={`${item.id}`}>
                        <Link
                            color="foreground"
                            className="w-full text-4xl "
                            href={`/${item.lowerName}`}
                            size="xl"

                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
