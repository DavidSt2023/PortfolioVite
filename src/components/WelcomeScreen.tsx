import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function WelcomeScreen() {
  const [showContent, setShowContent] = useState(false);
  
  // Text für die Typewriter Animation
  const welcomeText = "DS_";
  const subtitleText = "Welcome";
  
  useEffect(() => {
    // Start showing content after animation
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);
    
    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  // Typewriter animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut" as const
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  const glowVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1.1, 1, 0.9],
      transition: {
        duration: 3,
        times: [0, 0.3, 0.7, 1],
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Main content container with fixed height to prevent layout shift */}
      <div className="relative z-10 text-center px-8 flex flex-col items-center justify-center min-h-[400px]">
        {/* Enhanced glow effect - visible in both modes */}
        <motion.div
          className="absolute inset-0"
          variants={glowVariants}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Primary glow */}
          <motion.div 
            className="absolute inset-0 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-96 h-96 bg-gradient-to-r from-indigo-600/50 via-blue-600/50 to-purple-600/50 dark:from-blue-500/25 dark:via-purple-500/25 dark:to-pink-500/25 rounded-full mx-auto" />
          </motion.div>
          
          {/* Secondary glow for extra depth */}
          <motion.div 
            className="absolute inset-0 blur-2xl"
            animate={{ 
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 120, 240, 360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40 dark:from-cyan-400/20 dark:via-purple-400/20 dark:to-pink-400/20 rounded-full mx-auto" />
          </motion.div>
        </motion.div>

        {/* Welcome text with smooth typewriter effect - fixed position */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold relative z-10"
          initial="hidden"
          variants={containerVariants}
          animate="visible"
        >
          {welcomeText.split('').map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              className="inline-block bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent"
              style={{ 
                textShadow: '0 0 40px rgba(75, 85, 99, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(75, 85, 99, 0.3))'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Reserved space container to prevent layout shift */}
        <div className="h-[200px] flex flex-col justify-start items-center mt-6">
          {/* Subtitle with fade-in effect */}
          <div className="h-[60px] flex items-center justify-center">
            {showContent && (
              <motion.p
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light tracking-wider"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {subtitleText}
              </motion.p>
            )}
          </div>
          
          {/* Loading indicator with smooth animation */}
          <div className="h-[60px] flex items-center justify-center mt-6">
            {showContent && (
              <motion.div
                className="flex justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gray-600 dark:bg-gray-400 rounded-full"
                    animate={{
                      y: [0, -12, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WelcomeScreen;