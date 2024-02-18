import React from "react";
import ButtonLike from "./ButtonLike";

const PostList = ({ posts, generictitle }) => {
  return (
    <div className="post-list ">
      <div className="text-xl font-bold text-center mb-10">
        <h2>{generictitle}</h2>
      </div>

      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <div className=" p-8">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <h6>Written by user n. {post.userId}</h6>
            <h5 className="mx-10">{post.tags}, </h5>
            <h6>
              {post.reactions} reactions
              <ButtonLike />
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
