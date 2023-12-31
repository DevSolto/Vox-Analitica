import { AppleLogo } from "phosphor-react";

export function Qualities() {
  return (
    <div className="lg:w-container lg:px-0 px-0 flex gap-8 justify-between lg:flex-row flex-col  text-center mt-10">
      <div className="flex lg:flex-col items-center justify-center">
        <AppleLogo size={100} color="#0AE6FF" weight="light" />
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base font-bold">
            Lorem ipsum dolor
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda neque.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <AppleLogo size={100} color="#0AE6FF" weight="light" />
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base font-bold">
            Lorem ipsum dolor
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda neque.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <AppleLogo size={100} color="#0AE6FF" weight="light" />
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base font-bold">
            Lorem ipsum dolor
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda neque.
          </p>
        </div>
      </div>
    </div>
  );
}
