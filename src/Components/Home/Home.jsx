import React from "react";
import { NavLink } from "react-router-dom";

const projects = [
  {
    path: "accordion",
    title: "🧾 Accordion",
    desc: "Toggle content section smoothly using accordion.",
  },
  {
    path: "starrating",
    title: "⭐ Star Rating",
    desc: "Interactive component for rating with stars.",
  },
  {
    path: "carousel",
    title: "🖼️ Image Slider",
    desc: "Slide through beautiful images smoothly.",
  },
  {
    path: "otp",
    title: "🔢 OTP Generator",
    desc: "Generate and input OTP codes efficiently.",
  },
  {
    path: "progressbar",
    title: "📶 Progress Bar",
    desc: "Track progress with a colorful bar.",
  },
  {
    path: "file",
    title: "📁 File Structure Viewer",
    desc: "Visualize nested file/folder layout.",
  },
  {
    path: "search",
    title: "🔍 Search Box",
    desc: "Search with autocomplete suggestions.",
  },
  {
    path: "currency",
    title: "💱 Currency Converter",
    desc: "Convert between currencies in real-time.",
  },
  {
    path: "loadmore",
    title: "📦 Load More",
    desc: "Load additional products on click.",
  },
  {
    path: "randomcolor",
    title: "🎨 Random Color Generator",
    desc: "Generate and apply random colors.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
     
        🚀 React Mini Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(({ path, title, desc }) => (
          <NavLink
            to={path}
            key={path}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
