import "./Star.css";

function Star(props) {
  const { review } = props;
  const starsElement = [...Array(5).keys()].map((el, i) => {
    const starClassActive = "rating-star_active";
    let className = "bi bi-star-fill d-inline-block fs-3 rating-star me-2";
    if (review.stars > i) {
      className += " " + starClassActive;
    }
    return <i className={className} key={i}></i>;
  });
  return starsElement;
}

export default Star;
