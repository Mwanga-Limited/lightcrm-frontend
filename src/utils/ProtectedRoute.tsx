import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getTokenWithExpiry } from 'utils/api';

type Props = {
  children?: ReactNode;
  redirectTo: string;
  loggedin: boolean;
};

const ProtectedRoutes = ({ children, redirectTo, loggedin }: Props) => {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkUserToken = () => {
  //     const userToken = getTokenWithExpiry();
  //     if (!userToken) {
  //       setLoggedIn(false);
  //       return navigate(redirectTo);
  //     }
  //     setLoggedIn(true);
  //   };

  //   checkUserToken();
  // }, [loggedIn, navigate, redirectTo]);

  return loggedin ? <Outlet /> : null;
};

export default ProtectedRoutes;
