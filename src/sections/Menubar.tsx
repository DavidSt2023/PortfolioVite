import { useState, useEffect } from "react";
import { NavBar } from "../components/Navbar";
import { Sun, Moon,UserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Menubar() {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="bg-background border-b border-border p-4 w-full  top-0 left-0  right-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="text-2xl font-bold font-mono hover:scale-105 transition-transform cursor-pointer">
            <span className=" dark:text-primary-0">DS</span>
            <span className="text-primary-750 dark:text-gray-500 animate-pulse">_</span>
          </div>
        <div className="flex-shrink-0">
          <NavBar />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Moon /> : <Sun />}
            </Button>
          </div>
          <div>
            <Button
              variant="ghost"
              onClick={() => alert("Login work in progress")}
            ><UserRound /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menubar;
