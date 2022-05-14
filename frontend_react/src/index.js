import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Maindashboard from "./pages/Maindashboard";
import EditorPage from "./pages/EditorPage/EditorPage";
import NotepadLogin from "./pages/NotepadLogin/NotepadLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route path="/login" element={<NotepadLogin />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>

    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
