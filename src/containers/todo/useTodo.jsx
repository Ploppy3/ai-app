import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} text
 * @property {boolean} completed
 */

const LOCAL_STORAGE_KEY = 'todos';

/**
 * Custom hook for managing todos.
 * @returns {{
 *  todos: Todo[],
 *  addTodo: (text: string) => void,
 *  toggleTodo: (id: number) => void,
 *  deleteTodo: (id: number) => void
 * }}
 */
export function useTodo() {
  /** @type {[Todo[], React.Dispatch<React.SetStateAction<Todo[]>>]} */
  const [todos, setTodos] = useState(() => {
    try {
      const items = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error(error);
    }
  }, [todos]);

  const addTodo = useCallback(
    /** @param {string} text */
    (text) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, completed: false },
      ]);
    },
    []
  );

  const toggleTodo = useCallback(
    /** @param {number} id */
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    []
  );

  const deleteTodo = useCallback(
    /** @param {number} id */
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    []
  );

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));
  }, [todos]);

  return { todos: sortedTodos, addTodo, toggleTodo, deleteTodo };
}
