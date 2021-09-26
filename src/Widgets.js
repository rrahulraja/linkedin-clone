import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleleft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articleright">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is awesome", "Top news - new project on the go")}
      {newsArticle("React is awesome", "Top news - new project on the go")}
      {newsArticle("React is awesome", "Top news - new project on the go")}
      {newsArticle("React is awesome", "Top news - new project on the go")}
      {newsArticle("React is awesome", "Top news - new project on the go")}
      {newsArticle("React is awesome", "Top news - new project on the go")}
    </div>
  );
}

export default Widgets;
