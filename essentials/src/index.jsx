import DifferentFunction from "./trial.jsx";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Header } from "./Component/Header.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<div><App /> <DifferentFunction/></div>);





//we use appl.jsx as a value in here
//it is used as a value for the render file\
//passed jsx code to a the render method 
//all of the component in the actaull file in the index file are showen in the root div on the actuall page
//app.jsx mainly conatins the compnet hierearcy ---- making the COMPONENT TREE 

//EVEERYTHING AT THE END --- IS JUST PLAIN HTML -- 
//we can work with these Comononts individualy and reuse them
//we upper case all the stuff to prevent it to callapse with actaull files 

//only build in elements left at the end



