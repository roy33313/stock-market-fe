import Cookies from "universal-cookie";

const isAuthenticated = () => {
  const cookies = new Cookies();
  const details = cookies.get("details");
  return details;
};

export { isAuthenticated };
