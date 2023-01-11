import React from "react";
import Calculator from "./components/calculator";
import { createRoot } from 'react-dom/client';
import './index.css';


// Render the calculator to the web page
const container= document.getElementById('root')
const root= createRoot(container)
root.render(<Calculator/>)
console.log(root)