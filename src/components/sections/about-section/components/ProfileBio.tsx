export default function ProfileBio() {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-2xl px-6">
      <div className="flex flex-col gap-4 pt-10 leading-relaxed font-light">
        <h3
          id="about-heading"
          className="mb-6 text-2xl font-light tracking-wider text-white uppercase"
        >
          Sobre mi
        </h3>
        <p>
          Soy desarrollador{" "}
          <strong className="font-medium text-white">Full Stack</strong> con
          inclinación por el{" "}
          <strong className="font-medium text-white">Front-End</strong>. Mi
          objetivo principal es construir aplicaciones con un código limpio,
          ordenado y una arquitectura sólida siguiendo principios{" "}
          <strong className="font-medium text-white">SOLID</strong> y{" "}
          <strong className="font-medium text-white">DRY</strong> —algo sobre lo
          que sigo aprendiendo y mejorando a base de acierto, error y práctica
          constante—.
        </p>

        <p>
          Actualmente en el Front-End utilizo{" "}
          <strong className="font-medium text-white">TypeScript</strong> con{" "}
          <strong className="font-medium text-white">Next.js</strong> o{" "}
          <strong className="font-medium text-white">Angular</strong> para crear
          interfaces modernas, optimizadas y con diseños intuitivos, atractivos
          y amigables para el usuario utilizando{" "}
          <strong className="font-medium text-white">CSS (Sass)</strong>,{" "}
          <strong className="font-medium text-white">Tailwind CSS</strong> u
          otras librerías.
        </p>

        <p>
          En el Back-End, complemento mis aplicaciones desarrollando APIs y
          gestionando bases de datos; para ello he estructurado proyectos
          utilizando un stack de{" "}
          <strong className="font-medium text-white">Python</strong>,{" "}
          <strong className="font-medium text-white">Flask</strong> y{" "}
          <strong className="font-medium text-white">SQLAlchemy</strong>.
        </p>
        <address className="mt-5 border-t border-white/5 pt-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-light tracking-wide">
            <div>
              <span className="mb-0.5 block font-medium tracking-wider text-neutral-500 uppercase">
                Disponibilidad
              </span>
              <span className="text-neutral-300">15 días de preaviso</span>
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
        </address>
      </div>
      <div className="flex w-full justify-end pt-4">
        <div className="grid w-full max-w-sm grid-cols-2 gap-4">
          {/* Botón Descargar CV */}
          <a
            href="/CV-Antonio-Borrero-FullStack.pdf"
            download
            aria-label="Descargar el Currículum Vitae de Antonio Borrero en PDF"
            className="w-full rounded-lg border border-neutral-500 bg-neutral-700/30 px-4 py-3 text-center text-xs font-semibold tracking-wide backdrop-blur-md transition-all hover:bg-neutral-700/60 hover:text-white"
          >
            Descargar CV
          </a>

          {/* Botón Contactar */}
          <a
            href="#contact"
            aria-label="Ir al sección de contacto"
            className="w-full rounded-lg border border-neutral-500 bg-neutral-700/30 px-4 py-3 text-center text-xs font-semibold tracking-wide backdrop-blur-md transition-all hover:bg-neutral-700/60 hover:text-white"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
