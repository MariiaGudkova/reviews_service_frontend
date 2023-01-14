import { Link } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../images/google-plus.png";
import facebookIcon from "../../images/facebook.png";
import { routes } from "../../utils/routes";

function Login() {
  return (
    <div className="container container-login">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Рады видеть!</h2>
          <div className="card my-5">
            <form
              className="login-form card-body cardbody-color p-lg-5"
              autoComplete="on"
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="login-email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  autoComplete="current-email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  placeholder="Пароль"
                  autoComplete="current-password"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Войти
                </button>
              </div>
              <div className="form-text text-center mb-2 text-dark">
                Войти с помощью
              </div>
              <div className="d-flex justify-content-center social-login mb-5">
                <a href="#" className="social facebook me-2">
                  <img src={facebookIcon} alt="Facebook" width="40px" />
                </a>
                <a href="#" className="social google">
                  <img src={googleIcon} alt="Google" width="40px" />
                </a>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-3 text-dark"
              >
                Еще не зарегистрированы?{" "}
                <Link to={routes.signUp} className="text-dark fw-bold registr">
                  Регистрация
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
