import StudioNav from '../components/studio/StudioNav';
import StudioFooter from '../components/studio/StudioFooter';

export default function Studio() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <StudioNav />

      <section className="px-6 md:px-8 py-28 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">About the studio</p>
          <h1 className="display text-4xl md:text-[56px] leading-[1.05] mb-10">
            Small apps, made with care.
          </h1>

          <div className="space-y-6 text-[17px] leading-relaxed text-ink/85">
            <p>
              Bryan Studio is a one-person app company based in Toronto, Canada.
              It exists because there's a specific kind of software I wanted to
              see in the world — small, opinionated, paid for by the people who
              use it, free of venture pressure and quarterly scope creep.
            </p>
            <p>
              Each product solves one problem well. No sprawling roadmaps, no
              lock-in, no dark patterns. If a feature isn't obviously useful, it
              doesn't ship.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-rule">
            <p className="mono-caps text-[11px] text-muted mb-6">Principles</p>
            <dl className="space-y-4 mono text-sm">
              <div className="flex gap-6">
                <dt className="text-muted w-28 shrink-0 uppercase">Quiet</dt>
                <dd className="text-ink/85">
                  No notifications you didn't ask for.
                </dd>
              </div>
              <div className="flex gap-6">
                <dt className="text-muted w-28 shrink-0 uppercase">Paid</dt>
                <dd className="text-ink/85">
                  Customers &gt; users. No ads, no data resale.
                </dd>
              </div>
              <div className="flex gap-6">
                <dt className="text-muted w-28 shrink-0 uppercase">Boring</dt>
                <dd className="text-ink/85">
                  Error handling, backups, undo. The unsexy stuff matters.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16 pt-12 border-t border-rule">
            <p className="mono-caps text-[11px] text-muted mb-6">Contact</p>
            <a
              href="mailto:info@bryanstudio.dev"
              className="mono text-xl link-sweep inline-block mb-6"
            >
              info@bryanstudio.dev →
            </a>
            <p className="mono text-xs text-muted">
              For personal work (consulting, advising, freelance), see{' '}
              <a
                href="https://bryan.wtf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink transition-colors link-sweep"
              >
                bryan.wtf
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
