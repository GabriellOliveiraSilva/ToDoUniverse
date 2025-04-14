import { useState } from "react";
import NavBar from "../components/molecules/NavBar";

export default function Configuracoes() {
  const [configuracoes, setConfiguracoes] = useState({
    tema: "escuro",
    notificacoes: true,
    idioma: "portugues"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfiguracoes({
      ...configuracoes,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="w-screen h-screen bg-night flex flex-col">
      <NavBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-jonquil mb-6">Configurações</h1>
        <div className="bg-blackOlive p-6 rounded-lg shadow-md border border-amber-400 max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Tema</label>
              <select 
                name="tema" 
                value={configuracoes.tema} 
                onChange={handleChange}
                className="w-full bg-jet text-white p-2 rounded-md border border-amber-400 focus:outline-none focus:ring-2 focus:ring-jonquil"
              >
                <option value="escuro">Escuro</option>
                <option value="claro">Claro</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center text-white">
                <input 
                  type="checkbox" 
                  name="notificacoes" 
                  checked={configuracoes.notificacoes} 
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-jonquil focus:ring-jonquil border-amber-400 rounded"
                />
                Ativar notificações
              </label>
            </div>
            
            <div>
              <label className="block text-white mb-2">Idioma</label>
              <select 
                name="idioma" 
                value={configuracoes.idioma} 
                onChange={handleChange}
                className="w-full bg-jet text-white p-2 rounded-md border border-amber-400 focus:outline-none focus:ring-2 focus:ring-jonquil"
              >
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button 
                className="bg-jonquil text-blackOlive px-4 py-2 rounded-md hover:bg-selectiveYellow transition-colors"
              >
                Salvar Configurações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 