import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import useAlert from "../hooks/useAlert";

const RegistrationContainer = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAlert, hideAlert, alertData] = useAlert();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (isValidEmailAndPassword()) {
      try {
        //execute api registration here
        //await register(name, email, password)
        //If successfull alert and redirect
        showAlert(`Registration for user ${formData.name} success!`, "success");

        setTimeout(() => {
          closeModal();
        }, 5000);
      } catch (err) {
        showAlert(err.mesage, "error");
      } finally {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isValidEmailAndPassword = () => {
    const name = formData?.name;
    const email = formData?.email;
    const password = formData?.password;

    if (name.length <= 0 || email.length <= 0 || password.length <= 0) {
      showAlert("Please fill in all data!", "warning");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const isValidEmail = emailPattern.test(email);
    if (!isValidEmail) {
      showAlert("Invalid email address!", "warning");
      return false;
    }
    const isValidPassword = passwordPattern.test(password);
    if (!isValidPassword) {
      showAlert(
        "Password must be atleast 8 characters and contain atleast one digt, lowercase and uppercase letter!",
        "warning"
      );
      return false;
    }

    return true;
  };

  return (
    <RegistrationForm
      onSubmit={handleRegisterSubmit}
      onChange={handleInputChange}
      formData={formData}
      alertData={alertData}
      hideAlert={hideAlert}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
};

export default RegistrationContainer;
