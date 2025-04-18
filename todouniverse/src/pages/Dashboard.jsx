"use client"
import { useState } from "react"
import { navBarIsOpen } from "../store/store";
import NavBar from "../components/molecules/NavBar";

export default function Dashboard() {
const {isOpen} =navBarIsOpen()
const [tasks, setTasks] = useState([
    { id: 1, title: "Completar relatório", status: "Pendente" },
    { id: 2, title: "Reunião com cliente", status: "Em Andamento" },
    { id: 3, title: "Revisar código", status: "Concluída" },
    { id: 4, title: "Desenvolver nova feature", status: "Em Andamento" },
    { id: 5, title: "Testar aplicação", status: "Pendente" },
    { id: 6, title: "Documentar API", status: "Pendente" },
    { id: 7, title: "Otimizar performance", status: "Concluída" },
    { id: 8, title: "Corrigir bugs", status: "Em Andamento" },
    { id: 9, title: "Implementar autenticação", status: "Pendente" },
    { id: 10, title: "Fazer deploy", status: "Concluída" }]);

    return (
    
    <div className={`bg-night h-lvh gap-50`}>
        <NavBar />
        <div className={`flex flex-col h-full overflow-hidden p-6 `}>
            {/**
             * Titulo
             */}
            <h1 className="text-2xl font-bold text-jonquil mt-15 mb-6">Dashboard</h1>


            <div className="grid grid-cols-3 gap-4">
                <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
                    <h3 className="text-white font-medium">Tarefas Pendentes</h3>
                    <p className="text-3xl font-bold text-jonquil mt-2 text-end">{(tasks.filter((task) => task.status == "Pendente")).length}</p>
                </div>
                <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
                    <h3 className="text-white font-medium">Projetos Ativos</h3>
                    <p className="text-3xl font-bold text-jonquil mt-2 text-end">{(tasks.filter((task) => task.status == "Pendente" || task.status == "Em Andamento")).length}</p>
                </div>
                <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
                    <h3 className="text-white font-medium">Tarefas Concluídas</h3>
                    <p className="text-3xl font-bold text-jonquil text-end">{(tasks.filter((task) => task.status == "Concluída")).length}</p>
                </div>
            </div>
            

                <div className="grid grid-cols-1 gap-4 mt-4 max-h-[80%] "> 
                    <div>

                    </div>
                    <div className="overflow-auto  rounded-lg flex-row justify-center items-center ">
                    {[...Array(12)].map((_, index) => (
                        <div className="pr-5 py-2">

                    <div key={index} className="p-4 bg-blackOlive rounded-lg ">
                                                <div className="text-jonquil text-lg mb-2">Seção de Teste {index + 1}</div>
                                                <div className="text-white">Duis aute irure dolor in reprehenderit in voluptate.</div>
                                            </div>
                        </div>
                        ))}                        
                    </div>
                </div>



            {/* <div className="mt-8">
                <h2 className="text-xl font-bold text-jonquil mb-4">Tarefas Recentes</h2>
                <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div key={task.id} className="flex justify-between items-center ">
                                <span className="text-white">{task.title}</span>
                                <span className={`text-sm px-2 py-1 rounded-full ${
                                    task.status === "Pendente" ? "bg-red-500" : 
                                    task.status === "Em Andamento" ? "bg-yellow-500" : 
                                    "bg-green-500"
                                } text-white`}>
                                    {task.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            </div>
        </div>
)
}
