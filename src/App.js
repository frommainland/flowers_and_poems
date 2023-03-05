import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'
import { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Loader } from "./components/Loader";
import { HomePage } from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";
import FlowerDetails from "./flowerDetailPage/FlowerDetails";
import SmoothScroll from "./components/SmoothScroll";
import PageNotFound from "./404Page/PageNotFound";

import { atom } from "jotai";
import FontFaceObserver from "fontfaceobserver";
export const isHomeFooterInViewAtom = atom(false)


function App() {

    let font = new FontFaceObserver("Smiley Sans");

    const [isFontLoaded, setIsFontLoaded] = useState(false)

    font.load().then(() => {
        // console.log("Font is available");
        setIsFontLoaded(true);
    });


    // useLayoutEffect(() => {
    //     document.fonts.ready.then(() => {
    //         setIsFontLoaded(true)
    //     })
    // }, [])



    return (
        <div className="App">
            {isFontLoaded ?
                (<>
                    <Routes>
                        <Route path="/">
                            <Route index element={<HomePage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="flower&poem" element={<FlowerDetails />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </>
                ) : (
                    <Loader />
                )
            }
        </div>
    );
}

export default App;
