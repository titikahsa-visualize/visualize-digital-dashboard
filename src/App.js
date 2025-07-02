import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Optional Navigation */}
        <nav className="p-4 bg-gray-800 flex gap-6">
          <Link to="/" className="hover:text-lime-400">Dashboard</Link>
          <Link to="/contact" className="hover:text-lime-400">Contact Form</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;