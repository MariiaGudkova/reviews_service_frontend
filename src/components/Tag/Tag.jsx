import "./Tag.css";

function Tag(props) {
  const { info } = props;
  return (
    <span className="badge rounded-pill text-dark main-tag me-2 mb-2">
      {info}
    </span>
  );
}

export default Tag;
