import ProjectInterface from "../interfaces/project.interface";

export const projects: ProjectInterface[] = [
  {
    id: "habits-tracker",
    name: "Habits-tracker",
    shortDescription:
      "Aplicación Full Stack desarrollada como proyecto final de bootcamp, enfocada en la integración de sistemas y autenticación.",
    longDescription: (
      <>
        Este fue el <strong>proyecto final</strong> de mi formación en 4Geeks
        Academy. El reto principal fue coordinar un{" "}
        <strong>flujo de datos completo</strong>: desde el diseño de la base de
        datos con <strong>SQLAlchemy</strong> y la creación de una{" "}
        <strong>REST API con Python/Flask</strong>, hasta el consumo en el
        frontend con <strong>React</strong>. Fue mi primer acercamiento real a
        la <strong>persistencia de datos</strong> y a la seguridad mediante{" "}
        <strong>JWT</strong>. Aprendí a gestionar estados complejos y a entender
        cómo se comunican las diferentes capas de una aplicación profesional
        bajo un <strong>entorno de desarrollo colaborativo</strong>.
      </>
    ),
    techStack: [
      "React.js",
      "Python",
      "Flask",
      "SQLAlchemy",
      "Bootstrap",
      "JWT",
    ],
    mainImage: "/projects/habits-tracker/habitsTrackerMain.webp",
    gallery: [
      "/projects/habits-tracker/habitsTrackerMain.webp",
      "/projects/habits-tracker/habitsTracker1.webp",
      "/projects/habits-tracker/habitsTracker2.webp",
    ],
    projectUrl: null,
    githubUrl: "https://github.com/Antonio-Borrero/proyecto-final-4Geeks",
    category: "Full Stack",
    type: "Proyecto de estudio",
    roadmap: [
      "Reescribir la aplicación desde cero, en solitario, en un repositorio nuevo, para dejarla atribuida a un único autor.",
      "Migrar a un stack TypeScript de punta a punta: framework de frontend + Node/Express en el backend, en lugar de Python/Flask.",
      "Rediseñar la interfaz de usuario (UI/UX) y mejorar responsiveness.",
      "Aplicar mejores decisiones de arquitectura ahora que los requisitos ya se conocen de la primera versión.",
    ],
  },
  {
    id: "pokedex",
    name: "Pokédex",
    shortDescription:
      "Proyecto de aprendizaje independiente enfocado en experimentar con Next.js 15 y la gestión de estado con Zustand.",
    longDescription: (
      <>
        Este es mi <strong>primer proyecto personal</strong> independiente,
        desarrollado fuera de cualquier bootcamp o curso formal. Mi objetivo no
        era construir la `app perfecta`, sino experimentar con nuevas
        herramientas y comprender sus flujos de trabajo. A lo largo del
        desarrollo, me centré en entender el <strong>flujo de datos</strong> y
        cómo mejorar la experiencia de usuario al manejar los grandes volúmenes
        de información de la <strong>PokéAPI</strong>. Implementé{" "}
        <strong>Zustand</strong> para probar una alternativa más ligera a Redux
        y utilicé <strong>Intersection Observer</strong> para gestionar la carga
        de imágenes, priorizando el rendimiento básico. También fue mi primer
        contacto real con <strong>Jest</strong>, donde empecé a aprender la
        importancia de escribir <strong>pruebas unitarias</strong>, aunque
        todavía estoy perfeccionando mi metodología de pruebas.
      </>
    ),
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Jest"],
    mainImage: "/projects/pokedex/pokedexMain.webp",
    gallery: [
      "/projects/pokedex/pokedexMain.webp",
      "/projects/pokedex/pokedex1.webp",
      "/projects/pokedex/pokedex2.webp",
      "/projects/pokedex/pokedex3.webp",
    ],
    projectUrl: null,
    githubUrl: "https://github.com/Antonio-Borrero/pokedex-app",
    category: "Frontend",
    type: "Proyecto personal",
    roadmap: [
      "Rediseñar la interfaz de usuario (UI/UX) migrando del layout base hacia un más estilizado.",
      "Optimizar el rendimiento y la carga inicial sustituyendo el fetch masivo  por una estrategia de búsqueda directa a la API.",
    ],
  },
  {
    id: "maps-app",
    name: "Maps App",
    shortDescription:
      "Integración de mapas interactivos, gestión de geolocalización y estado reactivo con Signals.",
    longDescription: (
      <>
        Este proyecto, realizado como parte del curso de{" "}
        <strong>Angular de DevTalles (Fernando Herrera)</strong>, se centra en
        la integración de datos geoespaciales mediante{" "}
        <strong>Mapbox GL</strong>. Aprendí a gestionar el ciclo de vida de
        mapas interactivos, implementando funciones como la creación y{" "}
        <strong>persistencia de marcadores</strong> en LocalStorage y la
        navegación fluida entre coordenadas.
      </>
    ),
    techStack: ["Angular", "TypeScript", "Tailwind CSS", "daisyUI"],
    mainImage: "/projects/maps-app/mapsAppMain.webp",
    gallery: [
      "/projects/maps-app/mapsAppMain.webp",
      "/projects/maps-app/mapsApp1.webp",
      "/projects/maps-app/mapsApp2.webp",
    ],
    projectUrl: "https://maps-app-angular-ajb.netlify.app/#/fullscreen",
    githubUrl: "https://github.com/Antonio-Borrero/maps-app-angular",
    category: "Frontend",
    type: "Proyecto de estudio",
    roadmap: [
      "Migrar la gestión de estado hacia Angular Signals para alinearlo con las mejores prácticas modernas del framework.",
      "Implementar persistencia de marcadores en un backend real en lugar de depender exclusivamente de LocalStorage.",
      "Añadir geolocalización en tiempo real con cálculo de rutas dinámicas entre la posición del usuario y los marcadores.",
    ],
  },
  {
    id: "restaurants-api",
    name: "Restaurants-api",
    shortDescription:
      "API REST multi-tenant construida por iniciativa propia para centralizar menús de restaurantes, con autenticación, permisos por restaurante y soporte multi-idioma.",
    longDescription: (
      <>
        Este es mi primer <strong>backend por iniciativa propia</strong>, sin
        curso ni bootcamp de por medio. El objetivo no era resolver un
        ejercicio, sino construir una API real: un backend{" "}
        <strong>multi-tenant</strong> capaz de servir el menú de varios
        restaurantes a la vez, cada uno con sus propios miembros, roles y{" "}
        <strong>permisos configurables</strong> (no roles fijos globales).
        Diseñé el modelo de datos pensando en menús{" "}
        <strong>multi-idioma</strong> desde el principio, separé la lógica en
        capas (routes → controllers → services → mappers) para que cada pieza
        tenga una única responsabilidad, y autentiqué con <strong>JWT</strong> y{" "}
        <strong>argon2</strong>. Validé cada entrada con <strong>Zod</strong> y
        escribí <strong>tests de integración</strong> con Vitest y Supertest
        para los flujos críticos (auth, permisos, borrado en cascada), y lo
        desplegué en producción con Render (API) y Neon (PostgreSQL).
      </>
    ),
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "JWT",
    ],
    mainImage: "/projects/restaurants-api/restaurantsApiMain.webp",
    gallery: [
      "/projects/restaurants-api/restaurantsApiMain.webp",
      "/projects/restaurants-api/restaurantsApi_dataModel.webp",
      "/projects/restaurants-api/restaurantsApi_authLogin.webp",
      "/projects/restaurants-api/restaurantsApi_getDish.webp",
      "/projects/restaurants-api/restaurantsApi_testsPassing.webp",
    ],
    projectUrl: "https://restaurants-api-a2hv.onrender.com",
    githubUrl: "https://github.com/Antonio-Borrero/restaurants-api",
    category: "Backend",
    type: "Proyecto personal",
    roadmap: [
      "Construir un panel administrativo (dashboard) para gestionar restaurantes, categorías y platos de forma visual.",
      "Documentar la API con OpenAPI, generado a partir de los schemas de Zod ya existentes.",
      "Añadir recuperación de contraseña y gestión de cuenta propia (cambiar email/contraseña autenticado).",
    ],
  },
];

export const STACK_LIST = Array.from(
  new Set(projects.flatMap((project) => project.techStack).sort()),
);
