import { AppleLogo } from "phosphor-react";

export function Qualities() {
  return (
    <div className="lg:w-container flex gap-2 lg:gap-8 justify-between lg:flex-row flex-col  text-center lg:mt-10 mt-4">
      <div className="flex lg:flex-col items-center justify-center">
        <div className="">
          <AppleLogo
            size={150}
            className="w-full"
            color="#0AE6FF"
            weight="light"
          />
        </div>
        <div className="flex 0 flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base  lg:text-center text-left font-bold">
            Foco em Cidades Médias e Pequenas
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Entendemos a unicidade de cada comunidade suas histórias e desafios
            próprios.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <div className="">
          <AppleLogo
            size={150}
            className="w-full"
            color="#0AE6FF"
            weight="light"
          />
        </div>
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-baselg:text-center text-left  font-bold">
            Análises Detalhadas e Personalizadas
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Empregamos técnicas avançadas em pesquisas qualitativas e
            quantitativas.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <div className="">
          <AppleLogo
            size={150}
            className="w-full"
            color="#0AE6FF"
            weight="light"
          />
        </div>
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base lg:text-center text-left font-bold">
            Equipe Experiente
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Profundo conhecimento do Nordeste para insights que vão além dos
            números.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <div className="">
          <AppleLogo
            size={150}
            className="w-full"
            color="#0AE6FF"
            weight="light"
          />
        </div>
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base lg:text-center text-left font-bold">
            Acessibilidade
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Preços acessíveis para que todas as cidades e grupos políticos se
            beneficiem de pesquisas de qualidade.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col items-center justify-center">
        <div className="">
          <AppleLogo
            size={150}
            className="w-full"
            color="#0AE6FF"
            weight="light"
          />
        </div>
        <div className="flex flex-col lg:items-center items-start justify-center ml-4">
          <h3 className="text-primary text-base lg:text-center text-left font-bold">
            Parceria e Comprometimento
          </h3>
          <p className="text-secondary lg:text-center text-start text-sm">
            Compromisso com o desenvolvimento político local, promovendo um
            futuro mais promissor para cada comunidade.
          </p>
        </div>
      </div>
    </div>
  );
}
