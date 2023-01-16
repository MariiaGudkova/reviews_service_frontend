import "./ChangeProfilePopup.css";

function ChangeProfilePopup() {
  return (
    <div
      className="modal fade"
      id="profileModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg mt-5 mb-5">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title fs-4" id="exampleModalLabel">
              Изменить профайл
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div
            className="modal-body align-self-center"
            style={{ width: "80%" }}
          >
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control p-3 profile-input"
                  id="recipient-name"
                  placeholder="Имя"
                  autoComplete="current-name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control p-3 profile-input"
                  id="recipient-email"
                  placeholder="Email"
                  autoComplete="current-email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control p-3 profile-input"
                  id="recipient-password"
                  placeholder="Пароль"
                  autoComplete="current-password"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-color btn-sm btn-block p-3 save-button"
              style={{ width: "150px" }}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfilePopup;
