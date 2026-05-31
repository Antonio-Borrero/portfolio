import { ICON_MAP } from "@/src/constants/icon-mapper";
import Image from "next/image";

interface Props {
  techStack: string[];
}

export default function ProfileIdentity({ techStack }: Props) {
  const totalItems = techStack.length;

  return (
    <div className="flex flex-col items-center justify-between p-6">
      <figure className="relative flex h-128 w-lg shrink-0 items-center justify-center">
        <div className="absolute z-10 h-100 w-100 overflow-hidden rounded-full border-3 border-neutral-800">
          <Image
            src={"/foto.jpg"}
            alt="Fotografía de perfil de Antonio Borrero, desarrollador FullStack"
            fill
            priority
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
                className="absolute top-1/2 left-1/2 z-20 w-fit rounded-full border border-white/30 p-2 text-xl text-white opacity-90 shadow-lg backdrop-blur-md"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(14rem) rotate(${-angle}deg)`,
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
