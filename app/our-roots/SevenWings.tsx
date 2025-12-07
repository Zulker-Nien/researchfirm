"use client";
import { Card } from "@/components/ui/card";
import { Globe, Shield, BrainCircuit, Radio, BookOpenText, GraduationCap, Lightbulb } from "lucide-react";

export function SevenWings() {
    return (
        <div>
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
        </div>
    );
}
