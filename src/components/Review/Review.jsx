import { Link } from "react-router-dom";
import "./Review.css";
import { routes } from "../../utils/routes";

function Review(props) {
  const { review } = props;
  return (
    <div className="row py-5 px-4 px-4-phone review">
      <div className="col-md-8 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="d-flex flex-column justify-content-start m-4">
            <Link to={routes.baseRoute} className="review-nav mb-4 fs-3">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
            <div className="d-flex justify-content-baseline mb-2">
              <h1 className="review-title fs-2 me-2">{review.title}</h1>
              <span
                className="badge text-dark d-flex align-items-center"
                style={{ width: "66px" }}
              >
                <span className="fs-4">{review.averageValue}/</span>
                <span className="fs-6">5</span>
              </span>
            </div>
            <div className="review-about d-flex align-items-baseline">
              <div className="review-author">
                <Link to={routes.profile} className="review-link me-2">
                  <img
                    src="https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="profile"
                    width="60"
                    className="rounded-circle mb-2 img-thumbnail review-photo me-2"
                  />
                  {review.author}
                </Link>
              </div>
              <p className="me-2">{review.date}</p>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {review.secondCover ? (
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
            ) : null}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={review.cover}
                  className="d-block w-100"
                  alt={review.title}
                />
              </div>
              {review.secondCover ? (
                <div className="carousel-item">
                  <img
                    src={review.secondCover}
                    className="d-block w-100"
                    alt={review.title}
                  />
                </div>
              ) : null}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
          {/* <div className="rating-wrapper m-4">
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
          </div> */}
          <div
            className="review-description m-4"
            style={{ whiteSpace: "pre-line" }}
          >
            Всем, кто охотится за необычными и оригинальными сюжетами,
            посвящается! Фантастический сериал 'Разделение' от режиссёра Бена
            Стиллера в первую очередь впечатляет своей идеей о разделении личной
            жизни от рабочих будней. Что, если была бы возможность не тащить на
            работу семейные проблемы, а вечером не приносить домой собранный на
            работе негатив? Что было бы, если на работе завести любовную
            интрижку, а потом возвращаться домой без угрызения совести, ведь
            никто ничего не помнит? Ты можешь люто ненавидеть своего соседа из
            дома напротив, а на работе называть лучшим другом, ведь работа и
            жизнь никак не пересекаются. Как оказалось, с подобной концепцией
            можно придумать огромное количество ситуаций, способных как
            повеселить, так и повергнуть в шок в разных жанровых направлениях. И
            авторы сериала 'Разделение' пошли по стопам неспешного
            остросюжетного триллера с опасными тайнами и нагнетающей атмосферой.
            {"\n"}
            {"\n"}
            Главный герой в жизни переживает сильную личную драму, а на работе
            как ни в чем не бывало активничает, улыбается и продвигается по
            службе. Он помогает новым сотрудникам обустроиться, а вечером после
            работы проходит мимо, не обращая на них никакого внимания. Он
            одинокий и несчастный человек дома, которого все жалеют, а на работе
            - веселый недотепа, которого одни уважают, а другие посмеиваются за
            спиной. И все бы ничего, но однажды происходит нечто, что заставляет
            героя задуматься о том, что он делает на работе, чем занимается его
            компания, и почему такая строгая конфиденциальность? На эти и другие
            вопросы ему предстоит ответить на протяжении последующих серий, не
            предполагая масштаб ужасающих последствий ненужного вмешательства.
            {"\n"}
            {"\n"}
            Помимо интригующего сюжета любопытна и сама постановка с
            определённым авторским подходом и стильной визуализацией, которая
            строго разграничивает два разных мира. Пока сложно сказать, как
            будут развиваться дальнейшие события, но по первым сериям
            зрительским интерес огромный, так как нет никаких догадок и
            предположений по финальной развязке.
            {"\n"}
            {"\n"}В общем, если вы искали что-то по-настоящему новое, начиная от
            сюжета и заканчивая картинкой, то приятного просмотра.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
