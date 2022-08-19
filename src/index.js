import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import BrowserRouter from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Fudgy Labs Frontend" />);

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App name="Fudgy Labs Frontend" />); 