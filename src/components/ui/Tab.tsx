type TabProps = {
  label: string;
  active?: boolean;
};

export function Tab({ label, active = false }: TabProps) {
  return (
    <button
      className={`whitespace-nowrap rounded-full px-5 py-2.5 font-body text-label-s font-medium transition ${
        active
          ? "bg-secondary-500 text-neutral-800"
          : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
      }`}
    >
      {label}
    </button>
  );
}