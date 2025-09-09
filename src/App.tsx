import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menubar from "@/sections/Menubar";
import HomeHeader from "@/sections/HomeHeader";
import SkillSection from "@/sections/SkillSection";
import ProjectSection from "@/sections/ProjectSection";
import Footer from "@/sections/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import './App.css'
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }, 4500);
      
      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundBeams className="absolute inset-0 z-0" />
      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen key="welcome" />}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="relative min-h-screen"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="relative z-10">
              {/* Menubar with fade-in animation */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Menubar />
              </motion.div>
              
              {/* Content with staggered animations */}
              <div className="pt-40 gap-40 flex flex-col">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <HomeHeader/>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ProjectSection/>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <SkillSection/>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Footer/>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App;