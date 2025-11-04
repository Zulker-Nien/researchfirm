"use client"

import { NextStudio } from "next-sanity/studio"
import config from '../../../sanity.config'
import { SessionProvider, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function SanityClient() {
    const { data: session, status } = useSession()
    const [hideButton,setHideButton] = useState(false)

    useEffect(() => {
        if (status === 'loading') return
        if (!session) {
            window.location.href = '/login?callbackUrl=/studio'
        }
    }, [session, status])

    if (status === 'loading') return <p>Loading...</p>

    return (
        <div className="relative">
            <div className="absolute right-0 bottom-48 bg-white rounded-l-md flex items-center min-h-24 shadow-lg">
                {hideButton ? (
                    <ChevronRight 
                        onClick={() => {setHideButton(!hideButton)}} 
                        className="rotate-180 cursor-pointer transition-transform duration-300" 
                    />
                ) : (
                    <ChevronRight 
                        onClick={() => {setHideButton(!hideButton)}} 
                        className="cursor-pointer transition-transform duration-300" 
                    />
                )}

                <div 
                    className={`
                        transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-4
                        ${hideButton 
                            ? 'max-w-0 opacity-0 translate-x-4 py-4' 
                            : 'max-w-24 opacity-100 translate-x-0 p-4'
                        }
                    `}
                >
                    <p className="text-sm">Welcome, {session?.user?.name}!</p>
                    <Button 
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className="text-xs"
                    >
                        Logout
                    </Button>
                </div>
            </div>
            <NextStudio config={config} />
        </div>
    )
}