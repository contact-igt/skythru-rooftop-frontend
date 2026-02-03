import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import GTMPageView from './components/hooks/useUTMSource/gtmpageview';

export default function App() {
    return (
        <Router>
            <GTMPageView/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
}
