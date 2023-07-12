import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  //1.Laod the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2.if there is No authenticated user redirect to the /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there is a user,render the app
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
