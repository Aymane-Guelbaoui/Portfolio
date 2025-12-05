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
            <button className="p-1 rounded-4xl relative right-3" onClick={ToggleTheme}>
                {theme === "light" ? <Moon size={20}/> : <Sun size={20}/> }

            </button>
        </div>
    )
}