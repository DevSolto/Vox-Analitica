import { Popover } from "@headlessui/react";
import { ArrowBendRightUp } from "phosphor-react";
import { KnowMore } from "./knowMore";

interface TextBlockProps {
  title: string;
  description: string;
}

export function TextBlock({ title, description }: TextBlockProps) {
  return (
    <div className="lg:min-w-[550px] w-full flex gap-4 flex-col items-start justify-center mb-10">
      <h3 className="text-primary font-bold lg:text-5xl text-3xl">{title}</h3>
      <p className="text-secondary text-lg">{description}</p>
      <Popover>
        <Popover.Button className="flex items-center text-primary hover:text-highlights outline-none">
          Saiba mais <ArrowBendRightUp />
        </Popover.Button>
        <KnowMore />
      </Popover>
    </div>
  );
}
