import PetCrewHero from '../components/petcrew/PetCrewHero';
import ProblemSolution from '../components/petcrew/ProblemSolution';
import FeaturesGrid from '../components/petcrew/FeaturesGrid';
import Testimonials from '../components/petcrew/Testimonials';
import Pricing from '../components/petcrew/Pricing';
import FAQ from '../components/petcrew/FAQ';
import FinalCTA from '../components/petcrew/FinalCTA';

export default function PetCrewLanding() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PetCrewHero />
        <ProblemSolution />
        <FeaturesGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
