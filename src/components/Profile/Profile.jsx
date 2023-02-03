import { Link } from "react-router-dom";
import "./Profile.css";
import CardList from "../CardList/CardList";
import { userReviews } from "../../utils/constants";
import ChangeProfilePopup from "../ChangeProfilePopup/ChangeProfilePopup";
import { routes } from "../../utils/routes";

function Profile() {
  const isProfile = true;
  return (
    <>
      <div className="row py-5 px-4 px-4-phone profile mb-5">
        <div className="col-md-8 mx-auto profile-container">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-5">
              <div className="media align-items-end profile-head profile-name">
                <div className="profile mr-3 d-flex flex-column align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="profile"
                    width="130"
                    className="rounded-circle mb-2 img-thumbnail profile-photo"
                  />
                  <div className="media-body text-center text-black">
                    <h4 className="mt-0 mb-3">Клавдия</h4>
                  </div>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-color btn-sm btn-block me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#profileModal"
                    >
                      Изменить
                    </button>
                    <Link
                      to={routes.createReview}
                      className="btn cardlist-button profile-button btn-sm btn-block"
                    >
                      Новый обзор
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center text-center">
              <ul className="bg-light p-4 rounded shadow-sm mb-3 list-inline mb-0">
                <li className="list-inline-item mr-4">
                  <h5 className="font-weight-bold mb-0 d-block">15</h5>
                  <small className="text-muted">
                    <i className="fas fa-image mr-1"></i>отзывов
                  </small>
                </li>
                <li className="list-inline-item mr-4">
                  <h5 className="font-weight-bold mb-0 d-block">20</h5>
                  <small className="text-muted">
                    <i className="fas fa-user mr-1"></i>комментариев
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">8</h5>
                  <small className="text-muted">
                    <i className="fas fa-user mr-1"></i>лайков
                  </small>
                </li>
              </ul>
            </div>
            <div className="reviews-container py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="mb-0">Мои обзоры</h3>
              </div>
              <CardList reviews={userReviews} isProfile={isProfile} />
            </div>
          </div>
        </div>
      </div>
      <ChangeProfilePopup />
    </>
  );
}

export default Profile;
