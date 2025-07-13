import Menubar from "@/sections/Menubar";
import HomeHeader from "@/sections/HomeHeader";
import SkillSection from "@/sections/SkillSection";
import ProjectSection from "@/sections/ProjectSection";
import Footer from "@/sections/Footer";
import './App.css'
function App() {


  return (
    <>
      
      <div className={`min-h-screen bg-background text-foreground transition-all duration-1000`}>
        {/* Menubar outside the gap container */}
        <Menubar />
        
        {/* Content with gap applied only between these elements */}
        <div className="pt-40 gap-40 flex flex-col">
          <div className={`transition-all duration-1000 delay-300 `}>
            <HomeHeader/>
          </div>
          <div className={`transition-all duration-1000 delay-500 `}>
            <ProjectSection/>
          </div>
          <div className={`transition-all duration-1000 delay-700 `}>
            <SkillSection/>
          </div>
          <div className={`transition-all duration-1000 delay-900 `}>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;