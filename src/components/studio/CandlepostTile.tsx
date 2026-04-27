export default function CandlepostTile() {
  return (
    <div
      className="tile"
      style={{
        background:
          'linear-gradient(135deg, #FDFCF7 0%, #F0EDE0 50%, #E0EDD9 100%)',
      }}
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
        {/* LEFT: product info */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src="/candlepost/logo-120.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="display text-3xl leading-none mb-1.5">
                    Candlepost
                  </h3>
                  <p className="text-sm text-muted">
                    Never miss a birthday again
                  </p>
                </div>
              </div>
              <span className="mono text-[10px] inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur rounded-full border border-candlepost/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-candlepost" />
                LIVE
              </span>
            </div>

            <p className="display text-2xl md:text-[28px] leading-[1.25] mb-5">
              Personal birthday emails, written for you, sent from your Gmail.
            </p>
            <p className="text-[15px] text-ink/75 leading-relaxed mb-8 max-w-md">
              Add a contact and a few notes. Candlepost drafts a heartfelt
              message on the day, sends it from your own inbox, and never lets
              you forget.
            </p>

            <ul className="mono text-xs text-muted space-y-2 mb-8">
              <li className="flex gap-3">
                <span className="text-candlepost">·</span> AI-personalized from your notes
              </li>
              <li className="flex gap-3">
                <span className="text-candlepost">·</span> Sends from your own Gmail
              </li>
              <li className="flex gap-3">
                <span className="text-candlepost">·</span> Preview & approve, or auto-send
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <a
                href="https://candlepost.bryanstudio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-candlepost text-white mono text-xs px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Open Candlepost
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
              <a
                href="https://candlepost.bryanstudio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs text-candlepost link-sweep"
              >
                Learn more →
              </a>
            </div>
            <p className="mono text-[10px] text-muted">
              WEB · CREDITS · LAUNCHED 2026
            </p>
          </div>
        </div>

        {/* RIGHT: browser with drafted birthday email */}
        <div className="device-stage flex items-center justify-center p-8 md:p-12 bg-gradient-to-bl from-transparent to-white/30">
          <div className="browser relative z-10">
            <div className="browser-bar">
              <span className="dot bg-[#FF5F57]" />
              <span className="dot bg-[#FEBC2E]" />
              <span className="dot bg-[#28C840]" />
              <div className="flex-1 ml-3 mono text-[10px] text-white/50 bg-black/30 rounded px-2.5 py-1">
                candlepost.bryanstudio.dev
              </div>
            </div>
            <div className="browser-screen">
              <div className="flex items-center justify-between mb-3">
                <p className="mono text-[9px] text-candlepost">
                  DRAFT · SENDS TODAY 9:00 AM
                </p>
                <span className="mono text-[9px] text-candlepost-clay bg-candlepost-clay/10 px-1.5 py-0.5 rounded">
                  🎂 SARAH · TURNS 32
                </span>
              </div>

              {/* Contact card */}
              <div className="rounded-lg border border-rule p-3 mb-3 bg-white">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-candlepost/20 flex items-center justify-center mono text-[11px] font-semibold text-candlepost">
                    SK
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-ink leading-tight">
                      Sarah Kim
                    </p>
                    <p className="mono text-[9px] text-muted truncate">
                      sister · loves hiking · just had a baby
                    </p>
                  </div>
                </div>
              </div>

              {/* Email draft */}
              <div className="rounded-lg border border-rule overflow-hidden bg-white mb-3">
                <div className="px-3 py-2 border-b border-rule bg-paper-2/50">
                  <p className="mono text-[9px] text-muted mb-0.5">
                    From: <span className="text-ink">you@gmail.com</span>
                  </p>
                  <p className="mono text-[9px] text-muted mb-0.5">
                    To: <span className="text-ink">sarah.kim@gmail.com</span>
                  </p>
                  <p className="text-[11px] font-semibold text-ink mt-1">
                    Happy birthday, Sarah ✨
                  </p>
                </div>
                <div className="px-3 py-2.5 text-[11px] leading-relaxed text-ink/85 space-y-1.5">
                  <p>Sarah —</p>
                  <p>
                    Thirty-two looks good on you. Hope baby Ellie lets you
                    sleep in for once today (and that you sneak a quiet
                    morning on a trail somewhere).
                  </p>
                  <p>So proud of the year you've had. Love you.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 mb-3">
                <button className="mono text-[10px] bg-candlepost text-white px-2.5 py-1 rounded font-medium">
                  Approve & schedule
                </button>
                <button className="mono text-[10px] text-candlepost border border-candlepost/30 px-2.5 py-1 rounded">
                  Regenerate
                </button>
                <span className="mono text-[9px] text-muted ml-auto">
                  1 credit
                </span>
              </div>

              <div className="h-px bg-rule mb-2.5" />
              <p className="mono text-[9px] text-muted mb-1.5">UPCOMING</p>
              <div className="space-y-1">
                {[
                  { name: 'Mom', when: 'in 4 days', tone: 'heartfelt' },
                  { name: 'Daniel (boss)', when: 'next week', tone: 'professional' },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2 text-[10px]"
                  >
                    <span className="text-ink/80 flex-1">{c.name}</span>
                    <span className="mono text-muted">{c.when}</span>
                    <span className="mono text-[9px] bg-candlepost/10 text-candlepost px-1.5 py-0.5 rounded">
                      {c.tone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
