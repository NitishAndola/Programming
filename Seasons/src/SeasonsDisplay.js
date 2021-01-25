import React from "react";

const getSeasons = (latitude, month) => {
  if (month > 3 && month < 9) return latitude > 0 ? "Summer" : "Winter";
  else return latitude > 0 ? "Winter" : "Summer";
};

const SeasonsDisplay = (props) => {
  console.log(props.latitude);
  const season = getSeasons(props.latitude, new Date().getMonth());
  const text= season==='Winter'?'Burr, it is chilly!':'Lets hit the Beach'; 

  return <h1>{text}</h1>;
};

export default SeasonsDisplay;