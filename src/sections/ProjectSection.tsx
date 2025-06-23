import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  Doc: string;
  github: string;
  demo: string;
}

function ProjectSection() {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Live Tracking Map',
      description: 'Eine moderne E-Commerce-Plattform mit Vue.js und Nuxt.js entwickelt.',
      tech: ['Tailwind CSS','Mapbox'],
      Doc: 'https://docs.com',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      name: 'Webscraping API',
      description: 'Ein leistungsstarkes Webscraping-Tool, das Daten von Websites extrahiert und diese in JSON Format zurück gibt.',
      tech: ['Golang'],
      Doc: 'https://docs.com',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Eine responsive Portfolio-Website mit modernem Design.',
      tech: ['React', 'shadcn', 'Tailwind CSS'],
      Doc: 'https://docs.com',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold  mb-4">Meine Projekte</h2>
        <p className="text-xl text-gray-500">Eine Auswahl meiner neuesten Arbeiten</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            name={project.name}
            tech={project.tech}
            description={project.description}
            Doc={project.Doc}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;