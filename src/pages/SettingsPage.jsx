import PageLayout from '../components/PageLayout';
import Settings from '../containers/settings/Settings';

/**
 * Settings page component
 * @returns {import('react').JSX.Element} The settings page
 */
function SettingsPage() {
  return (
    <PageLayout>
      <Settings />
    </PageLayout>
  );
}

export default SettingsPage;
