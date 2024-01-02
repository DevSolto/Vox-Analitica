// import rua from "../../assets/rua.png";

import sala from "../../assets/sala.png";
import { TextBlock } from "./TextBlock";

export function Services() {
  return (
    <section id="servicos" className="flex flex-col items-center">
      <div className="lg:w-container flex flex-col items-center">
        <h3 className="text-4xl text-primary font-bold ">Serviços</h3>
        <div className="lg:w-container w-full lg:px-0 px-4 lg:overflow-visible bg-cover bg-center flex flex-col lg:flex-row items-center lg:justify-between gap-4 mt-10">
          <img src={sala} alt="" className="rounded-3xl shadow-md" />
          <TextBlock
            title="Pesquisa Qualitativa"
            description="Captação do pulso do eleitorado através de métodos como grupos focais e entrevistas em profundidade."
          />
        </div>
      </div>
    </section>
  );
}
