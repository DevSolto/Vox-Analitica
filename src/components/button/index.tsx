interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="bg-highlights text-white font-bold py-2 lg:px-8 px-4 lg:max-w-40 w-[100%] rounded-full lg:mt-10 mb-20 hover:bg-white hover:text-highlights transition-all">
      {text}
    </button>
  );
}
