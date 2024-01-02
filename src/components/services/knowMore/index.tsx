import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function KnowMore() {
  return (
    <Popover.Panel>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-primary bg-opacity-40">
        <div className="bg-white max-w-[90%] p-8 rounded-3xl relative">
          <Popover.Button className="absolute top-2 right-2">
            <X size={30} />
          </Popover.Button>
          <p>Pesquisas Qualitativas</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sunt optio facilis, nihil magni corrupti nesciunt doloribus dolor
            totam earum nobis repellat, laborum rerum corporis voluptates
            quisquam exercitationem ab ea! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam, optio sapiente commodi dolor
            repudiandae exercitationem aut ratione accusantium, obcaecati minus
            animi vero quaerat, explicabo laborum sit? Obcaecati nihil eaque
            similique.
          </p>
        </div>
      </div>
    </Popover.Panel>
  );
}
