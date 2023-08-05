import * as React from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./HomePage.css";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Link } from "react-router-dom";

export default function CustomDay() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

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
          <h2>Choose Date</h2>
          <h2>
            <Link to="/">⬅️</Link>
          </h2>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Paper>
    </Box>
  );
}
