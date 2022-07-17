import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { search_post } from "../service/service";
import PostCard from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePagination = (e) => {
    setCurrentPage(e.selected);
  };

  const handleSearch = () => {
    setCurrentPage(0);
    setQuery(searchText);
  };

  const fetchPosts = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await search_post({ query: query, page: page });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      alert("Something went wrong, Check the console for details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(query, currentPage)
      .then(({ hits, nbPages }) => {
        setPosts(hits);
        setTotalPages(nbPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, currentPage]);

  return (
    <div className="container p-3">
      {isLoading && (
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
      )}

      <div className="d-flex p-1">
        <input
          className="form-control"
          placeholder="Search"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          name=""
          id=""
        />
        <button onClick={handleSearch} className="btn btn-primary mx-2">
          Search
        </button>
      </div>

      {posts &&
        posts.map((post, index, array) => (
          <PostCard post={post} key={post?.objectID} />
        ))}

      <div className="d-flex justify-content-center">
        {" "}
        <ReactPaginate
          nextLabel="Next"
          previousLabel="Prev"
          breakLabel="..."
          forcePage={currentPage}
          pageCount={totalPage}
          renderOnZeroPageCount={null}
          onPageChange={handlePagination}
          className="pagination"
          activeClassName="page-item active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </div>
    </div>
  );
};

export default Posts;
