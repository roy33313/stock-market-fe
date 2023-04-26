const predictedValue = async (stock, movingAverage) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock, movingAverage }),
  };
  const response1 = await fetch("http://127.0.0.1:5000/predict", options);
  const responseData1 = await response1.json();
  console.log(responseData1);

  const response2 = await fetch(
    "http://127.0.0.1:5000/predict/getImage?graph=chart"
  );
  const responseData2 = await response2.blob();
  const fileURL = URL.createObjectURL(responseData2);
  console.log(fileURL.blob);
  window.open(fileURL);
};

export default predictedValue;
