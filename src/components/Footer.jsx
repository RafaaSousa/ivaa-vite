import React from "react";
import SocialMediaLinks from "./ui/SocialMediaLinks";
import { Link, useNavigate } from "react-router-dom";

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
  {
    name: "Contato",
    path: "/contato",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (path) => {
    if (path.startsWith("#")) {
      // Redireciona para a página inicial e depois para a seção
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
    <footer className="bg-accent">
      <div className="container py-8">
        <div className="flex flex-col items-center pt-6 pb-6">
          <img
            src="./images/logoBege.png"
            className="w-24"
            alt="Logo IVAA"
          />
          <h2 className="font-adventures text-3xl text-center text-primary py-4">
            Sua consultoria de carreira e desenvolvimento
          </h2>
        </div>

        <div className="flex flex-row justify-between items-center px-4 py-4">
          <div className="flex flex-col items-start sm:flex-row gap-4 ">
            {links.map((link, index) => {
              const isAnchor = link.path.startsWith("#");
              return isAnchor ? (
                <button
                  key={index}
                  onClick={() => handleAnchorClick(link.path)}
                  className="text-primary capitalize font-light transition-all"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-primary capitalize font-light transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div>
            <SocialMediaLinks />
          </div>
        </div>

        <div className="flex justify-center text-primary pb-8">
          <h6 className="font-light">
            © 2024 Camila Pedra. Todos os direitos reservados.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
