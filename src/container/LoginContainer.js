import { React, useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationContainer from "./RegistrationContainer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState({
    isDisplayed: false,
    message: "",
    type: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert({
          isDisplayed: false,
          message: "",
          type: "",
        });
      }, 7000);
    }
  }, [showAlert]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    try {
      const isValidLogin =
        email.length <= 0 || password.length <= 0
          ? setAlertMessage("Please fill in all data!", "warning")
          : true;

      if (isValidLogin) {
        //Test user login error remove if already functional
        if (email === "error") {
          throw new Error("Invalid user!");
        }

        //execute api login here
        //await Login(username, password)
        //If successfull alert and redirect
        setAlertMessage(`Login for user ${email} success!`, "success");
      }
    } catch (err) {
      setAlertMessage(err.message, "alert-error");
    } finally {
      setFormData({ email: "", password: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setAlertMessage = (message, type) => {
    setShowAlert({
      isDisplayed: true,
      message: message,
      type: `alert-${type}`,
    });
  };

  const redirecRegistrationForm = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <LoginForm
        onSubmit={handleLoginSubmit}
        onChange={handleInputChange}
        formData={formData}
        showAlert={showAlert}
        redirecRegistrationForm={redirecRegistrationForm}
      />

      <RegistrationContainer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Login;
