'use client'

import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./themeToggle"

export default function Navbar() {
    const [openMobile, setOpenMobile] = useState(false)
    return (
        <div className="fixed flex items-center justify-between py-4 px-4 xl:px-64 border-b w-full z-50 bg-white dark:bg-slate-950">
            <Button variant={"outline"} className="md:hidden relative" onClick={() => setOpenMobile(!openMobile)}>
                <span className={`absolute transition-all duration-300 ease-in-out ${openMobile ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                    <Menu />
                </span>
                <span className={`absolute transition-all duration-300 ease-in-out ${openMobile ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    <X />
                </span>
            </Button>
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Link>
            <NavigationMenu viewport={openMobile} className={`gap-2 ${openMobile ? 'flex flex-col absolute top-full left-0 right-0 bg-background border-b md:hidden' : 'hidden md:flex md:relative'}`}>
                <NavigationMenuList className="flex flex-col md:flex-row w-screen md:w-full">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/training-courses">Training Courses</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/our-roots">Our Roots</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/topics">Topics</Link>
                        </NavigationMenuLink>

                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Services</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Connect</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Contribute</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="flex-row items-center gap-2">
                                            <CircleHelpIcon />
                                            Submit Content (Form)
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="flex-row items-center gap-2">
                                            <CircleIcon />
                                            Donate
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="flex-row items-center gap-2">
                                            <CircleCheckIcon />
                                            Project Collaboration (Form)
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <ModeToggle />
            </NavigationMenu>

        </div>
    )
}