import SocialMediaLinksNav from "./ui/SocialMediaLinksNav";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

const MobileNav = () => {
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
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <AiOutlineMenu className="text-accent text-3xl" />
      </DrawerTrigger>
      <DrawerContent offset="4" rounded="md">
        <DrawerHeader>
          <DrawerTitle>
            <div className="mt-10 mb-10 flex justify-center">
              <Link to="/">
                <img
                  src="/images/logoBege.png"
                  className="xl:hidden w-20"
                  alt="Logo IVAA"
                />
              </Link>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              const isAnchor = link.path.startsWith("#");
              return isAnchor ? (
                <button
                  key={index}
                  onClick={() => handleAnchorClick(link.path)}
                  className="text-primary hover:border-b-2 border-primary capitalize font-light"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-primary hover:border-b-2 border-primary capitalize font-light"
                >
                  {link.name}
                </Link>
              );
            })}
            <div>
              <SocialMediaLinksNav />
            </div>
          </nav>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileNav;
