import { useState } from "react";

const useAlert = () => {
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
    isDisplayed: false,
  });

  const showAlert = (message, type) => {
    setAlertData({ message: message, type: type, isDisplayed: true });

    //Hide after timeout
    setTimeout(() => {
      hideAlert();
    }, 5000);
  };

  const hideAlert = () => {
    setAlertData({ message: "", type: "", isDisplayed: false });
  };

  return [showAlert, hideAlert, alertData];
};

export default useAlert;
