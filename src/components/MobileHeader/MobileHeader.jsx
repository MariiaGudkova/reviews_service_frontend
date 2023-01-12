import React from "react";
import { Link } from "react-router-dom";
import "./MobileHeader.css";
import headerLogo from "../../images/header_logo.png";
import { routes } from "../../utils/routes";

function MobileHeader(props) {
  const { isLogged, isAdmin } = props;

  return (
    <header className="mobile-header p-3 bg-dark text-white mb-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex flew-row align-items-baseline">
            <button
              className="btn btn-outline-light text-white fs-2 mobile-header__burger"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-list"></i>
            </button>

            <div
              className="header__side-menu offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button
                  type="button"
                  className="mobile-header__burger-button btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Закрыть"
                ></button>
              </div>
              <div className="offcanvas-body d-flex flex-column justify-content-center">
                <ul className="nav nav-pills flex-column mb-auto fs-5">
                  <li className="mobile-header__nav-link nav-item mt-2 mb-2">
                    <Link
                      to={routes.games}
                      className="nav-link text-black"
                      aria-current="page"
                    >
                      Игры
                    </Link>
                  </li>
                  <li className="mobile-header__nav-link mb-2">
                    <Link to={routes.films} className="nav-link text-black">
                      Фильмы
                    </Link>
                  </li>
                  <li className="mobile-header__nav-link  mb-2">
                    <Link to={routes.serials} className="nav-link text-black">
                      Сериалы
                    </Link>
                  </li>
                  <li className="mobile-header__nav-link mb-2">
                    <Link to={routes.anime} className="nav-link text-black">
                      Аниме
                    </Link>
                  </li>
                  <li className="mobile-header__nav-link  mb-2">
                    <Link to={routes.books} className="nav-link text-black">
                      Книги
                    </Link>
                  </li>
                  {isAdmin ? (
                    <li className="mobile-header__nav-link mb-2">
                      <Link
                        to={routes.allUsers}
                        className="nav-link text-black"
                      >
                        Пользователи
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <button
                  type="button"
                  className="mobile-header__lang-button btn btn-outline-light dropdown-toggle text-black"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-globe me-1"></i>
                  RU
                </button>
                <ul className="dropdown-menu">
                  <li className="mobile-header__lang-dropdown-item dropdown-item">
                    RU
                  </li>
                  <li className="mobile-header__lang-dropdown-item dropdown-item">
                    EN
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to={routes.baseRoute}
              className="mobile-header__logo d-flex align-items-center mb-2 me-lg-auto mb-lg-0 text-white text-decoration-none"
            >
              <img src={headerLogo} className="mobile-header__img" alt="logo" />
            </Link>
          </div>
          <div className="d-flex flew-row align-items-center">
            <button
              type="button"
              className="btn text-white fs-5 mobile-header__button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <i className="bi bi-search"></i>
            </button>
            <div
              className="offcanvas offcanvas-top mobile-header__search"
              tabIndex="-1"
              id="offcanvasTop"
              aria-labelledby="offcanvasTopLabel"
            >
              <div className="offcanvas-header header__form-container">
                <form
                  className="header__form col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 w-75"
                  id="offcanvasTopLabel"
                >
                  <div className="input-group">
                    <span
                      className="header__search-logo input-group-text"
                      id="basic-addon1"
                    >
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="header__search form-control form-control-dark"
                      placeholder="Поиск игры, аниме..."
                      aria-label="Input group example"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </form>

                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="text-end">
              {!isLogged ? (
                <button
                  type="button"
                  className="btn text-white fs-5 fs-5-mob mobile-header__button"
                >
                  Войти
                </button>
              ) : (
                <button
                  type="button"
                  className="mobile-header__button btn text-white fs-5"
                >
                  <i className="bi bi-person-fill me-1"></i>
                  Профиль
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
