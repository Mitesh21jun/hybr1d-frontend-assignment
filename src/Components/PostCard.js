import React from "react";
import moment from "moment";
const PostCard = ({ post }) => {
  if (!post || !post.title) return null;

  return (
    <div className="card m-3 border-dark">
      <div className="card-body">
        <h5 className="card-title">{post?.title}</h5>
        <p class="text-muted">- {post?.author}</p>
        <div className="d-flex">
          <p className="card-text m-1">
            <i className="fa-solid fa-star"></i>
             {post?.points}
          </p>
          <p className="card-text m-1">
            <i class="fa-solid fa-comments"></i>
             {post?.num_comments}
          </p>
        </div>
        <div class="text-muted">
          {moment(post?.created_at).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
