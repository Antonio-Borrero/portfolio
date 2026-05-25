import { ReactNode } from "react";

interface Props {
  longDescription: string | ReactNode;
  roadmap?: string[] | null;
}

export default function ProjectDetails({ longDescription, roadmap }: Props) {
  return (
    <div className="grid grid-cols-12 gap-16">
      <section className="col-span-8 space-y-4">
        <h3 className="font-mono text-xs font-medium tracking-wider text-neutral-500 uppercase">
          Sobre el proyecto
        </h3>
        <p className="text-sm leading-relaxed font-light whitespace-pre-line text-neutral-300">
          {longDescription}
        </p>
      </section>

      {roadmap && (
        <aside className="col-span-4 space-y-4">
          <h3 className="font-mono text-xs font-medium tracking-wider text-neutral-500 uppercase">
            Evolución Técnica
          </h3>
          <ul className="space-y-4">
            {roadmap.map((item: string, index: number) => (
              <li key={index} className="group flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-neutral-500">
                  —
                </span>
                <p className="text-sm leading-relaxed font-light text-neutral-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
