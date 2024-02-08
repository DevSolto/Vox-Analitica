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
      <a href="https://api.whatsapp.com/send?phone=+558192411466&text=Ol%C3%A1%2C+vim+pelo+site+voxanalitica.com.br">
        <Button text="Contate nos" />
      </a>
    </div>
  );
}
