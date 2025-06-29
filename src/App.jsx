import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import TodoPage from './pages/TodoPage';
import Box from './components/ui/Box';

function App() {
  return (
    <Box className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-center">
          <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
          <Link to="/todo" className="mr-4 hover:text-gray-300">Todo</Link>
          <Link to="/settings" className="mr-4 hover:text-gray-300">Settings</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </nav>
      </header>
      <main className="p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </main>
    </Box>
  );
}

export default App;
