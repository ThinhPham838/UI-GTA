// src/App.tsx
import LandingPage from '@pages/Home/LandingPage';
import GuidePage from '@pages/Guide/GuidePage';
import UserProfile from '@pages/User/UserProfile';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/UI-GTA/components/LoginPage';
import RegisterPage from '@pages/UI-GTA/components/RegisterPage';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/huong-dan" element={<GuidePage />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
