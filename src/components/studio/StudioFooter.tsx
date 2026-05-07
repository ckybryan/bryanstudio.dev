import { Link } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

export default function StudioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="subscribe" className="bg-ink text-white/80 px-6 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-md mb-16 pb-16 border-b border-white/10">
          <NewsletterSignup variant="footer" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="display text-lg text-white flex items-center gap-2 mb-4">
              Bryan Studio
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </p>
            <p className="mono text-xs text-white/50 leading-relaxed">
              Small, opinionated apps
              <br />
              made in Toronto.
            </p>
          </div>

          <div>
            <p className="mono-caps text-[10px] text-white/40 mb-4">Products</p>
            <ul className="space-y-2 mono text-xs">
              <li>
                <a
                  href="https://candlepost.bryanstudio.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Candlepost ↗
                </a>
              </li>
              <li>
                <a
                  href="https://snap-sell.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  SnapSell ↗
                </a>
              </li>
              <li>
                <Link to="/petcrew" className="hover:text-white transition-colors">
                  PetCrew
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mono-caps text-[10px] text-white/40 mb-4">Studio</p>
            <ul className="space-y-2 mono text-xs">
              <li>
                <Link to="/studio" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@bryanstudio.dev"
                  className="hover:text-white transition-colors"
                >
                  info@bryanstudio.dev
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/bryanstudiodev"
                  target="_blank"
                  rel="me noopener"
                  className="hover:text-white transition-colors"
                >
                  X ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 mono text-[11px] text-white/40">
          <p>© {year} Bryan Studio</p>
          <p>
            For personal work, see{' '}
            <a
              href="https://bryan.wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors link-sweep"
            >
              bryan.wtf →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
