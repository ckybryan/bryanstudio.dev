import StudioNav from '../components/studio/StudioNav';
import StudioFooter from '../components/studio/StudioFooter';
import PetCrewTile from '../components/studio/PetCrewTile';
import SnapSellTile from '../components/studio/SnapSellTile';
import CandlepostTile from '../components/studio/CandlepostTile';
import { Link } from 'react-router-dom';

export default function DeveloperPortfolio() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <StudioNav />

      {/* Hero */}
      <section id="top" className="px-6 md:px-8 py-28 md:py-40">
        <div className="max-w-6xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">
            Now shipping — 3 products
          </p>
          <h1 className="display text-5xl md:text-[72px] leading-[1.05] max-w-4xl mb-8">
            Bryan Studio makes small, opinionated apps for everyday life.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Based in Toronto. Three apps shipped. More in the oven.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section
        id="products"
        className="px-6 md:px-8 py-20 md:py-28 border-t border-rule"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-rule pb-4">
            <p className="mono-caps text-[11px] text-muted">Products</p>
            <p className="mono text-xs text-muted">3 live · more coming</p>
          </div>

          <div className="space-y-6">
            <CandlepostTile />
            <SnapSellTile />
            <PetCrewTile />
          </div>
        </div>
      </section>

      {/* Studio strip */}
      <section
        id="studio"
        className="bg-paper-2 px-6 md:px-8 py-24 border-t border-b border-rule"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="mono-caps text-[11px] text-muted mb-6">Studio</p>
          <p className="text-xl md:text-2xl leading-relaxed text-ink mb-6">
            Bryan Studio is a one-person app company. We build the kind of
            software we wanted to exist — small, careful, and paid for by the
            people who use it.
          </p>
          <Link
            to="/studio"
            className="mono text-sm text-accent link-sweep inline-block"
          >
            Read more →
          </Link>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
