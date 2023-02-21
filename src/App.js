import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'
import { useState, useEffect } from 'react';
import { HomePage } from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";


import { atom } from "jotai";
export const isHomeFooterInViewAtom = atom(false)


function App() {
    return (
        <div className="App">
            < HomePage />
            {/* <AboutPage /> */}
        </div>
    );
}

export default App;
