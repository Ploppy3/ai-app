import Box from './ui/Box';

/**
 * Page layout component
 * @param {Object} props - Component props
 * @param {import('react').JSX.Element} props.children - The content to render within the layout
 * @returns {import('react').JSX.Element} The page layout
 */
function PageLayout({ children }) {
  return (
    <Box className="container mx-auto p-4">
      {children}
    </Box>
  );
}

export default PageLayout;
