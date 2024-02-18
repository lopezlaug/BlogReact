import React from "react";

const PostList = ({ posts, generictitle }) => {
  return (
    <div className="post-list">
      <h2>{generictitle}</h2>
      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
