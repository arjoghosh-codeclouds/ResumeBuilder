import { Check } from "react-feather";
import { shimmerStyle } from "../assets/dummystyle";

const pages = [
  "Profile",
  "Contact",
  "Work",
  "Education",
  "Skill",
  "Project",
  "Certifications",
  "Additional",
];


const StepProgress = ({ progress }) => {
  const stepCount = pages.length;
  const stepPercentage = 100 / (stepCount - 1);

  return (
    <>
      <style>{shimmerStyle}</style>

      <div className="relative w-full">
        {/* Progress bar background */}
        <div className="relative w-full h-4  rounded-full overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-white/10 shadow-inner">
            {/* Static background bar */}
            <div className="absolute inset-0 pt-10 bg-gradient-to-r from-gray-700/40 via-gray-800/50 to-gray-700/40 backdrop-blur-sm"></div>

            {/* Progress fill */}
            <div
              className="relative h-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-[length:200%_100%] animate-[flow_2s_linear_infinite] transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_2px_rgba(255,0,0,0.4)]"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Glowing moving edge */}
            {progress > 0 && (
              <div
                className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md opacity-70 transition-all duration-700"
                style={{ left: `${Math.max(0, progress - 2)}%` }}
              ></div>
            )}

            {/* Optional subtle pulse animation */}
            <style>
              {`
                @keyframes flow {
                  0% { background-position: 0% 0%; }
                  100% { background-position: 200% 0%; }
                }
              `}
            </style>
          </div>


        {/* Step Indicators */}
        <div className="flex justify-between mt-6 mb-8 relative">
          {pages.map((page, index) => {
            const stepProgress = index * stepPercentage;
            const isCompleted = progress >= stepProgress + stepPercentage / 2;
            const isActive =
              !isCompleted &&
              progress >= stepProgress - stepPercentage / 2 &&
              progress < stepProgress + stepPercentage / 2;

            return (
              <div
                key={page}
                className="group flex flex-col items-center relative"
                style={{ width: `${stepPercentage}%` }}
              >
                {/* Step Circle */}
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isCompleted
                      ? "bg-red-500 border-red-500 text-white"
                      : isActive
                      ? "border-red-500 text-red-400 bg-white/10"
                      : "border-gray-600 text-gray-400 bg-white/5"
                  }`}
                >
                  {isCompleted ? <Check size={16} /> : index + 1}
                </div>

                {/* Tooltip label (on hover for small screens) */}
                <span
                  className={`absolute -bottom-7 whitespace-nowrap rounded-md text-xs py-1 px-2 bg-gray-800 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {page.replace(/-/g, " ")}
                </span>

                {/* Visible label (for larger screens) */}
                <span
                  className={`hidden sm:block text-xs mt-2 text-center ${
                    isActive
                      ? "text-red-400 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {page.replace(/-/g, " ")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StepProgress;
