import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/index.jsx';
import About from './pages/about.jsx';
import ProjectsPage from './pages/projects.jsx';
import ContactPage from './pages/contact.jsx';
import './styles/globals.css';
import './styles/App.css';
import './styles/PageHeader.css';
import Experience from './sections/Experience.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;