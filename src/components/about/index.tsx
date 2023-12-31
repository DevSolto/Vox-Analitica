import { Qualities } from "./Qualities";

export function About() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-container flex flex-col items-center justify-center gap-8">
        <h3 className="text-4xl text-primary font-bold ">Sobre a Vox</h3>
        <p className="text-base text-secondary text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          quos sint odit doloremque quasi fuga velit sequi id vitae iusto enim
          eum, fugit itaque corporis tempora assumenda necessitatibus porro!
          Iure.
        </p>
        <Qualities />
      </div>
    </section>
  );
}
