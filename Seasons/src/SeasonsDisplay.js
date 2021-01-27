import "./SeasonsDisplay.css";
import React from "react";

const seasonsConfig = {
  summer: {
    text: "Let's hit the Beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeasons = (latitude, month) => {
  if (month > 3 && month < 9) return latitude > 0 ? "summer" : "winter";
  else return latitude > 0 ? "winter" : "summer";
};

const SeasonsDisplay = (props) => {
  const season = getSeasons(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonsConfig[season];

  return (
    <div className={`seasons-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonsDisplay;
