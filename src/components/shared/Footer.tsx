export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-neutral-950/60 py-10 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="sr-only">Sobre el Proyecto</h2>
        <div className="grid grid-cols-3 items-start gap-12">
          <section className="max-w-prose">
            <h3 className="mb-3 tracking-wide text-neutral-200 uppercase">
              Arquitectura
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Desarrollado bajo principios SOLID y DRY, priorizando componentes
              modulares, legibles y sin sobreingeniería. Un proyecto en
              constante evolución que refleja mi aprendizaje en buenas prácticas
              y arquitectura.
            </p>
          </section>
          <section className="max-w-prose">
            <h3 className="mb-3 tracking-wide text-neutral-200 uppercase">
              Infraestructura y stack
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Construido con Next.js (SSR/SEO), TypeScript para un código
              robusto con tipado estricto, y Tailwind CSS. Desplegado en Vercel
              mediante un flujo automatizado de CI/CD.
            </p>
          </section>
          <section className="-mt-4 flex max-w-prose flex-col justify-between rounded-lg border border-neutral-800/50 p-4">
            <h3 className="mb-3 tracking-wide text-neutral-200 uppercase">
              Código abierto
            </h3>
            <p className="mb-2 text-sm leading-relaxed text-neutral-400">
              Proyecto open source con repositorio público en GitHub para
              explorar su estructura, revisar el historial de cambios o analizar
              las decisiones de diseño y mantenibilidad.
            </p>
            <a
              href="https://github.com/Antonio-Borrero/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              Explorar código fuente →
            </a>
          </section>
        </div>
        <div className="mt-12 flex items-center justify-between gap-4 border-t border-neutral-900/60 pt-6 font-mono text-xs text-neutral-500">
          <p>Diseñado y desarrollado por Antonio Borrero • {currentYear}</p>
          <p className="flex items-center gap-1.5">
            Santander, Cantabria, España
          </p>
        </div>
      </div>
    </footer>
  );
}
