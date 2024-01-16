export function Menu() {
  return (
    <nav className="text-secondary text-base gap-10 hidden lg:flex">
      <a className="hover:text-white transition-all" href="#about">
        Sobre
      </a>
      <a className="hover:text-white transition-all" href="#services">
        Serviços
      </a>
      <a className="hover:text-white transition-all" href="#contact">
        Contato
      </a>
    </nav>
  );
}
