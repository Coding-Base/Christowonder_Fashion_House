import React, { useEffect, useState } from 'react';
import "./BlogList.css"
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="blog-list">
      <h2>Blogs And Updates</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
         
          <p><strong>Author:</strong> {blog.author}</p>
          <p>{blog.content.substring(0, 1000)}...</p>
          
          {blog.image && <img src={blog.image} alt={blog.title} />}
          <p><strong>Published:</strong> {new Date(blog.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

