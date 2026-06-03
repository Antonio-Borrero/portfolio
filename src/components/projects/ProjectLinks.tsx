interface Props {
  projectUrl: string | null;
  githubUrl: string;
  variant?: "horizontal" | "vertical" | "responsive";
}

export default function ProjectLinks({
  projectUrl,
  githubUrl,
  variant = "vertical",
}: Props) {
  return (
    <div
      className={`grid gap-2 ${variant === "horizontal" ? "grid-cols-2" : ""} ${variant === "vertical" ? "grid-cols-1" : ""} ${variant === "responsive" ? "grid-cols-1 self-start sm:grid-cols-2 md:self-auto" : ""} `}
    >
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-700/30 px-4 py-3 text-xs font-medium text-neutral-200 backdrop-blur-md transition-all hover:bg-neutral-700/60 hover:text-white"
        >
          <span>Visitar Sitio</span>
        </a>
      ) : (
        <span className="flex cursor-not-allowed items-center justify-center rounded-lg border border-neutral-900/40 bg-neutral-950/40 px-4 py-3 text-xs font-medium tracking-wide text-neutral-600">
          Solo en entorno local
        </span>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border border-neutral-800 px-4 py-3 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          <span>Repositorio de GitHub</span>
        </a>
      )}
    </div>
  );
}
