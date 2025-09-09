import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { intervalToDuration, type Duration} from 'date-fns';
function HomeHeader(){
const name = 'David Stemmler'
const descriptionText = `Ich stecke zwar noch mitten in meiner Ausbildung, entwickle aber schon jetzt mit großer Begeisterung in meiner Freizeit.`
const abschlussDatum = new Date('2026-01-01T00:00:00'); 
const [finishTime, setFinishTime] = useState<Duration>(intervalToDuration({
        start: new Date(),
        end: abschlussDatum,
      }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFinishTime(intervalToDuration({
        start: new Date(),
        end: abschlussDatum,
      }));
    }, 900);
    return () => {
      clearInterval(intervalId);
    };
  },);

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
          {descriptionText}<br/><br/>
          {<span>Mein Abschluss steht in:<br/>{finishTime.months ? `${finishTime.months} Monate, ` : null}{finishTime.days ? `${finishTime.days} Tage, ` : null}{finishTime.hours ? `${finishTime.hours} Stunden, ` : null}{finishTime.minutes ? `${finishTime.minutes} Minuten und ` : null}{finishTime.seconds ? `${finishTime.seconds} Sekunden` : `0`}</span>}
          <br/>
          (Abschluss Termin Januar 2026)
        </p>        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
            size="lg" 
            onClick={scrollToSkills}
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
          >
            Skills ansehen
          </Button>
        </div>
      </div>
    </div>
    )
}
export default HomeHeader;