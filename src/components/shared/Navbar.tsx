export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 items-center bg-transparent w-full z-20">
			<div className="max-w-7xl mx-auto h-16 flex items-center justify-between tracking-wider">
				<h1 className="text-2xl font-bold uppercase text-white">
					<a href="#hero">Antonio Borrero</a>
				</h1>
				<ul className="flex items-center gap-5 text-sm group">
					<li>
						<a
							href="#projects"
							className="group-hover:opacity-50 hover:text-neutral-200 hover:opacity-100 uppercase"
						>
							Proyectos
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 uppercase"
						>
							Contacto
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 uppercase"
						>
							Sobre mi
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
