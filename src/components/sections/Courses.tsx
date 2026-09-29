import { Tab } from "@/components/ui/Tab";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Graphic Design",
  "Photography",
];

export default function Courses() {
  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-heading-s font-semibold text-neutral-800 md:text-heading-m">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-body-m text-neutral-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Tab key={cat} label={cat} active={cat === "Featured"} />
        ))}
      </div>

      {/* Course cards will go here next */}
    </section>
  );
}