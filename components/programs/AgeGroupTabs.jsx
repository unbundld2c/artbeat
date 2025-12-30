"use client";

import React, { useState } from 'react';
import BenefitsAccordion from "@/components/programs/BenefitsAccordion";

const AgeGroupTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data?.[0]?.id);
  const activeContent = data?.find((item) => item.id === activeTab);

  if (!data) return null;

  return (
    <div className="w-full p-4 md:p-6 text-[#5A4B41] overflow-x-hidden">
      {/* Tab Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <h3 className="text-[20px] md:text-[24px] font-bold text-[#2C2C2C]">
          Select Preferred Age Group :
        </h3>
        <div className="flex flex-wrap gap-3 md:gap-6">
          {data.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 py-2 rounded-lg border transition ${
                activeTab === group.id
                  ? "bg-[#E97451] text-white border-[#E97451]"
                  : "bg-white border-gray-200"
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
            <h3 className="text-[#E2725B] text-[20px] font-bold mb-4">
              Curriculum Overview
            </h3>

            <p className="mb-6 text-[#2C2C2C]">
              {activeContent.curriculumOverview}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#2C2C2C]">
              {activeContent.curriculumList.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Goals Section */}
          <section>
            <h3 className="text-[#E97451] text-[20px] font-bold mb-4">
              Goals & Intended Outcomes
            </h3>

            <ul className="space-y-3 text-[#2C2C2C]">
              {activeContent.goalsList.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          {Array.isArray(activeContent.benefits) && (
            <BenefitsAccordion benefits={activeContent.benefits} />
          )}
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