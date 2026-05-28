import { projects } from "@/src/data/projects";
import Image from "next/image";
import { ICON_MAP } from "@/src/constants/icon-mapper";

export default function AboutSection() {
  const stackList = projects.flatMap((project) => project.techStack);
  const stack = Array.from(new Set(stackList)).sort();

  const totalItems = stack.length;

  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen items-center justify-between pt-28 pb-28"
    >
      {/* Tarjeta principal */}
      <div className="mx-auto max-w-[75%] rounded-2xl border-3 border-neutral-800 bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] p-6 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-10 rounded-2xl border-3 border-neutral-800/60 pb-6">
          {/* Foto y stack */}
          <div className="flex flex-col items-center justify-between p-6">
            <div className="relative flex h-128 w-lg shrink-0 items-center justify-center">
              <div className="absolute z-10 h-100 w-100 overflow-hidden rounded-full border-3 border-neutral-800">
                <Image
                  src={"/foto.jpg"}
                  alt="profile photo"
                  fill
                  className="brightness-90 contrast-125 grayscale"
                />
              </div>

              {stack.map((tech, index) => {
                const startAngle = -90;
                const arcAngle = 180;

                const angle =
                  startAngle + (index * arcAngle) / (totalItems - 1);

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
            {/* Stack */}
            <div className="mt-4 w-full border-l border-white/10 pl-5">
              <h4 className="mb-2 font-mono text-xs tracking-wider text-neutral-400 uppercase">
                Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/5 bg-neutral-800/40 px-3 py-1.5 text-xs font-bold tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div className="flex flex-1 flex-col justify-between rounded-2xl px-6">
            <div className="flex flex-col gap-4 pt-10 leading-relaxed font-light">
              <h3 className="mb-6 text-2xl font-light tracking-wider text-white uppercase">
                Sobre mi
              </h3>
              <p>
                Soy desarrollador{" "}
                <strong className="font-medium text-white">Full Stack</strong>{" "}
                con inclinación por el{" "}
                <strong className="font-medium text-white">Front-End</strong>.
                Mi objetivo principal es construir aplicaciones con un código
                limpio, ordenado y una arquitectura sólida siguiendo principios{" "}
                <strong className="font-medium text-white">SOLID</strong> y{" "}
                <strong className="font-medium text-white">DRY</strong> —algo
                sobre lo que sigo aprendiendo y mejorando a base de acierto,
                error y práctica constante—.
              </p>

              <p>
                Actualmente en el Front-End utilizo{" "}
                <strong className="font-medium text-white">TypeScript</strong>{" "}
                con <strong className="font-medium text-white">Next.js</strong>{" "}
                o <strong className="font-medium text-white">Angular</strong>{" "}
                para crear interfaces modernas, optimizadas y con diseños
                intuitivos, atractivos y amigables para el usuario utilizando{" "}
                <strong className="font-medium text-white">CSS (Sass)</strong>,{" "}
                <strong className="font-medium text-white">Tailwind CSS</strong>{" "}
                u otras librerías.
              </p>

              <p>
                En el Back-End, complemento mis aplicaciones desarrollando APIs
                y gestionando bases de datos; para ello he estructurado
                proyectos utilizando un stack de{" "}
                <strong className="font-medium text-white">Python</strong>,{" "}
                <strong className="font-medium text-white">Flask</strong> y{" "}
                <strong className="font-medium text-white">SQLAlchemy</strong>.
              </p>
              <div className="mt-5 border-t border-white/5 pt-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-light tracking-wide">
                  <div>
                    <span className="mb-0.5 block font-medium tracking-wider text-neutral-500 uppercase">
                      Disponibilidad
                    </span>
                    <span className="text-neutral-300">
                      15 días de preaviso
                    </span>
                  </div>
                  <div>
                    <span className="mb-0.5 block font-medium tracking-wider text-neutral-500 uppercase">
                      Modalidad
                    </span>
                    <span className="text-neutral-300">Remoto / Híbrido</span>
                  </div>
                  <div className="col-span-2">
                    <span className="mb-0.5 block font-medium tracking-wider text-neutral-500 uppercase">
                      Ubicación
                    </span>
                    <span className="text-neutral-300">
                      Santander, España{" "}
                      <span className="text-neutral-500">
                        (Relocalización disponible)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end pt-4">
              <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                {/* Botón Descargar CV */}
                <a
                  href="/CV-Antonio-Borrero-FullStack.pdf"
                  download
                  className="w-full rounded-lg border border-neutral-500 bg-neutral-700/30 px-4 py-3 text-center text-xs font-semibold tracking-wide backdrop-blur-md transition-all hover:bg-neutral-700/60 hover:text-white"
                >
                  Descargar CV
                </a>

                {/* Botón Contactar */}
                <a
                  href="#contact"
                  className="w-full rounded-lg border border-neutral-500 bg-neutral-700/30 px-4 py-3 text-center text-xs font-semibold tracking-wide backdrop-blur-md transition-all hover:bg-neutral-700/60 hover:text-white"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
