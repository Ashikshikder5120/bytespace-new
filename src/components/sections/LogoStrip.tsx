const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-50 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 font-heading text-lg font-semibold text-neutral-500 ${
              i === 2 ? "rounded-lg border border-neutral-300 px-4 py-2" : ""
            }`}
          >
            <span className="h-5 w-5 rounded-full bg-neutral-300" />
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}