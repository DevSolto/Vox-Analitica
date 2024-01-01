interface ItemProps {
  active: (isActive: boolean) => void;
  link: string;
  label: string;
}

export function Item({ active, link, label }: ItemProps) {
  return (
    <div className="">
      <button onClick={() => active(false)}>
        <a className="text-white text-lg" href={link}>
          {label}
        </a>
      </button>
    </div>
  );
}
