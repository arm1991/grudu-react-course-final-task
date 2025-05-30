import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default Router;
