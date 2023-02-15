import "the-new-css-reset/css/reset.css"
import './rootCSS.scss'
import './font.css'

import FlowerGrid from "./homePage/FlowerGrid";


import AboutPage from "./aboutPage/AboutPage";
function App() {
    return (
        <div className="App">
            <AboutPage />
            {/* <FlowerGrid /> */}
            {/* <div style={{ height: '20vh', width: '100vw' }}></div> */}
        </div>
    );
}

export default App;
