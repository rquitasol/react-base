import React from "react";
import Alert from "./common/Alert";

const LoginForm = ({
  onSubmit,
  onChange,
  formData,
  showAlert,
  redirecRegistrationForm,
}) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      {showAlert.isDisplayed && (
        <Alert message={showAlert?.message} type={showAlert?.type} />
      )}
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="email"
              value={formData.email}
              onChange={onChange}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="password"
              value={formData.password}
              onChange={onChange}
              className="input input-bordered"
            />
            <label className="label">
              <p
                onClick={redirecRegistrationForm}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <label className="label">
            <p className="label-text">Dont have an account?</p>
            <p onClick={redirecRegistrationForm} className="link link-primary">
              <b>Sign up!</b>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
