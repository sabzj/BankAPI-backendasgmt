import React from "react";

const errorResponse = ({ message, statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export default errorResponse;
