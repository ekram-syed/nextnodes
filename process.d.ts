declare namespace NodeJS {
    export interface ProcessEnv {
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
    }
  }