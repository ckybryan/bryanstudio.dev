import { Link } from 'react-router-dom';

type NavLink = { label: string; href: string; external?: boolean };

type Props = {
  links?: NavLink[];
};

const defaultLinks: NavLink[] = [
  { label: 'Products', href: '/#products' },
  { label: 'Studio', href: '/studio' },
  { label: 'Support', href: '/petcrew/support' },
];

export default function StudioNav({ links = defaultLinks }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="display text-[17px] flex items-center gap-2">
          Bryan Studio
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </Link>
        <nav className="flex items-center gap-5 md:gap-6 mono text-xs text-muted">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ) : link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
