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
        <div className="grid md:grid-cols-8 sm:grid-cols-1 grid-cols-1  lg:grid-cols-10 gap-4">
          {/* Left Section - Stats and Revenue */}
          <div className="col-span-8 space-y-6">
            <StatsCards />
            <RevenueAndBudget />
          </div>

          {/* Right Section - Team Mood */}
          <div className="col-span-8 sm:col-span-8 md:col-span-8 lg:col-span-2">
            <TeamMood />
          </div>
        </div>

        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
