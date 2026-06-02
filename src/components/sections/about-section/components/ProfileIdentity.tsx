import { ICON_MAP } from "@/src/constants/icon-mapper";
import Image from "next/image";

interface Props {
  techStack: string[];
}

export default function ProfileIdentity({ techStack }: Props) {
  const totalItems = techStack.length;

  return (
    <div className="flex flex-col items-center justify-between">
      <figure className="relative flex h-64 w-64 shrink-0 items-center justify-center md:h-128 md:w-lg">
        <div className="relative z-10 h-50 w-50 overflow-hidden rounded-full border-3 border-neutral-800 md:absolute md:h-100 md:w-100">
          <Image
            src={"/foto.jpg"}
            alt="Fotografía de perfil de Antonio Borrero, desarrollador FullStack"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="brightness-90 contrast-125 grayscale"
          />
        </div>

        <div aria-hidden="true" className="absolute inset-0">
          {techStack.map((tech, index) => {
            const startAngle = -90;
            const arcAngle = 180;

            const angle = startAngle + (index * arcAngle) / (totalItems - 1);

            return (
              <div
                key={tech}
                className="absolute top-1/2 left-1/2 z-20 w-fit rounded-full border border-white/30 p-1 text-xs text-white opacity-90 shadow-lg backdrop-blur-md [--radius:7rem] md:p-2 md:text-xl md:[--radius:14rem]"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--radius)) rotate(${-angle}deg)`,
                }}
              >
                {ICON_MAP[tech] || tech}
              </div>
            );
          })}
        </div>
      </figure>
    </div>
  );
}
