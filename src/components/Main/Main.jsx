import "./Main.css";
import { tags } from "../../utils/constants";
import Tag from "../Tag/Tag";
import CardList from "../CardList/CardList";

function Main() {
  return (
    <main className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start tags-container">
        {tags.map((tag, index) => {
          return <Tag info={tag} key={index} />;
        })}
      </div>
      <h1 className="fs-2 fw-weight-bold mb-4 main-title">Популярное</h1>
      <CardList />
    </main>
  );
}

export default Main;
