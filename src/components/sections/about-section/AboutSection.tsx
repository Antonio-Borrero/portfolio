import { STACK_LIST } from "@/src/data/projects";
import ProfileIdentity from "./components/ProfileIdentity";
import ProfileBio from "./components/ProfileBio";

export default function AboutSection() {
  const stack = STACK_LIST;

  return (
    <section id="about" className="min-h-screen px-4 pt-32 pb-16">
      <header className="mx-auto mb-16 flex max-w-7xl items-end justify-between border-b border-white/10 pb-8">
        <div>
          <h2
            id="about-heading"
            className="text-4xl font-light tracking-[0.2em] text-white uppercase"
          >
            Sobre mi
          </h2>
          <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">
            Perfil // Resumen
          </p>
        </div>
        <div className="flex gap-4">
          {/* Botón Descargar CV */}
          <a
            href="/CV-Antonio-Borrero-FullStack.pdf"
            download
            aria-label="Descargar el Currículum Vitae de Antonio Borrero en PDF"
            className="group flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 p-2 px-5 text-sm tracking-wider text-neutral-400 uppercase transition-colors duration-300 hover:border-white/20 hover:text-neutral-300"
          >
            Descargar CV
          </a>

          {/* Botón Contactar */}
          <a
            href="#contact"
            aria-label="Ir al sección de contacto"
            className="group flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 p-2 px-5 text-sm tracking-wider text-neutral-400 uppercase transition-colors duration-300 hover:border-white/20 hover:text-neutral-300"
          >
            Contactar
          </a>
        </div>
      </header>
      <div className="mx-auto max-w-[75%] rounded-2xl border-3 border-neutral-800 bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] p-6 shadow-2xl backdrop-blur-sm">
        <article className="grid grid-cols-2 items-center gap-x-10 rounded-2xl border-3 border-neutral-800/60 pb-10">
          <ProfileIdentity techStack={stack} />
          <ProfileBio />
          <div className="col-span-2 ml-5 border-l border-white/10 pl-5">
            <h4 className="mb-2 font-mono text-xs tracking-wider text-neutral-400 uppercase">
              Stack:
            </h4>
            <ul className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-white/5 bg-neutral-800/40 px-3 py-1.5 text-xs font-bold tracking-wide shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
