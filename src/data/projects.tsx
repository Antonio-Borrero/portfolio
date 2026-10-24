import ProjectInterface from "../interfaces/project.interface";

export const projects: ProjectInterface[] = [
  {
    id: "nostos-website",
    name: "Nostos-website",
    shortDescription:
      "Sitio web profesional para un gastrobar griego, con identidad de marca propia, carta interactiva y SEO local — construido con Next.js y TypeScript.",
    longDescription: (
      <>
        Diseño y desarrollo completo del sitio web de Nostos, un gastrobar
        griego, cuidando tanto la <strong>experiencia de usuario</strong> como
        el <strong>SEO local</strong>. Construí la identidad visual desde cero
        sobre <strong>Next.js 16</strong> y <strong>TypeScript</strong>. La
        carta usa un patrón de preview/modal para mostrar cada plato sin
        recargar la página, con animaciones hechas con <strong>Motion</strong> y
        datos estructurados (<strong>JSON-LD</strong>) para posicionamiento en
        buscadores. El formulario de reservas está pensado para conectarse a un
        backend real más adelante, reutilizando la misma arquitectura
        multi-idioma de restaurants-api.
      </>
    ),
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    mainImage: "/projects/nostos-website/nostosMain.webp",
    gallery: [
      "/projects/nostos-website/nostosMain.webp",
      "/projects/nostos-website/nostos2.webp",
      "/projects/nostos-website/nostos3.webp",
      "/projects/nostos-website/nostos4.webp",
      "/projects/nostos-website/nostos5.webp",
    ],
    projectUrl: "https://nostos-webpage.vercel.app",
    githubUrl: "https://github.com/Antonio-Borrero/nostos-webpage",
    category: "Frontend",
    type: "Proyecto profesional",
    roadmap: [
      "Conectar el formulario de reservas y la carta a un backend real (restaurants-api), reutilizando las traducciones multi-idioma ya construidas ahí.",
      "Internacionalizar el sitio (dictionaries + rutas [lang]) para servir contenido en varios idiomas.",
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
  {
    id: "restaurants-admin",
    name: "Restaurants-admin",
    shortDescription:
      "Panel administrativo que consume restaurants-api (API propia) para la gestión de cartas de restaurantes (categorías y platos) mediante operaciones CRUD, construido con Angular 21.",
    longDescription: (
      <>
        Este proyecto es un panel administrativo que construí para gestionar las
        cartas de restaurantes: categorías y platos con sus nombres,
        descripciones, precios, alérgenos, etc. Los datos viven en{" "}
        <strong>restaurants-api</strong>, mi propia API, así que cualquier web o
        app puede consumirlos. El panel está hecho con{" "}
        <strong>Angular 21</strong>: componentes standalone, formularios
        reactivos, Signals para el estado de la interfaz y <strong>RxJS</strong>{" "}
        para las peticiones HTTP. La autenticación usa <strong>JWT</strong>: un
        interceptor añade el token solo a las peticiones a mi API, otro cierra
        la sesión y redirige al login si la API responde 401, y un guard protege
        las rutas privadas. Las imágenes se suben a <strong>Cloudinary</strong>{" "}
        y las vistas se adaptan a móvil. Lo desplegué en <strong>AWS</strong>{" "}
        con S3 y CloudFront, con el bucket sin acceso público. <br />
        <br />
        Demo: <code>demo@example.com</code> / <code>demopassword</code>
      </>
    ),
    techStack: ["Angular", "TypeScript", "RxJS", "SCSS", "AWS", "Cloudinary"],
    mainImage: "/projects/restaurants-admin/restaurantsAdminMain.webp",
    gallery: [
      "/projects/restaurants-admin/restaurantsAdminMain.webp",
      "/projects/restaurants-admin/restaurantsAdmin_login.webp",
      "/projects/restaurants-admin/restaurantsAdmin_restaurantsGrid.webp",
      "/projects/restaurants-admin/restaurantsAdmin_restaurantsList.webp",
      "/projects/restaurants-admin/restaurantsAdmin_dishForm.webp",
      "/projects/restaurants-admin/restaurantsAdmin_mobileMenu.webp",
      "/projects/restaurants-admin/restaurantsAdmin_mobileDish.webp",
    ],
    projectUrl: "https://de2mfm1hmz59u.cloudfront.net",
    githubUrl: "https://github.com/Antonio-Borrero/restaurants-admin",
    category: "Frontend",
    type: "Proyecto personal",
    roadmap: [
      "Añadir tests unitarios con Vitest para proteger la lógica de los formularios y las validaciones frente a regresiones.",
      "Automatizar el despliegue a AWS S3 y CloudFront con GitHub Actions (build, subida e invalidación de caché), para eliminar el proceso manual actual.",
      "Internacionalizar la interfaz (español e inglés) y permitir editar cada plato en varios idiomas, aprovechando las traducciones que ya soporta restaurants-api.",
      "Añadir la gestión de miembros con permisos por acción (editar platos, cambiar precios, eliminar platos o el restaurante), para que invitar a alguien no implique darle acceso a todo.",
      "Añadir recuperación de contraseña y gestión de la cuenta propia (cambiar email y contraseña) de punta a punta con restaurants-api, para completar el ciclo de autenticación.",
    ],
  },
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
      "/projects/pokedex/pokedex4.webp",
      "/projects/pokedex/pokedex5.webp",
      "/projects/pokedex/pokedex6.webp",
    ],
    projectUrl: "https://pokedex-app-rho-nine.vercel.app",
    githubUrl: "https://github.com/Antonio-Borrero/pokedex-app",
    category: "Frontend",
    type: "Proyecto personal",
    roadmap: [
      "Optimizar el rendimiento y la carga inicial sustituyendo el fetch masivo  por una estrategia de búsqueda directa a la API.",
    ],
  },
];

export const STACK_LIST = Array.from(
  new Set(projects.flatMap((project) => project.techStack).sort()),
);
