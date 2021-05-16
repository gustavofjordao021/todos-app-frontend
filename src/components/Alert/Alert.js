import React from "react";

// Alert component takes 3 `alerTypes`: "success", "error", and none which outputs a blue, informative alert. It also takes `alertMessage' which is the message to be displayed by the alert.
const Alert = (props) => {
  const { alertType, alertMessage } = props;
  return (
    <>
      {alertType === "error" ? (
        <span className="p-3 inline-flex text-xs leading-5 font-semibold rounded-md bg-red-100 text-red-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      ) : alertType === "success" ? (
        <span className="p-3 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      ) : (
        <span className="p-3 inline-flex text-xs leading-5 font-semibold rounded-md bg-blue-100 text-blue-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      )}
    </>
  );
};

export default Alert;
