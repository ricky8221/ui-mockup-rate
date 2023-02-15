import { Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectZone } from "../../redux/feature/zoneSlice";


var cardContainer = {
    display: "flex",
    "flexWrap": "wrap"
}

var cardStyle = {
    width:"100%",
    "marginBottom": "1vh"
}

const Fedex = () => {

  function renderGND(zone) {
    let GND= [
      5, 8, 11, 14, 17, 20, 23, 26, 29
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
      6, 9, 11, 14, 17, 20, 23, 26, 29
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
      8, 11, 13, 16, 19, 22, 25, 28, 31
    ]
    let num = zone - 1;
  
    switch (num) {
      case (num):
        return EXP[num];
      default:
        return 0;
    }
  }
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

export default Fedex;
