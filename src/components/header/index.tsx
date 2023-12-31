import logo from "../../assets/logo.svg";
import { Menu } from "./Navigation";

export function Header() {
  return (
    <header className="w-screen flex justify-center items-center py-10">
      <div className="w-container flex items-center justify-between betw">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10"
            src={logo}
            alt="Icone da logo da Vox Analitica"
          />
          <p className="font-bold text-xl text-white uppercase">
            Voz Analitica
          </p>
        </div>
        <Menu />
      </div>
    </header>
  );
}
