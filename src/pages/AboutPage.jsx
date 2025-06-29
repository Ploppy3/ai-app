import PageLayout from '../components/PageLayout';
import About from '../containers/about/About';

/**
 * About page component
 * @returns {import('react').JSX.Element} The about page
 */
function AboutPage() {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
}

export default AboutPage;
