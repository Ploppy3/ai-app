import PageLayout from '../components/PageLayout';
import { Todo } from '../containers/todo/Todo';

/**
 * @returns {import('react').JSX.Element}
 */
function TodoPage() {
  return (
    <PageLayout>
      <Todo />
    </PageLayout>
  );
}

export default TodoPage;
