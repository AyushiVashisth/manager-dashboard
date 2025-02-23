import React from "react";
import {
  BsGrid,
  BsCheckCircle,
  BsArrowRepeat,
  BsExclamationTriangle,
  BsPerson,
} from "react-icons/bs";

const StatsCards = () => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Projects */}
        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div>
              <BsGrid className="text-[#00ffcc] text-3xl" />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <span className="text-5xl font-bold text-gray-800">5</span>
              <span className="text-sm text-gray-500">Total Projects</span>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div>
              <BsCheckCircle className="text-[#00ffcc] text-3xl" />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <span className="text-5xl font-bold text-gray-800">1</span>
              <span className="text-sm text-gray-500">Completed</span>
            </div>
          </div>
        </div>

        {/* Ongoing */}
        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div>
              <BsArrowRepeat className="text-[#00ffcc] text-3xl" />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <span className="text-5xl font-bold text-gray-800">3</span>
              <span className="text-sm text-gray-500">Ongoing</span>
            </div>
          </div>
        </div>

        {/* Delayed */}
        <div className="bg-red-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div>
              <BsExclamationTriangle className="text-red-600 text-3xl" />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <span className="text-5xl font-bold text-white">1</span>
              <span className="text-sm text-white">Delayed</span>
            </div>
          </div>
        </div>

        {/* Employees */}
        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col">
            <div>
              <BsPerson className="text-[#00ffcc] text-3xl" />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <span className="text-5xl font-bold text-gray-800">5</span>
              <span className="text-sm text-gray-500">Employees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
