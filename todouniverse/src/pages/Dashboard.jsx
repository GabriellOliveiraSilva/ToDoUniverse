"use client";
import { useState } from "react";
import { navBarIsOpen } from "../store/store";
import NavBar from "../components/molecules/NavBar";
import { Footer } from "../components/molecules/Footer";
import { Save, CircleCheck, CircleX } from "lucide-react";
import {
  notificationSucess,
  notificationAlert,
} from "../components/molecules/Notification";
import { Toaster } from "react-hot-toast";
import _tasks from "../data/tasks.json";
import _projects from "../data/projects.json"
export default function Dashboard() {
  const { isOpen } = navBarIsOpen();
  const [tasks, setTasks] = useState(_tasks);

  const handleAddTask = (e) => {
    let title = document.getElementById("task");
    if (!title) {
      notificationAlert("A tarefa não pode estar vazia");
      return;
    }
    let id = tasks.length + 1;
    let task = {
      id: id,
      title: title.value,
      status: "Pendente",
    };
    setTasks([...tasks, task]);
    title.value = "";
    return notificationSucess("Tarefa Adicionada!");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    return notificationSucess("Tarefa Removida");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "Concluída" } : task
      )
    );
  };

  return (
    <div className={`bg-night h-lvh gap-50 `}>
      <NavBar />
      <Toaster position="bottom-right" />
      <div className={`flex flex-col h-full overflow-auto  p-6   `}>
        {/**
         * Titulo
         */}
        <h1 className="text-2xl font-bold text-jonquil mt-15 mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400 ">
            <h3 className="text-white font-medium">Tarefas Pendentes</h3>
            <p className="text-3xl font-bold text-jonquil mt-2 text-end">
              {tasks.filter((task) => task.status == "Pendente").length}
            </p>
          </div>
          <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
            <h3 className="text-white font-medium">Projetos Ativos</h3>
            <p className="text-3xl font-bold text-jonquil mt-2 text-end">
              {
                tasks.filter(
                  (task) =>
                    task.status == "Pendente" || task.status == "Em Andamento"
                ).length
              }
            </p>
          </div>
          <div className="bg-blackOlive p-4 rounded-lg shadow-md border border-amber-400">
            <h3 className="text-white font-medium">Tarefas Concluídas</h3>
            <p className="text-3xl font-bold text-jonquil text-end">
              {tasks.filter((task) => task.status == "Concluída").length}
            </p>
          </div>
        </div>

        <div className=" grid-cols-1 gap-4 mt-4 h-auto max-h-[70%] flex flex-col">
          <div>
            <h2 className="text-1xl font-bold text-jonquil  mb-2">
              Suas Tarefas:
            </h2>

            <div className="flex">

              <div className="w-[95%] flex flex-col gap-3">
                <select name="project" id="project" className="border border-amber-400 text-jonquil rounded-lg p-2 w-[95%]">
                    {
                        _projects.map((project)=>(
                            <option className="bg-blackOlive">{project.title}</option>
                        ))
                    }
                </select>
                
              <input
                type="text"
                id="task"
                placeholder="Digite sua tarefa"
                name="task"
                className="w-[95%] p-2 rounded-lg border text-jonquil border-amber-400 focus:outline-none focus:border-amber-300"
              />

              </div>
              <div className="justify-center items-center flex">
              <button
                    className=" min-w-10 items- rounded-lg p-2 bg-amber-400 cursor-pointer hover:bg-amber-500 ease-linear duration-150"
                    onClick={handleAddTask}
                >
                <Save className="text-blackOlive" />
              </button>
              </div>
            </div>
          </div>

          <div className="overflow-auto pr-2   rounded-lg flex-row justify-center items-center custom-scrollbar h-[100%]">
            <div className=" gap-5 flex flex-col">
              {tasks
                .filter((task) => task.status == "Pendente")
                .map((task) => {
                  return (
                    <div className="p-4 bg-blackOlive rounded-lg border border-amber-500 flex flex-row">
                      <div className=" w-[95%] items-center flex">
                        <div className="text-white">{task.title}</div>
                      </div>

                      <div className=" flex justify-center  w-[5%]">
                        <div className="flex flex-col items-center gap-2  ">
                          <CircleCheck
                            className="color-greenOlive cursor-pointer"
                            onClick={(e) => completeTask(task.id)}
                          />
                          <CircleX
                            className="color-redDeep cursor-pointer"
                            onClick={(e) => removeTask(task.id)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
