import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/axios';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import SEO from '../../components/seo/SEO';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${slug}`);
        setBlog(res.data.data);
      } catch (err) {
        console.error('Failed to fetch blog post', err);
        setError('Blog post not found or an error occurred.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-8">{error || "The article you're looking for doesn't exist."}</p>
          <Link to="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = blog.content ? blog.content.split(/\s+/).length : 0;
  const readTime = Math.ceil(wordCount / 200) || 1;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title={blog.metaTitle || blog.title} 
        description={blog.metaDescription || blog.excerpt || blog.content?.substring(0, 160)} 
        image={blog.featuredImage ? `${api.defaults.baseURL.replace('/api', '')}${blog.featuredImage}` : undefined}
        type="article"
      />

      {/* Hero Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
              {blog.category || 'Article'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-500 gap-6 border-b border-gray-200 pb-8">
            {blog.author && (
              <div className="flex items-center font-medium text-gray-900">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <User className="w-5 h-5" />
                </div>
                {blog.author.name || 'Admin'}
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {readTime} min read
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={`${api.defaults.baseURL.replace('/api', '')}${blog.featuredImage}`} 
              alt={blog.imageAlt || blog.title} 
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <article 
          className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
