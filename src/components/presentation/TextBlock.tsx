import { Button } from "../button";

export function TextBlock() {
  return (
    <div className="lg:min-w-[550px] w-full flex gap-4 flex-col items-start justify-center mb-10">
      <h1 className="text-white font-bold lg:text-5xl text-3xl">
        Descubra o Nordeste político com a Vox Analítica
      </h1>
      <p className="text-secondary text-lg">
        A sua janela para o cenário eleitoral regional. Expertise local com
        alcance e precisão global.
      </p>
      <Button text="Contate nos" />
    </div>
  );
}
