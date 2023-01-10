import React from "react";
import "./Header.css";
import headerLogo from "../../images/header_logo.png";

function Header() {
  return (
    <header className="header p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="header__logo d-flex align-items-center mb-2 me-lg-auto mb-lg-0 text-white text-decoration-none"
          >
            <img src={headerLogo} alt="logo" width="150px" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                ИГРЫ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                ФИЛЬМЫ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                СЕРИАЛЫ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                АНИМЕ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__nav-link nav-link px-2 me-2 text-white"
              >
                КНИГИ
              </a>
            </li>
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
            <button
              type="button"
              className="header__button btn btn-outline-light me-2"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
