import React from "react";
import moment from "moment";
import { useNavigate,Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  if (!post) return null;

  return (
    <div style={{cursor:'pointer'}}
      onClick={() => {
              navigate(`/article/${post.objectID}`,{state:{id:post.objectID}});
            //   <Link to={`/article/${post.objectID}`} />

      }}
      className="card m-3 border-dark rounded-3"
    >
      <div className="card-body">
        <h5 className={`card-title ${!post?.title ? "text-muted" : ""}`}>
          {post?.title ? post?.title : "Title missing"}
        </h5>
        <p className="text-muted">- {post?.author}</p>
        <div className="d-flex">
          <p className="card-text m-1">
            <i className="fa-solid fa-star text-warning"></i>
            {post?.points ? post?.points : 0}
          </p>
          <p className="card-text m-1">
            <i className="fa-solid fa-comments text-success"></i>
            {post?.num_comments ? post?.num_comments : 0}
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
