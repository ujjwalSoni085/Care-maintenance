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
    isPublished: false,
  });
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
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
            isPublished: blog.isPublished,
          });
          setContent(blog.content);
          setCoverImage(blog.coverImage || '');
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
      setCoverImage(res.data.url);
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
      coverImage
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

        {/* Cover Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {coverImage && (
              <img src={`http://localhost:5000${coverImage}`} alt="Cover" className="h-16 w-16 object-cover rounded" />
            )}
          </div>
        </div>

        {/* SEO Meta Data */}
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="font-semibold text-gray-800 mb-4">SEO Settings</h3>
          <div className="space-y-4">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
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
