import { Button } from "@/components/ui/button";
function HomeHeader(){
const name = 'David Stemmler'
const description = 'Ich erstelle moderne Webanwendungen mit den neuesten Technologien und leidenschaftlichem Design.'

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
const scrollToSkills = () => {
  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
}
    return(
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-primary-50 text-gray-900">
          Hallo, ich bin <span className="text-gray-500">{name }</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8  max-w-3xl mx-auto">
          { description }
        </p>        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
          >
            Projekte ansehen
          </Button>
            <Button 
            size="lg" 
            onClick={scrollToSkills}
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
          >
            Skills ansehen
          </Button>
        </div>
      </div>
      {/* <div className="mt-12 animate-bounce ">
        <ArrowDown  className="w-8 h-8 mx-auto" />
      </div> */}
    </div>
    )
}
export default HomeHeader;