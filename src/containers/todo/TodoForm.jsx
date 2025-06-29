import { FormProvider } from 'react-hook-form';
import FormField from '../../components/form/FormField';
import { Input } from '../../components/form/Input';
import Button from '../../components/ui/Button';

/**
 * @typedef {import('./useTodoForm').TodoFormData} TodoFormData
 */

/**
 * @param {{form: import('react-hook-form').UseFormReturn<TodoFormData>, submit: () => void}} props
 * @returns {import('react').JSX.Element}
 */
export function TodoForm({ form, submit }) {
  return (
    <FormProvider {...form}>
      <form onSubmit={submit} className="flex items-start space-x-2">
        <FormField
          control={form.control}
          name="text"
          rules={{ required: 'Todo text is required' }}
          render={({ field }) => (
            <Input
              field={field}
              type="text"
              placeholder="Add a new todo"
              className="flex-grow"
            />
          )}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </FormProvider>
  );
}
