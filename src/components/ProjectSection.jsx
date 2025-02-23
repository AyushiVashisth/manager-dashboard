import React from "react";
import { format } from "date-fns";

const ProjectDashboard = () => {
  const projects = [
    {
      name: "Insurance App",
      owner: "Verh",
      totalBudget: "70,000€",
      profitability: "-2,500€",
      status: "over-budget",
      progress: 75,
      date: "2024-02-23",
      hours: "100 hours over Budget!",
      progressColor: "bg-red-500",
    },
    {
      name: "Neo",
      owner: "Barda",
      totalBudget: "70,000€",
      profitability: "+4,000€",
      status: "warning",
      progress: 60,
      date: "2024-02-23",
      hours: "1000 total hours",
      progressColor: "bg-yellow-500",
    },
    {
      name: "VR Website",
      owner: "Barda",
      totalBudget: "70,000€",
      profitability: "+4,000€",
      status: "on-track",
      progress: 45,
      date: "2024-02-23",
      hours: "2000 total hours",
      progressColor: "bg-emerald-500",
    },
    {
      name: "VR Website",
      owner: "Barda",
      totalBudget: "70,000€",
      profitability: "+4,000€",
      status: "completed",
      progress: 100,
      date: "2024-02-23",
      hours: "1000 total hours",
      progressColor: "bg-emerald-500",
    },
  ];

  return (
    <>
      {/* Projects Section */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl font-semibold text-gray-800">Budget status</h2>
          <div className="flex flex-wrap gap-2">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg">
              Add New Project
            </button>
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg">
              Download report
            </button>
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg">
              dd/mm/yyyy - dd/mm/yyyy
            </button>
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg">
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0">
                    <img
                      src={`https://static.pbcdn.in/cdn/images/app-landing/largest-online-insurance-aggregator.png`}
                      alt={project.owner}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500">{project.owner}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">
                      Total Budget: {project.totalBudget}
                    </span>
                    <span
                      className={
                        project.profitability.includes("-")
                          ? "text-red-500"
                          : "text-emerald-500"
                      }
                    >
                      {project.profitability}
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full ${project.progressColor} rounded-full transition-all duration-300`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-end text-sm text-gray-500">
                  <p>{format(new Date(project.date), "MMM dd, yyyy")}</p>
                  <p>{project.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDashboard;
