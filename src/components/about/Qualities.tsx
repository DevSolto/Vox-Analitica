import { Card } from "./Card";
import cidade from "../../assets/centro-da-cidade-100.png";
import lupa from "../../assets/lupa-100.png";
import equipe from "../../assets/equipe-100.png";
import custo from "../../assets/custo-100.png";
import parceria from "../../assets/parceria-100.png";
import privacidade from "../../assets/privacidade-100.png";

export function Qualities() {
  return (
    <div className="mt-4 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row grid-rows-subgrid mx-auto">
      <Card
        imgSrc={cidade}
        title="Foco em Cidades Médias e Pequenas"
        description="Entendemos a unicidade de cada comunidade, com suas histórias e desafios próprios."
      />
      <Card
        imgSrc={lupa}
        title="Análises Detalhadas e Personalizadas"
        description="Utilizamos pesquisas qualitativas e quantitativas para capturar a realidade local, com técnicas avançadas para insights completos."
      />
      <Card
        imgSrc={equipe}
        title="Equipe Experiente"
        description="Profundo conhecimento do Nordeste para insights que vão além dos números, apoiando campanhas eleitorais e gestões públicas eficazes."
      />
      <Card
        imgSrc={custo}
        title="Acessibilidade"
        description="Preços acessíveis para que todas as cidades e grupos políticos se beneficiem de pesquisas de qualidade."
      />
      <Card
        imgSrc={parceria}
        title="Parceria e Comprometimento"
        description="Compromisso com o desenvolvimento político local, promovendo um futuro mais promissor para cada comunidade."
      />
      <Card
        imgSrc={privacidade}
        title="Privacidade Assegurada"
        description="Compromisso com a confidencialidade e segurança dos dados. Tratamos todas as informações com o máximo de cuidado, seguindo rigorosos protocolos de privacidade."
      />
    </div>
  );
}
