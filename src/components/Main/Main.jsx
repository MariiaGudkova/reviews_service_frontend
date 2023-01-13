import "./Main.css";
import { tags, popularReviews, newReviews } from "../../utils/constants";
import Tag from "../Tag/Tag";
import CardList from "../CardList/CardList";

function Main() {
  const isNew = true;
  return (
    <main className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start tags-container">
        {tags.map((tag, index) => {
          return <Tag info={tag} key={index} />;
        })}
      </div>
      <h1 className="fs-2 fw-weight-bold mb-4 main-title">Популярное</h1>
      <CardList reviews={popularReviews} />
      <h2 className="fs-2 fw-weight-bold mb-4 main-title">Новое</h2>
      <CardList reviews={newReviews} isNew={isNew} />
    </main>
  );
}

export default Main;
