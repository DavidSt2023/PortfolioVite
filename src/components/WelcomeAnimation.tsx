import React, { useState, useEffect } from 'react';
import { Terminal, Zap, ChevronRight } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

interface MatrixLine {
  id: number;
  chars: string[];
  speed: number;
  delay: number;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [matrixLines, setMatrixLines] = useState<MatrixLine[]>([]);

  const codeLines = [
    'npm install creativity',
    'const developer = new WebDeveloper();',
    'developer.initialize("David Stemmler");',
    'developer.setSkills(["React", "TypeScript", "Vue.js"]);',
    'developer.startPortfolio();',
    '> Portfolio loaded successfully! ✓'
  ];

  // Matrix rain effect
  useEffect(() => {
    const chars = '01デジタル開発者ポートフォリオ';
    const newLines: MatrixLine[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      chars: Array.from({ length: 30 }, () => chars[Math.floor(Math.random() * chars.length)]),
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 2000
    }));
    setMatrixLines(newLines);
  }, []);

  // Main animation sequence
  useEffect(() => {
    const phases = [
      { delay: 500, phase: 1 },   // Matrix appears
      { delay: 1000, phase: 2 },  // Terminal appears
      { delay: 1500, phase: 3 },  // Typing starts
      { delay: 5000, phase: 4 },  // Success state
      { delay: 6500, phase: 5 }   // Fade out
    ];

    const timers = phases.map(({ delay, phase }) =>
      setTimeout(() => setCurrentPhase(phase), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentPhase >= 3) {
      let currentLineIndex = 0;
      let currentCharIndex = 0;
      let fullText = '';

      const typeNextChar = () => {
        if (currentLineIndex < codeLines.length) {
          const currentLine = codeLines[currentLineIndex];
          
          if (currentCharIndex < currentLine.length) {
            fullText += currentLine[currentCharIndex];
            setTypedText(fullText);
            currentCharIndex++;
            setTimeout(typeNextChar, Math.random() * 100 + 50);
          } else {
            fullText += '\n';
            setTypedText(fullText);
            currentLineIndex++;
            currentCharIndex = 0;
            setTimeout(typeNextChar, 500);
          }
        }
      };

      typeNextChar();
    }
  }, [currentPhase]);

  // Fade out
  useEffect(() => {
    if (currentPhase >= 5) {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 500);
      }, 500);
    }
  }, [currentPhase, onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 opacity-0 transition-opacity duration-500"></div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-hidden">
      {/* Matrix Rain Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        currentPhase >= 1 ? 'opacity-100' : 'opacity-0'
      }`}>
        {matrixLines.map((line) => (
          <div
            key={line.id}
            className={`absolute text-green-500/20 text-xs font-mono leading-tight ${
              currentPhase >= 1 ? 'animate-matrix-fall' : ''
            }`}
            style={{
              left: `${(line.id * 6.67)}%`,
              top: '-100px',
              animationDuration: `${line.speed + 3}s`,
              animationDelay: `${line.delay}ms`
            }}
          >
            {line.chars.map((char, i) => (
              <div key={i} className="opacity-60">{char}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className={`bg-gray-900 rounded-lg shadow-2xl border border-gray-700 w-full max-w-4xl transform transition-all duration-1000 ${
          currentPhase >= 2 ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'
        }`}>
          {/* Terminal Header */}
          <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-mono">portfolio.sh</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm h-[400px] bg-black text-green-400">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-blue-400">david@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-purple-400">~/projects</span>
              <span className="text-gray-500">$</span>
              <span className="text-yellow-400">./initialize-portfolio.sh</span>
            </div>

            {/* Typed Content */}
            <div className="space-y-2">
              {typedText.split('\n').map((line, index) => (
                <div key={index} className="flex items-start gap-2">
                  {line.includes('✓') ? (
                    <span className="text-green-400 font-bold">{line}</span>
                  ) : line.includes('>') ? (
                    <span className="text-cyan-400">{line}</span>
                  ) : line.includes('const') || line.includes('developer') ? (
                    <span className="text-yellow-300">{line}</span>
                  ) : line.includes('npm') ? (
                    <span className="text-blue-400">{line}</span>
                  ) : (
                    <span className="text-gray-300">{line}</span>
                  )}
                </div>
              ))}
              {currentPhase >= 3 && currentPhase < 4 && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
                </div>
              )}
            </div>

            {/* Success State */}
            {currentPhase >= 4 && (
              <div className="mt-6 p-4 bg-green-900/30 border border-green-500/50 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">Portfolio System Online</span>
                </div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>✓ React Components Loaded</div>
                  <div>✓ TypeScript Compiled</div>
                  <div>✓ Tailwind CSS Processed</div>
                  <div>✓ Skills & Projects Ready</div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-cyan-400">
                  <ChevronRight className="w-4 h-4" />
                  <span>Launching portfolio interface...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Glitch overlay for transition */}
      {currentPhase >= 5 && (
        <div className="absolute inset-0 bg-background animate-pulse opacity-50"></div>
      )}
    </div>
  );
};

export default WelcomeAnimation;