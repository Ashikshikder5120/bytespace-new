import { FloatingCard } from "@/components/ui/StatCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-600">
      {/* Decorative shapes - background layer */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <svg className="absolute left-8 top-40 w-28 text-secondary-500" viewBox="0 0 100 150" fill="none">
          <path d="M10 10 Q 50 10 50 40 Q 50 70 10 70 Q 10 100 50 100 Q 90 100 90 130" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
        </svg>
        <svg className="absolute left-56 top-64 w-14 text-white" viewBox="0 0 60 100" fill="none">
          <path d="M10 10 Q 40 10 40 30 Q 40 50 10 50 Q 10 70 40 70 Q 60 70 60 90" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
        <div className="absolute -left-10 bottom-8 h-40 w-40 rounded-full border-[28px] border-white" />
        <div className="absolute right-24 top-72 h-0 w-0 border-x-[45px] border-b-[80px] border-x-transparent border-b-white" />
        <div className="absolute -right-10 top-24 h-40 w-40 rounded-3xl bg-secondary-500" />
        <svg className="absolute right-16 bottom-16 w-20 text-white" viewBox="0 0 60 100" fill="none">
          <path d="M10 10 Q 40 10 40 30 Q 40 50 10 50 Q 10 70 40 70 Q 60 70 60 90" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pt-16 text-center md:pt-24">
        <h1 className="font-heading text-heading-m font-semibold text-white md:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-body-m text-primary-100">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="relative z-30 mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#82868e" strokeWidth="2" className="shrink-0">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full font-body text-body-m text-neutral-700 outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-secondary-500 px-6 py-3 font-body text-label-m font-medium text-neutral-800"
          >
            Search
          </button>
        </form>
      </div>

      {/* Image + lime circle + floating cards */}
      <div className="relative z-10 mx-auto mt-16 flex min-h-[420px] max-w-3xl items-end justify-center px-6 md:min-h-[520px]">
        <div className="absolute bottom-0 h-[85%] w-[70%] rounded-t-full bg-secondary-500" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-student.png"
          alt="Student wearing headphones with a laptop"
          className="relative z-10 h-auto w-72 md:w-96"
        />

        <FloatingCard className="absolute left-0 top-8 hidden w-52 md:block">
          <p className="font-body text-label-m font-medium text-neutral-800">UI/UX Design</p>
          <p className="mt-1 font-body text-body-xs text-neutral-500">200 Courses &middot; 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="absolute right-0 top-40 hidden w-48 md:block">
          <p className="font-body text-body-s text-neutral-500">Learning Progress</p>
          <p className="mt-1 font-heading text-heading-xs font-semibold text-neutral-800">55%</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <div className="h-full w-[55%] rounded-full bg-secondary-500" />
          </div>
        </FloatingCard>

        <FloatingCard className="absolute bottom-4 left-0 hidden w-56 md:block">
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
        </FloatingCard>
      </div>
    </section>
  );
}