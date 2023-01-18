import "./Films.css";
import CardList from "../CardList/CardList";
import { popularReviews } from "../../utils/constants.js";

function Films() {
  const filmsReviews = popularReviews.filter((review) => {
    return review.category === "Фильмы";
  });

  return (
    <div className="films container">
      <CardList reviews={filmsReviews} />
    </div>
  );
}

export default Films;
