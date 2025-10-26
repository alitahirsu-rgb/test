// src/App.tsx
import React from "react";
import Header from "./Components/Header";
import Education from "./Components/Education";
import { cvData } from "./data/cvData";

const App: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <Header />
      
      <section className="py-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>{cvData.about}</p>
      </section>

      <Education />

      {/* You can add Experience, Skills, Contact sections here */}
    </div>
  );
};

export default App;
