import React from 'react';
import Post from './Post';

const Posts = ({posts, tags}) => (
  <div
    className="w-full hidden laptop:flex space-x-8 max-w-container m-container p-container py-12 bg-dark-black-100">
    { posts.map(post => <Post data={ post } key={ post.id }/>) }
  </div>
);

export default Posts;
