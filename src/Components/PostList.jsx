import React from "react";
import ButtonLike from "./ButtonLike";
import { Link } from "react-router-dom";

const PostList = ({ posts, generictitle }) => {
  return (
    <>
      <div className="font-sansbold text-xl font-bold text-center mb-6 text-3xl ">
        <h2>{generictitle}</h2>
      </div>
      <div className="post-list grid grid-cols-3 max-[1200px]:grid-cols-2 max-[850px]:grid-cols-1 ">
        {posts.map((post) => (
          <div className="post-preview " key={post.id}>
            <div className=" p-8">
              <div className="bg-white shadow-lg p-8 rounded-lg  ">
                <Link to={"/posts/${post.id}"}>
                  <h2 className="font-sansbold text-xl font-bold  text-center mb-3">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-3 ">{post.body}</p>
                <h6 className="text-gray-600 text-sm">
                  Written by user n. {post.userId}
                </h6>
                <h5 className="text-gray-600 text-xs">{post.tags}, </h5>
                <h6 className="text-gray-600 text-sm ">
                  {post.reactions} reactions
                  <ButtonLike />
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
