type AuthPanelProps = {
  heading: string;
  description: string;
};

export function AuthPanel({ heading, description }: AuthPanelProps) {
  return (
    <div className="relative hidden overflow-hidden bg-primary-800 p-10 lg:flex lg:w-1/2 lg:flex-col">
      {/* Decorative shapes - kept low so they never cross the text column */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-24 left-6 h-0 w-0 border-x-[35px] border-b-[60px] border-x-transparent border-b-secondary-500" />
        <svg className="absolute bottom-40 right-10 w-14 text-white" viewBox="0 0 60 100" fill="none">
          <path d="M10 10 Q 40 10 40 30 Q 40 50 10 50 Q 10 70 40 70 Q 60 70 60 90" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>

      {/* Logo */}
      <div className="relative flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-500 font-heading text-lg font-bold text-primary-800">
          B
        </div>
        <span className="font-heading text-xl font-semibold text-white">ByteSpace</span>
      </div>

      {/* Text */}
      <div className="relative mt-16 max-w-sm">
        <h1 className="font-heading text-heading-s font-semibold text-white">{heading}</h1>
        <p className="mt-4 font-body text-body-m text-primary-100">{description}</p>
      </div>

      {/* Course card mockup */}
      <div className="relative mt-12 w-64 rounded-2xl bg-white p-3 shadow-xl">
        <div className="h-28 w-full rounded-lg bg-neutral-100" />
        <div className="mt-3 flex gap-2">
          <span className="rounded bg-neutral-800 px-2 py-1 font-body text-[10px] text-white">17 Lessons</span>
          <span className="rounded bg-neutral-800 px-2 py-1 font-body text-[10px] text-white">2h 16m</span>
        </div>
        <p className="mt-3 font-body text-label-s font-medium text-neutral-800">the Power of Big Data</p>
        <p className="mt-1 font-body text-body-xs text-neutral-500">by purepearl studio</p>
        <p className="mt-2 font-heading text-label-m font-semibold text-primary-700">$25</p>
      </div>
    </div>
  );
}