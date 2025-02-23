import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import RevenueAndBudget from "./components/RevenueAndBudget";
import TeamMood from "./components/TeamMood";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fd]">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section - Stats and Revenue */}
          <div className="col-span-8 space-y-6">
            <StatsCards />
            <RevenueAndBudget />
          </div>

          {/* Right Section - Team Mood */}
          <div className="col-span-4">
            <TeamMood />
          </div>
        </div>

        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
