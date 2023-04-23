import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    let url = process.env.REACT_APP_NEWS_API;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        console.log(value);
        setData(value.articles);
      });
  }, []);

  return (
    <div style={{ background: "#4B0150" }}>
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