import { FormProvider } from "react-hook-form";
import Button from "../../components/ui/Button";
import { CredentialsForm } from "./CredentialsForm";
import { useCredentialsForm } from "./useCredentialsForm";
import Box from "../../components/ui/Box";

/**
 * Settings container
 * @returns {import('react').JSX.Element} The settings container
 */
function Settings() {
  const { form, submit } = useCredentialsForm();

  return (
    <Box>
      <h1 className="text-2xl font-bold">Settings Page</h1>
      <p>Manage your settings here.</p>
      <Box className="mt-8">
        <FormProvider {...form}>
          <form onSubmit={submit}>
            <CredentialsForm />
            <Box className="mt-4">
              <Button type="submit">Save</Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}

export default Settings;
