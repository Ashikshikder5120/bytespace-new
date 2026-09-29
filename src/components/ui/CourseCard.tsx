type CourseCardProps = {
  image: string;
  lessons: string;
  duration: string;
  comments: string;
  title: string;
  rating: number;
  publisher: string;
  level: string;
  studentCount: string;
  price: string;
};

export function CourseCard({
  image,
  lessons,
  duration,
  comments,
  title,
  rating,
  publisher,
  level,
  studentCount,
  price,
}: CourseCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="h-44 w-full object-cover" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="rounded-md bg-black/60 px-2 py-1 font-body text-label-xs text-white backdrop-blur">
            {lessons}
          </span>
          <span className="rounded-md bg-black/60 px-2 py-1 font-body text-label-xs text-white backdrop-blur">
            {duration}
          </span>
          <span className="rounded-md bg-black/60 px-2 py-1 font-body text-label-xs text-white backdrop-blur">
            {comments}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-label-m font-semibold text-neutral-800 line-clamp-2">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#cbfc01" stroke="#cbfc01">
              <polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9" />
            </svg>
            <span className="font-body text-body-xs text-neutral-600">{rating}</span>
          </div>
        </div>

        <p className="mt-1 font-body text-body-xs text-neutral-500">
          by <span className="text-primary-600">{publisher}</span>
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-neutral-50 px-3 py-1 font-body text-label-xs font-medium text-neutral-600">
            {level}
          </span>
          <div className="flex items-center -space-x-2">
            <span className="h-6 w-6 rounded-full bg-primary-200 ring-2 ring-white" />
            <span className="h-6 w-6 rounded-full bg-primary-300 ring-2 ring-white" />
            <span className="h-6 w-6 rounded-full bg-primary-400 ring-2 ring-white" />
            <span className="flex h-6 items-center rounded-full bg-neutral-800 px-2 font-body text-[10px] font-medium text-white ring-2 ring-white">
              {studentCount}
            </span>
          </div>
        </div>

        <p className="mt-3 font-heading text-label-l font-semibold text-primary-700">
          {price}
          <span className="font-body text-body-xs font-normal text-neutral-500"> /lifetime</span>
        </p>
      </div>
    </div>
  );
}