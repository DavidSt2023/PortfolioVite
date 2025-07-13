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
        <h2 className="text-4xl font-bold mb-4 dark:text-primary-300">Meine Projekte</h2>
        <p className="text-xl">Eine Auswahl meiner neuesten Arbeiten</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div key={project.id} className="w-full max-w-sm">
            <ProjectCard 
              name={project.name}
              tech={project.tech}
              description={project.description}
              Doc={project.Doc}
              github={project.github}
              demo={project.demo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;