'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Landmark, Globe, Cpu, BookOpen, ArrowRight, User, Sparkles } from "lucide-react"

interface Topic {
    title: string
    researcher?: string
    desc: string
    wings: string[]
    regions: string[]
    flagship: boolean
}

const allTopics: Topic[] = [
    {
        title: "Decentralization of Governance & China's Role in the International System",
        researcher: "MH Joy",
        desc: "A dual-track flagship examining local governance reform, federalism, and decentralization models for Bangladesh alongside China's rising influence through BRI, soft power, technology diplomacy, and strategic positioning in the Indo-Pacific.",
        wings: ["Bangladesh Affairs", "Global Affairs"],
        regions: ["Bangladesh", "China", "Indo-Pacific"],
        flagship: true,
    },
    {
        title: "Tea Workers in Bangladesh – Labor Rights & Economic Justice",
        researcher: "Ebnul Hasan",
        desc: "Field research into the living conditions, wage struggles, union rights, and sustainable development pathways for Sylhet's tea garden communities, with policy recommendations for government and industry.",
        wings: ["Bangladesh Affairs"],
        regions: ["Bangladesh"],
        flagship: true,
    },
    {
        title: "AI and Disinformation – Tactics, Detection & Counter-Strategies",
        researcher: "Asheer Ahmed",
        desc: "How generative AI is weaponized in information warfare, deepfakes in elections, state-sponsored bot networks, and building national resilience against disinformation campaigns.",
        wings: ["Technology Wing"],
        regions: ["Global", "Bangladesh"],
        flagship: true,
    },
    {
        title: "Soviet Identities and South Caucasian Studies",
        researcher: "Lamia Rahman",
        desc: "Post-Soviet identity formation, ethnic memory, linguistic policy, and frozen conflicts in Armenia, Azerbaijan, and Georgia – implications for contemporary geopolitics.",
        wings: ["History & Linguistics Wing"],
        regions: ["South Caucasus"],
        flagship: true,
    },
    {
        title: "MENA Region – Conflicts, Alliances & Future Trajectories",
        researcher: "Lana",
        desc: "Post-Arab Spring dynamics, Abraham Accords, Iran–Saudi rapprochement, energy security, and the shifting balance of power in the Middle East.",
        wings: ["Global Affairs"],
        regions: ["MENA"],
        flagship: true,
    },
    {
        title: "Cybersecurity and Intelligence in the Digital Age",
        researcher: "Sid",
        desc: "State-sponsored cyber operations, OSINT methodologies, Bangladesh's cyber vulnerability, and intelligence reform in a hyper-connected world.",
        wings: ["Technology Wing"],
        regions: ["Global", "Bangladesh"],
        flagship: true,
    },
    {
        title: "Drone Warfare and Autonomous Systems in Modern Warfare",
        desc: "Lessons from Ukraine, Nagorno-Karabakh, and Yemen – implications for South Asia and future battlefield dominance.",
        wings: ["Technology Wing"],
        regions: ["Global"],
        flagship: false,
    },
    {
        title: "3D Printing and the Future of Warzones",
        desc: "Additive manufacturing in logistics, decentralized weapon production, and the transformation of supply chains in prolonged conflicts.",
        wings: ["Technology Wing"],
        regions: ["Global"],
        flagship: false,
    },
    {
        title: "Comparative Genocide Analysis & Prevention Frameworks",
        desc: "Drawing parallels between historical atrocities to develop early-warning systems and policy tools for mass atrocity prevention.",
        wings: ["History & Linguistics Wing"],
        regions: ["Global"],
        flagship: false,
    },
    {
        title: "Climate Change as a National Security Threat in Bangladesh",
        desc: "Sea-level rise, river erosion, climate migration, food security, and the emerging nexus between environment and conflict.",
        wings: ["Bangladesh Affairs", "Global Affairs"],
        regions: ["Bangladesh"],
        flagship: false,
    },
    {
        title: "Digitalization of Warfare & Hybrid Threats",
        desc: "Cyber domains, information operations, and the integration of AI into military doctrine.",
        wings: ["Technology Wing"],
        regions: ["Global"],
        flagship: false,
    },
    {
        title: "Russia–Ukraine War: Lessons for Great-Power Competition",
        desc: "Sanctions, energy weaponization, proxy wars, and implications for global order.",
        wings: ["Global Affairs"],
        regions: ["Europe", "Russia"],
        flagship: false,
    },
]

const wingConfig = [
    { value: "all", label: "All Topics", icon: null },
    { value: "bangladesh-affairs", label: "Bangladesh Affairs", icon: <Landmark className="h-5 w-5" /> },
    { value: "global-affairs", label: "Global Affairs", icon: <Globe className="h-5 w-5" /> },
    { value: "technology-wing", label: "Technology Wing", icon: <Cpu className="h-5 w-5" /> },
    { value: "history-linguistics", label: "History & Linguistics", icon: <BookOpen className="h-5 w-5" /> },
]

export default function Topics() {
    return (
        <>
            {/* Flagship Projects – Prominent Grid */}
            <section className="py-20 lg:py-32 px-4 xl:px-64 animate-fade-in">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent backdrop-blur-sm border border-secondary rounded-full text-sm font-medium mb-8">
                        <Sparkles className="h-5 w-5 text-tertiary" />
                        <span className="text-primary">Launched Projects</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">Flagship Research Projects</h2>
                    <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our cornerstone initiatives — led by expert researchers, combining fieldwork, data, and bold policy thinking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {allTopics
                        .filter(t => t.flagship)
                        .map((topic) => (
                            <Card
                                key={topic.title}
                                className="relative overflow-hidden border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-linear-to-tr from-indigo-900/20 to-transparent"
                            >
                                <Badge className="absolute top-4 right-4 bg-tertiary text-white">
                                    Flagship
                                </Badge>
                                <CardHeader className="pb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-indigo-900 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            {topic.researcher?.split(" ").map((n) => n[0]).join("") || "GSI"}
                                        </div>
                                        <div className="text-sm text-muted-foreground">Lead Researcher</div>
                                        <div className="text-lg font-semibold">{topic.researcher}</div>
                                    </div>
                                    <CardTitle className="text-2xl leading-tight">{topic.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground leading-relaxed">{topic.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {topic.wings.map((w) => (
                                            <Badge key={w} variant="secondary">{w}</Badge>
                                        ))}
                                        {topic.regions.map((r) => (
                                            <Badge key={r} variant="outline">{r}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-auto pt-6">
                                    <Button className="w-full bg-indigo-900 hover:bg-indigo-800">
                                        Read Micro-Journal <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                </div>
            </section>

            {/* All Topics with Tabs */}
            <section className="py-20 lg:py-32 px-4 xl:px-64">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold">Explore All Research Topics</h2>
                    <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                        Filter by wing or browse everything — new micro-journals, reports, and policy papers released regularly.
                    </p>
                </div>

                <Tabs defaultValue="all" className="w-full flex items-center justify-center">
                    <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12 h-auto bg-background/80 backdrop-blur">
                        {wingConfig.map((wing) => (
                            <TabsTrigger
                                key={wing.value}
                                value={wing.value}
                                className="data-[state=active]:bg-accent data-[state=active]:text-white text-lg py-3"
                            >
                                {wing.icon && <span className="mr-2">{wing.icon}</span>}
                                {wing.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {wingConfig.map((wing) => (
                        <TabsContent key={wing.value} value={wing.value}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {allTopics
                                    .filter((topic) => {
                                        if (wing.value === "all") return true
                                        const normalizedTab = wing.value.replace("-", " ")
                                        return topic.wings.some((w) => w.toLowerCase().includes(normalizedTab))
                                    })
                                    .map((topic) => (
                                        <Card
                                            key={topic.title}
                                            className="relative overflow-hidden border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-linear-to-tr from-indigo-900/20 to-transparent"
                                        >
                                            {topic.flagship && (
                                                <Badge className="absolute top-3 right-3 bg-accent text-white">
                                                    Flagship
                                                </Badge>
                                            )}
                                            <CardHeader>
                                                <CardTitle className="text-xl leading-tight pr-20">
                                                    {topic.title}
                                                </CardTitle>
                                                {topic.researcher && (
                                                    <CardDescription className="flex items-center gap-2">
                                                        <User className="h-4 w-4" />
                                                        {topic.researcher}
                                                    </CardDescription>
                                                )}
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">
                                                    {topic.desc || "Micro-journal and policy report in progress – stay tuned."}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {topic.wings.map((w) => (
                                                        <Badge key={w} variant="secondary" className="text-xs">
                                                            {w}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="pt-4">
                                                <Button variant="ghost" className="w-full">
                                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-b from-transparent to-accent text-white text-center">
                <div className="px-4 xl:px-64">
                    <h3 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
                        Have expertise or want to sponsor a topic?
                    </h3>
                    <p className="mt-6 text-xl opacity-90">
                        We welcome guest contributors, research partners, and contractual research commissions.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" variant="secondary">
                            Collaborate with Us <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}