import React, { useEffect, useState } from "react";
import {Sun, Moon} from "lucide-react";

export default function Theme() {

    const[theme, setTheme] = useState(localStorage.getItem('theme'))
    
    const ToggleTheme = () =>{
        setTheme(theme == "light" ? "dark" : "light")
    }

    useEffect(() => {
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme)
    },[theme])

    return (
        <div className="">
            <button className="p-1 rounded-4xl" onClick={ToggleTheme} style={{marginRight:"15px"}}>
                {theme === "light" ? <Moon size={18}/> : <Sun size={18}/> }

            </button>
        </div>
    )
}