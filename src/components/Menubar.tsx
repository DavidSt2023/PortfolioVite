import { NavBar } from "./Navbar";
import { Button } from "./ui/button";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
function Menubar(){
  let isDark = false;
    
    return(
        <div className="background-white dark:bg-primary-900 text-primary-850 dark:text-primary-950  p-2 md:shadow ">
            <div className="flex justify-between  gap-2  ">
              <div className="justify-items-start">
                <div className="justify-items-start">
          <NavBar/>
        </div>
        <div className="">
          <NavBar />
        </div>
        <div className="flex  ">
          <div >
              <Button variant="ghost" size="icon" onClick={() =>  isDark = !isDark )}>
              {isDark ? <FaMoon />:<FaSun />}
              </Button>
          </div>
          <div>
             <Button variant="ghost"  @click="">
                    <Icon name="heroicons-outline:user-circle" :style="{ color: isDark ? 'white' : 'black' }" />
              </Button>
          </div>
            </div>
            </div>
        </div>
)
}
export default Menubar;