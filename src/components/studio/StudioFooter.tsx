import { Link } from 'react-router-dom';

export default function StudioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80 px-6 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
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
              <Link to="/petcrew" className="hover:text-white transition-colors">
                PetCrew
              </Link>
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
              <Link
                to="/petcrew/support"
                className="hover:text-white transition-colors"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/petcrew/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/petcrew/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mono-caps text-[10px] text-white/40 mb-4">Contact</p>
          <ul className="space-y-2 mono text-xs">
            <li>
              <a
                href="mailto:info@bryanstudio.dev"
                className="hover:text-white transition-colors"
              >
                info@bryanstudio.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 mono text-[11px] text-white/40">
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
    </footer>
  );
}
