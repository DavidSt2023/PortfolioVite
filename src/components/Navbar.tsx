import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";

interface Component {
    header: string;
    items: Array<{
        title: string;
        description: string;
        href: string | undefined;
    }>;
}

export function NavBar() {
    const [components,setComponets] = useState<Component[]>([]);

    function inizile(){
        setComponets([
  //           {
  //   header: 'Projekte',
  //   items: [
  //     {
  //       title: 'Snake Game',
  //       href: '#projects',
  //       description: 'built with GOlang and Vue.js, this is a simple snake game that you can play in your browser.',
  //     },{
  //       title: 'Todo App',
  //       href: '#projects',
  //       description: 'A simple todo app built with Vue.js and Tailwind CSS, allowing you to manage tasks efficiently.',
  //     },{
  //       title: 'Tacking Map',
  //       href: '#projects',
  //       description: 'A tracking map application that visualizes real-time data on a map, built with Vue.js and Mapbox.',
  //     }
  //   ]
  // },
  {
    header: 'Contact',
    items: [
      {
        title: 'LinkIn ',
        href: 'https://www.linkedin.com/in/your-profile',
        description: 'Connect with me on LinkedIn to see my professional journey and network with me.'
      },
      {
        title: 'Email',
        href: undefined,
        description: 'If you have any questions or want to collaborate, feel free to reach out via email.',
      },
      {
        title: 'Github',
        href: undefined,
        description: 'Explore my projects and contributions on GitHub, where I share my code and collaborate with others.',
      }
    ]
  },
    {
    header: 'About Me',
    items: [
      {
        title: 'Classic Resume',
        href: 'https://www.linkedin.com/in/your-profile',
        description: 'Connect with me on LinkedIn to see my professional journey and network with me.'
      },
    ]
  }
        ])
    }
    useEffect(() => {
    inizile();
    },[])
    return(
        <>
          <NavigationMenu>
    <NavigationMenuList>
      {components.map((component)=> { return (<NavigationMenuItem  key="index" >
        <NavigationMenuTrigger className="cursor-pointer scroll-m-20  font-bold tracking-tight">
          { component.header }
        </NavigationMenuTrigger>
        <NavigationMenuContent className="w-[400px] md:w-[500px] lg:w-[600px] bg-primary-50 dark:bg-primary-900 rounded-md shadow-lg">
          <ul className="grid gap-1 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            {component.items.map((el,i)=> { return (<li  key={"itemIndex" + i}>
              <NavigationMenuLink className="hover:bg-muted/80 transition-colors duration-200 " asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary-100 dark:hover:bg-primary-800"
                  href="item.href"
                >
                    <span className="font-semibold text-primary-900 underline decoration-solid underline-offset-4 dark:text-primary-50">{ el.title }</span>
                  <p className="text-sm text-primary-800 dark:text-primary-300">{ el.description }</p>
                </a>
              </NavigationMenuLink>
            </li>)})}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>) })}
    </NavigationMenuList>
  </NavigationMenu>
  </>
    )
}