import { useState } from "react";
import './App.css';
import './index.css'; // Ou o caminho certo para o CSS onde o Tailwind está importado

import { RoutesApp } from "./routes/routes";
export default function App() {

  return (
    <RoutesApp />
  );
}