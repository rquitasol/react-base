import React, { useState, useEffect } from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationContainer = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState({
    isDisplayed: false,
    message: "",
    type: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (isValidEmailAndPassword()) {
      try {
        //execute api registration here
        //await register(name, email, password)
        //If successfull alert and redirect
        setAlertMessage(
          `Registration for user ${formData.name} success!`,
          "success"
        );

        setTimeout(() => {
          closeModal();
        }, 5000);
      } catch (err) {
        setAlertMessage(err.mesage, "error");
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

  const setAlertMessage = (message, type) => {
    setShowAlert({
      isDisplayed: true,
      message: message,
      type: `alert-${type}`,
    });
  };

  const isValidEmailAndPassword = () => {
    const name = formData?.name;
    const email = formData?.email;
    const password = formData?.password;

    if (name.length <= 0 || email.length <= 0 || password.length <= 0) {
      setAlertMessage("Please fill in all data!", "warning");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const isValidEmail = emailPattern.test(email);
    if (!isValidEmail) {
      setAlertMessage("Invalid email address!", "warning");
      return false;
    }
    const isValidPassword = passwordPattern.test(password);
    if (!isValidPassword) {
      setAlertMessage(
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
      showAlert={showAlert}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
};

export default RegistrationContainer;
