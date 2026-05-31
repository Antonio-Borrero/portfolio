export default function ProfileBio() {
  return (
    <div className="flex flex-1 flex-col rounded-2xl px-6">
      <div className="flex flex-col gap-8 leading-relaxed font-light">
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
      </div>
    </div>
  );
}
