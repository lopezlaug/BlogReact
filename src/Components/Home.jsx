import React from "react";
import { useState } from "react";
import PostList from "./PostList";

const Home = () => {
  const [posts, setPosts] = useState([
    { title: "apojekpao", body: "jpaojfepo", tags: "er9u9" },
    { title: "apojekpao", body: "jpaojfepo", tags: "er9u9" },
    { title: "apojekpao", body: "jpaojfepo", tags: "er9u9" },
  ]);

  return (
    <div className="home">
      <PostList posts={posts} generictitle="all posts!!" />
    </div>
  );
};

export default Home;
