import { useTodo } from './useTodo';
import { useTodoForm } from './useTodoForm';
import { TodoForm } from './TodoForm';
import { TodoList } from '../../components/todo/TodoList';
import Box from '../../components/ui/Box';

/**
 * @returns {import('react').JSX.Element}
 */
export function Todo() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const { form, submit } = useTodoForm({ addTodo });

  return (
    <Box className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm form={form} submit={submit} />
      <Box className="mt-4">
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </Box>
    </Box>
  );
}
