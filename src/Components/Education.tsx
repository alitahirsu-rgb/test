// src/components/Education.tsx
import React from "react";
import { cvData } from "../data/cvData";

const Education: React.FC = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {cvData.education.map((edu, index) => (
        <div key={index}>
          <p className="font-medium">{edu.degree}</p>
          <p>{edu.institution}</p>
          <p className="text-sm text-gray-600">{edu.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
