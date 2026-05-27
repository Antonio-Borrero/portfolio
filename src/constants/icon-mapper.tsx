import { ReactNode } from "react";
import {
  SiAngular,
  SiBootstrap,
  SiFlask,
  SiGiphy,
  SiJest,
  SiMapbox,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DaisyUIIcon, JwtIcon, ZustandIcon } from "./custom-icons";

export const ICON_MAP: Record<string, ReactNode> = {
  "React.js": <SiReact />,
  Python: <SiPython />,
  Flask: <SiFlask />,
  SQLAlchemy: <SiSqlalchemy />,
  Bootstrap: <SiBootstrap />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  Jest: <SiJest />,
  Angular: <SiAngular />,
  "Mapbox GL": <SiMapbox />,
  "Giphy API": <SiGiphy />,
  daisyUI: <DaisyUIIcon />,
  JWT: <JwtIcon />,
  Zustand: <ZustandIcon />,
};
