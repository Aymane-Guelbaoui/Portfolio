import React, { useEffect, useState } from "react";
import {Sun, Moon} from "lucide-react";

export default function Theme() {

    const[theme, setTheme] = useState(localStorage.getItem('theme'))
    
    const ToggleTheme = () =>{
        setTheme(theme == "dark" ? "light" : "dark")
    }

    useEffect(() => {
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme)
    },[theme])

    return (
        <div className="hover:text-amber-600 active:text-amber-600">
            <button className="p-1 rounded-4xl" onClick={ToggleTheme}>
                {theme === "dark" ? <Sun size={30}/> : <Moon size={30}/> }

            </button>
        </div>
    )
}