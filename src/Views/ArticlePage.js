import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Article from "../Components/Article"
import { get_post_by_id } from "../service/service";

const ArticlePage = (props) => {
  const { state } = useLocation();
  const { id } = state;

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPostById = async (id) => {
    setIsLoading(true);

try {
  const response = await get_post_by_id({ id: id });
  return response.data;
} catch (error) {
  console.log(error)
  alert("Something went wrong, Check the console for details");

} finally {
  setIsLoading(false);

  
}
  };

  useEffect(() => {
    getPostById(id).then((data) => {
      // console.log(data)
      setArticle(data)
    })
  }, []);


  return <div>
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
    
    {article&&<Article article={article}/>}
  </div>;
};

export default ArticlePage;
