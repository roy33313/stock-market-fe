import Cookies from "universal-cookie";

const login = async (data) => {
  const cookies = new Cookies();
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data.email, password: data.password }),
  };
  const response = await fetch(process.env.REACT_APP_LOGIN_API, options);
  const responseData = await response.json();
  if (responseData.status === 200) {
    cookies.set("details", responseData, {
      expires: new Date(16788891299999 * 100),
    });
  } else {
    console.log("error 404");
  }
};

export { login };
