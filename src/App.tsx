import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { SolutionsDashboard } from './components/SolutionsDashboard';
import { KPIStats } from './components/KPIStats';
import { CaseStudies } from './components/CaseStudies';
import { GlobalPresence } from './components/GlobalPresence';
import { Leadership } from './components/Leadership';
import { Testimonials } from './components/Testimonials';
import { Insights } from './components/Insights';
import { Careers } from './components/Careers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { ROICalculatorModal } from './components/ROICalculatorModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isRoiOpen, setIsRoiOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#071A35] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-300 font-sans relative overflow-x-hidden`}>
      {/* Background Ambient Orbs */}
      <div className="orb orb-blue top-[-100px] right-[-100px] fixed" />
      <div className="orb orb-purple bottom-[10%] left-[-100px] fixed" />
      <div className="orb orb-blue top-[40%] right-[-150px] fixed opacity-50" />

      {/* Top Floating Glass Navigation */}
      <Navbar
        onOpenDemo={scrollToContact}
        onOpenAiChat={() => setIsAiChatOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Corporate Sections */}
      <main>
        <Hero
          onOpenDemo={scrollToContact}
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenRoi={() => setIsRoiOpen(true)}
        />

        <KPIStats />

        <About />

        <Services
          onOpenRoi={() => setIsRoiOpen(true)}
          onOpenDemo={scrollToContact}
        />

        <Industries
          onOpenDemo={scrollToContact}
        />

        <SolutionsDashboard />

        <CaseStudies />

        <GlobalPresence />

        <Leadership />

        <Testimonials
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        <Insights />

        <Careers />

        <ContactSection
          onOpenAiChat={() => setIsAiChatOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Drawer */}
      <AiAssistant
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        onOpenDemo={scrollToContact}
      />

      {/* Corporate ROI Modal */}
      <ROICalculatorModal
        isOpen={isRoiOpen}
        onClose={() => setIsRoiOpen(false)}
        onOpenDemo={scrollToContact}
      />

      {/* Executive Keynote Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
