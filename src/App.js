import React from "react";
import "./App.css";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPen, faSave, faTrash);

const App = () => {
  return (
    <div>
      <h1>Your app goes here</h1>
      <p>
        CSS styles are applied like <span className="some-style">this</span>
      </p>
    </div>
  );
};

export default App;
