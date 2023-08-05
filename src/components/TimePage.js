import * as React from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

export default function CustomDay() {
  const timeSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77];
  let check = 0;
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
        <div className="dateHeading">
          <h2>Choose Time Slot</h2>
          <h2>
            <Link to="/date">⬅️</Link>
          </h2>
        </div>
        <Container className="slotContainer">
          {}
          <Row>
            {timeSlots.map((data) => {
              return (
                <Col sm={3}>
                  <button className="slotButton">{data}</button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Paper>
    </Box>
  );
}
