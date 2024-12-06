import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext'; // Correct path to Context
import AdminPage from './AdminPage';
import AudiencePage from './ClientPage';

function App() {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/audience" element={<AudiencePage />} />
                </Routes>
            </Router>
        </AppProvider>
    );
}

export default App;
