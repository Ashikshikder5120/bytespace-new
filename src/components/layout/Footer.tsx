const linkColumns = [
  {
    title: "Explore",
    links: ["Featured Courses", "Featured Categories"],
  },
  {
    title: "Categories",
    links: ["Development", "Marketing", "Photography"],
  },
  {
    title: "Creators",
    links: ["Become a Creator", "Affiliate Program", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-500 font-heading text-lg font-bold text-primary-800">
              B
            </div>
            <span className="font-heading text-xl font-semibold text-neutral-800">
              ByteSpace
            </span>
          </div>
          <p className="mt-4 font-body text-body-s text-neutral-500">
            Stay up to date with our latest features and releases by joining our newsletter.
          </p>
          <form className="mt-4 flex max-w-sm items-center gap-2 rounded-full border border-neutral-200 p-1.5 pl-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full font-body text-body-s text-neutral-700 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary-700 px-5 py-2 font-body text-label-s font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-label-s font-medium text-neutral-400">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-body-s text-neutral-600 hover:text-primary-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-neutral-100 pt-6">
        <p className="font-body text-body-xs text-neutral-400">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}