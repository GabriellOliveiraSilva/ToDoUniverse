import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';
import Configuracoes from '../pages/Configuracoes';

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tarefas" element={<Tarefas />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
            </Routes>
        </Router>
    )
}
