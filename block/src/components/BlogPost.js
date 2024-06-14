import React, { useState } from 'react';

const BlogPost = ({ post }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="blog-image" />
      <div className="blog-text">
        <h2>{post.title}</h2>
        <p className="blog-meta">By {post.author} | {post.date}</p>
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <button onClick={handleLike}>Like ({likes})</button>
      </div>
    </div>
  );
};

export default BlogPost;
