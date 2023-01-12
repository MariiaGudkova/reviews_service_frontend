import "./Review.css";

function Review() {
  return (
    <div className="rating-wrapper">
      <input type="radio" id="5-star-rating" name="star-rating" value="5" />
      <label htmlFor="5-star-rating" className="star-rating">
        <i className="bi bi-star-fill d-inline-block fs-3"></i>
      </label>

      <input type="radio" id="4-star-rating" name="star-rating" value="4" />
      <label htmlFor="4-star-rating" className="star-rating star">
        <i className="bi bi-star-fill d-inline-block fs-3"></i>
      </label>

      <input type="radio" id="3-star-rating" name="star-rating" value="3" />
      <label htmlFor="3-star-rating" className="star-rating star">
        <i className="bi bi-star-fill d-inline-block fs-3"></i>
      </label>

      <input type="radio" id="2-star-rating" name="star-rating" value="2" />
      <label htmlFor="2-star-rating" className="star-rating star">
        <i className="bi bi-star-fill d-inline-block fs-3"></i>
      </label>

      <input type="radio" id="1-star-rating" name="star-rating" value="1" />
      <label htmlFor="1-star-rating" className="star-rating star">
        <i className="bi bi-star-fill d-inline-block fs-3"></i>
      </label>
    </div>
  );
}

export default Review;
