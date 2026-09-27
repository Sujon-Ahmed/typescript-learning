# Setup Guide

How to get this TypeScript learning project running on your machine.

## Prerequisites

- **Node.js** 20 or newer (developed on v24; 22.18+ recommended so `.ts` files run directly) — <https://nodejs.org>
- **npm** (bundled with Node.js)
- **Git** for cloning the repo

Verify your versions:

```bash
node --version
npm --version
```

## 1. Clone the repository

```bash
git clone https://github.com/Sujon-Ahmed/typescript-learning.git
cd typescript-learning
```

## 2. Install dependencies

```bash
npm install
```

This installs `typescript` (the compiler) and `ts-node` (used as a dev tool — see the note below).

## 3. Build the project

```bash
npm run build
```

This runs `tsc`, type-checks everything under `src/`, and emits JavaScript into `dist/`.

## 4. Run the code

```bash
npm start          # builds, then runs dist/index.js
```

Or run any compiled file directly:

```bash
node dist/hello.js
```

Expected output:

```
Hello World
```

## Running a single file

Pass the source file to `npm run file` (it just forwards to `node`):

```bash
npm run file src/hello.ts
```

Node 22.18+ strips the TypeScript types on the fly, so no build step is needed.
On older Node versions, compile first and run the emitted JavaScript instead:

```bash
npx tsc
node dist/hello.js
```

> **Why not `npx ts-node src/hello.ts`?**
> This project installs `typescript@7`, which ships the new native compiler.
> `ts-node@10` does not support it yet and fails with:
> `TypeError: Cannot read properties of undefined (reading 'fileExists')`.
> Use `npm run file` / `tsc` + `node` instead. If you specifically want
> `ts-node` to work, downgrade to `typescript@5` with
> `npm install -D typescript@5`.

## Project structure

```
typescript-learning/
├── src/
│   ├── index.ts         # scratchpad: type assignment, JSON.parse, arrow fn
│   ├── hello.ts         # basic greet() function
│   └── simple-types.ts  # boolean / number primitives
├── dist/                # compiled output (git-ignored, created by the build)
├── tsconfig.json        # strict mode, CommonJS, target ES2016, rootDir ./src
├── package.json
├── README.md            # TypeScript learning notes
└── SETUP.md             # this file
```

## Available scripts

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run build`   | Type-check and compile `src/` into `dist/`    |
| `npm run typecheck` | Type-check only, without emitting files     |
| `npm start`       | Build, then run `dist/index.js`               |
| `npm run file`    | Run a single file, e.g. `npm run file src/hello.ts` |

## Troubleshooting

**`Cannot find module '.../dist/index.js'`**
Run `npm run build` first — `dist/` is generated output and is not committed.

**Type errors block the build**
`tsconfig.json` sets `noEmitOnError: true`, so nothing is written to `dist/` until
the errors are fixed. You can see them standalone with `npm run typecheck`.

**`tsc` is not recognized**
Use `npx tsc` (or make sure `npm install` finished) so the local compiler in
`node_modules` is used instead of a global one.
