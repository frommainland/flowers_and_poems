import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'

import { HomePage } from "./homePage/HomePage";
import AboutPage from "./aboutPage/AboutPage";

import { atom } from "jotai";

export const isHomeFooterInViewAtom = atom(false)


function App() {
    return (
        <div className="App">
            {/* <AboutPage /> */}
            <HomePage />
        </div>
    );
}

export default App;
