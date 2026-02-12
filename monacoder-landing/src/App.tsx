import MonaCoderLandingPage from './components/MonaCoderLandingPage';
import MonaCoderLandingPageSimple from './components/MonaCoderLandingPageSimple';
import MonaCoderInvestorPage from './components/MonaCoderInvestorPage';
import MonaCoderDevSalesPage from './components/MonaCoderDevSalesPage';
import MonaCoderVibeCodePage from './components/MonaCoderVibeCodePage';
import MonaCoderPricingPage from './components/MonaCoderPricingPage';

// URL query params to switch layouts:
// - http://localhost:5173/          → Full technical layout (docs)
// - http://localhost:5173/?simple   → Simplified benefit-focused layout
// - http://localhost:5173/?investor → Investor pitch page
// - http://localhost:5173/?dev      → Developer sales page (marketing)
// - http://localhost:5173/?vibe     → Vibe coders (non-technical, API-based)
// - http://localhost:5173/?pricing  → Lifetime deal $399 (sales page)
const params = new URLSearchParams(window.location.search);

export default function App() {
  if (params.has('investor')) {
    return <MonaCoderInvestorPage />;
  }
  if (params.has('dev')) {
    return <MonaCoderDevSalesPage />;
  }
  if (params.has('vibe')) {
    return <MonaCoderVibeCodePage />;
  }
  if (params.has('pricing')) {
    return <MonaCoderPricingPage />;
  }
  if (params.has('simple')) {
    return <MonaCoderLandingPageSimple />;
  }
  return <MonaCoderLandingPage />;
}
