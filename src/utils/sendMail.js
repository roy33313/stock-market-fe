import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_76o4biw",
      "template_aokm04g",
      e.target,
      "-HWZJafdzU54KocC_"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  e.target.reset();
};
export { sendEmail };
