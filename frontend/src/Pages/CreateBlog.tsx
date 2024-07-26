// CreateBlog.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeContext';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Adjust as needed
      await axios.post(
        'https://backend.gvvishal95.workers.dev/api/v1/blog',
        { title, content },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setSuccess('Blog created successfully!');
      setTitle('');
      setContent('');
    } catch (error: any) {
      setError(error.response?.data.message || 'An error occurred while creating the blog.');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Navbar />
      
      <div className={`max-w-2xl mt-20 mb-12 mx-auto p-6 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-lg shadow-sm px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'border-gray-300'}`}
              placeholder="Enter the title of your blog"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className={`block text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className={`w-full border rounded-lg shadow-sm px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'border-gray-300'}`}
              placeholder="Write your blog content here..."
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          <button
            type="submit"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm ${isDarkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Publish Blog
          </button>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateBlog;
