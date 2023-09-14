import React from "react";
import Alert from "./common/Alert";
import "../styles/RegistrationForm.css";

const RegistrationForm = ({
  isModalOpen = false,
  onChange,
  onSubmit,
  alertData,
  closeModal,
  formData,
}) => {
  return (
    isModalOpen && (
      <div>
        <div className="registration-modal">
          <div onClick={closeModal} className="overlay"></div>
          <div className="modal-box">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="modal-header">
                <h3 className="modal-header font-bold text-lg">
                  Registration Form
                </h3>
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={closeModal}
                >
                  x
                </button>
              </div>
              <div className="card-body">
                <div className="form-control w-full max-w-xs">
                  <Alert
                    message={alertData.message}
                    type={alertData.type}
                    isDisplayed={alertData.isDisplayed}
                  />
                  <form onSubmit={onSubmit}>
                    <div className="form-control">
                      <label className="label" htmlFor="name">
                        <span className="label-text">Name:</span>
                      </label>
                      <div>
                        <input
                          className="input input-bordered w-full"
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label" htmlFor="email">
                        <span className="label-text">Email:</span>
                      </label>
                      <div>
                        <input
                          className="input input-bordered w-full"
                          id="email"
                          name="email"
                          type="text"
                          value={formData.email}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label" htmlFor="password">
                        <span className="label-text">Password:</span>
                      </label>
                      <div>
                        <input
                          className="input input-bordered w-full"
                          id="password"
                          name="password"
                          type="text"
                          value={formData.password}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RegistrationForm;
