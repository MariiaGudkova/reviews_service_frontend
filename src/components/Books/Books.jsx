import "./Books.css";
import CardList from "../CardList/CardList";
import { popularReviews } from "../../utils/constants.js";

function Books() {
  const booksReviews = popularReviews.filter((review) => {
    return review.category === "Книги";
  });

  return (
    <div className="books container">
      <CardList reviews={booksReviews} />
    </div>
  );
}

export default Books;
