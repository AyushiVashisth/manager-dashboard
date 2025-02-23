import { useState } from "react";

const emojis = ["😊", "😄", "😃", "😅", "😉"];

const TeamMood = () => {
  const [teamMoods, setTeamMoods] = useState([
    {
      name: "Andrea",
      role: "Product Designer",
      mood: 0,
      image:
        "https://up.yimg.com/ib/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&pid=Api&rs=1&c=1&qlt=95&w=77&h=115",
    },
    {
      name: "Alvaro",
      role: "Full Stack Developer",
      mood: 1,
      image:
        "https://up.yimg.com/ib/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120",
    },
    {
      name: "Juan",
      role: "UX Senior",
      mood: 0,
      image:
        "https://up.yimg.com/ib/th?id=OIP.0yi26fO0azz9oRCE5I59zgHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98",
    },
    {
      name: "Jose",
      role: "Marketing",
      mood: 2,
      image:
        "https://up.yimg.com/ib/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&rs=1&c=1&qlt=95&w=98&h=98",
    },
    {
      name: "Maria",
      role: "UX Junior",
      mood: 0,
      image:
        "https://up.yimg.com/ib/th?id=OIP.0l7k5zqRUVQ5Yq9eTpW2LgHaLJ&pid=Api&rs=1&c=1&qlt=95&w=80&h=120",
    },
  ]);

  const handleMoodChange = (index, value) => {
    setTeamMoods((prevMoods) => {
      const newMoods = [...prevMoods];
      newMoods[index] = { ...newMoods[index], mood: value };
      return newMoods;
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-full overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Team Mood</h2>
      <div className="space-y-4">
        {teamMoods.map((member, index) => (
          <div
            key={index}
            className="flex flex-col border-b pb-2 last:border-0 border-gray-300"
          >
            <div className="flex items-center space-x-3">
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-xs text-gray-400">{member.role}</div>
              </div>
            </div>
            <div className="relative w-full flex flex-col items-center mt-2">
              <div className="relative w-full mt-2">
                {/* Emoji inside thumb */}
                <span
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 text-lg pointer-events-none transition-all duration-200"
                  style={{
                    left: `${(teamMoods[index].mood / 4) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {emojis[teamMoods[index].mood]}
                </span>
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={teamMoods[index].mood}
                  onChange={(e) =>
                    handleMoodChange(index, Number(e.target.value))
                  }
                  className="w-full h-0.5 bg-gray-300 appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
