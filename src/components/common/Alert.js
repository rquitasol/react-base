import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, type, isDisplayed }) => {
  const getAlertIcon = () => {
    switch (type) {
      case "success":
        return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
      case "error":
        return "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";
      case "warning":
        return "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
      default:
        return "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
    }
  };

  if (isDisplayed) {
    return (
      <div>
        <div className={`alert alert-${type}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={getAlertIcon()}
            />
          </svg>
          <span>{message}</span>
        </div>
      </div>
    );
  }
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["", "success", "warning", "error"]).isRequired,
};

export default Alert;
