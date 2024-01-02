import { About } from "./components/about";
import { Presentation } from "./components/presentation";
import { Services } from "./components/services";
import { Whatsapp } from "./components/whatsapp";

function App() {
  return (
    <div className="flex flex-col w-full gap-20">
      <Whatsapp />
      <Presentation />
      <About />
      <Services />
    </div>
  );
}

export default App;
