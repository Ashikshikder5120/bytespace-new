const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function CreateManage() {
  return (
    <section className="bg-neutral-50 px-6 pb-20 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: image + floating cards */}
        <div className="relative mx-auto max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-student.png"
            alt="Course creator"
            className="w-full rounded-3xl"
          />

          <div className="absolute -left-6 top-8 w-40 rounded-2xl bg-primary-800 p-4 text-white shadow-lg">
            <p className="font-body text-body-xs text-primary-100">Total Revenue</p>
            <p className="mt-1 font-heading text-label-l font-semibold">$120.29</p>
          </div>

          <div className="absolute -left-6 top-32 w-40 rounded-2xl bg-primary-800 p-4 text-white shadow-lg">
            <p className="font-body text-body-xs text-primary-100">Year to Date</p>
            <p className="mt-1 font-heading text-label-l font-semibold">$1,200.38</p>
          </div>

          <div className="absolute -bottom-6 right-0 w-52 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-body text-label-m font-medium text-neutral-800">Happy Students</p>
            <p className="mt-1 font-body text-body-xs text-neutral-500">4.5 (240)</p>
            <div className="mt-2 flex items-center -space-x-2">
              <span className="h-6 w-6 rounded-full bg-primary-200 ring-2 ring-white" />
              <span className="h-6 w-6 rounded-full bg-primary-300 ring-2 ring-white" />
              <span className="h-6 w-6 rounded-full bg-primary-400 ring-2 ring-white" />
              <span className="flex h-6 items-center rounded-full bg-secondary-500 px-2 text-[10px] font-medium text-neutral-800 ring-2 ring-white">
                2K+
              </span>
            </div>
          </div>
        </div>

        {/* Right: text + checklist */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <h2 className="font-heading text-heading-s font-semibold text-neutral-800">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-4 font-body text-body-m text-neutral-500">
            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="font-body text-body-m text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}