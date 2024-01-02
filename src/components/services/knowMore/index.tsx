import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

interface KnowMoreProps {
  title: string;
  description: string;
}

export function KnowMore({ title, description }: KnowMoreProps) {
  return (
    <Popover.Panel>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary bg-opacity-40">
        <div className="bg-white max-w-3xl w-[90%] p-8 flex flex-col gap-4 rounded-3xl relative">
          <Popover.Button className="absolute top-4 right-4">
            <X size={30} />
          </Popover.Button>
          <p className="font-semibold text-xl text-highlights">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </Popover.Panel>
  );
}
