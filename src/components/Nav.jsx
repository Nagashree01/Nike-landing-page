import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between  items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={50} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
