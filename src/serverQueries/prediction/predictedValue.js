const predictedValue = async (stock, movingAverage) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock, movingAverage }),
  };
  const response = await fetch("http://127.0.0.1:5000/predict", options);
  const responseData = await response.json();

  console.log(responseData);
};

export default predictedValue;
