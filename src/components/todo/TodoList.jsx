import { TodoItem } from './TodoItem';

/**
 * @typedef {import('../../containers/todo/useTodo').Todo} Todo
 */

/**
 * @param {{ 
 *   todos: Todo[], 
 *   toggleTodo: (id: number) => void, 
 *   deleteTodo: (id: number) => void 
 * }} props
 * @returns {import('react').JSX.Element}
 */
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list-none p-0 m-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
