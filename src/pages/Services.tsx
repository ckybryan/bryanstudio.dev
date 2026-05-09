import StudioNav from '../components/studio/StudioNav';
import StudioFooter from '../components/studio/StudioFooter';

type Tier = {
  name: string;
  price: string;
  blurb: string;
};

const tiers: Tier[] = [
  {
    name: 'Small website',
    price: '$20',
    blurb: '1-2 page landing site, deployed live. No auth, no database.',
  },
  {
    name: 'Mid-size website',
    price: '$50',
    blurb: 'Up to 10 pages, no auth or database, deployed live and ready.',
  },
  {
    name: 'Big website',
    price: '$100',
    blurb:
      'Up to 20 pages with login, database, and deploy. Built for real users.',
  },
  {
    name: 'iOS app (TestFlight)',
    price: '$100',
    blurb: 'Small native app, up to 5 screens, delivered via TestFlight.',
  },
];

const addOns: Tier[] = [
  {
    name: 'AI feature',
    price: '+$20',
    blurb:
      'Per feature — chatbot, smart search, content or image generation, classification, anything.',
  },
  {
    name: 'App Store submission',
    price: '+$50',
    blurb: 'I handle the submission and Apple review for an iOS app build.',
  },
  {
    name: 'SEO basics',
    price: '+$20',
    blurb: 'Meta tags, sitemap, robots.txt, OG image, and on-page setup.',
  },
  {
    name: 'Custom domain setup',
    price: '+$10',
    blurb: 'DNS records, SSL, and redirects from www to root.',
  },
  {
    name: 'Email contact form',
    price: '+$10',
    blurb: 'Working contact form with spam protection.',
  },
  {
    name: 'Additional page',
    price: '+$5',
    blurb: 'One extra page beyond your tier limit.',
  },
  {
    name: 'Additional revision',
    price: '+$10',
    blurb: 'One extra round of revisions beyond what your tier includes.',
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
            <p className="mono text-xs text-muted">flat rate · USD</p>
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

          <div className="flex items-baseline justify-between mt-20 mb-12 border-b border-rule pb-4">
            <p className="mono-caps text-[11px] text-muted">Add-ons</p>
            <p className="mono text-xs text-muted">stack on any tier</p>
          </div>

          <ul className="divide-y divide-rule border-b border-rule">
            {addOns.map((addon) => (
              <li
                key={addon.name}
                className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline"
              >
                <div className="col-span-12 md:col-span-4">
                  <p className="display text-xl md:text-2xl">{addon.name}</p>
                </div>
                <div className="col-span-8 md:col-span-6">
                  <p className="text-base text-muted leading-relaxed">
                    {addon.blurb}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-2 text-right">
                  <p className="mono text-lg md:text-xl text-ink">
                    {addon.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What I need from you */}
      <section className="bg-paper-2 px-6 md:px-8 py-20 md:py-28 border-t border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">
            What I need from you
          </p>
          <ul className="space-y-8 text-ink leading-relaxed">
            <li>
              <p className="display text-lg mb-2">1. Project brief</p>
              <p className="text-base text-muted">
                What is the site for, who is the audience, what should
                visitors do or feel? Drop links to 2-3 sites you like the
                look of, plus any wireframes or sketches you have.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">2. Content and assets</p>
              <p className="text-base text-muted">
                Send any copy, logos, product photos, and other images you
                want on the site. If you don't have copy yet, write rough
                notes per page and I'll polish them.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">3. Design preferences</p>
              <p className="text-base text-muted">
                Any brand colors, fonts, or styles you want me to follow?
                If you don't have a brand yet, just say "pick something
                clean" and I will.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">4. Domain and hosting</p>
              <p className="text-base text-muted">
                Do you have a domain you want to use? Any existing hosting
                account? If not, I'll deploy on a free Vercel or Railway
                subdomain you can swap later.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* How I work */}
      <section className="px-6 md:px-8 py-20 md:py-28 border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">
            How it works
          </p>
          <ol className="space-y-8 text-ink leading-relaxed">
            <li>
              <p className="display text-lg mb-2">
                <span className="mono text-sm text-accent mr-3">01</span>
                Brief review and kickoff
              </p>
              <p className="text-base text-muted ml-9">
                I read everything you sent, ask any clarifying questions,
                and confirm the scope, page list, and timeline so we are
                aligned before any code happens.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">
                <span className="mono text-sm text-accent mr-3">02</span>
                Design draft
              </p>
              <p className="text-base text-muted ml-9">
                I send you a first design pass — either a Figma mockup or
                a deployed staging link, depending on the tier. You give
                feedback in writing or as comments.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">
                <span className="mono text-sm text-accent mr-3">03</span>
                Build and deploy to staging
              </p>
              <p className="text-base text-muted ml-9">
                I build the site to spec and deploy it to a staging URL
                you can click through. You see the real thing running, not
                a screenshot.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">
                <span className="mono text-sm text-accent mr-3">04</span>
                Revisions
              </p>
              <p className="text-base text-muted ml-9">
                You send the changes you want. I apply them and re-deploy
                to staging. Repeat until you're happy, within the revision
                count for your tier.
              </p>
            </li>
            <li>
              <p className="display text-lg mb-2">
                <span className="mono text-sm text-accent mr-3">05</span>
                Launch and handoff
              </p>
              <p className="text-base text-muted ml-9">
                I push the final version live, hand over the code and
                deployment access, and write a short note covering how to
                update content yourself.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* The honest part */}
      <section className="bg-paper-2 px-6 md:px-8 py-20 md:py-28 border-b border-rule">
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
      <section className="px-6 md:px-8 py-20 md:py-28 border-b border-rule">
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
      <section className="bg-paper-2 px-6 md:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mono-caps text-[11px] text-muted mb-6">Get in touch</p>
          <p className="text-xl md:text-2xl leading-relaxed text-ink mb-8">
            Send a brief, get a quote within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-5">
            <a
              href="https://www.upwork.com/freelancers/~01536347d6eee76c9b?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ink text-paper px-6 py-3 mono text-sm hover:bg-accent transition-colors"
            >
              Hire me on Upwork →
            </a>
            <a
              href="mailto:info@bryanstudio.dev?subject=Project%20brief"
              className="mono text-sm text-accent link-sweep inline-block"
            >
              or email info@bryanstudio.dev →
            </a>
          </div>
          <p className="mono text-xs text-muted mt-10">
            Toronto · Eastern Time · prices in USD · pay via Upwork escrow
            or Interac e-Transfer (CAD at current FX)
          </p>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
