import backgroundImage from "../../assets/background-top.png";
import { Header } from "../header";
import { TextBlock } from "./TextBlock";
import graicos from "../../assets/graficos.png";
import grafico from "../../assets/grafico-1.png";
export function Presentation() {
  return (
    <section
      className="w-full bg-no-repeat bg-left-bottom flex flex-col items-center max-w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className=" lg:w-container w-full lg:px-0 px-4 lg:overflow-visible bg-cover bg-center flex flex-col lg:flex-row items-center justify-between">
        <img src={grafico} alt="" className="lg:hidden" />
        <TextBlock />
        <img src={graicos} alt="Graficos" className="hidden lg:flex" />
      </div>
    </section>
  );
}
