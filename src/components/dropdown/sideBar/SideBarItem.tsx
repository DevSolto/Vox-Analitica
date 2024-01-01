import { File } from "phosphor-react";

interface SideBarItemProps {
  active: (isActive: boolean) => void;
  link: string;
  label: string;
}

export function SideBarItem({ active, link, label }: SideBarItemProps) {
  return (
    <div className="">
      <button onClick={() => active(false)}>
        <a className="text-white text-lg" href={link}>
          {label}
        </a>
      </button>
    </div>
  );
}
