import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import WatchVideo from './pages/WatchVideo';
import Blog from './pages/Blog';
import Demo from './pages/Demo';

export default function AppRouter() {
  return (
    
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watch-video" element={<WatchVideo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/demo" element={<Demo />} />
        </Route>
      </Routes>
    
  );
}