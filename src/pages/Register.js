/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import RegisterWidget from "../components/RegisterWidget/RegisterWidget";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../serverQueries/auth/auth";

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <NavBar />
      <RegisterWidget />
    </div>
  );
}
