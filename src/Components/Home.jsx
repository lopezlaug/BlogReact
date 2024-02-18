import React from "react";
import { useState, useEffect } from "react";
import PostList from "./PostList";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="home mt-10">
      {posts && <PostList posts={posts} generictitle="all posts!!" />}
    </div>
  );
};

export default Home;
