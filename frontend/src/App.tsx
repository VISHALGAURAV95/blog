import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';
import Blog from './Pages/Blog';
import CreateBlog from './Pages/CreateBlog';
import LandingPage from './Pages/Landing';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the token from local storage when the component mounts
    const storedToken = localStorage.getItem('token');
    console.log('Token retrieved:', storedToken);
    setToken(storedToken);
    setLoading(false); // Indicate that token loading is complete
  }, []);

  if (loading) {
    // You can render a loading spinner or similar while waiting for the token
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/create-blog"
          element={token ? <CreateBlog /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/blogs"
          element={token ? <Blog /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/blogs/:id"
          element={token ? <Blog /> : <Navigate to="/signin" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
