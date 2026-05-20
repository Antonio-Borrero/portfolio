interface Props {
  category: string;
  type: string;
  name: string;
}

export default function ({ category, type, name }: Props) {
  return (
    <>
      <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
        {type} / {category}
      </span>
      <h2 className="text-4xl leading-none font-light tracking-[0.2em] text-white uppercase">
        {name}
      </h2>
    </>
  );
}
