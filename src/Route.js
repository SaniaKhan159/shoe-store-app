import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Launch from './Components/Launch';
import LaunchIndex from './Components/LaunchIndex';
import LaunchShoe from './Components/LaunchShoe';
import NotFound from './Components/NotFound';

function RouteConfig() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/launch" element={<Launch />}>
                    <Route path="/" element={<LaunchIndex />} />
                    <Route path=":slug" element={<LaunchShoe />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default RouteConfig;