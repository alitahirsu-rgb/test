import React from "react";
import { cvData } from "../data/cvData";

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 border-b border-gray-300">
      <h1 className="text-4xl font-bold">{cvData.name}</h1>
      <p className="text-lg text-gray-600">{cvData.title}</p>
    </header>
  );
};

export default Header;
