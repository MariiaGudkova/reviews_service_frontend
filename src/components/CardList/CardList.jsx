import "./CardList.css";
import { popularReviews } from "../../utils/constants.js";
import Card from "../Card/Card";

function CardList() {
  return (
    <div className="container-card-list">
      {popularReviews.map((review) => {
        return <Card review={review} key={review.id} />;
      })}
    </div>
  );
}

export default CardList;
