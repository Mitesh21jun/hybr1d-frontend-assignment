import React from "react";
import moment from "moment";
const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="card m-3 border-dark">
      <div className="card-body">
        <h5 className={`card-title ${!post?.title?"text-muted":""}`}>{post?.title?post?.title:"Title missing"}</h5>
        <p className="text-muted">- {post?.author}</p>
        <div className="d-flex">
          <p className="card-text m-1">
            <i className="fa-solid fa-star"></i>
             {post?.points?post?.points:0}
          </p>
          <p className="card-text m-1">
            <i className="fa-solid fa-comments"></i>
             {post?.num_comments?post?.num_comments:0}
          </p>
        </div>
        <div className="text-muted">
          {moment(post?.created_at).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
