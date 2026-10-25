import React from "react";
import { baseCss, delay, Nav } from "./Home";
import walimaPoster from "../assets/Walima.png";

/*
  WALIMA — palette
  Ivory #FBF7EF | Emerald teal #0E5A55 | Soft gold #B8923A | Blush #F2D9D3
*/

const MAP_LINK = "https://maps.app.goo.gl/a6WNCDPGm2owJNrL8?g_st=aw";

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
  { label: "Date", value: "Sunday, 22 November 2026" },
  { label: "Time", value: "7:30 PM onwards" },
  { label: "Venue", value: "Naseem palace Marrige Hall" },
];

const Divider = () => (
  <div className="my-8 flex items-center justify-center gap-3 text-[#B8923A]" aria-hidden="true">
    <span className="h-px w-16 bg-current" />
    <span className="text-xl">✿</span>
    <span className="h-px w-16 bg-current" />
  </div>
);

export default function Walima() {
  return (
    <main
      className="f-body min-h-screen bg-[#F2D9D3] px-4 pb-10 pt-3"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(14,90,85,.18), transparent 55%)",
      }}
    >
      <style>{baseCss}</style>

      <Nav
        bg="rgba(251,247,239,.85)"
        text="#0E5A55"
        active="#0E5A55"
        onActive="#FBF7EF"
        line="rgba(184,146,58,.7)"
      />

      <article className="card-in mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-[#B8923A] bg-[#FBF7EF] shadow-2xl">
        {/* Teal header */}
        <header className="bg-[#0E5A55] px-6 pb-16 pt-12 text-center sm:px-14">
          <p className="f-urdu rise text-3xl text-[#E9D29B]" dir="rtl" style={delay(0.3)}>
            بسم اللہ الرحمٰن الرحیم
          </p>
          <p className="rise mt-6 text-xl italic text-[#FBF7EF]/85" style={delay(0.45)}>
            Please join us for a blessed evening of
          </p>
          <h1 className="f-script rise mt-2 text-8xl leading-none text-[#E9D29B] sm:text-9xl" style={delay(0.6)}>
            Walima
          </h1>
        </header>

        <div className="-mt-8 rounded-t-[2.5rem] bg-[#FBF7EF] px-6 pb-14 pt-10 text-center sm:px-14">
          <div className="rise" style={delay(0.75)}>
            <p className="text-lg text-[#0E5A55]/80">In celebration of the marriage of</p>
            <h2 className="f-script mt-1 text-5xl text-[#0E5A55] sm:text-6xl">
              Ammar Butt <span className="text-[#B8923A]">&amp;</span> Jaweria Meer
            </h2>
          </div>

          {/* Poster */}
          <div
            className="rise mx-auto mt-10 w-full max-w-sm rounded-[999px] border-[3px] border-[#B8923A] p-3"
            style={delay(0.9)}
          >
            <img
              src={walimaPoster}
              alt="Walima wedding poster"
              className="aspect-[3/4] w-full rounded-[999px] object-cover"
            />
          </div>

          <Divider />

          <dl className="rise grid gap-4 sm:grid-cols-3" style={delay(1.05)}>
            {details.map((d) => (
              <div key={d.label} className="rounded-3xl bg-[#F2D9D3]/60 px-4 py-5">
                <dt className="f-urdu text-2xl text-[#0E5A55]">{d.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-[#5B4514]">{d.value}</dd>
              </div>
            ))}
          </dl>

          <Divider />

          <div className="rise" style={delay(1.2)}>
            <h3 className="f-urdu text-3xl text-[#0E5A55]">With love, from</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {hosts.map((h) => (
                <li key={h.name}>
                  <p className="text-xl font-bold leading-tight text-[#0E5A55]">{h.name}</p>
                  <p className="mt-1 text-base italic text-[#8F6B1F]">{h.role}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rise" style={delay(1.35)}>
            <p className="mt-12 text-lg text-[#0E5A55]/80">Dinner will be served at 8:30 PM.</p>
            <p className="f-script mt-2 text-4xl text-[#B8923A]">Your duas complete our joy</p>
            
          </div>

          {/* Opens the exact venue in Google Maps */}
          <div className="rise mt-10" style={delay(1.5)}>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#0E5A55] px-8 py-3 text-xl font-semibold text-[#FBF7EF] shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              Open location in Maps
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}