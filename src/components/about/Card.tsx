export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export function Card({ imgSrc, title, description }: CardProps) {
  return (
    <div className="max-w-80 shadow-xl rounded-3xl p-6 h-full">
      <img className="mb-6" src={imgSrc} />
      <h3 className="font-bold text-primary text-lg">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
