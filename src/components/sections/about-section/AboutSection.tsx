import { STACK_LIST } from "@/src/data/projects";
import ProfileIdentity from "./components/ProfileIdentity";
import ProfileBio from "./components/ProfileBio";

export default function AboutSection() {
  const stack = STACK_LIST;

  return (
    <section id="about" className="min-h-screen px-4 pt-32 pb-16">
      <header className="mx-auto mb-8 flex max-w-7xl flex-col gap-5 border-b border-white/10 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-light tracking-[0.2em] text-white uppercase md:text-4xl"
          >
            Sobre mi
          </h2>
          <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">
            Perfil // Resumen
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start md:self-auto">
          {/* Botón Descargar CV */}
          <a
            href="/CV-Antonio_Borrero-FullStack.pdf"
            download
            aria-label="Descargar el Currículum Vitae de Antonio Borrero en PDF"
            className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 p-2 px-5 text-xs tracking-wider text-nowrap text-neutral-400 uppercase transition-colors duration-300 hover:border-white/20 hover:text-neutral-300 md:text-sm"
          >
            Descargar CV
          </a>

          {/* Botón Contactar */}
          <a
            href="#contact"
            aria-label="Ir al sección de contacto"
            className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 p-2 px-5 text-xs tracking-wider text-neutral-400 uppercase transition-colors duration-300 hover:border-white/20 hover:text-neutral-300 md:text-sm"
          >
            Contactar
          </a>
        </div>
      </header>
      <div className="mx-auto max-w-[95%] rounded-2xl border-2 border-neutral-800 bg-linear-to-r from-[#171717] via-[#262626] to-[#171717] p-6 shadow-2xl backdrop-blur-sm md:max-w-[75%]">
        <article className="grid grid-cols-1 items-center rounded-2xl border-2 border-neutral-800/60 pb-10 md:grid-cols-2 md:gap-x-10">
          <ProfileIdentity techStack={stack} />
          <ProfileBio />
          <div className="ml-5 border-l border-white/10 pl-5 md:col-span-2">
            <h4 className="mb-2 font-mono text-xs tracking-wider text-neutral-400 uppercase">
              Stack:
            </h4>
            <ul className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-2xl border border-white/5 bg-neutral-800/40 px-3 py-1.5 text-xs font-bold tracking-wide shadow-sm"
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
