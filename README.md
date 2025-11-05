# Next.js AI App

This is a modern Next.js boilerplate with Tailwind CSS and JSDoc.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) ^15.5.4
- **Frontend Framework**: [React](https://react.dev/) ^19.1.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) ^4.1.13
- **Type System**: JSDoc comments with TypeScript for type-checking
- **Language**: JavaScript (ESM)
- **Linting**: [ESLint](https://eslint.org/) (via `next lint`)
- **Compiler**: [Babel](https://babeljs.io/) with `babel-plugin-react-compiler`

## Features

- **Next.js App Router**: Uses the `app` directory for routing.
- **React Compiler**: Experimental React compiler enabled for automatic optimizations.
- **Tailwind CSS**: For a utility-first CSS workflow.
- **JSDoc**: For type checking in JavaScript.
- **ESLint**: For code linting.

## Getting Started

### Prerequisites

- Node.js (v18.17 or later)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ai-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ai-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server, run:

```sh
npm run dev
```

This will start the Next.js dev server on `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase.
- `npm run type-check`: Checks for type errors using JSDoc and TypeScript.

## Project Structure

```
ai-app/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
├── contexts/
├── hooks/
├── public/
├── .env.example
├── .gitignore
├── eslint.config.js
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
```

## Deployment

To build the application for production, run:

```sh
npm run build
```

This will create a `.next` folder with the production-ready assets. You can then deploy this to any hosting service that supports Next.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.