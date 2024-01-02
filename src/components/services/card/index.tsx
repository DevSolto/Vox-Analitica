interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export function Card({ imgSrc, title, description }: CardProps) {
  return (
    <div>
      <img src={imgSrc} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
