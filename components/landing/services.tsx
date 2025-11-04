"use client"
import Image from "next/image"

export default function Services() {
    return (
        <div className="grid grid-cols-1 gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16">
                <h2>Long heading is what you see here in this feature section</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md border border-primary/20 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:scale-105">
                    <div className="">
                        <Image src="/1.gif" alt="Image 1" width={1000} height={1000} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Commissioned Research</h4>
                    <p className="text-muted-foreground text-sm">Tailored behavioral science strategies for your organization.</p>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md border border-accent/20 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    <div className="">
                        <Image src="/1.gif" alt="Image 1" width={1000} height={1000} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Policy Analysis</h4>
                    <p className="text-muted-foreground text-sm">Interactive sessions on AI governance and sustainability.</p>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    <div className="">
                        <Image src="/1.gif" alt="Image 1" width={1000} height={1000} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Tailored Training Programs</h4>
                    <p className="text-muted-foreground text-sm">Collaborate on cutting-edge behavioral studies.</p>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md border border-accent/20 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    <div className="">
                        <Image src="/1.gif" alt="Image 1" width={1000} height={1000} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Traditional & Cybersecurity Consultancy</h4>
                    <p className="text-muted-foreground text-sm">Bespoke podcasts and videos for your needs.</p>
                </div>
            </div>

        </div>
    )
}

