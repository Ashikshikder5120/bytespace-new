export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-800 px-6 py-20 text-center md:px-10">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <svg className="absolute left-10 top-10 w-24 text-secondary-500" viewBox="0 0 100 150" fill="none">
          <path d="M10 10 Q 50 10 50 40 Q 50 70 10 70 Q 10 100 50 100 Q 90 100 90 130" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
        </svg>
        <svg className="absolute left-40 top-16 w-14 text-white" viewBox="0 0 60 100" fill="none">
          <path d="M10 10 Q 40 10 40 30 Q 40 50 10 50 Q 10 70 40 70 Q 60 70 60 90" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
        <div className="absolute right-40 top-16 h-0 w-0 border-x-[35px] border-b-[60px] border-x-transparent border-b-secondary-500" />
        <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-white/90" />
        <div className="absolute left-4 bottom-8 h-0 w-0 border-x-[30px] border-b-[55px] border-x-transparent border-b-white" />
        <div className="absolute left-40 -bottom-10 h-32 w-32 rounded-full border-[24px] border-secondary-500" />
        <svg className="absolute right-16 bottom-4 w-16 text-secondary-500" viewBox="0 0 60 100" fill="none">
          <path d="M10 10 Q 40 10 40 30 Q 40 50 10 50 Q 10 70 40 70 Q 60 70 60 90" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-heading text-heading-s font-semibold text-white md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-5 font-body text-body-m text-primary-100">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="mt-8 rounded-full bg-secondary-500 px-8 py-3 font-body text-label-m font-medium text-neutral-800">
          Join as Creator
        </button>
      </div>
    </section>
  );
}