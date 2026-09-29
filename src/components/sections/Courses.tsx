import { Tab } from "@/components/ui/Tab";
import { CourseCard } from "@/components/ui/CourseCard";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

const courses = [
  { image: "/course-1.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "Learn Figma from Basic", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
  { image: "/course-2.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "Build Digital Asset", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
  { image: "/course-3.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "the Power of Big Data", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
  { image: "/course-4.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "Balancing Productivity and Wellness", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
  { image: "/course-5.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "Mastering Money Management", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
  { image: "/course-6.jpg", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", title: "From Idea to Startup Success", rating: 4.5, publisher: "purepearl studio", level: "Beginner", studentCount: "26+", price: "$25" },
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

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}