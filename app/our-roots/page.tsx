'use client'

import { Globe, Shield, BrainCircuit, Radio, BookOpenText, GraduationCap, Lightbulb, CalendarDays, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OurRoots() {
    return (
        <div className="min-h-screen animate-fade-in">

            {/* Hero */}
            <section className="pt-20 lg:pt-32 px-4 xl:px-64">
                <div className="relative z-10 mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent backdrop-blur-sm border border-secondary rounded-full text-sm font-medium mb-8">
                        <Sparkles className="h-5 w-5 text-tertiary" />
                        <span className="text-primary">Launched 10 May 2025</span>
                    </div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold">Our Roots</h2>
                        <p className="text-xl text-muted-foreground">
                            GSI is a for-profit think tank launched as a startup that goes to the very roots of the problems facing Bangladesh and the world. We shift scholarly and academic content from dusty journals to the pulse of social media — delivering pragmatic, actionable insights on governance, security, technology, AI, conflict, and development.
                        </p>
                        <p className="mt-6 text-lg text-accent-foreground max-w-3xl mx-auto">
                            "We keep spreading our wings — philosophically and literally."
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="pb-24 px-4 xl:px-64">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                        <Card className="p-10 lg:p-14 bg-linear-to-tr from-indigo-900/20 to-transparent border hover:border-primary/30 transition-all duration-500">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Vision</h3>
                            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                                To radically democratize rigorous scholarship — pulling deep, root-level analysis out of academic silos and injecting it directly into the bloodstream of public discourse, policy-making, and real-time global conversations, making complex knowledge immediate, accessible, and decisively impactful.
                            </p>
                        </Card>

                        <Card className="p-10 lg:p-14 bg-linear-to-tr from-indigo-900/20 to-transparent border hover:border-primary/30 transition-all duration-500">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Mission</h3>
                            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                                To relentlessly unearth the very roots of Bangladesh’s and the world’s most pressing challenges in governance, security, technology, AI, conflict, and development — then translate that scholarship into sharp, pragmatic, and immediately actionable insights delivered straight to policymakers, diplomats, academics, businesses, governments, and the engaged public through social media, live sessions, reports, podcasts, and training programs.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Seven Wings */}
            <section className="py-24 px-4 xl:px-64">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Seven Wings</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Every insight, live show, report, training program, and consultation is delivered through one of our specialized, interconnected wings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        { icon: Globe, title: "Bangladesh Affairs", color: "text-indigo-400", desc: "Decentralization, political movements, labor rights, economy, governance reform, tea workers, and ground-level fieldwork." },
                        { icon: Shield, title: "Global Affairs", color: "text-purple-400", desc: "Great-power competition, China in the international system, MENA, South Caucasus, Russia-Ukraine, and emerging global conflicts." },
                        { icon: BrainCircuit, title: "Technology Wing", color: "text-cyan-400", desc: "AI & disinformation, drone warfare, 3D printing in warzones, digitalization of warfare, cybersecurity." },
                        { icon: Radio, title: "Media & OSINT Wing", color: "text-pink-400", desc: "Bangladesh's first professional OSINT platform, micro-journals, podcasts, Friday/Saturday lives, Wednesday satire, field interviews." },
                        { icon: BookOpenText, title: "History & Linguistics Wing", color: "text-amber-400", desc: "Comparative genocide studies, Soviet identities, linguistic policy, historical roots of modern crises." },
                        { icon: GraduationCap, title: "Training Academy", color: "text-emerald-400", desc: "Intensive courses for diplomats, policymakers, law enforcement, journalists, and students." },
                        { icon: Lightbulb, title: "Pedagogical Wing", color: "text-orange-400", desc: "Innovative teaching methodologies, curriculum design, and knowledge dissemination strategies for the digital age." },
                    ].map((wing) => (
                        <Card key={wing.title} className="p-8 transition-all duration-500 hover:shadow-2xl bg-accent backdrop-blur-md ">
                            <div className={`p-4 w-fit rounded-2xl bg-background/60 mb-6`}>
                                <wing.icon className={`h-12 w-12 ${wing.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{wing.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{wing.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* The Minds Behind GSI */}
            <section className="py-24 px-4 xl:px-64">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">The Minds Behind GSI</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A growing network of experts, researchers, and analysts — driven by deep domain expertise and on-the-ground experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        { name: "MH Joy", role: "Founder & Lead Analyst", expertise: "Decentralization of Governance · China in the International System · South Asia", color: "bg-indigo-500" },
                        { name: "Ebnul", role: "Field Researcher", expertise: "Labor Rights · Tea Workers · Bangladesh Political Economy" },
                        { name: "Asheer", role: "Technology & Disinformation Specialist", expertise: "AI & Disinformation · Information Warfare · Digital Security" },
                        { name: "Lamia", role: "Senior Researcher", expertise: "Soviet Identities · South Caucasian Studies · Post-Soviet Space" },
                        { name: "Lana", role: "MENA Specialist", expertise: "Middle East & North Africa · Regional Security · Conflict Analysis" },
                        { name: "Sid", role: "Cybersecurity & Intelligence Lead", expertise: "OSINT · Cybersecurity · Digital Intelligence · Netherlands-based networks" },
                    ].map((person) => (
                        <Card key={person.name} className="p-8 hover:shadow-2xl transition-all duration-500 border bg-card/70 backdrop-blur-sm hover:border-tertiary">
                            <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold ${person.color}`}>
                                {person.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-2">{person.name}</h3>
                            <p className="text-center text-muted-foreground mb-4">{person.role}</p>
                            <p className="text-center text-sm text-indigo-300 dark:text-indigo-400">{person.expertise}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Monthly Rhythm */}
            <section className="py-24 px-4 xl:px-64 bg-linear-to-b from-transparent to-accent">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Monthly Rhythm</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We operate on a disciplined, high-impact monthly cycle — designed for maximum engagement and real-world impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <Card className="p-8 text-center hover:scale-105 transition-all duration-300 hover:border-indigo-900/50">
                        <CalendarDays className="h-12 w-12 mx-auto mb-4 text-indigo-400" />
                        <h4 className="text-xl font-bold mb-3">Week 1</h4>
                        <p className="text-muted-foreground">Introduction & Declaration of Monthly Activities</p>
                    </Card>
                    <Card className="p-8 text-center hover:scale-105 transition-all duration-300 hover:border-purple-900/50">
                        <CalendarDays className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                        <h4 className="text-xl font-bold mb-3">Weeks 2–3</h4>
                        <p className="text-muted-foreground">New Content Drops · Research Briefs · Podcasts · Debates</p>
                    </Card>
                    <Card className="p-8 text-center hover:scale-105 transition-all duration-300 hover:border-pink-900/50">
                        <CalendarDays className="h-12 w-12 mx-auto mb-4 text-pink-400" />
                        <h4 className="text-xl font-bold mb-3">Week 4</h4>
                        <p className="text-muted-foreground">Recap · Progress Report · Call for Collaboration</p>
                    </Card>
                    <Card className="p-8 text-center hover:scale-105 transition-all duration-300 hover:border-emerald-900/50 md:col-span-1 lg:col-span-1 row-span-2 lg:row-span-1">
                        <div className="space-y-6">
                            <div><Radio className="h-10 w-10 mx-auto text-emerald-400 mb-3" /><h4 className="font-bold">Live Sessions</h4></div>
                            <p className="text-sm text-muted-foreground">Friday Night Live – Bangladesh Affairs (BD time)<br />Saturday Night Live – Global Affairs (International)<br />Wednesday Night Satire & Comedy Nights</p>
                        </div>
                    </Card>
                </div>
                <div className="text-center mt-16">
                    <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800">
                        Join Our Next Live Session <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    )
}