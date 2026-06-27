import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../../components/seo/SEO';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data.data || []);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title="Our Blog" 
        description="Read the latest articles, tips, and news about home maintenance and appliance care from Care Maintenance." 
      />
      
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-10 px-2 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Insights, tips, and expert advice to keep your home running smoothly.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">No blogs found</h3>
            <p className="text-gray-500 mt-2">Check back later for new articles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <article key={blog._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <Link to={`/blog/${blog.slug}`} className="block relative h-56 overflow-hidden">
                  <img 
                    src={blog.image || 'https://via.placeholder.com/600x400?text=Care+Maintenance'} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category || 'Article'}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    {blog.author && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author.name || 'Admin'}
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt || blog.content?.substring(0, 150) + '...'}
                  </p>
                  <Link 
                    to={`/blog/${blog.slug}`} 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
