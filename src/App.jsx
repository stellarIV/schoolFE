import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PrivacyPolicy, Courses, Contact, Leadership, Services, Programs, SocialSciencesPage, NaturalSciencesPage, Navbar, About, Footer, Home, SS, PS, HS, KG, Events, StudentLife, Teacher, TermsAndConditions, Careers, Sitemap, NotFound, NewsAndEvents } from './components/index';
import ScrollToTop from './components/effects/ScrollToTop';
 // Make sure to import the ScrollToTop component

function App() {
  return (
    <Router>
      <div className="font-Poppins bg-Solitude dark:bg-[#1f102d] transition-all duration-300 overflow-hidden">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/natural-sciences" element={<NaturalSciencesPage />} />
          <Route path="/social-sciences" element={<SocialSciencesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/studentlife" element={<StudentLife />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/newsevents" element={<NewsAndEvents />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitmap" element={<Sitemap />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/ss" element={<SS />} />
          <Route path="/kg" element={<KG />} />
          <Route path="/hs" element={<HS />} />
          <Route path="/ps" element={<PS />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
