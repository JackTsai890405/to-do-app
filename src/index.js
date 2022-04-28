import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import React from 'react'

import App from './App'
import HomePage from './Home/HomePage';
import ListPage from './List/ListPage';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
        </Routes>
    </BrowserRouter>
);