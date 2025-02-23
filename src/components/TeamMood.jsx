import { useState } from "react";

const TeamMood = () => {
  const [teamMoods] = useState([
    {
      name: "Andrea",
      role: "Product Designer",
      mood: 3,
      image: "https://i.scdn.co/image/ab6761610000e5ebd4e2814dac62f80684927f3f",
    },
    {
      name: "Alvaro",
      role: "Full Stack Developer",
      mood: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8WlWBF4xwaZRyegq6NSKmaMFxzUjcqxHEw&s",
    },
    {
      name: "Juan",
      role: "UX Senior",
      mood: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHizA488f0eH7t9RcmmVBQQHbZxzLA2iziQ&s",
    },
    {
      name: "Jose",
      role: "Marketing",
      mood: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAax9fq55SMMNvc2xYQ5NwU2eO49Gtr5R7Q&s",
    },
    {
      name: "Maria",
      role: "UX Junior",
      mood: 2,
      image: "https://st2.depositphotos.com/1549918/6351/i/450/depositphotos_63511573-stock-illustration-sebechleby-slovakia-january-6-2015.jpg",
    },
  ]);

  return (
    <div className="bg-white rounded-2xl p-6 h-full">
      <h2 className="text-xl font-semibold mb-6">Team Mood</h2>
      <div className="space-y-8">
        {teamMoods.map((member, index) => (
          <div
            key={index}
            className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 rounded-full bg-gray-100"
              />
              <div>
                <div className="font-medium text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-400">{member.role}</div>
              </div>
            </div>

            <div className="relative">
              {/* Slider Track */}
              <div className="h-0.5 bg-gray-200 rounded-full w-full" />

              {/* Custom Slider Thumb with Emoji */}
              <div
                className="absolute top-0 -mt-2"
                style={{
                  left: `${(member.mood / 4) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="absolute -top-6 text-xl">
                    {["😔", "🙂", "😊", "😄", "😁"][member.mood]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMood;
