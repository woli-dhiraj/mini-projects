import React from "react";
import pfp from "../../assets/pfp.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl w-full text-gray-800">
        <div className="text-center ">
          <img
            src={pfp} 
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-purple-300 mb-4"
          />
          <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
            Hello, I'm a React Developer 👋
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            I love building clean and interactive UIs with React, Tailwind CSS, and JavaScript. I enjoy turning ideas into real-life projects and learning new tech along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-purple-50 p-4 rounded-xl shadow-md">
            <h2 className="font-bold text-lg text-purple-700 mb-1">🛠️ Skills</h2>
            <p className="text-gray-600">Html, CSS, Javascript, React</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow-md">
            <h2 className="font-bold text-lg text-purple-700 mb-1">📚 Learning</h2>
            <p className="text-gray-600">React Router, Redux, APIs</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow-md">
            <h2 className="font-bold text-lg text-purple-700 mb-1">💡 Projects</h2>
            <p className="text-gray-600">Mini UIs, Interactive Tools</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow-md">
            <h2 className="font-bold text-lg text-purple-700 mb-1">🌱 Goal</h2>
            <p className="text-gray-600">Master frontend & become a full-stack dev 🚀</p>
          </div>
        </div>

        <p className="text-center text-md text-gray-700 mt-10">
          Let’s build something amazing together 💻✨
        </p>
      </div>
    </div>
  );
};

export default About;
