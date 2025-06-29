import Box from '../ui/Box';
import Button from '../ui/Button';

/**
 * @typedef {import('../../containers/todo/useTodo').Todo} Todo
 */

/**
 * @param {{ 
 *   todo: Todo, 
 *   toggleTodo: (id: number) => void, 
 *   deleteTodo: (id: number) => void 
 * }} props
 * @returns {import('react').JSX.Element}
 */
export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <Box className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </Box>
      <Button onClick={() => deleteTodo(todo.id)} colorPalette="red">
        Delete
      </Button>
    </li>
  );
}
