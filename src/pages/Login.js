/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import LoginWidget from "../components/LoginWidget/LoginWidget";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../serverQueries/auth/auth";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <LoginWidget />
    </div>
  );
}
