import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Top from './components/Top';
import Company from './components/Company';
import Business from './components/Business';
import ServiceDetail from './components/ServiceDetail';
import RaceSupport from './components/RaceSupport';
import Contact from './components/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/company" element={<Company />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/motorsports/race-support" element={<RaceSupport />} />
          <Route path="/business/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;