import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'
import Landing from './components/Landing';
import Rsvp from './components/Rsvp';
import AdminDash from './components/AdminDash';
import Schedule from './components/Schedule';
import Error from './components/pages/Error';
import About from './components/pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;