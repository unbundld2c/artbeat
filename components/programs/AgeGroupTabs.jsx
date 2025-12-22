"use client";

import React, { useState } from 'react';

const AgeGroupTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.id);

  const activeContent = data.find((item) => item.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 font-sans text-[#5A4B41] bg-[#FFF9F0]">
      {/* Tab Header */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <h3 className="text-xl font-bold mr-2">Select Preferred Age Group :</h3>
        <div className="flex gap-3">
          {data.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium border ${
                activeTab === group.id
                  ? "bg-[#E97451] text-white border-[#E97451] shadow-md"
                  : "bg-white text-[#5A4B41] border-gray-200 hover:border-[#E97451]"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeContent && (
        <div className="space-y-10 animate-fadeIn">
          {/* Curriculum Section */}
          <section>
            <h2 className="text-[#E97451] text-2xl font-bold mb-4">Curriculum Overview</h2>
            <p className="mb-6 opacity-90 leading-relaxed">
              {activeContent.curriculumOverview}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              {activeContent.curriculumList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-400">-</span>
                  <span className="text-sm opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Goals Section */}
          <section>
            <h2 className="text-[#E97451] text-2xl font-bold mb-4">Goals & Intended Outcomes</h2>
            <p className="mb-6 opacity-90 leading-relaxed italic">
              {activeContent.goalsTitle}
            </p>
            <ul className="space-y-3">
              {activeContent.goalsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-400">-</span>
                  <span className="text-sm opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AgeGroupTabs;