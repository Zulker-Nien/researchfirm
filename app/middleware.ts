import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Optional: Add custom logic, e.g., role checks
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,  // Require any valid session
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = {
  matcher: ['/studio/:path*'],  // Protects /studio and subpaths (e.g., /studio/desk)
}