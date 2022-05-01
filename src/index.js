import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import App from './App'
import HomePage from './Home/HomePage';
import ListPage from './List/ListPage';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
);