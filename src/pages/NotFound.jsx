import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1, {});
      // navigate('/', { state: "Error Not Page" })
    }, 1000);
  }, []);

  return <h1>Not Found</h1>;
};

export default NotFound;
