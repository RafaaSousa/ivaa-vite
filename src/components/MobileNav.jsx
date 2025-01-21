import SocialMediaLinksNav from "./ui/SocialMediaLinksNav";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const links = [
  {
    name: "home",
    path: "/",
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
  return (
    <DrawerRoot >
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
              return (
                <a
                  key={index}
                  href={link.path}
                  className="text-primary hover:border-b-2 border-primary capitalize font-light "
                >
                  {link.name}
                </a>
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