'use client'
import {ThemeProvider} from 'next-themes'
export default function Providers({children}){
    return(
        <ThemeProvider defaultTheme='system' attribute='class'>
            <div className="text-gray-700 dark:text-gray-200 dark:  dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
                {children}  {/* here we are defining the colour that we are using in the system in which the onclicking the icon the color changes */ }
            </div>
        </ThemeProvider>
    )
}
