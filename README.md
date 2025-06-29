# React Webpack Boilerplate

This is a modern React boilerplate with Webpack, Babel, Tailwind CSS, and React Router.

## Technology Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router 7.6.3
- **Form Management**: react-hook-form 7.59.0
- **Build Tool**: Webpack 5.99.9 with webpack-dev-server 5.2.2
- **Styling**: Tailwind CSS 4.1.11
- **Type System**: JSDoc comments (NO TypeScript)
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint 9.29.0
- **Bundler**: Webpack with Babel for JSX transformation

## Features

- **Hot Module Replacement (HMR)**: For a fast development workflow.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For a utility-first CSS workflow.
- **JSDoc**: For type checking in JavaScript.
- **ESLint**: For code linting.
- **Webpack**: For bundling and asset management.

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

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

This will start the Webpack dev server on `http://localhost:3001` with HMR enabled.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Serves the production build locally.
- `npm run lint`: Lints the codebase.
- `npm run type-check`: Checks for type errors using JSDoc.

## Project Structure

```
ai-app/
├── dist/
├── public/
├── src/
│   ├── components/
│   ├── containers/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .babelrc
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.cjs
├── README.md
└── webpack.config.cjs
```

## Deployment

To build the application for production, run:

```sh
npm run build
```

This will create a `dist` folder with the production-ready assets. You can then deploy this folder to any static hosting service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.
