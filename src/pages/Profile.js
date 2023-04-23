import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import ProfileWidget from "../components/ProfileWidget/ProfileWidget";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../serverQueries/auth/auth";

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavBar />
      <ProfileWidget />
    </div>
  );
}
