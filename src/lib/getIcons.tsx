import React from 'react';
import { 
  FaReact, 
  FaVuejs, 
  FaHtml5, 
  FaJs, 
  FaPython, 
  FaNode, 
  FaJava,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiNuxtdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiMui,
  SiJest,
  SiNeovim,
  SiGo,
  SiMapbox,
  SiShadcnui,
  SiFramework
} from 'react-icons/si';
import { MdWeb, MdPalette, MdBuild } from 'react-icons/md';
import { BiServer, BiTable, BiTerminal } from 'react-icons/bi';
import { VscAzure } from "react-icons/vsc";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
interface IconConfig {
  size?: string;
  color?: string;
}

// Zentrale Icon-Map mit allen verfügbaren Icons
const iconMap: { [key: string]: (config?: IconConfig) => React.ReactElement } = {
  // Category Icons (größer)
  'Framework': (config) => <SiFramework className={config?.size || "w-6 h-6"} />,
  'Web': (config) => <MdWeb className={config?.size || "w-6 h-6"} />,
  'Server': (config) => <BiServer className={config?.size || "w-6 h-6"} />,
  'Palette': (config) => <MdPalette className={config?.size || "w-6 h-6"} />,
  'Build': (config) => <MdBuild className={config?.size || "w-6 h-6"} />,
  'Clock': (config) => <FaRegClock className={config?.size || "w-5 h-5"} />,
  
  // Tech Icons (mit Farben)
  'React': (config) => <FaReact className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-500"}`} />,
  'Nuxtjs': (config) => <SiNuxtdotjs className={`${config?.size || "w-5 h-5"} ${config?.color || "text-green-500"}`} />,
  'Vuejs': (config) => <FaVuejs className={`${config?.size || "w-5 h-5"} ${config?.color || "text-green-600"}`} />,
  'Nextdotjs': (config) => <SiNextdotjs className={config?.size || "w-5 h-5"} />,
  'Html5': (config) => <FaHtml5 className={`${config?.size || "w-5 h-5"} ${config?.color || "text-orange-500"}`} />,
  'Js': (config) => <FaJs className={`${config?.size || "w-5 h-5"} ${config?.color || "text-yellow-500"}`} />,
  'Typescript': (config) => <SiTypescript className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-600"}`} />,
  'Python': (config) => <FaPython className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-500"}`} />,
  'Node': (config) => <FaNode className={`${config?.size || "w-5 h-5"} ${config?.color || "text-green-500"}`} />,
  'Java': (config) => <FaJava className={`${config?.size || "w-5 h-5"} ${config?.color || "text-red-500"}`} />,
  'Tailwindcss': (config) => <SiTailwindcss className={`${config?.size || "w-5 h-5"} ${config?.color || "text-cyan-500"}`} />,
  'Css': (config) => <FaCss3Alt className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-500"}`} />,
  'Mui': (config) => <SiMui className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-500"}`} />,
  'Table': (config) => <BiTable className={config?.size || "w-5 h-5"} />,
  'Git': (config) => <FaGitAlt className={`${config?.size || "w-5 h-5"} ${config?.color || "text-orange-500"}`} />,
  'Azure': (config) => <VscAzure className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-600"}`} />,
  'Jest': (config) => <SiJest className={`${config?.size || "w-5 h-5"} ${config?.color || "text-red-600"}`} />,
  'Npm': (config) => <FaNpm className={`${config?.size || "w-5 h-5"} ${config?.color || "text-red-500"}`} />,
  'Terminal': (config) => <BiTerminal className={config?.size || "w-5 h-5"} />,
  'Neovim': (config) => <SiNeovim className={`${config?.size || "w-5 h-5"} ${config?.color || "text-green-500"}`} />,
  'Mapbox': (config) => <SiMapbox className={`${config?.size || "w-5 h-5"} ${config?.color || "text-blue-500"}`} />,
  'shadcn': (config) => <SiShadcnui className={`${config?.size || "w-5 h-5"} ${config?.color || "text-purple-500"}`} />,
  // Project Tech Icons (kleinere Größe)
  'Golang': (config) => <SiGo className={config?.size || "w-4 h-4"} />,
  'Vue.js': (config) => <FaVuejs className={config?.size || "w-4 h-4"} />,
  'Tailwind CSS': (config) => <SiTailwindcss className={config?.size || "w-4 h-4"} />,

  
  // Action Icons
  'Github': (config) => <FaGithub className={config?.size || "w-4 h-4"} />,
  'ExternalLink': (config) => <FaExternalLinkAlt className={config?.size || "w-4 h-4"} />,
  'Book': (config) => <HiOutlineBookOpen className={config?.size || "w-4 h-4"} />,
  
};

// Hauptfunktion zum Abrufen von Icons
export const getIcon = (iconName: string, config?: IconConfig): React.ReactElement => {
  const iconFunction = iconMap[iconName];
  if (iconFunction) {
    return iconFunction(config);
  }
  
  // Fallback für unbekannte Icons
  return <span className={config?.size || "w-5 h-5"}>?</span>;
};

export type IconName = keyof typeof iconMap;