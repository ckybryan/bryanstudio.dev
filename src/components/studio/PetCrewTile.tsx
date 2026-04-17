import { Link } from 'react-router-dom';

export default function PetCrewTile() {
  return (
    <div
      className="tile"
      style={{
        background:
          'linear-gradient(135deg, #F4F0FF 0%, #EDE6FF 60%, #E5DAFF 100%)',
      }}
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
        {/* LEFT: product info */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[18px] bg-petcrew overflow-hidden flex items-center justify-center shadow-lg ring-1 ring-black/5">
                  <img
                    src="/petcrew/assets/icons/app-icon.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="display text-3xl leading-none mb-1.5">
                    PetCrew
                  </h3>
                  <p className="text-sm text-muted">
                    Pet care, shared with family
                  </p>
                </div>
              </div>
              <span className="mono text-[10px] inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur rounded-full border border-petcrew/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-petcrew" />
                LIVE
              </span>
            </div>

            <p className="display text-2xl md:text-[28px] leading-[1.25] mb-5">
              The whole household, on the same feeding schedule.
            </p>
            <p className="text-[15px] text-ink/75 leading-relaxed mb-8 max-w-md">
              Track meals, medications, and vet visits across every pet. Share
              with family so nothing gets logged twice — or forgotten.
            </p>

            <ul className="mono text-xs text-muted space-y-2 mb-8">
              <li className="flex gap-3">
                <span className="text-petcrew">·</span> Shared household, one tap
              </li>
              <li className="flex gap-3">
                <span className="text-petcrew">·</span> Feeding & medication reminders
              </li>
              <li className="flex gap-3">
                <span className="text-petcrew">·</span> Works offline, syncs when ready
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <a
                href="https://apps.apple.com/us/app/petcrew/id6754221965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-ink text-white mono text-xs px-5 py-3 rounded-lg hover:scale-[1.02] transition-transform"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download on the App Store
              </a>
              <Link to="/petcrew" className="mono text-xs text-petcrew link-sweep">
                Learn more →
              </Link>
            </div>
            <p className="mono text-[10px] text-muted">
              iOS 17+ · FREE · MADE IN TORONTO
            </p>
          </div>
        </div>

        {/* RIGHT: device-framed real screenshot */}
        <div className="device-stage flex items-center justify-center p-8 md:p-12 bg-gradient-to-bl from-transparent to-white/30">
          <div className="phone relative z-10">
            <div className="phone-screen bg-white">
              <img
                src="/petcrew/assets/screenshots/home-pet-list.png"
                alt="PetCrew app — home screen with pet list and feeding progress"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
