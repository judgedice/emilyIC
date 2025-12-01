import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Superpowers } from './components/Superpowers';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { CareerMilestones } from './components/CareerMilestones';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { ManagementStrategy } from './components/ManagementStrategy';
import { PasswordProtection } from './components/PasswordProtection';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Superpowers />
      <About />
      <Portfolio />
      <CareerMilestones />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  // Set your password here or use environment variable
  // For production, use: import.meta.env.VITE_SITE_PASSWORD || 'your-default-password'
  const sitePassword = import.meta.env.VITE_SITE_PASSWORD || '2026';

  return (
    <PasswordProtection password={sitePassword}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/management-strategy" element={<ManagementStrategy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </PasswordProtection>
  );
}
