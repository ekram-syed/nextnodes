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

### Modify environment variables and definition files.
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
  - The `d.ts` file is used to provide typescript type information about an API that's written in JavaScript. [More](https://thisthat.dev/d-ts-vs-ts/)
  As we tend to develop this project with TypeScript, this file is to define types of our env variables. If you are create next application in typescript, you need to define types of your environment variables through this file otherwise you will get typescript errors.
- **package.json, package-lock.json, npm and .npmrc**
  - The `package.json` file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
  - `npm` is the world's largest software registry.
  - `package-lock.json` in short is A manifestation of the manifest.package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
  - `npm` gets its config settings from the command line, environment variables, and `.npmrc` files.
- **next.config.js**
  - `next.config.js` is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it's not included in the browser build. For custom advanced configuration of `Next.js`, you can create a `next.config.js` or `next.config.mjs` file in the root of your project directory. [More](https://nextjs.org/docs/api-reference/next.config.js/introduction)
- **next-env.d.ts**
  - This file named `next-env.d.ts` will be created in the root of your project if your project use `Typescript`. This file ensures `Next.js` types are picked up by the TypeScript compiler. **`You cannot remove it or edit it as it can change at any time.`** As such this file should not be committed and should be ignored by version control.Instead of editing `next-env.d.ts`, you can include additional types by adding a new file e.g. `additional.d.ts` and then referencing it in the include array in your `tsconfig.json`.
- **LICENSE**
  - The license declaration file, This project is licensed under MIT License. [More](https://fossa.com/blog/open-source-licenses-101-mit-license/)
- **commitlint.config.js**
  - `commitlint` helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. Its very helpful to maintain a commit convention for open-source projects or large team projects.To get the most out of `commitlint` you'll want to automate it in your project lifecycle, we'll use `husky` which explained below. [More](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup)
- **prettier, .prettierignore & .prettierrc**
  - `Prettier` is an opinionated code formatter. By far the biggest reason for adopting Prettier is to stop all the on-going debates over styles. We use as project dependency rather using vscode extension to enforce same styling for everyone. Moreover, prettier extension also has support for these files if available in project.
  - Use `.prettierignore` to ignore (i.e. not reformat) certain files and folders completely. We don't want to change styles of other dependent projects code. 
  - `.prettierrc` is a configuration file. Prettier intentionally doesn’t support any kind of global configuration. This is to make sure that when a project is copied to another computer, Prettier’s behavior stays the same. 
- **nvm, & .nvmrc**
  - `nvm` allows you to quickly install and use different versions of node via the command line. Its designed to be installed per-user, and invoked per-shell. `nvm` works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash).
  - `.nvmrc` file containing a node version number in your project.
- **.gitignore**
  - A `gitignore` file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
- **ESLint & .eslintrc.json**
  - `ESLint` is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - `.eslintrc.json` is a configuration file for `ESLint`. [More](https://eslint.org/docs/latest/user-guide/configuring/)
- **.env & .env.production & .env.development & .env local** 
  - See section above `Modify environment variables and definition files`


### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

TODO