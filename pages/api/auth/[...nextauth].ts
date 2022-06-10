/**
 * Initialize the nextauth
 * https://next-auth.js.org/configuration/initialization
 */

import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
//import GithubProvider from "next-auth/providers/github"
//import TwitterProvider from "next-auth/providers/twitter"
//import Auth0Provider from "next-auth/providers/auth0"
//import AppleProvider from "next-auth/providers/apple"
//import EmailProvider from "next-auth/providers/email"

/**
 *  Define the PrismaClient to pass as an adapter
 */

 const prisma = new PrismaClient()

/**
 * Create a new instance of NextAuth and configure it
 * https://next-auth.js.org/configuration/options
 */

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.NEXTAUTH_FACEBOOK_CLIENT_ID,
        clientSecret: process.env.NEXTAUTH_FACEBOOK_CLIENT_SECRET,
      }),
    /*
    EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),    
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),*/
  ],
  session: {
    strategy: "database",
  },
  pages: {
    //signIn: '/auth/signin',
    //signOut: '/auth/signout',
    //error: '/auth/error', 
    //verifyRequest: '/auth/verify-request', 
    //newUser: '/auth/new-user'
  },
  theme: {
    colorScheme: "auto",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})