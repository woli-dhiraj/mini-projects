import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-8 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
          📬 Contact Me
        </h1>

        <p className="text-center text-gray-600 mb-8 text-lg">
          Have questions, feedback, or just want to connect? Fill out the form below!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              🙋 Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              📧 Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              💬 Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
