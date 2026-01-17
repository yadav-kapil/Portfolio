import { Timeline } from "./ui/timeline";

export function TimeLineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Passed Class 10 Board Exam with 92.4%
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          <p>Passed Class 12 with 92%</p>
          <p>Got 98.38 percentile in Jee Mains 2025</p>
        </div>
      ),
    },
    {
      title: "August 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Got Enrolled in Btech with CST Branch at IIEST,Shibpur
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
