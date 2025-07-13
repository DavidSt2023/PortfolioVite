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
      { item: 'React', icon: 'React', description: '4/5', reason: 'Seit 3 Jahren aktiv in Projekten eingesetzt' },
      { item: 'Nuxt.js', icon: 'Nuxtjs', description: '2/5', reason: 'Grundkonzepte verstanden und in Projekten angewendet' },
      { item: 'Vue.js', icon: 'Vuejs', description: '2/5', reason: 'Mit den Grundlagen vertraut und bereits praktisch genutzt' },
      { item: 'Next.js', icon: 'Nextdotjs', description: '2/5', reason: 'Basisfunktionen kennengelernt und eingesetzt' }
    ]
  },
  {
    title: 'Languages',
    sub: [
      { item: 'HTML', icon: 'Html5', description: '4/5', reason: 'Fundiertes Verständnis durch erste Webprojekte' },
      { item: 'JavaScript', icon: 'Js', description: '4/5', reason: '3 Jahrige Erfahrung durch React und Projekte' },
      { item: 'TypeScript', icon: 'Typescript', description: '3/5', reason: 'Grundlagen verstanden und regelmäßig in privaten Projekten verwendet' },
      { item: 'Python', icon: 'Python', description: '2/5', reason: 'Grundlegende Kenntnisse durch kleinere Projekte und Skripte' },
      { item: 'Node.js', icon: 'Node', description: '2/5', reason: 'Basiswissen vorhanden, aber wenig praktische Erfahrung' },
      { item: 'Java', icon: 'Java', description: '3/5', reason: 'In der Berufsschule gelernt und in Übungen angewendet' }
    ]
  },
  {
    title: 'Styling & UI',
    sub: [
      { item: 'Tailwind CSS', icon: 'Tailwindcss', description: '3/5', reason: 'Aktiv in Projekten eingesetzt, aber noch nicht in allen Aspekten vertraut' },
      { item: 'CSS', icon: 'Css', description: '3/5', reason: 'Gute Kenntnisse durch Webprojekte' },
      { item: 'Material UI', icon: 'Mui', description: '3/5', link: 'https://mui.com/',reason: 'Regelmäßig in React-Projekten verwendet' },
      { item: 'AgGrid', icon: 'Table', description: '4/5', link: 'https://www.ag-grid.com/',reason: 'Intensiv in Projekten genutzt, insbesondere für komplexe Datenvisualisierungen' },
    ]
  },
  {
    title: 'Tools & DevOps',
    sub: [
      { item: 'Git', icon: 'Git', description: '2/5', reason: 'Grundkenntnisse vorhanden, aber wenig praktische Erfahrung' },
      { item: 'Microsoft Azure SQL', icon: 'Azure', description: '4/5', reason: 'Seit 3 Jahren regelmäßig in der Arbeit genutzt' },
      { item: 'Jest', icon: 'Jest', description: '2/5', reason: 'Kenntnis durch Webspracing Projekt' },
      { item: 'NPM', icon: 'Npm', description: '3/5', reason: 'Regelmäßig in Projekten verwendet, aber noch nicht in allen Aspekten vertraut' },
      { item: 'Shell', icon: 'Terminal', description: '2/5', reason: 'Grundlegende Kenntnisse in der Shell-Nutzung & NeoVim, aber noch nicht in allen Aspekten vertraut' },
      { item: 'NeoVim', icon: 'Neovim', description: '3/5', reason: 'Setze ich aktiv für Projekte ein, inkl. eigener Konfigurationen zum Lernen von Vim' }
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
              className="bg-primary-50 dark:bg-primary-900 text-center hover:transform hover:scale-105 transition-all duration-300"
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
                          <span className="text-sm text-muted-foreground ">({item.description})</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-left text-sm text-muted-foreground">
                        <p>{item.reason}  </p>
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