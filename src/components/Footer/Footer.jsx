import { Link } from "react-router-dom";
import "./Footer.css";
import { routes } from "../../utils/routes";
import { socialLinks } from "../../utils/constants";

function Footer(props) {
  return (
    <footer className="footer p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex row justify-content-center">
          <div className="col-md-12 text-center mb-3">
            <div className="d-flex flex-row justify-content-center mb-4">
              <Link
                to={routes.games}
                className="footer__nav-link nav-link px-2 me-2 text-white"
              >
                ИГРЫ
              </Link>
              <Link
                to={routes.films}
                className="footer__nav-link nav-link px-2 me-2 text-white"
              >
                ФИЛЬМЫ
              </Link>
              <Link
                to={routes.serials}
                className="footer__nav-link nav-link px-2 me-2 text-white"
              >
                СЕРИАЛЫ
              </Link>
              <Link
                to={routes.anime}
                className="footer__nav-link nav-link px-2 me-2 text-white"
              >
                АНИМЕ
              </Link>
              <Link
                to={routes.books}
                className="footer__nav-link nav-link px-2 me-2 text-white"
              >
                КНИГИ
              </Link>
            </div>
            <ul className="d-flex justify-content-center ftco-footer-social p-0">
              <li className="ftco-animate">
                <a
                  className="text-white me-4"
                  href={socialLinks.twitter}
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Twitter"
                >
                  <i className="bi bi-twitter fs-4"></i>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  className="text-white me-4"
                  href={socialLinks.facebook}
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Facebook"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  className="text-white"
                  href={socialLinks.instagram}
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Instagram"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copyright">©2023 Megacritic. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
