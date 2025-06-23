import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getIcon } from "@/lib/getIcons";

interface SkillItem {
  item: string;
  icon: string;
  description: string;
  reason?: string;
  link?: string;
}

interface SkillCategory {
  title: string;
  sub: SkillItem[];
}

function SkillSection(): React.ReactElement  {
  const [defaultValue] = useState<string>("");

  const skills: SkillCategory[] = [
    {
      title: 'Frameworks',

      sub: [
        { item: 'React', icon: 'React', description: '4/5', reason: '3 Jahre mit React aktiv gearbeitet' },
        { item: 'Nuxt.js', icon: 'Nuxtjs', description: '3/5', reason: 'Grundlegendes Konzept verstanden und benutzt' },
        { item: 'Vue.js', icon: 'Vuejs', description: '3/5', reason: 'Grundlegendes Konzept verstanden und benutzt' },
        { item: 'Next.js', icon: 'Nextdotjs', description: '2/5', reason: 'Grundlegendes Konzept verstanden und benutzt' }
      ]
    },
    {
      title: 'Languages',

      sub: [
        { item: 'HTML', icon: 'Html5', description: '4/5', reason: 'Verständnis durch erste Projekte' },
        { item: 'JavaScript', icon: 'Js', description: '4/5', reason: '3 Jahre mit React aktiv gearbeitet und private Projekte eingebunden' },
        { item: 'TypeScript', icon: 'Typescript', description: '3/5', reason: 'Grundverständnis vorhanden & in privaten Projekten benutzt' },
        { item: 'Python', icon: 'Python', description: '2/5' },
        { item: 'Node.js', icon: 'Node', description: '3/5' },
        { item: 'Java', icon: 'Java', description: '3/5' }
      ]
    },
    {
      title: 'Styling & UI',
 
      sub: [
        { item: 'Tailwind CSS', icon: 'Tailwindcss', description: '3/5' },
        { item: 'CSS', icon: 'Css', description: '3/5' },
        { item: 'Material UI', icon: 'Mui', description: '3/5', link: 'https://mui.com/' },
        { item: 'AgGrid', icon: 'Table', description: '4/5', link: 'https://www.ag-grid.com/' }
      ]
    },
    {
      title: 'Tools & DevOps',
      sub: [
        { item: 'Git', icon: 'Git', description: '2/5' },
        { item: 'Microsoft Azure SQL', icon: 'Azure', description: '4/5', reason: '3-jährige Erfahrung im Arbeitsumfeld' },
        { item: 'Jest', icon: 'Jest', description: '3/5' },
        { item: 'NPM', icon: 'Npm', description: '3/5' },
        { item: 'Shell', icon: 'Terminal', description: '3/5' },
        { item: 'NeoVim', icon: 'Neovim', description: '3/5', reason: 'Benutze ich für meine Projekte und zum Lernen von Vim & Bau eigener Configs' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologien</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card 
              key={skill.title}
              className="dark:bg-primary-950 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <CardHeader> 
                <CardTitle className="flex items-center justify-center gap-2">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" className="w-full" collapsible defaultValue={defaultValue}>
                  {skill.sub.map((item, index) => (
                    <AccordionItem key={item.item} value={item.item + index}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          {getIcon(item.icon)}
                          <span>{item.item}</span>
                          <span className="text-sm text-muted-foreground">({item.description})</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-left text-sm text-muted-foreground">
                        {item.reason || 'Grundlegende Kenntnisse vorhanden'}
                        {item.link && (
                          <div className="mt-2">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              Mehr erfahren →
                            </a>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;