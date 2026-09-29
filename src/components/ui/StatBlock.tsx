type StatBlockProps = {
  value: string;
  label: string;
};

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div>
      <p className="font-heading text-heading-s font-semibold text-primary-700">{value}</p>
      <p className="mt-1 font-body text-body-s text-neutral-500">{label}</p>
    </div>
  );
}