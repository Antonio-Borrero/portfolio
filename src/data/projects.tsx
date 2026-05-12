import Project from "../interfaces/project.interface";
import habitsTrackerMain from "../assets/projects/habits-tracker/habits-tracker-main.png";
import pokedexMain from "../assets/projects/pokedex/pokedex-main.png";
import mapsAppMain from "../assets/projects/maps-app/maps-app-main.png";
import reactiveFormsMain from "../assets/projects/reactives-form-app/reactives-form-app-main.png";
import starWarsRestApiMain from "../assets/projects/starwars-rest-api/starwars-rest-api-main.png";
import countryAppMain from "../assets/projects/country-app/country-app-main.png";
import gifsAppMain from "../assets/projects/gifs-app/gifs-app-main.png";
import starWarsBlogMain from "../assets/projects/starwars-blog/starwars-blog-main.png";
import pipesAppMain from "../assets/projects/pipes-app/pipes-app-main.png";

export const projects: Project[] = [
	{
		id: "habits-tracker",
		name: "habits-tracker",
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
		mainImage: habitsTrackerMain,
		gallery: [""],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/proyecto-final-4Geeks",
		category: "Full Stack",
		type: "Proyecto de estudio",
	},
	{
		id: "pokedex",
		name: "pokedex",
		shortDescription:
			"Proyecto de aprendizaje independiente enfocado en experimentar con <b>Next.js 15</b> y la gestión de estado con <b>Zustand</b>.",
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
		mainImage: pokedexMain,
		gallery: [""],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/pokedex-app",
		category: "Frontend",
		type: "Proyecto personal",
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
		techStack: [
			"Angular",
			"TypeScript",
			"Mapbox GL",
			"Tailwind CSS",
			"daisyUI",
		],
		mainImage: mapsAppMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/maps-app-angular",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
	{
		id: "reactive-forms-app",
		name: "Reactive Forms App",
		shortDescription:
			"Exploración de formularios reactivos, validaciones dinámicas y flujo de datos con RxJS.",
		longDescription: (
			<>
				Este proyecto, realizado como parte del curso de{" "}
				<strong>Angular de DevTalles (Fernando Herrera)</strong>, se centra en
				los <strong>Formularios Reactivos</strong>. Donde aprendí a implementar
				validaciones síncronas y asíncronas personalizadas,{" "}
				<strong>FormArrays dinámicos</strong> que permiten al usuario añadir o
				eliminar campos en tiempo real y la integración y consumo de APIs
				externas como <strong>REST Countries API</strong> para poblar selectores
				dinámicos y utilizar <strong>RxJS</strong> para gestionar los flujos de
				datos y efectos secundarios dentro del ciclo de vida del formulario.
			</>
		),
		techStack: ["Angular", "TypeScript"],
		mainImage: reactiveFormsMain, // Importa la imagen correspondiente
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/reactive-forms-app-angular",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
	{
		id: "star-wars-api",
		name: "Star Wars REST API",
		shortDescription:
			"Primeros pasos en el desarrollo backend, enfocado en el modelado de bases de datos relacionales.",
		longDescription: (
			<>
				Este proyecto fue parte de mi aprendizaje en{" "}
				<strong>4Geeks Academy</strong> Representó mi primer acercamiento al{" "}
				<strong>diseño de APIs RESTful</strong> y al modelado de datos
				relacionales. El reto principal fue estructurar una base de datos con
				<strong> SQLAlchemy</strong> que gestionara usuarios, personajes y
				planetas, conectándolos mediante una lógica de{" "}
				<strong>relación Many-to-Many</strong> para el sistema de favoritos.
				Aprendí a manejar el flujo de trabajo backend: desde la creación de
				modelos y<strong> migraciones de base de datos</strong>, hasta las
				pruebas de endpoints con<strong> Postman</strong>.
			</>
		),
		techStack: ["Python", "Flask", "SQLAlchemy"],
		mainImage: starWarsRestApiMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/starwars-rest-api",
		category: "Backend",
		type: "Proyecto de estudio",
	},
	{
		id: "country-app",
		name: "Country App",
		shortDescription:
			"Buscador de países con navegación por secciones, persistencia de estado y consumo de APIs.",
		longDescription: (
			<>
				Este proyecto, desarrollado como parte del curso de{" "}
				<strong>Angular de DevTalles (Fernando Herrera)</strong>, se centra en
				el consumo de la <strong>REST Countries API</strong> y el manejo del
				<strong> sistema de rutas</strong> del framework. Aprendí a organizar la
				navegación mediante rutas hijas y parámetros para mostrar información
				detallada de cada país, además de asegurar que los resultados de
				búsqueda y la sección activa
				<strong> se mantengan al recargar la página</strong>.
			</>
		),
		techStack: ["Angular", "TypeScript", "Tailwind CSS", "daisyUI"],
		mainImage: countryAppMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/country-app-angular",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
	{
		id: "gifs-app",
		name: "Gifs App",
		shortDescription:
			"Gestión de estado global, persistencia de datos y consumo de APIs en Angular.",
		longDescription: (
			<>
				Este proyecto, desarrollado durante el curso de{" "}
				<strong>Angular de DevTalles (Fernando Herrera)</strong>, fue mi primer
				acercamiento sólido a la{" "}
				<strong>arquitectura orientada a servicios</strong>. Aprendí a
				centralizar la lógica de negocio, gestionando búsquedas en tiempo real a
				través de la <strong>Giphy API</strong> y utilizando un sistema de{" "}
				<strong>persistencia en LocalStorage</strong> para mantener el historial
				de búsquedas del usuario tras recargar la página y a poner en práctica
				el manejo seguro de
				<strong> variables de entorno</strong> para proteger las API Keys.
			</>
		),
		techStack: ["Angular", "TypeScript", "Tailwind CSS", "Giphy API"],
		mainImage: gifsAppMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/gifs-app-angular",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
	{
		id: "star-wars-blog",
		name: "Star Wars Blog",
		shortDescription:
			"Explorador de la SWAPI desarrollado como proyecto práctico durante mi formación en el bootcamp, centrado en la gestión de estado global y consumo de APIs.",
		longDescription: (
			<>
				Este proyecto fue parte de mi aprendizaje en{" "}
				<strong>4Geeks Academy</strong> para entender cómo manejar datos desde
				una API externa. El reto no solo estaba en consumir la{" "}
				<strong>SWAPI</strong>, sino en intentar que los{" "}
				<strong> estados fueran persistentes</strong> al navegar por la
				aplicación utilizando <strong>Context API y useReducer</strong>. Esto me
				sirvió para practicar cómo centralizar la lógica de los favoritos y
				evitar el <strong>prop drilling</strong>. A través de este ejercicio,
				empecé a trabajar con el <strong>asincronismo en JavaScript</strong> y a
				configurar rutas con <strong>React Router</strong>, enfrentándome a los
				problemas comunes de estructurar una aplicación que depende de datos
				externos.
			</>
		),
		techStack: ["React.js", "Bootstrap"],
		mainImage: starWarsBlogMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/StarWars-Blog-ReadingList",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
	{
		id: "pipes-app",
		name: "Pipes App",
		shortDescription:
			"Exploración de la manipulación visual de datos utilizando pipes de Angular.",
		longDescription: (
			<>
				Este proyecto forma parte de mi aprendizaje de <strong>Angular</strong>{" "}
				basado en el curso de <strong>DevTalles (Fernando Herrera)</strong>,
				enfocado en la <strong>transformación de datos</strong> directamente en
				la plantilla. El reto fue entender cómo los <strong>pipes </strong>{" "}
				pueden simplificar el código del frontend. Es un ejercicio de base que
				me ayudó a comprender cómo separar la lógica de negocio de la{" "}
				<strong>lógica de presentación</strong>, manteniendo las plantillas
				limpias y el código más organizado.
			</>
		),
		techStack: ["Angular", "TypeScript", "Tailwind CSS", "daisyUI"],
		mainImage: pipesAppMain,
		gallery: [],
		projectUrl: null,
		githubUrl: "https://github.com/Antonio-Borrero/pipes-app-angular",
		category: "Frontend",
		type: "Proyecto de estudio",
	},
];
