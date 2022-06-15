/**
 * This file is to define the process interface. If you are create next application in typescript, you need to define types of your
 * environment variables through this file otherwise you will get typescript errors.
 */

declare namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      NEXTAUTH_GITHUB_CLIENT_ID: string
      NEXTAUTH_GITHUB_CLIENT_SECRET: string
      NEXTAUTH_FACEBOOK_CLIENT_ID: string
      NEXTAUTH_FACEBOOK_CLIENT_SECRET: string
      NEXTAUTH_TWITTER_CLIENT_ID: string
      NEXTAUTH_TWITTER_CLIENT_SECRET: string
      NEXTAUTH_GOOGLE_CLIENT_ID: string
      NEXTAUTH_GOOGLE_CLIENT_SECRET: string
      NEXTAUTH_AUTH0_CLIENT_ID: string
      NEXTAUTH_AUTH0_CLIENT_SECRET: string
      NEXTAUTH_AUTH0_CLIENT_ISSUER: string
    }
  }