import  Menubar  from "@/sections/Menubar";
import  HomeHeader  from "@/sections/HomeHeader";
import  SkillSection  from "@/sections/SkillSection";
import  ProjectSection  from "@/sections/ProjectSection";
import Footer from "@/sections/Footer";
import './App.css'


function App() {

  return (
      <div className="pt-20 gap-40 flex flex-col min-h-screen bg-background text-foreground">
        <Menubar />
        <HomeHeader/>
        <ProjectSection/>
        <SkillSection/>
        <Footer/>
      </div>
 )
}

export default App
