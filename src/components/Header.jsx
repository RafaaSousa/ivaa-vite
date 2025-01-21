
import Button from "./ui/Button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-background pt-8 md:pt-12">
      <div className="mx-10 xl:mx-28 flex justify-between xl:justify-end items-center">
        {/* logo */}
        <Link to="/">
          <img
            src="./images/logoAzul.png" 
            className="xl:hidden w-20"
            alt="Logo IVAA"
            />
        </Link>

        {/* desktop nav & hire me Button */}
        <div className="hidden xl:flex items-center  gap-8">
          <Nav />
          <a href="/contato">
            <Button className="bg-accent font-brandon text-xl font-medium px-3 py-1 rounded-full text-primary hover:bg-accent-hover ">Contato</Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
          </div>

      </div>
    </header>
  );
};

export default Navbar;