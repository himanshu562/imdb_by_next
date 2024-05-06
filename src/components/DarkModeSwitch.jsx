"use client";
import {MdLightMode,MdDarkMode} from 'react-icons/md';
import {useTheme} from 'next-themes';
import {useState} from 'react';
import {useEffect} from 'react';
export default function DarkModeSwitch(){
    const{theme,setTheme,systemTheme}=useTheme();
    const [mounted,setMounted]=useState(false);   // It is very useful in order to manage the state in our Next Js application. It allows us to add the state, and update the state based on the previous state. It provides us optimized and simple way to store the information from previous renders.
    const currentTheme=theme==='system'?systemTheme:theme; // i as we click on the icon changes the color in to another color and again on click changes to previous color , due to useState it update the next state which has to come. 
    useEffect(()=>setMounted(true),[]);    //  useEffect hooks is a predefined hook that handles the effects of the dependency array // after loaded the page it learn the prev. rendering as we click on the icon changes the color in to another color and again on click changes to previous color , due useEffect it remember the previous rendering.
    return (
        <div>{mounted&&(currentTheme==='dark'?(<MdLightMode onClick={()=>setTheme('light')}className='text-xl cursor-pointer hover:text-amber-500'/>):(
        <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>))}</div>  // it will provide the dark and light mode icon and on moving cursor it will change in to amber color//
    ); // on putting the current theme and MdDarkMode and MdLightMode  in parenthesis , we will never see any icon during refreshing the page untill it(page) get mounted(loaded)//
}