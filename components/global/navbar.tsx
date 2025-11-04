'use client'

import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Bangladesh Bicycle Lane Initiative",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Tackling Disinformation",
        href: "/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Bangladesh Data Policy Analysis",
        href: "/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "South Asian Regional Integration",
        href: "/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Battling Plastic Pollution",
        href: "/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "AI and Drone Warfare",
        href: "/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "See all topics",
        href: "/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Navbar() {
    const [openMobile, setOpenMobile] = useState(false)
    return (
        <div className="flex items-center justify-between py-4 px-4 xl:px-64 border-b relative">
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
                            <Link href="/">Training Courses</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Our Roots (History boshbe just. Direct click.)</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Topics</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        className={`${component.title === "See all topics" ? 'col-span-2' : ''}`}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
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
            </NavigationMenu>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
