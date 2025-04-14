import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Verifica se o dispositivo é móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verifica inicialmente
    checkIfMobile();
    
    // Adiciona listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);
    
    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/tarefas', label: 'Tarefas' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/configuracoes', label: 'Configurações' },
  ];

  return (
    <nav className="bg-blackOlive text-white shadow-lg border border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 border border-amber-300">
          {/* Logo e título */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-jonquil font-bold text-xl">ToDoUniverse</span>
            </div>
          </div>

          {/* Menu para desktop */}
          {!isMobile && (
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-jet text-jonquil'
                      : 'text-white hover:text-jonquil'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Botão do menu sanduíche para mobile */}
          {isMobile && (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-jonquil focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {/* Ícone do menu sanduíche */}
                <div className="flex flex-col gap-1">
                  <div className={`w-6 h-1 bg-jonquil rounded-full ${isOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-1 bg-jonquil rounded-full ${isOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-1 bg-jonquil rounded-full ${isOpen ? 'opacity-0' : ''}`}></div>
                </div>
                {/* Ícone X quando o menu está aberto */}
                {isOpen && (
                  <div className="absolute top-0 right-0 p-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-6 h-1 bg-jonquil rounded-full transform rotate-45 absolute"></div>
                      <div className="w-6 h-1 bg-jonquil rounded-full transform -rotate-45 absolute"></div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}

    </nav>
  );
};

export default NavBar;
