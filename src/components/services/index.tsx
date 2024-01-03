import grupo from "../../assets/grupo-100.png";
import entrevista from "../../assets/entrevista-100.png";
import precisao from "../../assets/precisão-100.png";
import analise from "../../assets/análise-100.png";

import { Card } from "../about/Card";
import { TextBlock } from "./TextBlock";
import backgroundImage from "../../assets/background-mid.png";

export function Services() {
  return (
    <section
      id="servicos"
      className="lg:py-10 py-24 flex flex-col items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="text-4xl text-white font-bold ">Serviços</h3>
      <div className="lg:w-container flex flex-col lg:gap-10 items-center">
        <div className=" w-full lg:px-0 px-4 lg:overflow-visible bg-cover bg-center flex flex-col lg:flex-row items-start lg:justify-center gap-20 lg:gap-20 mt-10 lg:mt-20">
          <div className="lg:min-w-[550px]  flex gap-4 flex-col h-full justify-between">
            <TextBlock
              title="Pesquisas Qualitativa"
              description="Captação do pulso do eleitorado através de métodos como grupos focais e entrevistas em profundidade."
              descriptionPopover="Uma pesquisa qualitativa é um método de investigação usado para entender profundamente comportamentos, experiências e motivações humanas. Ela se concentra na coleta de dados não quantificáveis, como sentimentos, opiniões e percepções, frequentemente por meio de entrevistas, grupos focais e observação. Este tipo de pesquisa procura explorar as razões e maneiras como as pessoas pensam e se comportam, oferecendo insights detalhados e contextualizados que vão além do que pode ser quantificado. É particularmente valiosa para explorar temas complexos e obter uma compreensão mais rica e profunda de um fenômeno ou comportamento específico."
            />
            <div className="mt-4 grid gap-10 sm:grid-cols-2  grid-cols-1 grid-flow-row grid-rows-subgrid mx-auto">
              <Card
                imgSrc={grupo}
                title="Grupos Focais"
                description="Para insights profundos e estratégias detalhadas, com análise de opiniões coletivas e dinâmicas de grupo."
              />
              <Card
                imgSrc={entrevista}
                title="Entrevistas em Profundidade "
                description="Acessível e eficaz para compreender motivações e opiniões individuais."
              />
            </div>
          </div>
          <div className="lg:min-w-[550px]  flex gap-4 flex-col h-full justify-between">
            <TextBlock
              title="Pesquisas Quantitativa"
              description="A pesquisa quantitativa coleta e analisa dados numéricos para quantificar comportamentos e opiniões."
              descriptionPopover="Uma pesquisa quantitativa é um método de coleta de dados que se concentra em quantificar informações, usando estatísticas e modelos matemáticos para analisar variáveis. Este tipo de pesquisa é caracterizado pela utilização de instrumentos padronizados, como questionários e enquetes, que permitem a coleta de dados em grande escala. O objetivo é produzir resultados que sejam representativos da população e que possam ser generalizados para grupos maiores. A pesquisa quantitativa é eficaz para medir frequências, proporções, e tendências, fornecendo uma base sólida para a tomada de decisões com base em dados numéricos objetivos. É amplamente utilizada em diversos campos, como ciências sociais, marketing, e pesquisas de opinião, oferecendo insights claros e mensuráveis sobre padrões de comportamento e opiniões."
            />
            <div className="mt-4 grid gap-10 lg:grid-cols-2 grid-cols-1 grid-flow-row grid-rows-subgrid mx-auto">
              <Card
                imgSrc={precisao}
                title="Precisão nos Detalhes"
                description="Técnicas estatísticas avançadas para garantir dados representativos e confiáveis."
              />
              <Card
                imgSrc={analise}
                title="Profundidade na Análise"
                description="Análises detalhadas para compreender tendências, dados demográficos e padrões."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
