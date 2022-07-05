# About NextNodes

NextNodes is an opensource full stack JavaScript starter (base) project based on modern best tools and following community best practices.

The intention to create a well documented project starter with most common features, integration for all common service providers and adapters. All file has information regarding why, what, how and where anyone can go from there.

---

### Tools, Providers, Adapters
- TypeScript
- React
- Next
- Next-Auth (*with all type of authentication providers*)
- Prisma (*with all Prisma supported databases*)

---

### Getting Started

First, clone and run the development server:

```bash
npm run dev # or yarn dev
```
---

### Environment variables and definition files.
```bash
Next.js allows you to set defaults in 
.env # (all environments), 
.env.development # (development environment), and 
.env.production # (production environment).

.env.local # if exists always overrides the defaults set.
```

---

### All project settings files introduction.

- **tsconfig.json** 
  - The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
  [More](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- **sample.env**
  - A sample project environment file know the defined variables to quickly configure your project
- **README.md**
  - This project introduction file to guild you.
- **process.d.ts**
  - The "d.ts" file is used to provide typescript type information about an API that's written in JavaScript. [More](https://thisthat.dev/d-ts-vs-ts/)
  As we tend to develop this project with TypeScript, this file is to define types of our env variables. If you are create next application in typescript, you need to define types of your environment variables through this file otherwise you will get typescript errors.
- **package.json & package-lock.json**
- **next.config.js**
- **next-env.d.ts**
- **LICENSE**
  - The license declaration file, This project is licensed under MIT License. [More](https://fossa.com/blog/open-source-licenses-101-mit-license/)
- **commitlint.config.js**
- **.prettierignore & .prettierrc**
- **.nvmrc & .npmrc**
- **.gitignore**
- **.eslintrc.json**
- **.env & .env.production & .env.development & .env local** 

---

TODO

### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

TODO