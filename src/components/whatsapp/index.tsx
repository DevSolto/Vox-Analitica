import { WhatsappLogo } from "phosphor-react";

export function Whatsapp() {
  return (
    <a
      target="_blank"
      href="https://api.whatsapp.com/send?phone=+558192411466&text=Ol%C3%A1%2C+vim+pelo+site+voxanalitica.com"
      className="fixed bg-[#25D366] text-white p-2 rounded-full bottom-4 right-4"
    >
      <WhatsappLogo size={45} />
    </a>
  );
}
