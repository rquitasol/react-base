import { React, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationContainer from "./RegistrationContainer";
import useAlert from "../hooks/useAlert";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, closeAlert, alertData] = useAlert();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    try {
      const isValidLogin =
        email.length <= 0 || password.length <= 0
          ? showAlert("Please fill in all data!", "warning")
          : true;

      if (isValidLogin) {
        //Test user login error remove if already functional
        if (email === "error") {
          throw new Error("Invalid user!");
        }

        //execute api login here
        //await Login(username, password)
        //If successfull alert and redirect
        showAlert(`Login for user ${email} success!`, "success");
      }
    } catch (err) {
      showAlert(err.message, "error");
    } finally {
      setFormData({ email: "", password: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        alertData={alertData}
        closeAlert={closeAlert}
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
