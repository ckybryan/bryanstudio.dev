export default function SnapSellTile() {
  return (
    <div
      className="tile"
      style={{
        background:
          'linear-gradient(135deg, #EAF6F3 0%, #DCEEE9 60%, #CDE6DE 100%)',
      }}
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
        {/* LEFT: product info */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[18px] bg-snapsell flex items-center justify-center shadow-lg ring-1 ring-black/5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx={12} cy={13} r={4} />
                  </svg>
                </div>
                <div>
                  <h3 className="display text-3xl leading-none mb-1.5">
                    SnapSell
                  </h3>
                  <p className="text-sm text-muted">Snap a photo, sell it</p>
                </div>
              </div>
              <span className="mono text-[10px] inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur rounded-full border border-snapsell/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-snapsell" />
                LIVE
              </span>
            </div>

            <p className="display text-2xl md:text-[28px] leading-[1.25] mb-5">
              From one photo to four marketplace listings, in seconds.
            </p>
            <p className="text-[15px] text-ink/75 leading-relaxed mb-8 max-w-md">
              AI writes the title, description, price, and tags — tailored per
              platform. Paste straight into Facebook, eBay, Etsy, or Amazon.
            </p>

            <ul className="mono text-xs text-muted space-y-2 mb-8">
              <li className="flex gap-3">
                <span className="text-snapsell">·</span> Platform-specific optimization
              </li>
              <li className="flex gap-3">
                <span className="text-snapsell">·</span> Generated price suggestions
              </li>
              <li className="flex gap-3">
                <span className="text-snapsell">·</span> One-click copy to any marketplace
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <a
                href="https://snap-sell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-snapsell text-white mono text-xs px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Open SnapSell
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
                href="https://snap-sell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs text-snapsell link-sweep"
              >
                Learn more →
              </a>
            </div>
            <p className="mono text-[10px] text-muted">
              WEB · FREEMIUM · LAUNCHED 2026
            </p>
          </div>
        </div>

        {/* RIGHT: browser with real before/after showcase */}
        <div className="device-stage flex items-center justify-center p-8 md:p-12 bg-gradient-to-bl from-transparent to-white/30">
          <div className="browser relative z-10">
            <div className="browser-bar">
              <span className="dot bg-[#FF5F57]" />
              <span className="dot bg-[#FEBC2E]" />
              <span className="dot bg-[#28C840]" />
              <div className="flex-1 ml-3 mono text-[10px] text-white/50 bg-black/30 rounded px-2.5 py-1">
                snap-sell.com
              </div>
            </div>
            <div className="browser-screen">
              <p className="mono text-[9px] text-snapsell mb-3">
                GENERATED LISTING · FACEBOOK MARKETPLACE
              </p>

              {/* Product image (AI studio shot) with BEFORE thumbnail overlay */}
              <div className="relative rounded-lg overflow-hidden border border-rule mb-4 aspect-[4/3]">
                <img
                  src="/snapsell/showcase/after.jpg"
                  alt="AI-generated studio-quality product shot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur rounded px-1.5 py-0.5">
                  <p className="mono text-[8px] text-snapsell font-semibold">
                    AI · STUDIO SHOT
                  </p>
                </div>
                <div className="absolute bottom-2 right-2 flex items-end gap-1.5">
                  <div className="mono text-[8px] text-white/90 bg-black/50 backdrop-blur rounded px-1.5 py-0.5 self-center">
                    your photo →
                  </div>
                  <div className="w-14 h-14 rounded border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="/snapsell/showcase/before.jpg"
                      alt="Your original photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="font-semibold text-[14px] mb-1 text-ink leading-tight">
                Toddler Safety Gate — Excellent Condition
              </p>
              <p className="text-[12px] text-muted leading-snug mb-3">
                Pressure-mounted pet & baby gate. Clean, sturdy, ready to
                install. Fits standard doorways.
              </p>

              <div className="flex items-center gap-1.5 mb-4 flex-wrap">
                <span className="mono text-[10px] font-medium bg-snapsell/10 text-snapsell px-2 py-0.5 rounded">
                  $45
                </span>
                <span className="mono text-[10px] bg-ink/5 text-ink/60 px-2 py-0.5 rounded">
                  baby
                </span>
                <span className="mono text-[10px] bg-ink/5 text-ink/60 px-2 py-0.5 rounded">
                  safety
                </span>
                <span className="mono text-[10px] bg-ink/5 text-ink/60 px-2 py-0.5 rounded">
                  home
                </span>
              </div>

              <div className="h-px bg-rule mb-3" />
              <p className="mono text-[9px] text-muted mb-2">ALSO READY FOR</p>
              <div className="grid grid-cols-3 gap-2">
                {['ebay', 'etsy', 'amazon'].map((mp) => (
                  <div
                    key={mp}
                    className="border border-rule rounded-lg p-2 flex items-center justify-center h-8"
                  >
                    <img
                      src={`/snapsell/icons/${mp}.svg`}
                      alt={mp}
                      className="h-3 w-auto opacity-70"
                    />
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
