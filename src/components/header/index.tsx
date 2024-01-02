import logo from "../../assets/logo.svg";
import { Menu } from "./Navigation";
import { Dropdown } from "./dropdown";

export function Header() {
  return (
    <header className=" w-full flex justify-center items-center lg:py-10 py-4">
      <div className="lg:w-container w-full flex items-center justify-between lg:mx-0 mx-4">
        <div className="flex items-center  gap-2">
          <img
            className="w-10 h-10"
            src={logo}
            alt="Icone da logo da Vox Analitica"
          />
          <p className="font-bold text-xl text-white uppercase">
            Vox Analitica
          </p>
        </div>
        <button className="lg:hidden">
          <Dropdown />
        </button>
        <Menu />
      </div>
    </header>
  );
}
