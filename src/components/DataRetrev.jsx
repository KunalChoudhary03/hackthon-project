
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataRetrev = () => {
  const navigate = useNavigate();
const [selectedMentor, setSelectedMentor] = useState(null);
  const MentoreData = [
    {
      id: 1,
      name: "Aarav Mehta",
      skills: ["React", "Tailwind CSS", "Framer Motion"],
      description: "Helping frontend devs build smooth UIs.",
      experienceLevel: "expert",
      avatar: "https://imgs.search.brave.com/gZr8mN64wcYuAaZ3NeXWURRBwNDczWUsFCvpNNzvOGI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sdWNp/ZC5jb250ZW50LWRl/bGl2ZXJ5LW9uZS5j/b20vY2RuLWNnaS9p/bWFnZS93PTYwMCxm/b3JtYXQ9YXV0byxt/ZXRhZGF0YT1ub25l/LzY2YzQzYWJlMTg1/MDIucG5n",
      demoVideo: "https://www.youtube.com/watch?v=1tRLveSyNz8",
    },
    {
      id: 2,
      name: "Sneha Verma",
      skills: ["Python", "Django", "REST APIs"],
      description: "Backend specialist for scalable apps.",
      experienceLevel: "intermediate",
      avatar: "https://imgs.search.brave.com/gF0iCQxSYMSHbE-sc_rNQOwgS1OEOQ3UZwdjwRXbAYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/ZXJzb24taW5kaWFu/LW9yaWdpbi1oYXZp/bmctZnVuXzIzLTIx/NTAyODUyODMuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA",
      demoVideo: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    },
    {
      id: 3,
      name: "Kabir Khan",
      skills: ["JavaScript", "Node.js", "MongoDB"],
      description: "Helping devs understand server-side logic.",
      experienceLevel: "expert",
      avatar: "https://imgs.search.brave.com/4gAhJRAk71iX7M624GPGHYi5rLmJG9oN8jr33wAghFU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIyLzAx/LzEyLzIyMDExMmNl/OWMzOTY3ZTIwMjJj/ZTEzNjczYTlkNGY2/LmpwZw",
      demoVideo: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    },
    {
      id: 4,
      name: "Ishita Roy",
      skills: ["UI/UX", "Figma", "Design Systems"],
      description: "Design mentor focusing on user experience.",
      experienceLevel: "intermediate",
      avatar: "https://imgs.search.brave.com/kzxeH10ZJk3WvsUDvlOH0pMBhqSjfLOt2pdEEf-5fgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sdWNp/ZC5jb250ZW50LWRl/bGl2ZXJ5LW9uZS5j/b20vY2RuLWNnaS9p/bWFnZS93PTYwMCxm/b3JtYXQ9YXV0byxt/ZXRhZGF0YT1ub25l/LzY2ZTMwZGI1YTNi/MmQucG5n",
      demoVideo: "https://www.youtube.com/watch?v=3o0KXzS1iFg",
    },
    {
      id: 5,
      name: "Rohan Desai",
      skills: ["C++", "DSA", "Competitive Coding"],
      description: "Ace coding interviews with my guidance.",
      experienceLevel: "expert",
      avatar: "https://imgs.search.brave.com/-9CPc-Ob1wc9ArF5v_JXt_zRT68Y2AW-_oz0BGq0u9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sdWNp/ZC5jb250ZW50LWRl/bGl2ZXJ5LW9uZS5j/b20vY2RuLWNnaS9p/bWFnZS93PTYwMCxm/b3JtYXQ9YXV0byxt/ZXRhZGF0YT1ub25l/LzY2ZTMwZTM2YzE0/NDIucG5n",
      demoVideo: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
    },
  ];
 const buttonHandler =()=>{
  navigate('/teach')
 }
 const handleMentorClick = (mentor) => {
  setSelectedMentor(mentor);
};
  return (
    <div className="mt-10 min-h-screen bg-black p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
  {MentoreData.map((mentor, i) => (
    <div
      key={i}
      onClick={() => handleMentorClick(mentor)}
      className="hover:scale-110 duration-500 w-[320px] cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-5"
    >
      <img
        src={mentor.avatar}
        alt={mentor.name}
        className="w-full h-52 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-white mb-1">{mentor.name}</h2>
      <p className="text-sm text-gray-200 mb-1">
        Skills: {mentor.skills.join(", ")}
      </p>
      <p className="text-sm text-gray-300 mb-1">{mentor.description}</p>
      <p className="text-sm text-gray-300 mb-3">
        Experience: {mentor.experienceLevel}
      </p>
      <a
        href={mentor.demoVideo}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Watch Demo
      </a>
    </div>
  ))}

  {/* Extra card */}
  <div className="hover:scale-110 duration-500 w-full backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-center flex flex-col justify-between">
    <h2 className="text-2xl font-bold text-white mb-4">You Will Be Next 🚀</h2>
    <p className="text-gray-300 text-sm mb-6">
      Gear up and get featured among the best mentors.
    </p>
    <button
      onClick={buttonHandler}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-2"
    >
      Become a Mentor
    </button>
    <button onClick={() => setSelectedMentor({
      name: "Your Name",
      skills: ["React", "Teaching", "Empathy"],
      description: "You're the future mentor!",
      experienceLevel: "beginner",
    })} className="text-white underline mt-2">About Me</button>
  </div>


  {selectedMentor && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 w-[320px] text-center text-white relative">
        <button
          onClick={() => setSelectedMentor(null)}
          className="absolute top-2 right-3 text-xl font-bold text-white hover:text-red-400"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{selectedMentor.name}</h2>
        <p className="text-sm mb-2">Skills: {selectedMentor.skills.join(", ")}</p>
        <p className="text-sm mb-2">{selectedMentor.description}</p>
        <p className="text-sm mb-4">Experience: {selectedMentor.experienceLevel}</p>
        {selectedMentor.demoVideo && (
          <a
            href={selectedMentor.demoVideo}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Watch Demo
          </a>
        )}
      </div>
    </div>
  )}
</div>


  );
};

export default DataRetrev;
