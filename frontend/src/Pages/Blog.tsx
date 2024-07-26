// Blog.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BACKEND_URL } from "../config";
import Navbar from '../components/Navbar';
import { useTheme } from '../components/ThemeContext';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

const Blog: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBlog(response.data.blog);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message || "Failed to fetch blog");
        } else {
          setError("Unexpected error occurred");
        }
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBlogs(response.data.blogs);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message || "Failed to fetch blogs");
        } else {
          setError("Unexpected error occurred");
        }
      }
    };

    if (id) {
      fetchBlog();
    } else {
      fetchBlogs();
    }
  }, [id]);

  if (error) return <div className="p-4 bg-red-100 text-red-600 rounded-md">{error}</div>;
  if (id && !blog) return <div className="p-4 text-gray-500">Loading...</div>;
  if (!id && blogs.length === 0) return <div className="p-4 text-gray-500">Loading...</div>;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Navbar />
      <div className={`max-w-4xl mt-10 mx-auto p-6 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
        {id ? (
          <div className={` shadow-lg rounded-lg p-6 mb-8 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
            <h1 className="text-4xl font-bold mb-4">{blog?.title}</h1>
            <p className="text-lg mb-4">{blog?.content}</p>
            <p className="text-sm">
              <strong>Author:</strong> {blog?.author.name}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
            {blogs.map(blog => (
              <Link key={blog.id} to={`/blogs/${blog.id}`} className={`block shadow-md rounded-lg p-6 mb-6 hover:bg-gray-100 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100 hover:bg-gray-800' : 'bg-white text-gray-800'}`}>
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-base mb-2">{blog.content}</p>
                <p className="text-sm">
                  <strong>Author:</strong> {blog.author.name}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
