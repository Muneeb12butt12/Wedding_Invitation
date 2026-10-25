import React from "react";
import { baseCss, delay, Nav } from "./Home";
import baratPoster from "../assets/Barat.png";
/*
  BARAT — palette
  Deep maroon #5C0F1E | Antique gold #D4A64A | Ivory #FBF1DC | Rose #A8324A
*/

const hosts = [
  { name: "Mr & Mrs Javeed Butt" },
  { name: "Mr & Mrs Tahir Butt" },
  { name: "Mr & Mrs Gulfam Butt"  },
  { name: "Mr & Mrs Jahazaib Butt"},
  { name: "Mr & Mrs Yasir Butt" },
  { name: "Mr & Mrs Abdullah Butt" },
  { name: "Mr & Mrs Umer Butt"},
  { name: "Mr & Mrs Hassan Ali Butt"},
  { name: "Usman Butt"},
  { name: "Maaz Butt"},
  { name: "Sam Butt"},
  { name: "Khubaib Butt"},
];

const details = [
  { label: "Date", value: "Saturday, 21 November 2026" },
  { label: "Barat ", value: "6:00 PM" },
  { label: "Dinner", value: "8:00 PM" },
];

const Corner = ({ className = "" }) => (
  <span aria-hidden="true" className={`pop absolute h-14 w-14 border-[#D4A64A] ${className}`} />
);

const Divider = () => (
  <div className="my-8 flex items-center justify-center gap-3 text-[#D4A64A]" aria-hidden="true">
    <span className="h-px w-20 bg-current" />
    <span className="text-2xl">✦</span>
    <span className="h-px w-20 bg-current" />
  </div>
);

export default function Barat() {
  return (
    <main
      className="f-body min-h-screen bg-[#3B0813] px-4 pb-10 pt-3"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(212,166,74,.07) 0 2px, transparent 2px 22px), repeating-linear-gradient(-45deg, rgba(212,166,74,.07) 0 2px, transparent 2px 22px)",
      }}
    >
      <style>{baseCss}</style>

      <Nav
        bg="rgba(59,8,19,.8)"
        text="#FBF1DC"
        active="#D4A64A"
        onActive="#4A0B18"
        line="rgba(212,166,74,.55)"
      />

      <article className="card-in relative mx-auto max-w-3xl rounded-sm border-2 border-[#D4A64A] bg-[#5C0F1E] p-3 shadow-2xl">
        <div className="relative border border-[#D4A64A]/60 bg-[#FBF1DC] px-6 py-14 text-center sm:px-14">
          <Corner className="left-2 top-2 rounded-tl-3xl border-l-4 border-t-4" />
          <Corner className="right-2 top-2 rounded-tr-3xl border-r-4 border-t-4" />
          <Corner className="bottom-2 left-2 rounded-bl-3xl border-b-4 border-l-4" />
          <Corner className="bottom-2 right-2 rounded-br-3xl border-b-4 border-r-4" />

          <p className="f-urdu rise text-3xl text-[#5C0F1E]" dir="rtl" style={delay(0.3)}>
            بسم اللہ الرحمٰن الرحیم
          </p>

          <p className="rise mt-6 text-xl italic text-[#5C0F1E]/80" style={delay(0.45)}>
            With the blessings of Allah, we request your presence at
          </p>
          <h1 className="f-script rise mt-2 text-8xl leading-none text-[#A8324A] sm:text-9xl" style={delay(0.6)}>
            Barat
          </h1>

          <Divider />

          <div className="rise" style={delay(0.75)}>
            <p className="text-lg text-[#5C0F1E]/80">The wedding of</p>
            <h2 className="f-script mt-1 text-5xl text-[#5C0F1E] sm:text-6xl">
              Ammar Butt <span className="text-[#D4A64A]">&amp;</span>Jaweria Meer
            </h2>
          </div>

          {/* Poster space: replace the inner div with <img src="/poster.jpg" className="h-full w-full object-cover" /> */}
          <div
  className="rise mx-auto mt-10 w-full max-w-sm border-[6px] border-double border-[#D4A64A] p-3"
  style={delay(0.9)}
>
  <img
    src={baratPoster}
    alt="Barat wedding poster"
    className="aspect-[3/4] w-full object-cover"
  />
</div>

          <Divider />

          <div className="rise" style={delay(1.05)}>
            <dl className="grid gap-4 sm:grid-cols-3">
              {details.map((d) => (
                <div key={d.label} className="border border-[#D4A64A] bg-[#5C0F1E] px-4 py-5">
                  <dt className="f-urdu text-2xl text-[#D4A64A]">{d.label}</dt>
                  <dd className="mt-1 text-xl font-semibold text-[#FBF1DC]">{d.value}</dd>
                </div>
              ))}
            </dl>
            
          </div>

          <Divider />

          <div className="rise" style={delay(1.2)}>
            <h3 className="f-urdu text-3xl text-[#5C0F1E]">With love, from </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 text-left sm:grid-cols-2">
              {hosts.map((h) => (
                <li key={h.name} className="border-l-2 border-[#D4A64A] pl-4">
                  <p className="text-xl font-bold leading-tight text-[#5C0F1E]">{h.name}</p>
                  <p className="text-base italic text-[#A8324A]">{h.role}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="f-script rise mt-12 text-4xl text-[#A8324A]" style={delay(1.35)}>
            Join us as two families become one
          </p>
        </div>
      </article>
    </main>
  );
}