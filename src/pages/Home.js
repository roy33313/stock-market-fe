/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../serverQueries/auth/auth";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavBar />
      Home
    </div>
  );
}
