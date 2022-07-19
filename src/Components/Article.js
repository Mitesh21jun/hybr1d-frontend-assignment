import React, { Children } from "react";
import moment from "moment";

const Article = ({ article }) => {
  if (!Article) return null;

  return (
    <div className=" m-3">
      <div className="card-body border rounded">
        {article.title && <h5 className="card-title"><strong>{article?.title}</strong></h5>}

        <h6 className="card-text"><strong>{article.author}</strong></h6>

        {/* {article?.text.split(" ")} */}
        <div dangerouslySetInnerHTML={{ __html: article?.text }} />

        <div className="d-flex">
          <p className="card-text m-1">
            <i className="fa-solid fa-star text-warning"></i>
            {article?.points ? article?.points : 0}
          </p>
          <p className="card-text m-1">
            <i className="fa-solid fa-comments text-success"></i>
            {article?.children.length ? article?.children.length : 0}
          </p>
        </div>
        <div>
          {article.children &&
            article.children.map((child) => <Article article={child} />)}
        </div>
      </div>
    </div>
  );
};

export default Article;
