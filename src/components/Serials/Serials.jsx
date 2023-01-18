import "./Serials.css";
import CardList from "../CardList/CardList";
import { popularReviews } from "../../utils/constants.js";

function Serials() {
  const serialsReviews = popularReviews.filter((review) => {
    return review.category === "Сериалы";
  });

  return (
    <div className="serials container">
      <CardList reviews={serialsReviews} />
    </div>
  );
}

export default Serials;
