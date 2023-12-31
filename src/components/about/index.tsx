import { Qualities } from "./Qualities";

export function About() {
  return (
    <section className="flex items-center justify-center lg:mt-0 mt-10">
      <div className="lg:w-container lg:px-0 px-4 flex flex-col lg:items-center items-start justify-center lg:gap-8">
        <h3 className="text-4xl text-primary font-bold ">Sobre a Vox</h3>
        <p className="text-base text-secondary ">
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
