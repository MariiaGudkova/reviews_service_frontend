import "./CardList.css";
import Card from "../Card/Card";

function CardList(props) {
  const { reviews, isNew } = props;
  return (
    <>
      <div className="container-card-list mb-5">
        {reviews.map((review) => {
          return <Card review={review} key={review.id} />;
        })}
      </div>
      <div
        className={
          !isNew
            ? "d-grid gap-2 cardlist-button-container"
            : "d-grid gap-2 cardlist-button-container cardlist-button-container-big-margin"
        }
      >
        <button className="btn cardlist-button" type="button">
          Еще
        </button>
      </div>
    </>
  );
}

export default CardList;
