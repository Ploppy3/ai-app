# Copilot Instructions

## Important: Keep This File Updated

**This file should always be kept current and updated whenever:**

- Project requirements change
- New features are added or removed
- Architecture decisions are made
- Development workflows are modified
- Dependencies are updated
- Team conventions are established or changed
- Documentation standards evolve

## Purpose

This file serves as the central source of truth for GitHub Copilot and other AI assistants working on this project. It provides context about:

- Project structure and architecture
- Coding standards and conventions
- Development guidelines
- Testing requirements
- Documentation expectations
- Deployment procedures

## Maintenance Guidelines

1. **Regular Reviews**: Review and update this file during sprint planning or major feature releases
2. **Version Control**: Always commit changes to this file when project context changes
3. **Team Collaboration**: Ensure all team members contribute to keeping this file accurate
4. **Documentation**: Link to relevant documentation that provides more detailed information

## Project Context

### Technology Stack
- **Frontend Framework**: React 19.1.0
- **Routing**: React Router 7.6.3
- **Form Management**: react-hook-form 7.59.0
- **Build Tool**: Webpack 5.99.9 with webpack-dev-server 5.2.2
- **Styling**: Tailwind CSS 4.1.11
- **Type System**: JSDoc comments (NO TypeScript)
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint 9.29.0
- **Bundler**: Webpack with Babel for JSX transformation

### Architecture
- React component-based architecture
- **Routing**: Uses React Router for client-side navigation
- **Containers**: Containers act as main entry points for pages, handling logic and actions. Pages should be simple components that render a container.
- **Containers Folder**: The `containers` folder should only contain subdirectories, where each subdirectory represents a page or entity in the project.
- Functional components with hooks preferred
- Component composition over inheritance
- Responsive design with Tailwind CSS v4 utility classes
- Webpack for bundling and development server

### Webpack Configuration
- **Entry**: src/main.jsx
- **Dev Server**: localhost:3001 with hot reload
- **Loaders**: Babel for JSX/JS, CSS/PostCSS for styles
- **Output**: dist/ folder with content hashing
- **Config Files**: webpack.config.cjs (CommonJS format)

### Tailwind CSS v4 Configuration
- **Version**: 4.1.11
- **Integration**: PostCSS with Webpack
- **CSS Directives**: Uses `@tailwind base; @tailwind components; @tailwind utilities;` in `src/index.css`
- **Config**: `tailwind.config.js` with content paths configured for `index.html` and `src/**/*.{js,ts,jsx,tsx}`
- **PostCSS**: `postcss.config.cjs` with `@tailwindcss/postcss` and `autoprefixer` plugins

### Development Environment Setup
- **Package Manager**: npm
- **Dev Server**: Webpack dev server on localhost:3001 with HMR
- **Scripts**: 
  - `npm run dev` - `webpack serve --mode development`
  - `npm run build` - `webpack --mode production`
  - `npm run preview` - `npx serve dist`
  - `npm run lint` - `eslint .`
  - `npm run type-check` - `tsc --project jsconfig.json --noEmit`. If the command doesn't return anything, it simply means there are no type errors.

### Coding Standards
- **Type Documentation**: Use JSDoc comments for all functions, components, and complex objects.
- **Component Structure**: Functional components with proper JSDoc type annotations
- **Styling**: Tailwind CSS v4 utility classes only - no custom CSS unless absolutely necessary
- **CSS Directives**: Use `@tailwind base; @tailwind components; @tailwind utilities;` in CSS files
- **No TypeScript**: All type information should be documented using JSDoc syntax
- **Props Documentation**: All React component props must be documented with JSDoc
- **Function Documentation**: All functions should have JSDoc comments describing parameters and return values
- **Webpack Configuration**: Use `webpack.config.cjs` for configuration files

### Testing Strategy
- Component testing with React Testing Library
- JSDoc type checking via `npm run type-check` for development-time type safety. An empty output from this command indicates that there are no type errors.
- Manual testing for responsive design across devices
- Accessibility testing with screen readers and keyboard navigation

### Development Guidelines
- **No React Import**: Do not import React from 'react' in JSX files, as it is not needed with the current setup.
- **JSDoc Examples**:
  ```javascript
  /**
   * User profile compon²ent
   * @param {Object} props - Component props
   * @param {string} props.name - User's display name
   * @param {string} props.email - User's email address
   * @param {function} props.onEdit - Callback when edit button is clicked
   * @returns {import('react').JSX.Element} The user profile component
   */
  function UserProfile({ name, email, onEdit }) {
    // Component implementation
  }
  ```
- **Tailwind Usage**: Prefer utility classes, use responsive prefixes (sm:, md:, lg:, xl:)
- **Tailwind v4**: Use `@tailwind base; @tailwind components; @tailwind utilities;` directives
- **Webpack Integration**: Tailwind configured via PostCSS in webpack.config.cjs
- **Component Organization**: One component per file, named exports preferred
- **Page Layout**: All pages must use the `PageLayout` component to ensure a consistent layout.
- **Form Management**: All forms must be implemented using `react-hook-form`.
- **Form Architecture**: 
  - Form logic should be encapsulated in a custom hook (e.g., `useSettingsForm`).
  - Form handler hooks should be named `use<Name>Form`, where `Name` is the name of the container (e.g., `useSettingsForm`).
  - The hook should be in a file named `use<Name>Form.jsx` (e.g., `useSettingsForm.jsx`).
  - The hook is responsible for handling form state, validation, and the submission logic itself using `react-hook-form`.
  - The hook must not accept an `onSubmit` callback from the component.
  - The hook must define a dedicated JSDoc type for the form data.
  - The hook must export a `getDefaultValues` function to provide the initial form state.
  - The hook should return the `form` object from `react-hook-form` and a `submit` function.
  - The `submit` function returned by the hook should be passed directly to the `<form>` element's `onSubmit` prop.
  - The `<form>` element must be wrapped with the `FormProvider` component from `react-hook-form`.
  - The form's UI should be a separate presentational component (e.g., `SettingsForm.jsx`).
  - Form components should be placed in the same directory as their corresponding `use<Name>Form` hook (e.g., `src/containers/settings/CredentialsForm.jsx` and `src/containers/settings/useCredentialsForm.jsx`).
  - The container component (e.g., `Settings.jsx`) should call the hook to get the form props and pass them to the presentational form component.
  - The `Input` component in `src/components/form/Input.jsx` can be used to build the form UI.
  - The `RHFField` type should be imported from the `FormField` component when creating new form components.
- **UI Components**: Reusable UI components are located in the `src/components/ui` folder.
  - The `Button` component in `src/components/ui/Button.jsx` should be used for all buttons.
  - The `Box` component in `src/components/ui/Box.jsx` should be used instead of the `div` element.
- **Project Structure**: After creating, updating, or removing files, ensure the `project-structure.md` file is updated to reflect the changes.
- **State Management**: React hooks for local state, Context API for shared state
- **React Callbacks**: Functions in components should be wrapped in `React.useCallback` to prevent unnecessary re-renders.
- **Memoized Constants**: Constants defined within components should be memoized with `React.useMemo` to avoid re-computation on every render.
- **Instruction Maintenance**: Always update this file after any architectural changes, dependency updates, or modifications to the project structure. The AI assistant must confirm that this file has been updated after making any changes to the project.
- **User Preferences**:
  - Don't explain what you are about to do, just do it.
  - do not stop after telling me what you'll do, continue and do it

### State Management
- **Local State**: Use `useState` and `useReducer` for state that is local to a single component.
- **Shared State**: Use React's Context API for state that needs to be shared across multiple components.
- **Context Organization**: When creating new context, place it in a `context` subfolder within the relevant feature's container directory (e.g., `src/containers/settings/context/`). The context file should export the Provider component and a custom hook (e.g., `useSettingsContext`) for easy consumption.

### API Interaction
- **Fetching Library**: Use the native `fetch` API for all HTTP requests. Do not add other libraries like `axios`.
- **API Logic**: Encapsulate API calls in dedicated functions. For feature-specific APIs, create a file like `api.js` inside the feature's container directory (e.g., `src/containers/todo/api.js`).
- **Data Handling**: API functions should be responsible for handling request/response cycles, including parsing JSON and basic error handling.

### Error Handling
- **Form Errors**: Use `react-hook-form`'s built-in error handling to display validation messages next to the relevant form fields.
- **API Errors**: For API errors (e.g., network failures, server errors), display a generic error message to the user, but log the detailed error to the console for debugging. A global notification or toast system can be implemented for this.
- **Component Errors**: Use Error Boundaries to catch and handle runtime errors in component trees, preventing the entire application from crashing.

### Code Style and Naming Conventions
- **File Names**: Use PascalCase for component files (e.g., `MyComponent.jsx`) and camelCase for non-component files (e.g., `useMyHook.js`, `api.js`).
- **Component Naming**: Component names should be in PascalCase.
- **Hook Naming**: Custom hooks must be prefixed with `use` (e.g., `useTodoForm`).
- **Constants**: Define constants at the top of the file they are used in. If used across multiple files, store them in a `constants.js` file within a relevant `src/utils` or feature directory.

### Environment Variables
- **Configuration**: Use a `.env` file at the root of the project to store environment-specific variables (e.g., API base URLs).
- **Access**: Access environment variables through `process.env`. Remember to configure Webpack's `DefinePlugin` to make them available in the client-side code.
- **Security**: Never commit sensitive keys or secrets to the repository. Use a `.env.example` file to list the required variables.

### Deployment
- **Platform**: The project is intended for static deployment on platforms like Vercel, Netlify, or GitHub Pages.
- **Build Command**: The `npm run build` command generates a production-ready build in the `dist/` directory.
- **Deployment Process**: To deploy, push the code to the main branch, which should trigger an automated build and deployment pipeline on the chosen platform.

### Project Structure
For a detailed view of the project structure, see [project-structure.md](project-structure.md).

### Key Configuration Files
- **webpack.config.cjs**: Webpack configuration with loaders and plugins
- **tailwind.config.js**: Tailwind CSS configuration with content paths
- **postcss.config.cjs**: PostCSS configuration with tailwindcss and autoprefixer
- **eslint.config.js**: ESLint configuration
- **.babelrc**: Babel configuration for JSX transformation
- **jsconfig.json**: JSConfig for defining project paths and editor settings
- **src/index.css**: Main CSS file with `@tailwind` directives

### Recommendations
- The file `src/App.css` is not currently used by any component and contains default styles. It is recommended to remove this file to keep the project clean.

---

**Last Updated**: June 29, 2025
**Next Review**: *[Set a date for the next review]*

## Action Items for Keeping This File Updated

- [ ] Set up automated reminders for regular reviews
- [ ] Include updates to this file in definition of done for major features
- [ ] Add this file to code review checklist when significant changes are made
- [ ] Create a template or checklist for what information should be included
- [ ] Establish ownership and responsibility for maintaining this file
