import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./HomePage.css";
import Pill from "./PillComponent";
import { Link } from "react-router-dom";

export default function HomePage({ setBlockHours }) {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 0,
          p: 10,
          width: 500,
          height: 450,
        },
      }}
    >
      <Paper variant="outlined" square>
        <h5 className="appointmentHeading">SELECT APPOINTMENT TYPE</h5>
        <div className="pillsContainer">
          <Link to="/date">
            <Pill number="P1" name="Pitch 1"/>
          </Link>
          <Link to="/date">
            <Pill number="P2" name="Pitch 2" />
          </Link>
          <Link to="/date">
            <Pill number="P3" name="Pitch 3" />
          </Link>
        </div>
      </Paper>
    </Box>
  );
}
