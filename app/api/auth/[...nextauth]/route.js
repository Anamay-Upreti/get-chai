import { NextAuth } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
  
     GoogleProvider({
       clientId: process.env.GOOGLE_ID,
       clientSecret: process.env.GOOGLE_SECRET
     }),
     FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
     // Passwordless / email sign in
     EmailProvider({
       server: process.env.MAIL_SERVER,
       from: 'NextAuth.js <no-reply@example.com>'
     }),
  ]
})

export { authoptions as GET, authoptions as POST}
