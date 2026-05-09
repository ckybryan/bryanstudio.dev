import StudioNav from '../components/studio/StudioNav';
import StudioFooter from '../components/studio/StudioFooter';

type Tier = {
  name: string;
  price: string;
  blurb: string;
};

const tiers: Tier[] = [
  {
    name: 'Small site fix',
    price: '$20',
    blurb: 'One page, up to 2 hours — bug fix, copy update, small tweak.',
  },
  {
    name: 'Mid-size website',
    price: '$50',
    blurb: 'Up to 5 pages, no auth or database, deployed live.',
  },
  {
    name: 'Big website',
    price: '$100',
    blurb: 'Up to 10 pages, login, database, deployed live.',
  },
  {
    name: 'iOS app (TestFlight)',
    price: '$100',
    blurb: 'Small native app, up to 5 screens, delivered via TestFlight.',
  },
  {
    name: 'App Store submission',
    price: '+$50',
    blurb: 'Add-on. I handle the submission and Apple review.',
  },
  {
    name: 'AI feature',
    price: '+$20',
    blurb:
      'Add-on per feature — chatbot, smart search, content or image generation, classification, anything.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <StudioNav />

      {/* Hero */}
      <section className="px-6 md:px-8 py-28 md:py-40">
        <div className="max-w-6xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">
            Services — taking on a small batch
          </p>
          <h1 className="display text-5xl md:text-[72px] leading-[1.05] max-w-4xl mb-8">
            Cheap, fast websites and iOS apps. AI built in.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Flat-rate pricing. No hourly billing, no surprises. I'm taking on a
            small batch of projects right now to grow my portfolio — these
            rates won't last forever.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-8 py-20 md:py-28 border-t border-rule">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-rule pb-4">
            <p className="mono-caps text-[11px] text-muted">Pricing</p>
            <p className="mono text-xs text-muted">flat rate · CAD</p>
          </div>

          <ul className="divide-y divide-rule border-b border-rule">
            {tiers.map((tier) => (
              <li
                key={tier.name}
                className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline"
              >
                <div className="col-span-12 md:col-span-4">
                  <p className="display text-xl md:text-2xl">{tier.name}</p>
                </div>
                <div className="col-span-8 md:col-span-6">
                  <p className="text-base text-muted leading-relaxed">
                    {tier.blurb}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-2 text-right">
                  <p className="mono text-lg md:text-xl text-ink">
                    {tier.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-paper-2 px-6 md:px-8 py-20 md:py-28 border-t border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-6">How it works</p>
          <ol className="space-y-5 text-lg text-ink leading-relaxed">
            <li>
              <span className="mono text-sm text-accent mr-3">01</span>
              You send a brief — what you want, examples, screenshots. No
              brief, no quote.
            </li>
            <li>
              <span className="mono text-sm text-accent mr-3">02</span>
              I confirm the tier and timeline within 24 hours.
            </li>
            <li>
              <span className="mono text-sm text-accent mr-3">03</span>
              You pay up front via Interac e-Transfer. Full amount, before I
              start.
            </li>
            <li>
              <span className="mono text-sm text-accent mr-3">04</span>
              I build it. One round of revisions included; extra rounds $10
              each.
            </li>
            <li>
              <span className="mono text-sm text-accent mr-3">05</span>
              You get the code, the deploy, and a working product.
            </li>
          </ol>
        </div>
      </section>

      {/* The honest part */}
      <section className="px-6 md:px-8 py-20 md:py-28 border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-6">
            The honest part
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-ink mb-6">
            These rates are unsustainably low. I'm using them to build a
            portfolio of real, shipped work.
          </p>
          <p className="text-base text-muted leading-relaxed mb-3">
            In exchange, I keep the right to show your project on this site
            (logo, screenshot, description — never private data), I extract
            reusable components for my own library, and you agree to write a
            short testimonial when it's done.
          </p>
          <p className="text-base text-muted leading-relaxed">
            You get a $1,000 site for $50. I get a portfolio piece and a
            reusable module. Both sides win.
          </p>
        </div>
      </section>

      {/* What I don't do */}
      <section className="bg-paper-2 px-6 md:px-8 py-20 md:py-28 border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-6">
            What I don't do
          </p>
          <ul className="space-y-3 text-lg text-ink leading-relaxed">
            <li>— WordPress, Wix, Squarespace, or any no-code platform tweaks</li>
            <li>— Projects without a written brief</li>
            <li>
              — Anything requiring your DNS or domain registrar password (you
              keep that — I'll send the records to add)
            </li>
            <li>— Vague scopes ("just make it look nice")</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mono-caps text-[11px] text-muted mb-6">Get in touch</p>
          <p className="text-xl md:text-2xl leading-relaxed text-ink mb-6">
            Send a brief, get a quote within 24 hours.
          </p>
          <a
            href="mailto:info@bryanstudio.dev?subject=Project%20brief"
            className="mono text-sm text-accent link-sweep inline-block"
          >
            info@bryanstudio.dev →
          </a>
          <p className="mono text-xs text-muted mt-8">
            Toronto · Eastern Time · payment via Interac e-Transfer
          </p>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
