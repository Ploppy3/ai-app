import { PortalProvider } from '../contexts/PortalContext';
import './globals.css';

/**
 * Root layout component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the layout
 * @returns {import('react').JSX.Element} The root layout component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <PortalProvider>{children}</PortalProvider>
        <div id="portal-root" />
      </body>
    </html>
  );
}
