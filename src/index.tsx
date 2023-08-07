// External Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

// Internal Imports
import { Home } from './Home';
import './index.css';
import { theme } from './Theme/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home title={"Nhien's Portfolio"} />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
