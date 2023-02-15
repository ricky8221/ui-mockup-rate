import { Card } from "@mui/material";
import React from "react";
import { selectZone } from "../../redux/feature/zoneSlice";
import { useSelector } from "react-redux";


var cardContainer = {
  display: "flex",
  flexWrap: "wrap",
};

var cardStyle = {
  width: "100%",
  marginBottom: "1vh",
};


function renderGND(zone) {
  let GND= [
    3, 6, 9, 12, 15, 18, 21, 24, 27
  ]
  let num = zone - 1;

  switch (num) {
    case (num):
      return GND[num];
    default:
      return 0;
  }
}

function renderAIR(zone) {
  let AIR= [
    5, 8, 11, 14, 17, 20, 23, 26, 29
  ]
  let num = zone - 1;

  switch (num) {
    case (num):
      return AIR[num];
    default:
      return 0;
  }
}

function renderEXP(zone) {
  let EXP= [
    7, 10, 13, 16, 19, 22, 25, 28, 31
  ]
  let num = zone - 1;

  switch (num) {
    case (num):
      return EXP[num];
    default:
      return 0;
  }
}

const UPS = () => {
  const zone = useSelector(selectZone);

  return (
    <Card style={cardContainer} variant="outlined" className="classBody">
      <Card style={cardStyle} xs={6}>
        <h2>Express</h2>
        <h2>Price: ${renderGND(zone)}</h2>
      </Card>
      <Card style={cardStyle} xs={6}>
        <h2>Air</h2>
        <h2>Price: ${renderAIR(zone)}</h2>
      </Card>
      <Card style={cardStyle} xs={6}>
        <h2>Ground</h2>
        <h2>Price: ${renderEXP(zone)}</h2>
      </Card>
    </Card>
  );
};

export default UPS;
