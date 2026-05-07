import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USERNAME = import.meta.env.VITE_NEWSLETTER_USERNAME ?? 'bryanstudio';
const ENDPOINT = `https://buttondown.email/api/emails/embed-subscribe/${USERNAME}`;

type Status = 'idle' | 'loading' | 'error';

interface Props {
  variant?: 'hero' | 'footer';
}

export default function NewsletterSignup({ variant = 'footer' }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, embed: '1' }).toString(),
      });
      navigate('/newsletter/confirmed');
    } catch {
      setStatus('error');
    }
  }

  const isFooter = variant === 'footer';
  const inputId = `nl-email-${variant}`;

  return (
    <div>
      <p
        className={`mono-caps text-[10px] mb-4 ${isFooter ? 'text-white/40' : 'text-muted'}`}
      >
        Subscribe
      </p>
      <p
        className={`text-base md:text-lg font-semibold mb-1 ${isFooter ? 'text-white' : 'text-ink'}`}
      >
        Subscribe to the bryanstudio dispatch.
      </p>
      <p className={`mono text-xs mb-6 ${isFooter ? 'text-white/50' : 'text-muted'}`}>
        One email when something ships. No filler.
      </p>

      <div aria-live="polite" aria-atomic="true">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col sm:flex-row gap-2">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={status === 'loading'}
              className={[
                'flex-1 min-w-0 px-4 py-2.5 rounded mono text-sm',
                'border transition-colors outline-none',
                'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0',
                'disabled:opacity-60',
                isFooter
                  ? 'bg-white/5 border-white/20 text-white placeholder:text-white/30 hover:border-white/40'
                  : 'bg-white border-rule text-ink placeholder:text-muted hover:border-ink/30',
              ].join(' ')}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={[
                'px-5 py-2.5 rounded mono-caps text-[11px]',
                'transition-colors disabled:opacity-60 whitespace-nowrap',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                'bg-accent text-white hover:bg-accent/90',
              ].join(' ')}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </div>

          {status === 'error' && (
            <p role="alert" className="mono text-xs text-red-400 mt-2">
              Something went wrong — try again, or email hi@bryanstudio.dev.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
