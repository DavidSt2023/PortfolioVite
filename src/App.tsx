import { useState, useEffect } from 'react';
import Menubar from "@/sections/Menubar";
import HomeHeader from "@/sections/HomeHeader";
import SkillSection from "@/sections/SkillSection";
import ProjectSection from "@/sections/ProjectSection";
import Footer from "@/sections/Footer";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Check if this is the first visit
  useEffect(() => {
    // const hasVisited = sessionStorage.getItem('hasVisited');
    // if (hasVisited) {
    //   setShowWelcome(false);
    //   setContentVisible(true);
    // } else {
    //   sessionStorage.setItem('hasVisited', 'true');
    // }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 200);
  };

  return (
    <>
      {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}
      
      <div className={`min-h-screen bg-background text-foreground transition-all duration-1000 ${
        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="pt-20 gap-40 flex flex-col">
          <Menubar />
          <div className={`transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <HomeHeader/>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <ProjectSection/>
          </div>
          <div className={`transition-all duration-1000 delay-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <SkillSection/>
          </div>
          <div className={`transition-all duration-1000 delay-900 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App