import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import UPS from "./UPS";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Fedex from "./Fedex";
import DHL from "./DHL";
import upsLogo from "../../component/asset/ups.png"
import fedexLogo from "../../component/asset/fedex.png"
import dhlLogo from "../../component/asset/dhl.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

var boxStyle = {
  transitionDuration: "0.3s",
  border: "5px",
};

var cardStyle = {
  transitionDuration: "0.3s",
  height: "65vh",
  border: "5px",
  display: "flex",
};

var imgContainer = {
  height: "18vh"
};

const CarrierCard = () => {
  return (
    <div className="card-container">
      <Box style={boxStyle} sx={{ width: 1 / 4, boxshadow: 3 }} mr>
        <Card style={cardStyle} variant="outlined" className="classBody">
          <Grid>
            <Item style={imgContainer}>
              <img src={upsLogo} alt="ups" className="upsLogo"/>
            </Item>
            <Item>
              <UPS />
            </Item>
          </Grid>
        </Card>
      </Box>
      <Box style={boxStyle} sx={{ width: 1 / 4, boxshadow: 3 }} mr>
        <Card style={cardStyle} variant="outlined" className="classBody">
          <Grid>
            <Item style={imgContainer}>
              {/* <SiFedex size={150} color={"orange"}/> */}
              <img src={fedexLogo} alt="fedex" className="fedexLogo"/>
            </Item>
            <Item>
              <Fedex />
            </Item>
          </Grid>
        </Card>
      </Box>
      <Box style={boxStyle} sx={{ width: 1 / 4, boxshadow: 3 }}>
        <Card style={cardStyle} variant="outlined" className="classBody">
          <Grid>
            <Item style={imgContainer}>
              {/* <SiDhl size={150} /> */}
              <img src={dhlLogo} alt="dhl" className="dhlLogo"/>
            </Item>
            <Item>
              <DHL />
            </Item>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default CarrierCard;
