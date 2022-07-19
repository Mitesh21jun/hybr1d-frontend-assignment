import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Article from "../Components/Article"
import { get_post_by_id } from "../service/service";

const ArticlePage = (props) => {
  const { state } = useLocation();
  const { id } = state;

  const [article, setArticle] = useState(null);

  const getPostById = async (id) => {
    const response = await get_post_by_id({ id: id });
    return response.data;
  };

  useEffect(() => {
    getPostById(id).then((data) => {
      console.log(data)
      setArticle(data)
    })
  }, []);


  return <div>
    {article&&<Article article={article}/>}
  </div>;
};

export default ArticlePage;
