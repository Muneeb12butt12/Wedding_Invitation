import { useState } from 'react'

/* ------------------------------------------------------------------
   IMAGES – loaded from  src/assets/  (works from any folder, because
   the path starts at the project root).

     Poster.png   hero poster
     1.jpg        Shalwar Kameez
     2.jpg        Waistcoat
     3.jpg        Dress Pant
     4.jpg        Pent Coat
     asif-logo.*  optional logo, shows in header/footer if present

   The extension does not matter (.jpg .jpeg .png .webp), and a missing
   file shows a placeholder instead of breaking the page.
------------------------------------------------------------------- */
const assetFiles = import.meta.glob(
  '/src/assets/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
)

function pic(name) {
  const key = Object.keys(assetFiles).find(
    (p) => p.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase() === name.toLowerCase()
  )
  return key ? assetFiles[key] : null
}

const posterImg = pic('poster')
const shalwarImg = pic('1')
const waistcoatImg = pic('2')
const dressPantImg = pic('3')
const pentCoatImg = pic('4')
const LOGO = pic('asif-logo')

/* ------------------------------------------------------------------
   ASIF TAILOR – single page (replaces TopBar, Header, Banner,
   WhyChooseUs, Workflow, Footer + separate Contact page)

   Needs only React + Tailwind (no react-router). Save it as
   src/pages/Home.jsx and render it from main.jsx.

   Palette (from the business card)
   green  #1A7F2E   deep green  #12601F   yellow #F5E51B
   white  #FFFFFF   ink #1D1B16
------------------------------------------------------------------- */

const BUSINESS = {
  name: 'Asif Tailor',
  since: 1993,
  address: 'Sher Shah Road, Kot Khawaja Saeed, Lahore',
  phone1: '0333-4051135',
  phone2: '0300-4871851', // shown with WhatsApp icon on the card
  tel1: '+923334051135',
  wa: '923004871851',
  hours: 'Monday to Sunday, 6 AM to 10 PM',
  mapsLink: 'https://maps.app.goo.gl/8msjkShUSmqB2hL9A',
  mapsCoords: '31.58896,74.36198', // exact pin (plus code 8J3PH9Q6+HQQ)
}

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why' },
  { label: 'How we work', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    title: 'Shalwar Kameez',
    img: shalwarImg,
    text: 'Our speciality since 1993. Daily wear, Eid and wedding suits, cut to your measurements and stitched by hand and machine.',
    big: true,
  },
  { title: 'Waistcoat', img: waistcoatImg, text: 'Fitted waistcoats for weddings, functions and formal wear.' },
  { title: 'Dress Pant', img: dressPantImg, text: 'Clean lines and a proper fall, made to your waist and length.' },
  { title: 'Pent Coat', img: pentCoatImg, text: 'Structured coats and pent-coat sets, tailored to sit right on the shoulder.' },
]

const REASONS = [
  { title: 'Over 30 years of experience', text: 'Shalwar kameez has been our work since 1993. We know how the cloth should sit.' },
  { title: 'Cut to your measurements', text: 'Every piece is measured on you, not picked from a standard size.' },
  { title: 'Fitting before we finish', text: 'Try it on, tell us what to change, and we adjust it before delivery.' },
  { title: 'Open every day', text: 'Come by any day of the week, early morning to late evening.' },
]

const STEPS = [
  { title: 'Bring your cloth', text: 'Bring your own fabric, or tell us what you want to make.' },
  { title: 'Measurements', text: 'We take your measurements and note your style: collar, sleeves, daman, shalwar or pant.' },
  { title: 'Cutting', text: 'The cloth is cut carefully to your measurements.' },
  { title: 'Stitching', text: 'Your order is stitched and pressed, with attention to the seams and finishing.' },
  { title: 'Fitting', text: 'Try it on. If anything needs changing, we fix it.' },
  { title: 'Ready for pickup', text: 'Your order is ready on the date we agreed.' },
]

/* ---------- small pieces ---------- */

const PinIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
const PhoneIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.2a11 11 0 005.8 5.8L14 12l4 1.5V16a2 2 0 01-2 2h-1C8.6 18 3 12.4 3 6V5z" />
  </svg>
)
const ClockIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 2" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.700 6.700 0 01-3.300-2.900c-.2-.4.2-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.200 5.200 5.200 0 001.100 2.800 11.800 11.800 0 004.600 4.100c1.700.7 2.300.8 3.200.7a2.700 2.700 0 001.800-1.300 2.200 2.200 0 00.2-1.300c-.1-.1-.3-.2-.5-.3z" />
  </svg>
)

/* A measuring tape strip used as the section divider */
const Tape = ({ className = '' }) => (
  <div className={`tape h-7 w-full ${className}`} aria-hidden="true" />
)

/* Photo that fills its box without stretching, whatever the original size */
const Photo = ({ src, label, className = '', position = 'object-top' }) =>
  src ? (
    <img src={src} alt={label} loading="lazy" className={`object-cover ${position} ${className}`} />
  ) : (
    <div className={`flex items-center justify-center bg-[#12601F] p-4 text-center text-white/70 ${className}`}>
      {label}
    </div>
  )

export default function AsifTailorPage() {
  const [open, setOpen] = useState(false)
  const years = new Date().getFullYear() - BUSINESS.since

  return (
    <div className="at-root bg-[#FFFFFF] text-[#1D1B16] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Hind:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .at-root { font-family: 'Hind', system-ui, sans-serif; }
        .at-display { font-family: 'Fraunces', Georgia, serif; }
        section[id] { scroll-margin-top: 4.5rem; }
        /* measuring tape: marigold strip with inch ticks */
        .tape {
          background-color: #F5E51B;
          background-image:
            repeating-linear-gradient(90deg, #12601F 0 1.5px, transparent 1.5px 12px),
            repeating-linear-gradient(90deg, #12601F 0 1.5px, transparent 1.5px 60px);
          background-size: 100% 35%, 100% 65%;
          background-repeat: no-repeat;
          background-position: top left, top left;
        }
        .stitch { border: 2px dashed rgba(245,229,27,.7); }
        .stitch-dark { border: 2px dashed rgba(26,127,46,.35); }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#12601F] text-[#FFFFFF] text-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 py-2 sm:flex-row">
          <span className="flex items-center gap-2"><ClockIcon /> Open {BUSINESS.hours}</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${BUSINESS.tel1}`} className="hover:text-[#F5E51B]">{BUSINESS.phone1}</a>
            <a href={`https://wa.me/${BUSINESS.wa}`} className="hover:text-[#F5E51B]">{BUSINESS.phone2}</a>
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#1A7F2E] text-[#FFFFFF] shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            {LOGO && (
              <span className="flex h-11 items-center rounded-lg bg-white px-2 py-1">
                <img src={LOGO} alt="Asif Tailor logo" className="h-full w-auto object-contain" />
              </span>
            )}
            <span className="at-display text-2xl font-black tracking-tight text-[#F5E51B]">Asif Tailor</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="py-1 font-medium hover:text-[#F5E51B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5E51B]">
                {n.label}
              </a>
            ))}
            <a href={`tel:${BUSINESS.tel1}`} className="rounded-full bg-[#F5E51B] px-5 py-2 font-semibold text-[#12601F] hover:bg-[#FFF04D]">
              Call now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5E51B]/60 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg className="h-6 w-6 text-[#F5E51B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-[#F5E51B]/30 bg-[#12601F] lg:hidden" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 px-6 py-4 text-lg hover:bg-white/5">
                {n.label}
              </a>
            ))}
            <a href={`tel:${BUSINESS.tel1}`} className="block px-6 py-4 text-lg font-semibold text-[#F5E51B]">
              Call {BUSINESS.phone1}
            </a>
          </nav>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="relative overflow-hidden bg-[#1A7F2E] text-[#FFFFFF]">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:pt-20">
          <div className="stitch relative grid items-center gap-10 rounded-[28px] px-6 py-12 sm:px-14 sm:py-16 lg:grid-cols-[1fr_20rem]">
           <div>
            <p className="text-lg text-[#F5E51B] sm:text-xl">
              Specialist in Shalwar Kameez · since {BUSINESS.since}
            </p>
            <h1 className="at-display mt-3 text-[clamp(3.5rem,13vw,9rem)] font-black leading-[0.9] tracking-tight">
              Asif <span className="text-[#F5E51B]">Tailor</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FFFFFF]/90">
              Shalwar kameez, waistcoats, dress pants and pent coats, stitched to your measurements in Kot Khawaja Saeed, Lahore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.tel1}`} className="inline-flex items-center gap-2 rounded-full bg-[#F5E51B] px-7 py-3 text-lg font-semibold text-[#12601F] hover:bg-[#FFF04D]">
                <PhoneIcon /> Call {BUSINESS.phone1}
              </a>
              <a href={`https://wa.me/${BUSINESS.wa}`} className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFFFFF]/70 px-7 py-3 text-lg font-semibold hover:bg-white/10">
                <WhatsAppIcon /> WhatsApp us
              </a>
            </div>
           </div>

           {/* Poster */}
           <div className="mx-auto w-full max-w-xs rotate-1 rounded-2xl bg-white p-2 shadow-2xl lg:rotate-2">
             {posterImg ? (
               <img src={posterImg} alt="Asif Tailor poster" className="h-auto w-full rounded-xl" />
             ) : (
               <div className="flex aspect-[3/4] items-center justify-center rounded-xl bg-[#12601F] text-center text-white/70">Poster</div>
             )}
           </div>
          </div>
        </div>
        <Tape className="absolute bottom-0 left-0" />
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="at-display text-4xl font-black text-[#1A7F2E] sm:text-5xl">What we stitch</h2>
        <p className="mt-3 max-w-xl text-lg text-[#1D1B16]/75">Four things, done properly.</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s) =>
            s.big ? (
              <article key={s.title} className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-[#1A7F2E] text-[#FFFFFF] lg:col-span-3 lg:min-h-[28rem]">
                <Photo src={s.img} label={s.title} position="object-center" className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,77,24,.95), rgba(14,77,24,.4) 55%, transparent)' }} />
                <div className="relative p-8 lg:p-10">
                  <p className="text-lg text-[#F5E51B]">Our speciality</p>
                  <h3 className="at-display mt-1 text-5xl font-black sm:text-6xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-[#FFFFFF]/90">{s.text}</p>
                </div>
              </article>
            ) : (
              <article key={s.title} className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-[#1A7F2E]/15">
                <Photo src={s.img} label={s.title} className="aspect-[4/5] w-full" />
                <div className="p-6">
                  <h3 className="at-display text-3xl font-black text-[#1A7F2E]">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#1D1B16]/80">{s.text}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why" className="bg-[#F5E51B] text-[#12601F]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="at-display text-4xl font-black sm:text-5xl">Why people come back</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Families in Kot Khawaja Saeed have trusted us with their suits for over {years} years. We take your
              measurements, listen to what you want, and don't hand over the suit until the fit is right.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="at-display text-5xl font-black">{years}+</div>
                <div className="font-medium">years stitching</div>
              </div>
              <div>
                <div className="at-display text-5xl font-black">7</div>
                <div className="font-medium">days a week</div>
              </div>
            </div>
          </div>

          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-3">
            {REASONS.map((r) => (
              <li key={r.title} className="border-t-2 border-dashed border-[#12601F]/50 pt-4">
                <h3 className="at-display text-2xl font-bold">{r.title}</h3>
                <p className="mt-2 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="at-display text-4xl font-black text-[#1A7F2E] sm:text-5xl">From cloth to your wardrobe</h2>
        <p className="mt-3 max-w-xl text-lg text-[#1D1B16]/75">Here is what happens after you walk in.</p>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="at-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A7F2E] text-xl font-bold text-[#F5E51B]">
                {i + 1}
              </span>
              <div>
                <h3 className="at-display text-2xl font-bold text-[#1A7F2E]">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-[#1D1B16]/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Tape />

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-[#12601F] text-[#FFFFFF]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <h2 className="at-display text-4xl font-black text-[#F5E51B] sm:text-5xl">Visit the shop</h2>
            <p className="mt-4 max-w-md text-lg text-[#FFFFFF]/85">
              Walk in any day, or call first if you want to confirm timing for an urgent order.
            </p>

            <ul className="mt-10 space-y-6 text-lg">
              <li className="flex gap-4">
                <span className="mt-1 text-[#F5E51B]"><PinIcon /></span>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-[#FFFFFF]/85">{BUSINESS.address}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 text-[#F5E51B]"><ClockIcon /></span>
                <div>
                  <div className="font-semibold">Timing</div>
                  <div className="text-[#FFFFFF]/85">{BUSINESS.hours}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 text-[#F5E51B]"><PhoneIcon /></span>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href={`tel:${BUSINESS.tel1}`} className="block text-[#FFFFFF]/85 hover:text-[#F5E51B]">{BUSINESS.phone1}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 text-[#F5E51B]"><WhatsAppIcon /></span>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href={`https://wa.me/${BUSINESS.wa}`} className="block text-[#FFFFFF]/85 hover:text-[#F5E51B]">{BUSINESS.phone2}</a>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.tel1}`} className="rounded-full bg-[#F5E51B] px-7 py-3 text-lg font-semibold text-[#12601F] hover:bg-[#FFF04D]">
                Call now
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#FFFFFF]/70 px-7 py-3 text-lg font-semibold hover:bg-white/10"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="stitch overflow-hidden rounded-3xl p-2">
            <iframe
              title="Asif Tailor location"
              className="h-80 w-full rounded-2xl lg:h-full lg:min-h-[26rem]"
              loading="lazy"
              src={`https://www.google.com/maps?q=${BUSINESS.mapsCoords}&z=19&output=embed`}
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0E4D18] text-[#FFFFFF]/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
          <p className="flex items-center gap-2">
            {LOGO && <img src={LOGO} alt="" className="h-8 w-auto rounded bg-white p-0.5" />}
            <span className="at-display font-bold text-[#F5E51B]">Asif Tailor</span> · Specialist in Shalwar Kameez · Est. {BUSINESS.since}
          </p>
          <p>© {new Date().getFullYear()} Asif Tailor, Lahore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
