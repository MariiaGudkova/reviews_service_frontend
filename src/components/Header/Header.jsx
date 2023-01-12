import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../images/header_logo.png";
import { routes } from "../../utils/routes";

function Header(props) {
  const { isLogged, isAdmin } = props;

  return (
    <header className="header p-3 bg-dark text-white mb-5">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={routes.baseRoute}
            className="header__logo d-flex align-items-center mb-2 me-lg-auto mb-lg-0 text-white text-decoration-none"
          >
            <img src={headerLogo} alt="logo" width="150px" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to={routes.games}
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                ИГРЫ
              </Link>
            </li>
            <li>
              <Link
                to={routes.films}
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                ФИЛЬМЫ
              </Link>
            </li>
            <li>
              <Link
                to={routes.serials}
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                СЕРИАЛЫ
              </Link>
            </li>
            <li>
              <Link
                to={routes.anime}
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                АНИМЕ
              </Link>
            </li>
            <li>
              <Link
                to={routes.books}
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                КНИГИ
              </Link>
            </li>
            {isAdmin ? (
              <li>
                <Link
                  to={routes.allUsers}
                  className="header__nav-link nav-link px-2 me-2 text-white"
                >
                  ПОЛЬЗОВАТЕЛИ
                </Link>
              </li>
            ) : null}
          </ul>

          <form className="header__form col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="input-group w-100">
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

          <div className="text-end">
            {!isLogged ? (
              <button
                type="button"
                className="header__button btn btn-outline-light me-2"
              >
                Войти
              </button>
            ) : (
              <button
                type="button"
                className="header__button btn btn-outline-light me-2"
              >
                <i className="bi bi-person-fill me-1"></i>
                Профиль
              </button>
            )}
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="header__lang-button btn btn-outline-light dropdown-toggle text-white"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-globe me-1"></i>
              RU
            </button>
            <ul className="header__lang-dropdown-menu dropdown-menu dropdown-menu-dark">
              <li className="header__lang-dropdown-item dropdown-item">RU</li>
              <li className="header__lang-dropdown-item dropdown-item">EN</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
