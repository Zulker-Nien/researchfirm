'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const callbackUrl = searchParams.get('callbackUrl') || '/studio'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            username,
            password,
            redirect: false,
            callbackUrl,
        })
        if (res?.error) {
            setError('Invalid credentials')
        } else {
            router.push(callbackUrl)
        }
    }

    return (
        <div style={{ maxWidth: 400, margin: '100px auto', padding: 20 }}>
            <h1>Studio Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%' }}
                />
                <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none' }}>
                    Sign In
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p style={{ marginTop: 20 }}>
                <a href="/studio" style={{ color: '#0070f3' }}>Go to Studio</a> (if logged in)
            </p>
        </div>
    )
}