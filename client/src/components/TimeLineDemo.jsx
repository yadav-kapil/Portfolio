import { Timeline } from "./ui/timeline";
import { HiAcademicCap } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";
import { HiTrophy } from "react-icons/hi2";

export function TimeLineDemo() {
  const cardStyle =
    "group relative w-full max-w-3xl xl:max-w-4xl rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2";

  const data = [
    {
      title: "2023",
      content: (
        <div className={cardStyle}>
          <div className="flex items-start gap-6">
            <div className="flex group-hover:scale-115 group-hover:-rotate-12 transition-all duration-500 items-center justify-center min-w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5044e5]/20 to-indigo-400/20 text-[#5044e5] text-3xl">
              <HiAcademicCap />
            </div>

            <div>
              <h3 className="text-2xl group-hover:translate-x-4 transition-all duration-500 font-bold text-neutral-900 dark:text-white">
                Class 10 – CBSE Board Examination
              </h3>
              <p className="mt-2 group-hover:translate-x-4 transition-all duration-500 text-base text-neutral-600 dark:text-neutral-400">
                Completed at{" "}
                <span className="font-semibold text-[#5044e5]">NIPS</span>{" "}
                with an academic score of{" "}
                <span className="font-semibold text-[#5044e5]">92.4%</span>.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-8">
          {/* Class 12 */}
          <div className={cardStyle}>
            <div className="flex items-start gap-6">
              <div className="flex group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 items-center justify-center min-w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5044e5]/20 to-indigo-400/20 text-[#5044e5] text-3xl">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-2xl group-hover:translate-x-4 transition-all duration-500 font-bold text-neutral-900 dark:text-white">
                  Class 12 – CBSE Board Examination
                </h3>
                <p className="mt-2 group-hover:translate-x-4 transition-all duration-500 text-base text-neutral-600 dark:text-neutral-400">
                  Graduated from{" "}
                  <span className="font-semibold text-[#5044e5]">NIPS</span>{" "}
                  securing{" "}
                  <span className="font-semibold text-[#5044e5]">92%</span>{" "}
                  in the CBSE Board Examination.
                </p>
              </div>
            </div>
          </div>

          {/* JEE */}
          <div className={cardStyle}>
            <div className="flex items-start gap-6">
              <div className="flex group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 items-center justify-center min-w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5044e5]/20 to-indigo-400/20 text-[#5044e5] text-3xl">
                <HiTrophy />
              </div>

              <div>
                <h3 className="text-2xl group-hover:translate-x-4 transition-all duration-500 font-bold text-neutral-900 dark:text-white">
                  JEE Mains 2025
                </h3>
                <p className="mt-2 group-hover:translate-x-4 transition-all duration-500 text-base text-neutral-600 dark:text-neutral-400">
                  Achieved an impressive score of{" "}
                  <span className="font-semibold text-[#5044e5]">
                    98.38 Percentile
                  </span>{" "}
                  in JEE Mains 2025 Exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "August 2025",
      content: (
        <div className={cardStyle}>
          <div className="flex items-start gap-6">
            <div className="flex group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 items-center justify-center min-w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5044e5]/20 to-indigo-400/20 text-[#5044e5] text-3xl">
              <FaGraduationCap />
            </div>

            <div>
              <h3 className="text-2xl group-hover:translate-x-4 transition-all duration-500 font-bold text-neutral-900 dark:text-white">
                B.Tech – Computer Science & Technology
              </h3>
              <p className="mt-2 group-hover:translate-x-4 transition-all duration-500 text-base text-neutral-600 dark:text-neutral-400">
                Currently pursuing undergraduate studies at{" "}
                <span className="font-semibold text-[#5044e5]">
                  IIEST Shibpur
                </span>
                , focusing on core Computer Science.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="education" className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}