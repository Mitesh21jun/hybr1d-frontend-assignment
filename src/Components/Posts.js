import React, { useState, useEffect } from "react";
import { search_post } from "../service/service";
import PostCard from "./PostCard"


const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async (query, page) => {
    try {
      const response = await search_post({ query: query, page: page });
      console.log(response)
      return response.data;
    } catch (error) {
      console.log(error);
      alert("Something went wrong, Check the console for details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(query, currentPage).then(({hits,nbPages}) => {
      setPosts(hits)
    })
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      ) : 
        posts && posts.map((post, index, array) => <PostCard post={post} key={post?.objectID}/>)
}
    </div>
  );
};

export default Posts;
