import PageLayout from '../components/PageLayout';
import Home from '../containers/home/Home';

/**
 * Home page component
 * @returns {import('react').JSX.Element} The home page
 */
function HomePage() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default HomePage;
