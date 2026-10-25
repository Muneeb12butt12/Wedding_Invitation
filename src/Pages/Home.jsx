import React from "react";
import { NavLink } from "react-router-dom";
import mendhiPoster from "../assets/Mendhi.png";
/*
  MEHNDI (home page) — palette
  Forest green #0F4D3A | Marigold #F5A524 | Magenta #B0215F | Cream #FFF6E0
  Fonts: Aref Ruqaa (calligraphy), Great Vibes (names), Cormorant Garamond (body)

  This file also exports the shared fonts, animation CSS and top Nav
  used by Barat.jsx and Walima.jsx.
*/

export const baseCss = `@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Cormorant+Garamond:wght@500;600;700&family=Great+Vibes&display=swap');
.f-urdu{font-family:'Aref Ruqaa',serif}
.f-script{font-family:'Great Vibes',cursive}
.f-body{font-family:'Cormorant Garamond',serif}
@keyframes cardIn{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@keyframes sway{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}
.card-in{animation:cardIn .9s cubic-bezier(.2,.7,.2,1) both}
.rise{animation:rise .8s ease both;animation-delay:var(--d,0s)}
.sway{animation:sway 3.4s ease-in-out infinite;animation-delay:var(--d,0s)}
.pop{animation:pop .8s cubic-bezier(.2,.7,.2,1) .6s both}
@media (prefers-reduced-motion:reduce){.card-in,.rise,.sway,.pop{animation:none}}`;

export const delay = (s) => ({ "--d": `${s}s` });

const links = [
  { to: "/", label: "Mehndi" },
  { to: "/barat", label: "Barat" },
  { to: "/walima", label: "Walima" },
];

export function Nav({ bg, text, active, onActive, line }) {
  return (
    <nav className="sticky top-3 z-20 mx-auto mb-8 w-fit" aria-label="Wedding events">
      <ul
        className="f-body flex gap-1 rounded-full border p-1 shadow-lg backdrop-blur-md"
        style={{ background: bg, borderColor: line }}
      >
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end
              className={({ isActive }) =>
                `block rounded-full px-5 py-2 text-xl transition-all duration-300 ${
                  isActive ? "font-bold" : "opacity-75 hover:opacity-100"
                }`
              }
              style={({ isActive }) =>
                isActive ? { background: active, color: onActive } : { color: text }
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const hosts = [
  { name: "Mr & Mrs Javeed Butt" },
  { name: "Mr & Mrs Tahir Butt" },
  { name: "Mr & Mrs Gulfam Butt"  },
  { name: "Mr & Mrs Jahazaib Butt"},
  { name: "Mr & Mrs Yasir Butt" },
  { name: "Mr & Mrs Abdullah Butt" },
  { name: "Mr & Mrs Umer Butt"},
  { name: "Usman Butt"},
  { name: "Maaz Butt"},
  { name: "Sam Butt"},
  { name: "Khubaib Butt"},
];

const details = [
  { label: "Date", value: "Friday, 20 November 2026" },
  { label: "Time", value: "7:00 PM onwards" },
  { label: "Venue", value: "Home" },
];

const Garland = () => (
  <div className="flex justify-center gap-1 overflow-hidden py-2" aria-hidden="true">
    {Array.from({ length: 22 }).map((_, i) => (
      <span key={i} className="h-7 w-7 shrink-0" style={{ marginTop: i % 2 ? 10 : 0 }}>
        <span
          className={`sway block h-full w-full rounded-full ${
            i % 3 === 0 ? "bg-[#F5A524]" : i % 3 === 1 ? "bg-[#E8830C]" : "bg-[#B0215F]"
          }`}
          style={delay(i * 0.12)}
        />
      </span>
    ))}
  </div>
);

const Divider = () => (
  <div className="my-7 flex items-center justify-center gap-3 text-[#B0215F]" aria-hidden="true">
    <span className="h-px w-16 bg-current" />
    <span className="text-2xl">❀</span>
    <span className="h-px w-16 bg-current" />
  </div>
);

export default function Home() {
  return (
    <main
      className="f-body min-h-screen bg-[#0F4D3A] px-4 pb-10 pt-3"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(245,165,36,.18) 2px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    >
      <style>{baseCss}</style>

      <Nav
        bg="rgba(15,77,58,.8)"
        text="#FFF6E0"
        active="#F5A524"
        onActive="#0F4D3A"
        line="rgba(245,165,36,.55)"
      />

      <article className="card-in mx-auto max-w-3xl overflow-hidden rounded-[2rem] border-[6px] border-double border-[#F5A524] bg-[#FFF6E0] shadow-2xl">
        <Garland />

        <div className="px-6 pb-14 pt-4 text-center sm:px-14">
          <p className="f-urdu rise text-3xl text-[#0F4D3A]" dir="rtl" style={delay(0.3)}>
            بسم اللہ الرحمٰن الرحیم
          </p>

          <p className="rise mt-6 text-xl italic text-[#0F4D3A]/80" style={delay(0.45)}>
            With joy, we invite you to the colours of
          </p>
          <h1 className="f-script rise mt-2 text-7xl text-[#B0215F] sm:text-8xl" style={delay(0.6)}>
            Mehndi
          </h1>

          <Divider />

          <div className="rise" style={delay(0.75)}>
            <p className="text-lg text-[#0F4D3A]/80">The henna night of</p>
            <h2 className="f-script mt-1 text-5xl text-[#0F4D3A] sm:text-6xl">
            Jaweria Meer <span className="text-[#F5A524]">&amp;</span> Ammar Butt
            </h2>
          </div>

          {/* Poster space: swap the inner div for <img src="/poster.jpg" className="h-full w-full object-cover" /> */}
          <div
  className="rise mx-auto mt-10 w-full max-w-sm rounded-t-[999px] border-[5px] border-double border-[#B0215F] bg-[#B0215F]/5 p-3"
  style={delay(0.9)}
>
  <img
    src={mendhiPoster}
    alt="Mehndi wedding poster"
    className="aspect-[3/4] w-full rounded-t-[999px] object-cover"
  />
</div>
          <Divider />

          <dl className="rise grid gap-4 sm:grid-cols-3" style={delay(1.05)}>
            {details.map((d) => (
              <div key={d.label} className="rounded-2xl border border-[#F5A524] bg-white/60 px-4 py-5">
                <dt className="f-urdu text-2xl text-[#B0215F]">{d.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-[#0F4D3A]">{d.value}</dd>
              </div>
            ))}
          </dl>

          <Divider />

          <div className="rise" style={delay(1.2)}>
            <h3 className="f-urdu text-3xl text-[#0F4D3A]">Your hosts</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {hosts.map((h) => (
                <li key={h.name}>
                  <p className="text-xl font-bold leading-tight text-[#0F4D3A]">{h.name}</p>
                  <p className="mt-1 text-base italic text-[#B0215F]">{h.role}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rise" style={delay(1.35)}>
           
            <p className="f-script mt-2 text-4xl text-[#B0215F]">Your presence is our blessing</p>
          </div>
        </div>

        <Garland />
      </article>
    </main>
  );
}