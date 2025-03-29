import React from "react";

const TeacherFeedBack = () => {
  return (
    <div className="p-6 border border-solid bg-light-white border-dark-blue/20 rounded-2xl max-w-[1186px]">
      <p className="font-semibold text-2xl text-dark-black leading-130">
        Teacher Feedback:
      </p>
      <p className="leading-160">
        Teachers have consistently praised your child for their exceptional
        effort and active participation in class. Their enthusiasm and
        dedication are evident in their approach to learning and their
        contributions to classroom discussions. Teachers have noted several key
        aspects of your child’s performance:
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-4">
        <li className="text-base leading-160 max-md:text-sm">
          <span className="text-dark-blue max-md:text-base font-semibold text-lg">
            Engaged Learning:
          </span>
          Your child actively engages with the material, asking insightful
          questions and seeking to deepen their understanding of complex
          concepts.
        </li>
        <li className="text-base leading-160 max-md:text-sm">
          <span className="text-dark-blue max-md:text-base font-semibold text-lg">
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
