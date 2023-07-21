import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';


function RoutesApp() {
    return (

        <HashRouter basename="/app">
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />


            </Routes>
        </HashRouter>


    )

}

export default RoutesApp;