import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import Events from './pages/Events';
import Home from './pages/Home';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Layout user={user} onLogout={() => setUser(null)}>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
