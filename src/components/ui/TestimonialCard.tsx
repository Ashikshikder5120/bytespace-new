type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  avatarColor?: string;
};

export function TestimonialCard({ name, role, quote, avatarColor = "bg-primary-200" }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className={`h-14 w-14 rounded-full ${avatarColor}`} />
      <p className="mt-4 font-heading text-label-l font-semibold text-neutral-800">{name}</p>
      <p className="mt-0.5 font-body text-body-s text-primary-600">{role}</p>
      <p className="mt-4 font-body text-body-s text-neutral-500">&quot;{quote}&quot;</p>
    </div>
  );
}