import { useState } from "react";
import NavBar from "../components/molecules/NavBar";

export default function Projetos() {
  const [projetos, setProjetos] = useState([
    { id: 1, nome: "Projeto A", progresso: 75, prazo: "15/05/2023" },
    { id: 2, nome: "Projeto B", progresso: 30, prazo: "30/06/2023" },
    { id: 3, nome: "Projeto C", progresso: 90, prazo: "10/05/2023" }
  ]);

  return (
    <div className="w-screen h-screen bg-night flex flex-col">
      <NavBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-jonquil mb-6">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
              <h3 className="text-white font-medium">{projeto.nome}</h3>
              <div className="mt-2">
                <div className="w-full bg-jet rounded-full h-2.5">
                  <div 
                    className="bg-jonquil h-2.5 rounded-full" 
                    style={{ width: `${projeto.progresso}%` }}
                  ></div>
                </div>
                <p className="text-sm text-white mt-2">Progresso: {projeto.progresso}%</p>
                <p className="text-sm text-white">Prazo: {projeto.prazo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 