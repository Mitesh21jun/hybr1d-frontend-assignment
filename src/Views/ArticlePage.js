import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePage = (props) => {
  const { state } = useLocation();
    const { id } = state;
    
  return <div>{id}</div>;
};

export default ArticlePage;
