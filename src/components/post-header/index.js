import React from "react";
import "./index.scss";

const PostHeader = ({ data }) => {
  return (
    <div className="postHeader">
      <div className="h2 postTitle">{data.title}</div>
      <div className="postInfo">
        <div className="body-2 postDate">{data.date}</div>
        <div className="body-2 postAuthor">{data.author}</div>
      </div>
    </div>
  );
};
export default PostHeader;
