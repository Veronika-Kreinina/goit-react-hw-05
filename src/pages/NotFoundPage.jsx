import { Navigate } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <nav>
      <Navigate to="/" />
    </nav>
  );
};

export default NotFoundPage;
