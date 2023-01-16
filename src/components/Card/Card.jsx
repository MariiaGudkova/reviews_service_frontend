import "./Card.css";

function Card(props) {
  const { review, isProfile } = props;
  return (
    <div className="card text-white">
      <img src={review.cover} className="card-img" alt={review.title} />
      <div className="card-img-overlay d-flex flex-column align-items-start justify-content-end">
        {isProfile ? (
          <div className="container d-flex align-items-baseline justify-content-between align-self-start profile-buttons">
            <button type="button" className="icon-button">
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button type="button" className="icon-button">
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        ) : null}
        <div className="container d-flex align-items-center justify-content-start mb-2">
          <h5
            className="card-title fs-4 fw-weight-bold me-2 text-truncate"
            style={{ maXwidth: "170px", width: "170px" }}
          >
            {review.title}
          </h5>
          <span
            className="badge text-dark d-flex align-items-baseline justify-content-center"
            style={{ width: "66px" }}
          >
            <span className="fs-4">{review.averageValue}/</span>
            <span className="fs-6">5</span>
          </span>
        </div>
        <div className="container d-flex align-items-baseline justify-content-start card-author">
          <p
            className="card-text me-3 text-truncate"
            style={{ maXwidth: "85px", width: "85px" }}
          >
            {review.author}
          </p>
          <span className="me-3">
            <i className="bi bi-hand-thumbs-up-fill me-1"></i>
            {review.likes}
          </span>
          <span className="me-3">
            <i className="bi bi-hand-thumbs-down-fill me-1"></i>
            {review.dislikes}
          </span>
          <span>
            <i className="bi bi-eye-fill me-1"></i>
            {review.views}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
