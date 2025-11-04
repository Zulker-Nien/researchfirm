import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Password',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        // Simple check: Allow any username, but password must match env
        if (credentials.password === process.env.AUTH_PASSWORD) {
          return { id: '1', name: credentials.username, email: `${credentials.username}@studio.local` }
        }

        // Optional: Hash for security (install bcryptjs)
        // import bcrypt from 'bcryptjs'
        // const hashed = await bcrypt.hash(process.env.AUTH_PASSWORD!, 10)
        // if (await bcrypt.compare(credentials.password, hashed)) { ... }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',  // Custom login page (we'll create this)
  },
  session: { strategy: 'jwt' },  // JWT for simplicity (no DB)
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = 'studio-access'  // Custom token for checks
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    },
  },
}