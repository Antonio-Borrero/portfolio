import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack";
export type ProjectType = "Proyecto personal" | "Proyecto de estudio";

export default interface Project {
	id: string;
	name: string;
	shortDescription: string;
	longDescription: string | ReactNode;
	techStack: string[];
	mainImage: string | StaticImageData;
	gallery: (string | StaticImageData)[];
	projectUrl: string | null;
	githubUrl: string;
	category: ProjectCategory;
	type: ProjectType;
}
