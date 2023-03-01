import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'
import { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Loader } from "./components/Loader";
import { HomePage } from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";
import FlowerDetails from "./flowerDetailPage/FlowerDetails";

import { atom } from "jotai";
export const isHomeFooterInViewAtom = atom(false)

function App() {
    const [isFontLoaded, setIsFontLoaded] = useState(false)
    useLayoutEffect(() => {
        document.fonts.ready.then(() => {
            setIsFontLoaded(true)
        })
    }, [])

    return (
        <div className="App">
            {isFontLoaded ?
                (<>
                    <HomePage />
                    <AboutPage />
                    <FlowerDetails />
                </>

                ) : (
                    <Loader />
                )
            }
        </div>
    );
}

export default App;
