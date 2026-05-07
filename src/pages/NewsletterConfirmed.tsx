import { Link } from 'react-router-dom';
import StudioNav from '../components/studio/StudioNav';
import StudioFooter from '../components/studio/StudioFooter';

export default function NewsletterConfirmed() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <StudioNav />

      <section className="px-6 md:px-8 py-28 md:py-40">
        <div className="max-w-2xl mx-auto">
          <p className="mono-caps text-[11px] text-muted mb-8">Newsletter</p>
          <h1 className="display text-4xl md:text-5xl leading-[1.1] mb-6">
            You're almost in.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Check your inbox for a confirmation email from Buttondown and click
            the link to complete your signup. After that, you'll hear from us
            when something ships — no filler.
          </p>
          <Link
            to="/"
            className="mono text-sm text-accent link-sweep inline-block"
          >
            ← Back to Bryan Studio
          </Link>
        </div>
      </section>

      <StudioFooter />
    </div>
  );
}
