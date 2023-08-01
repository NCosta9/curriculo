import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';


function RoutesApp() {
    return (

        <HashRouter>
            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>
        </HashRouter>


    )

}

export default RoutesApp;