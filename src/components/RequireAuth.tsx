/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
const RequireAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(true);

  //   const checkUser = useCallback(
  //     () => {
  //      const req = await fetch();
  //     },
  //     [],
  //   )

  useEffect(() => {}, []);

  console.log("Make sure auth is there");
  return !isAuth ? <Navigate to={"/"} /> : <Outlet />;
};

export default RequireAuth;
