import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min";

import Maindashboard from "./pages/Maindashboard";
import CreateRoom from "./component/CreateRoom/CreateRoom";
import EditorPage from "./pages/EditorPage/RealtimeEditor";
import NotepadLogin from "./pages/NotepadLogin/NotepadLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route path="/login" element={<NotepadLogin />} />
        <Route path="/RealtimeEditor" element={<EditorPage />} />
        <Route path="/Authenticate" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
