import FormField from '../../components/form/FormField';
import { Input } from '../../components/form/Input';
import { useFormContext } from 'react-hook-form';
import Box from '../../components/ui/Box';

/**
 * @returns {import('react').JSX.Element}
 */
export function CredentialsForm() {
  const { control } = useFormContext();
  return (
    <Box className="space-y-4">
      <FormField
        control={control}
        name="apiKey"
        label="API Key"
        rules={{ required: 'API Key is required' }}
        render={({ field }) => (
          <Input field={field} type="password" placeholder="Enter your API key" />
        )}
      />
    </Box>
  );
}
