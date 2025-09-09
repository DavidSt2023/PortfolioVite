import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/getIcons";
import { Separator } from "@/components/ui/separator"
interface ProjectCardProps {
  name: string;
  tech: string[];
  description?: string;
  doc?: string;
  github?: string;
  demo?: string;
  hours?: number;
}

function ProjectCard ({ name, tech, description, doc, github, demo, hours }: ProjectCardProps) {
    return(
        <Card className="bg-primary-50 dark:bg-primary-900 hover:transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2 text-gray-900 dark:text-primary-100">{name}</CardTitle>
                <CardDescription className="mb-4 text-gray-800 dark:text-primary-200">
                    {description}
                </CardDescription>
                <div className="flex flex-col gap-5">
                    <div>
                        {hours && (
                            <Badge variant="secondary" className="mr-2 mb-2 inline-flex items-center gap-1">
                                Aufgewandte Zeit: {hours} Stunden
                                {getIcon('Clock')}
                            </Badge>
                        )}
                    </div>
                    <Separator />
                    <div className="mb-4">
                        {tech.map((techItem: string, index: number) => (
                            <Badge key={index} variant="outline" className="mr-2 mb-2 inline-flex items-center gap-1">
                                {getIcon(techItem)}
                                {techItem}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-0 px-6 pb-6 justify-center">
                <div className="flex gap-3 ">
                    {github && (
                        <Button 
                            onClick={() => window.open(github, '_blank')}
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center gap-2"
                        >
                            {getIcon('Github')}
                            GitHub
                        </Button>
                    )}
                    {demo && (
                        <Button 
                            onClick={() => window.open(demo, '_blank')}
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center gap-2"
                        >
                            {getIcon('ExternalLink')}
                            Demo
                        </Button>
                    )}
                    {doc && (
                        <Button 
                            onClick={() => window.open(doc, '_blank')}
                            variant="ghost"
                            size="sm"
                            className="inline-flex items-center gap-2"
                        >
                            {getIcon('Book')}
                            Docs
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard