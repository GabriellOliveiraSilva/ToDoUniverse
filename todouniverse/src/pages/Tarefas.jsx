import { useState } from "react";
import NavBar from "../components/molecules/NavBar";

export default function Tarefas() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Completar relatório", status: "pendente" },
    { id: 2, title: "Reunião com cliente", status: "em andamento" },
    { id: 3, title: "Revisar código", status: "concluída" }
  ]);

  return (
    <div className="w-screen h-screen bg-night flex flex-col">
      <NavBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-jonquil mb-6">Minhas Tarefas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
              <h3 className="text-white font-medium">{task.title}</h3>
              <div className="mt-2">
                <span className={`text-sm px-2 py-1 rounded-full ${
                  task.status === "pendente" ? "bg-red-500" : 
                  task.status === "em andamento" ? "bg-yellow-500" : 
                  "bg-green-500"
                } text-white`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 