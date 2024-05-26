import React from "react";
import { NewsData } from "./NewsData";
import NewsCard from "../NewsCard/NewsCard";
import './News.css'

function News() {
  return (
    <div className="newsContainer">
      <div className="news">
        <p>Blog & News</p>
        <h1>Read Our Latest News</h1>
        <div className="newsCards">
          {NewsData.map((newsdata) => (
            <NewsCard newsdata={newsdata} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
