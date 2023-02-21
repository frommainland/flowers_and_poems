import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'
import { useState, useEffect, useLayoutEffect } from 'react';
import { Loader } from "./components/Loader";
import { HomePage } from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";

import { atom } from "jotai";
export const isHomeFooterInViewAtom = atom(false)

function App() {
    const [isFontLoaded, setIsFontLoaded] = useState(false)
    useEffect(() => {
        document.fonts.ready.then(() => {
            setIsFontLoaded(true)
        })
    }, [])

    return (
        <div className="App">
            {isFontLoaded ?
                (
                    <HomePage />
                ) : (
                    <Loader />
                )
            }
        </div>
    );
}

export default App;
