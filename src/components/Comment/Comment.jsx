import "./Comment.css";

function Comment(props) {
  const { comment } = props;
  return (
    <div className="commented-section mt-2 p-1 mb-4 rounded">
      <div className="d-flex flex-row align-items-baseline commented-user">
        <p className="me-2 comment-author">{comment.author}</p>
        <p className="mb-1 ml-2 review__about">{comment.date}</p>
      </div>
      <div className="comment-text-sm">
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;
