const prediction = async (stock, setChartImg, setPredictedVaue) => {
  console.log({ stock });

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock }),
  };
  const response1 = await fetch("http://127.0.0.1:5000/predict", options);
  const responseData1 = await response1.json();
  console.log(responseData1);
  setPredictedVaue(responseData1.predicted_main_out);

  const response2 = await fetch(
    "http://localhost:5000/predict/getImage?graph=chart"
  );
  const responseData2 = await response2.blob();
  const chartURL = URL.createObjectURL(responseData2);
  setChartImg(chartURL);
};

export default prediction;
