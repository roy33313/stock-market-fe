const register = async (data) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(process.env.REACT_APP_REGISTER_API, options);
  const responseData = await response.json();

  if (responseData.status === 200) {
    return { error: false };
  } else {
    return { error: true, message: "email already exists" };
  }
};

export { register };
