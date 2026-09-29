import { StatBlock } from "@/components/ui/StatBlock";

export default function Growth() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: text + stats */}
        <div>
          <h2 className="font-heading text-heading-s font-semibold text-neutral-800 md:text-heading-m">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-4 font-body text-body-m text-neutral-500">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <div className="mt-8 flex gap-10">
            <StatBlock value="12K" label="Students" />
            <StatBlock value="70+" label="Courses" />
            <StatBlock value="16" label="Creators" />
          </div>
        </div>

        {/* Right: image + floating cards */}
        <div className="relative mx-auto max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
           src="/growth-student.png"
            alt="Student with headphones and laptop"
            className="w-full rounded-3xl"
          />

          <div className="absolute -bottom-6 left-0 w-52 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-body text-label-s font-medium text-neutral-800">Learn Figma from Basic</p>
            <p className="mt-1 font-body text-body-xs text-neutral-500">by purepearl studio</p>
            <p className="mt-2 font-heading text-label-m font-semibold text-primary-700">$25</p>
          </div>

          <div className="absolute -right-4 top-8 w-40 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-body text-body-s text-neutral-500">Learning Progress</p>
            <p className="mt-1 font-heading text-heading-xs font-semibold text-neutral-800">55%</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-[55%] rounded-full bg-secondary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}