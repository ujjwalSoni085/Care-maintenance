import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminBlogCreateEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const quillRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    canonicalUrl: '',
    robots: 'index, follow',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    category: '',
    imageAlt: '',
    isPublished: false,
  });
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [loading, setLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      const fetchBlog = async () => {
        try {
          const token = localStorage.getItem('care_maintenance_token');
          const res = await axios.get(`http://localhost:5000/api/blogs/admin/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const blog = res.data.data;
          setFormData({
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt || '',
            metaTitle: blog.metaTitle || '',
            metaDescription: blog.metaDescription || '',
            metaKeywords: blog.metaKeywords || '',
            canonicalUrl: blog.canonicalUrl || '',
            robots: blog.robots || 'index, follow',
            ogTitle: blog.ogTitle || '',
            ogDescription: blog.ogDescription || '',
            ogImage: blog.ogImage || '',
            twitterTitle: blog.twitterTitle || '',
            twitterDescription: blog.twitterDescription || '',
            twitterImage: blog.twitterImage || '',
            category: blog.category || '',
            imageAlt: blog.imageAlt || '',
            isPublished: blog.isPublished,
          });
          setContent(blog.content);
          setFeaturedImage(blog.featuredImage || '');
        } catch (error) {
          toast.error('Failed to load blog data');
          navigate('/admin/blogs');
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id, isEditMode, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const token = localStorage.getItem('care_maintenance_token');
      const res = await axios.post('http://localhost:5000/api/upload', uploadData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setFeaturedImage(res.data.url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload image');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.slug || !content) {
      return toast.error('Title, Slug, and Content are required.');
    }

    const payload = {
      ...formData,
      content,
      featuredImage
    };

    try {
      const token = localStorage.getItem('care_maintenance_token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/blogs/admin/${id}`, payload, config);
        toast.success('Blog updated successfully');
      } else {
        await axios.post('http://localhost:5000/api/blogs/admin/create', payload, config);
        toast.success('Blog created successfully');
      }
      navigate('/admin/blogs');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save blog');
    }
  };

  // Auto-generate slug from title if slug is empty
  const handleTitleBlur = () => {
    if (!formData.slug && formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  // Custom Image Handler for React-Quill
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const uploadData = new FormData();
      uploadData.append('image', file);

      try {
        const token = localStorage.getItem('care_maintenance_token');
        const res = await axios.post('http://localhost:5000/api/upload', uploadData, {
          headers: { 
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });
        
        const url = `http://localhost:5000${res.data.url}`;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', url);
      } catch (error) {
        toast.error('Image upload failed');
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
      <h1 className="text-3xl font-bold mb-8">{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              onBlur={handleTitleBlur}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Technology, Health"
          />
        </div>

        {/* Featured Image Upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {featuredImage && (
                <img src={`http://localhost:5000${featuredImage}`} alt="Cover" className="h-16 w-16 object-cover rounded" />
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image Alt Text</label>
            <input
              type="text"
              name="imageAlt"
              value={formData.imageAlt}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the image for SEO"
            />
          </div>
        </div>

        {/* SEO Meta Data */}
        <div className="bg-gray-50 p-4 rounded-md border space-y-6">
          <h3 className="font-semibold text-gray-800 text-lg border-b pb-2">Primary SEO Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
              <input
                type="text"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Comma separated"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              rows="2"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
              <input
                type="text"
                name="canonicalUrl"
                value={formData.canonicalUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Robots</label>
              <input
                type="text"
                name="robots"
                value={formData.robots}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="index, follow"
              />
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 text-lg border-b pb-2 pt-4">Social Media Settings (Open Graph)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
              <input
                type="text"
                name="ogTitle"
                value={formData.ogTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
              <input
                type="text"
                name="ogImage"
                value={formData.ogImage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
            <textarea
              name="ogDescription"
              value={formData.ogDescription}
              onChange={handleInputChange}
              rows="2"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <h3 className="font-semibold text-gray-800 text-lg border-b pb-2 pt-4">Twitter Card Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Title</label>
              <input
                type="text"
                name="twitterTitle"
                value={formData.twitterTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Image URL</label>
              <input
                type="text"
                name="twitterImage"
                value={formData.twitterImage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Twitter Description</label>
            <textarea
              name="twitterDescription"
              value={formData.twitterDescription}
              onChange={handleInputChange}
              rows="2"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
          <div className="bg-white" style={{ minHeight: '300px' }}>
            <ReactQuill 
              ref={quillRef}
              theme="snow" 
              value={content} 
              onChange={setContent} 
              modules={modules}
              style={{ height: '300px', marginBottom: '50px' }}
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center pt-8">
          <input
            type="checkbox"
            name="isPublished"
            id="isPublished"
            checked={formData.isPublished}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-900">
            Publish this blog post
          </label>
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-4 border-t pt-6">
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
          >
            {isEditMode ? 'Update Blog' : 'Create Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogCreateEdit;
