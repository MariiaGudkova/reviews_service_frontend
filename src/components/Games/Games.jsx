import "./Games.css";
import CardList from "../CardList/CardList";
import { popularReviews } from "../../utils/constants.js";

function Games() {
  const gamesReviews = popularReviews.filter((review) => {
    return review.category === "Игры";
  });

  return (
    <div className="games container">
      <CardList reviews={gamesReviews} />
    </div>
  );
}

export default Games;
