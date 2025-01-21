

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
];

const Nav = () => {
  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <a key={index} href={link.path} className="text-primary border-accent capitalize hover:text-accent hover:border-b-2 transition-all">
                {link.name}
              </a>
        );
      })}
    </nav>
  );
};

export default Nav;
