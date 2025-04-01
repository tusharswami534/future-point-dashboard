import React, { useEffect, useState } from "react";

const TeacherFeedBack = () => {
  const [dark, setDarkTheme] = useState();
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkTheme(JSON.parse(savedDarkMode));
    }

    const handleDarkModeChange = () => {
      const updatedDarkMode = localStorage.getItem("darkMode");
      if (updatedDarkMode) {
        setDarkTheme(JSON.parse(updatedDarkMode));
      }
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
    };
  }, []);
  return (
    <div
      className={`p-6 max-lg:p-5 max-md:p-4 border border-solid bg-light-white border-dark-blue/20 rounded-2xl max-w-[1186px] ${
        dark && "bg-light-white/20"
      }`}
    >
      <p
        className={`font-semibold text-2xl max-lg:text-xl max-md:text-lg pb-4 max-lg:pb-3 max-md:pb-2 text-dark-black leading-130 ${
          dark && "text-white/80"
        }`}
      >
        Teacher Feedback:
      </p>
      <p
        className={`leading-160 pb-4 max-lg:pb-3 max-md:pb-2 max-sm:text-sm text-dark-black/70 ${
          dark && "text-white/50"
        }`}
      >
        Teachers have consistently praised your child for their exceptional
        effort and active participation in class. Their enthusiasm and
        dedication are evident in their approach to learning and their
        contributions to classroom discussions. Teachers have noted several key
        aspects of your child’s performance:
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-4">
        <li
          className={`text-base leading-160 max-md:text-sm ${
            dark && "text-white/60"
          }`}
        >
          <span
            className={`text-dark-blue max-md:text-base font-semibold text-lg ${
              dark && "text-white/80"
            }`}
          >
            Engaged Learning:
          </span>
          Your child actively engages with the material, asking insightful
          questions and seeking to deepen their understanding of complex
          concepts.
        </li>
        <li
          className={`text-base leading-160 max-md:text-sm ${
            dark && "text-white/60"
          }`}
        >
          <span
            className={`text-dark-blue max-md:text-base font-semibold text-lg ${
              dark && "text-white/80"
            }`}
          >
            Collaborative Spirit:
          </span>
          They work effectively with peers, demonstrating leadership and
          teamwork skills during group projects and collaborative assignments.
        </li>
      </ul>
    </div>
  );
};

export default TeacherFeedBack;
