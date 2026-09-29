type CategoryItem = {
  label: string;
  icon: React.ReactNode;
};

const categories: CategoryItem[] = [
  { label: "Design", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  )},
  { label: "Development", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )},
  { label: "IT & Software", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )},
  { label: "Business", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )},
  { label: "Marketing", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )},
  { label: "Photography", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
    </svg>
  )},
];

export default function Categories() {
  return (
    <section className="bg-white px-6 pb-20 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-heading-s font-semibold text-neutral-800 md:text-heading-m">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-body-m text-neutral-500">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-100 px-4 py-6 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500 text-neutral-800">
              {cat.icon}
            </div>
            <span className="font-body text-label-s font-medium text-neutral-700">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}