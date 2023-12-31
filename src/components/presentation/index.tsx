import backgroundImage from "../../assets/background-top.png";
import { Header } from "../header";
import { TextBlock } from "./TextBlock";
import graicos from "../../assets/graficos.png";

export function Presentation() {
  return (
    <section
      className="w-full bg-no-repeat bg-bottom flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="w-container overflow-visible bg-cover bg-center flex items-center justify-between">
        <TextBlock />
        <img src={graicos} alt="Graficos" className="" />
      </div>
    </section>
  );
}
