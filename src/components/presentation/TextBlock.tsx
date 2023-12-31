export function TextBlock() {
  return (
    <div className="lg:min-w-[550px] w-full flex gap-4 flex-col items-start justify-center">
      <h1 className="text-white font-bold lg:text-5xl text-3xl">
        Especialista em Dinâmicas Políticas Regionais
      </h1>
      <p className="text-secondary text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        ipsa, iusto sit et neque reiciendis quod dolorum repellat.
      </p>
      <button className="bg-highlights text-white py-2 lg:px-8  lg:max-w-40 w-[100%] rounded-full lg:mt-10 mb-20 hover:bg-white hover:text-highlights transition-all">
        Contate nos
      </button>
    </div>
  );
}
