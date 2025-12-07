'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Globe, Landmark, Cpu, BookOpen } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"

// Types from Sanity
interface Wing {
  _id: string
  title: string
  slug: { current: string }
  icon?: "Globe" | "Landmark" | "Cpu" | "BookOpen"
}

interface Researcher {
  name: string
  photo?: any
}

interface ResearchTopic {
  _id: string
  title: string
  slug: { current: string }
  description: string
  isFlagship: boolean
  regions: string[]
  leadResearcher?: Researcher
  researcherName?: string
  wings: Wing[]
}

const topicsQuery = groq`
  *[_type == "researchTopic"] | order(isFlagship desc, publishedAt desc) {
    _id,
    title,
    slug,
    description,
    isFlagship,
    regions,
    researcherName,
    "leadResearcher": leadResearcher->{
      name,
      photo
    },
    "wings": wings[]->{
      _id,
      title,
      slug,
      icon
    }
  }
`

const wingsQuery = groq`
  *[_type == "wing"] | order(title asc) {
    _id,
    title,
    slug { current },
    icon
  }
`

// Dynamic wing config with icons
const getWingIcon = (iconName?: string) => {
  switch (iconName) {
    case "Landmark": return <Landmark className="h-5 w-5" />
    case "Globe": return <Globe className="h-5 w-5" />
    case "Cpu": return <Cpu className="h-5 w-5" />
    case "BookOpen": return <BookOpen className="h-5 w-5" />
    default: return null
  }
}

export default function Topics() {
  const [topics, setTopics] = useState<ResearchTopic[]>([])
  const [wings, setWings] = useState<Wing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedTopics, fetchedWings] = await Promise.all([
          client.fetch(topicsQuery),
          client.fetch(wingsQuery)
        ])
        setTopics(fetchedTopics)
        setWings([{ _id: "all", title: "All Topics", slug: { current: "all" } }, ...fetchedWings])
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch topics:", error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const getResearcherInitials = (name?: string) => {
    if (!name) return "GSI"
    return name.split(" ").map(n => n[0]).join("").toUpperCase()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading research topics...</div>
      </div>
    )
  }

  return (
    <>
      {/* All Topics with Tabs */}
      <section className="py-20 lg:py-32 px-4 xl:px-64 animate-fade-in mt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">Explore All Research Topics</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Filter by wing or browse everything — new micro-journals, reports, and policy papers released regularly.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12 h-auto bg-background/80 backdrop-blur mx-auto">
            {wings.map((wing) => (
              <TabsTrigger
                key={wing._id}
                value={wing.slug.current}
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-lg py-4"
              >
                {getWingIcon(wing.icon)}
                <span className={wing.icon ? "ml-2" : ""}>{wing.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {wings.map((wing) => (
            <TabsContent key={wing._id} value={wing.slug.current}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {topics
                  .filter((topic) => {
                    if (wing.slug.current === "all") return true
                    return topic.wings.some(w => w.slug.current === wing.slug.current)
                  })
                  .map((topic) => {
                    const researcherName = topic.leadResearcher?.name || topic.researcherName || "Anonymous"
                    const researcherPhoto = topic.leadResearcher?.photo

                    return (
                      <Card
                        key={topic._id}
                        className="relative overflow-hidden border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-indigo-900/10 via-transparent to-transparent"
                      >
                        {topic.isFlagship && (
                          <Badge className="absolute top-4 right-4 bg-linear-to-r from-yellow-500 to-amber-600 text-white border-0 shadow-lg z-10">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Flagship
                          </Badge>
                        )}

                        <CardHeader className="pb-8">
                          <div className="flex items-center gap-4 mb-4">
                            {researcherPhoto ? (
                              <Image
                                src={urlFor(researcherPhoto).width(64).height(64).url()}
                                alt={researcherName}
                                width={64}
                                height={64}
                                className="rounded-full object-cover shadow-lg border-2 border-indigo-600"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                {getResearcherInitials(researcherName)}
                              </div>
                            )}
                            <div>
                              <div className="text-sm text-muted-foreground">Lead Researcher</div>
                              <div className="text-lg font-semibold">{researcherName}</div>
                            </div>
                          </div>
                          <CardTitle className="text-2xl leading-tight">{topic.title}</CardTitle>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
                          <div className="flex flex-wrap gap-2 mt-6">
                            {topic.wings.map((w) => (
                              <Badge key={w._id} variant="secondary">
                                {w.title}
                              </Badge>
                            ))}
                            {topic.regions.map((r) => (
                              <Badge key={r} variant="outline">{r}</Badge>
                            ))}
                          </div>
                        </CardContent>

                        <CardFooter className="pt-6">
                          <Button asChild className="w-full bg-indigo-900 hover:bg-indigo-800">
                            <a href={`/topics/${topic.slug.current}`}>
                              Read Micro-Journal <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    )
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-b from-transparent via-indigo-900/20 to-accent text-white text-center">
        <div className="px-4 xl:px-64">
          <h3 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
            Have expertise or want to sponsor a topic?
          </h3>
          <p className="mt-6 text-xl opacity-90">
            We welcome guest contributors, research partners, and contractual research commissions.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="/collaborate">
                Collaborate with Us <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}