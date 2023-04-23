import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import bgImage from "../../assets/images/common/bg.mp4"
import "./NewsContainer.css"

export default function NewsContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    let url = process.env.REACT_APP_NEWS_API;
    console.log("useEffect called");
    const getData = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.articles);
    };
    getData();
  }, []);

  return (
    <div>
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={bgImage} type="video/mp4"/>
        </video>
      </div>
      <h1 style={{ color: "#FFFFFF" }}>NewsMonkey-Top HeadLines</h1>
      <div className="row">
        {Array.from(data).map((item) => {
          return (
            <div className="col-md-4">
              <NewsCard obj={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
