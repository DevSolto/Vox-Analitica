import { X } from "phosphor-react";
import { SideBarItem } from "./SideBarItem";

interface SideBarProps {
  active: (isActive: boolean) => void;
}

export function SideBar({ active }: SideBarProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-primary flex flex-col gap-4 py-4 shadow-lg">
        <SideBarItem active={active} link="#sobre" label="Sobre" />
        <SideBarItem active={active} link="#servicos" label="Serviços" />
        <SideBarItem active={active} link="#depoimentos" label="Depoimentos" />
        <SideBarItem active={active} link="#contato" label="Contato" />
      </div>
      <button
        className="text-white fixed top-4 right-4 flex"
        onClick={() => active(false)}
      >
        <X size={50} />
      </button>
    </>
  );
}
