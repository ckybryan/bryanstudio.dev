import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeveloperPortfolio from './pages/DeveloperPortfolio';
import PetCrewLanding from './pages/PetCrewLanding';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Developer portfolio home */}
        <Route path="/" element={<DeveloperPortfolio />} />

        {/* PetCrew app routes */}
        <Route path="/petcrew" element={<PetCrewLanding />} />
        <Route path="/petcrew/privacy" element={<PrivacyPolicy />} />
        <Route path="/petcrew/support" element={<Support />} />
        <Route path="/petcrew/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
