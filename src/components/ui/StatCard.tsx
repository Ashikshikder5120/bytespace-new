type StatCardProps = {
  className?: string;
  children: React.ReactNode;
};

export function FloatingCard({ className = "", children }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}