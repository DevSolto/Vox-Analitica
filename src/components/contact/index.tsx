import { WhatsappLogo } from "phosphor-react";

export function Contact() {
  return (
    <section id="contact" className="lg:pb-24 pb-20 flex flex-col items-center">
      <div className="lg:w-container w-[90%] flex lg:flex-row flex-col lg:gap-10 gap-4 items-center justify-center">
        <div className="lg:w-[50%] flex justify-center items-center">
          <p className="text-primary font-bold lg:text-4xl text-xl lg:text-right">
            Entre em contato conosco pelo{" "}
            <span className="bg-secondary  px-2">WhatsApp</span>
          </p>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center lg:justify-start">
          <button className="flex items-center justify-center gap-3 bg-highlights py-3 px-5 rounded-xl hover:bg-[#25D366] transition-all text-white text-xl font-semibold">
            Enviar mensagem{" "}
            <span>
              <WhatsappLogo weight="bold" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
