import { TestimonialCard } from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatarColor: "bg-secondary-400",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatarColor: "bg-neutral-300",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatarColor: "bg-primary-300",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-heading text-heading-s font-semibold text-neutral-800 md:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body text-body-m text-neutral-500">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}