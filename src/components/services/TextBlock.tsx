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
        <KnowMore
          title="Pesquisas Qualitativas"
          description="Uma pesquisa qualitativa é um método de investigação usado para entender profundamente comportamentos, experiências e motivações humanas. Ela se concentra na coleta de dados não quantificáveis, como sentimentos, opiniões e percepções, frequentemente por meio de entrevistas, grupos focais e observação. Este tipo de pesquisa procura explorar as razões e maneiras como as pessoas pensam e se comportam, oferecendo insights detalhados e contextualizados que vão além do que pode ser quantificado. É particularmente valiosa para explorar temas complexos e obter uma compreensão mais rica e profunda de um fenômeno ou comportamento específico."
        />
      </Popover>
    </div>
  );
}
