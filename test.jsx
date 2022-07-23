import React from "react";
import ReactDOM from "react-dom/client";

// import the library components and styles
import "./dist/style.css";
import { Button } from "./dist/my-lib.es";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Button
      label="click me"
      backgroundColor="pink"
      onClick={(e) => console.log("clicked", e)}
    />
  </React.StrictMode>
);
