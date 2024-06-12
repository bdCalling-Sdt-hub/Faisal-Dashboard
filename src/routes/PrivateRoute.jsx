import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getProfile } from "../redux/apiSlice/Authentication/getProfileSlice";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [isProfileFetched, setIsProfileFetched] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      await dispatch(getProfile());
      setIsProfileFetched(true);
    };
    fetchProfile();
  }, [dispatch]);

  if (!isProfileFetched || loading) {
    return
  }

  if (profile && (profile?.role === "ADMIN" || profile?.role === "SUPER ADMIN") ) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
