import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isUser =
    localStorage.getItem("access_token") !== null &&
    localStorage.getItem("access_token") !== "";

  useEffect(() => {
    if (!isUser) {
      navigate("/"); // Redirect to home page if not authenticated
    }
  }, [isUser, navigate]);

  return <>{children}</>; // Render the children components
};

export default ProtectedRoute;
