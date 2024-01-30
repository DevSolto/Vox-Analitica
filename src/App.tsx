import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Presentation } from "./components/presentation";
import { Services } from "./components/services";
import { Whatsapp } from "./components/whatsapp";

function App() {
  return (
    <div className="flex flex-col w-full ">
      <Whatsapp />
      <Presentation />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
