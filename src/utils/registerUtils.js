const inputValidation = (
  firstName,
  lastName,
  phoneNo,
  email,
  password,
  confirmPassword
) => {
  if (
    firstName === "" ||
    lastName === "" ||
    phoneNo === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    return { error: true, message: "Input fields are empty" };
  }

  if (!firstName.match(/^[A-Za-z]+$/)) {
    return { error: true, message: "First name should only contain letters" };
  }

  if (!lastName.match(/^[A-Za-z]+$/)) {
    return { error: true, message: "Last name should only contain letters" };
  }

  if (!phoneNo.match(/^[0-9]+$/) || phoneNo.length !== 10) {
    return { error: true, message: "Phone Number should only 10 numbers" };
  }

  if (!email.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {
    return { error: true, message: "Please enter valid email" };
  }

  if (password.length < 8) {
    return {
      error: true,
      message: "Password should contain atleast 8 characters",
    };
  }

  if (confirmPassword !== password) {
    return { error: true, message: "passwords are not matching" };
  }

  return { error: false };
};

export { inputValidation };
