import "./CreateReviewForm.css";
import { routes } from "../../utils/routes";
import Tag from "../Tag/Tag";
import { tags, categories } from "../../utils/constants";

function CreateReviewForm() {
  return (
    <div className="container container-newreview">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Новый обзор</h2>
          <div className="card">
            <form
              className="newreview-form card-body cardbody-color p-lg-5"
              autoComplete="on"
            >
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Заголовок"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Название произведения"
                />
              </div>
              <div className="mb-4">
                <textarea
                  type="text"
                  className="form-control review"
                  id="review"
                  placeholder="Текст рецензии"
                />
              </div>
              <div className="input-group mb-4">
                <select
                  className="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  {categories.map((category, index) => {
                    return (
                      <option value={index} key={index}>
                        {category}
                      </option>
                    );
                  })}
                </select>
                <button className="btn btn-color" type="button">
                  Выбрать
                </button>
              </div>

              <div className="input-group w-100">
                <span
                  className="newreview__search-logo input-group-text"
                  id="basic-addon1"
                >
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="newreview__search form-control form-control-dark"
                  placeholder="Поиск тегов..."
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                />
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start tags-container mt-3 mb-4">
                  {tags.map((tag, index) => {
                    if (index < 7) {
                      return <Tag info={tag} key={index} />;
                    }
                  })}
                </div>
              </div>
              <div className="add-img">
                <p>Загрузите изображения</p>
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile05"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>
              </div>
              <div className="rating-container mb-4">
                <p className="mb-0">Оцените произведение</p>

                <div className="rating-wrapper">
                  <input
                    type="radio"
                    id="5-star-rating"
                    name="star-rating"
                    value="5"
                  />
                  <label htmlFor="5-star-rating" className="star-rating">
                    <i className="bi bi-star-fill d-inline-block fs-3"></i>
                  </label>

                  <input
                    type="radio"
                    id="4-star-rating"
                    name="star-rating"
                    value="4"
                  />
                  <label htmlFor="4-star-rating" className="star-rating star">
                    <i className="bi bi-star-fill d-inline-block fs-3"></i>
                  </label>

                  <input
                    type="radio"
                    id="3-star-rating"
                    name="star-rating"
                    value="3"
                  />
                  <label htmlFor="3-star-rating" className="star-rating star">
                    <i className="bi bi-star-fill d-inline-block fs-3"></i>
                  </label>

                  <input
                    type="radio"
                    id="2-star-rating"
                    name="star-rating"
                    value="2"
                  />
                  <label htmlFor="2-star-rating" className="star-rating star">
                    <i className="bi bi-star-fill d-inline-block fs-3"></i>
                  </label>

                  <input
                    type="radio"
                    id="1-star-rating"
                    name="star-rating"
                    value="1"
                  />
                  <label htmlFor="1-star-rating" className="star-rating star">
                    <i className="bi bi-star-fill d-inline-block fs-3"></i>
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Создать
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReviewForm;
