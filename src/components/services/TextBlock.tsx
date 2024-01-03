import { Popover } from "@headlessui/react";
import { ArrowBendRightUp } from "phosphor-react";
import { KnowMore } from "./knowMore";

interface TextBlockProps {
  title: string;
  description: string;
  descriptionPopover: string;
}

export function TextBlock({
  title,
  description,
  descriptionPopover,
}: TextBlockProps) {
  return (
    <>
      <h3 className="text-white font-bold lg:text-5xl text-3xl">{title}</h3>
      <p className="text-secondary text-lg">{description}</p>
      <Popover>
        <Popover.Button className="flex items-center text-white hover:text-primary outline-none">
          Saiba mais <ArrowBendRightUp />
        </Popover.Button>
        <KnowMore title={title} description={descriptionPopover} />
      </Popover>
    </>
  );
}
