import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Header } from "./Component/Header.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);


//we use appl.jsx as a value in here
//it is used as a value for the render file\
//passed jsx code to a the render method 
//
