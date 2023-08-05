import "./App.css";
import HomePage from "./components/HomePage";
import DatePage from "./components/DatePage";
import TimePage from "./components/TimePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const callDurations=(url)=>{

}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/date",
    element: <DatePage />,
  },
  {
    path: "/slots",
    element: <TimePage />,
  },
]);
function App() {
  const [duration, setDuration] = useState([]);
  const [resources, setResources] = useState([]);
  const [businessHours, setBusinessHours] = useState([]);
  const [blockHours, setBlockHours] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjMwMDF9.8pZMhoqZdBLqOKT0V7perD4vkoA347idSHVLaCcdefs"
    );
    var requestOptions = {
      method: "GET",
      mode: "cors",
      headers: myHeaders,
      redirect: "follow",
    };
    // durations
    fetch(
      "http://api.internship.appointy.com:8000/v1/durations",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setDuration(result))
      .catch((error) => console.log("error", error));
    // resources
    fetch(
      "http://api.internship.appointy.com:8000/v1/resources",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setResources(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(resources);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
