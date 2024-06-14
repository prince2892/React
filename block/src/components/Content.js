import React from 'react';
import BlogPost from './BlogPost';
import blogData from '../blogData.json';
import '../App.css';

const Content = () => {
  return (
    <div className="content">
      {blogData.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};

export default Content;
