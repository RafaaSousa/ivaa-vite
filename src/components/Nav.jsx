import React from "react";
import { useNavigate } from "react-router-dom";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "Sobre",
    path: "#sobre",
  },
  {
    name: "Missão",
    path: "#missao",
  },
  {
    name: "Soluções",
    path: "#solucoes",
  },
  {
    name: "Depoimentos",
    path: "#depoimentos",
  },
];

const Nav = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (path) => {
    if (path.startsWith("#")) {
      // Redireciona para a página inicial e depois rola para a seção
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Aguarda o redirecionamento antes de rolar para a seção
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isAnchor = link.path.startsWith("#");
        return isAnchor ? (
          <button
            key={index}
            onClick={() => handleAnchorClick(link.path)}
            className="text-primary border-accent capitalize hover:text-accent hover:border-b-2 transition-all"
          >
            {link.name}
          </button>
        ) : (
          <a
            key={index}
            href={link.path}
            className="text-primary border-accent capitalize hover:text-accent hover:border-b-2 transition-all"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;

