import { AppleLogo } from "phosphor-react";

export function Qualities() {
  return (
    <div className="w-container flex gap-8 justify-between text-center mt-10">
      <div className="flex flex-col items-center justify-center">
        <AppleLogo size={64} color="#0a26ff" weight="light" />
        <h3 className="text-primary text-base font-bold">Lorem ipsum dolor</h3>
        <p className="text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          assumenda neque.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AppleLogo size={64} color="#0a26ff" weight="light" />
        <h3 className="text-primary text-base font-bold">Lorem ipsum dolor</h3>
        <p className="text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          assumenda neque.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AppleLogo size={64} color="#0a26ff" weight="light" />
        <h3 className="text-primary text-base font-bold">Lorem ipsum dolor</h3>
        <p className="text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          assumenda neque.
        </p>
      </div>
    </div>
  );
}
