import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Product Pages
import CorrugatedBoxes from './pages/products/CorrugatedBoxes';
import HeavyDutyBoxes from './pages/products/HeavyDutyBoxes';
import WoodenBox from './pages/products/WoodenBox';
import WoodenCrate from './pages/products/WoodenCrate';
import PlywoodPallets from './pages/products/PlywoodPallets';
import WoodenPallet from './pages/products/WoodenPallet';
import TapingSolutions from './pages/products/TapingSolutions';
import StrappingSolutions from './pages/products/StrappingSolutions';
import WrappingSolutions from './pages/products/WrappingSolutions';
import ProtectivePackaging from './pages/products/ProtectivePackaging';

// Service Pages
import ContractPackaging from './pages/services/ContractPackaging';
import FieldEngineering from './pages/services/FieldEngineering';
import MachinesToolsService from './pages/services/MachinesToolsService';
import MaintenanceContracts from './pages/services/MaintenanceContracts';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Product Routes */}
            <Route path="/products/corrugated-boxes" element={<CorrugatedBoxes />} />
            <Route path="/products/heavy-duty-boxes" element={<HeavyDutyBoxes />} />
            <Route path="/products/wooden-box" element={<WoodenBox />} />
            <Route path="/products/wooden-crate" element={<WoodenCrate />} />
            <Route path="/products/plywood-pallets" element={<PlywoodPallets />} />
            <Route path="/products/wooden-pallet" element={<WoodenPallet />} />
            <Route path="/products/taping-solutions" element={<TapingSolutions />} />
            <Route path="/products/strapping-solutions" element={<StrappingSolutions />} />
            <Route path="/products/wrapping-solutions" element={<WrappingSolutions />} />
            <Route path="/products/protective-packaging" element={<ProtectivePackaging />} />
            
            {/* Service Routes */}
            <Route path="/services/contract-packaging" element={<ContractPackaging />} />
            <Route path="/services/field-engineering" element={<FieldEngineering />} />
            <Route path="/services/machines-tools-service" element={<MachinesToolsService />} />
            <Route path="/services/maintenance-contracts" element={<MaintenanceContracts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;