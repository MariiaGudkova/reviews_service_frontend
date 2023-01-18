import "./Anime.css";
import CardList from "../CardList/CardList";
import { popularReviews } from "../../utils/constants.js";

function Anime() {
  const animeReviews = popularReviews.filter((review) => {
    return review.category === "Аниме";
  });

  return (
    <div className="anime container">
      <CardList reviews={animeReviews} />
    </div>
  );
}

export default Anime;
