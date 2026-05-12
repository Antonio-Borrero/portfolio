import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export const PROJECT_CATEGORIES = [
	"Frontend",
	"Backend",
	"Full Stack",
] as const;
export const PROJECT_TYPES = [
	"Proyecto personal",
	"Proyecto de estudio",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectType = (typeof PROJECT_TYPES)[number];

export default interface ProjectInterface {
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
