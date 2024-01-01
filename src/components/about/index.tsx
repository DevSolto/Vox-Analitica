import { Qualities } from "./Qualities";

export function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center lg:mt-0 mt-10"
    >
      <div className="lg:w-container lg:px-0 px-4 flex flex-col lg:items-center items-start justify-center lg:gap-8">
        <h3 className="text-4xl text-primary font-bold ">Sobre a Vox</h3>
        <p className="text-base text-secondary ">
          Da paixão por política e dados em Olinda para líderes em pesquisa
          eleitoral no Nordeste. Conheça nosso intituto.
        </p>
        <Qualities />
      </div>
    </section>
  );
}
