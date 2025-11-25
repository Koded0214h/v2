// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Layout from './Layout';
import ProjectDetail from './ProjectDetail';
import Resume from './Resume';

function DeepApp() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default DeepApp;