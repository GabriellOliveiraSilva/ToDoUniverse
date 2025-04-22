import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navBarIsOpen, deviceIsMoile } from "../../store/store";

const NavBar = () => {
  const { isOpen, setIsOpen } = navBarIsOpen();
  const { isMobile, setIsMobile } = deviceIsMoile();
  const location = useLocation();

  // Verifica se o dispositivo é móvel
  useEffect(() => {
    setIsMobile(false);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verifica inicialmente
    checkIfMobile();

    // Adiciona listener para redimensionamento
    window.addEventListener("resize", checkIfMobile);

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {}, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/projetos", label: "Projetos" },
    { path: "/configuracoes", label: "Configurações" },
  ];

  return (
    <nav className="bg-blackOlive shadow-lg  fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          {/* Menu para desktop */}
          {!isMobile && (
            <div className=" w-full m-0 hidden md:flex md:items-center md:space-x-8  justify-between">
              {/* Logo e título */}
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-jonquil font-bold text-4xl">
                    ToDoUniverse
                  </span>
                </div>
              </div>
              <div>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-jet text-jonquil"
                        : "text-white hover:text-jonquil"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Botão do menu sanduíche para mobile */}

          {isMobile && (
            <div className="flex items-center w-full justify-between">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-jonquil focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {/* Ícone do menu sanduíche */}
                <div className="flex flex-col gap-1">
                  <div
                    className={`w-6 h-1 bg-jonquil rounded-full ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-1 bg-jonquil rounded-full ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-1 bg-jonquil rounded-full ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                </div>

                {/* Ícone X quando o menu está aberto */}
                {isOpen && (
                  <div className="absolute  ">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-6 h-1 bg-jonquil rounded-full transform rotate-45 absolute"></div>
                      <div className="w-6 h-1 bg-jonquil rounded-full transform -rotate-45 absolute"></div>
                    </div>
                  </div>
                )}
              </button>

              <div className="flex-shrink-0 flex items-center">
                <span className="text-jonquil font-bold text-4xl">
                  ToDoUniverse
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && window.innerWidth <= 768 && (
        <div className=" max-w-80 w-[50%]  h-screen fixed bg-blackOlive shadow-md flex-col">
          <div className="flex flex-col items-start justify-start h-full  gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors  w-full ${
                  location.pathname === link.path
                    ? "bg-jet text-jonquil"
                    : "text-white hover:text-jonquil"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
