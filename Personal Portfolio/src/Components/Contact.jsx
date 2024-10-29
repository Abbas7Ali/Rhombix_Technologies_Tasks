import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-11/12 max-w[1200px] bg-white rounded-lg shadow-xl my-2 mx-auto p-4 border-l-8 border-green-700"
    >
      <h1 className="text-gray-800 text-base md:text-3xl font-semibold my-2">Contact Me</h1>
      <div className="p-6">
        <ul className="space-y-4">
          <li>
            <a
              href="mailto:aliabbaschanna45678@gmail.com"
              className="text-gray-800 hover:underline hover:text-green-600"
            >
              Gmail: aliabbaschanna45678@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ali-abbas-904636202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline hover:text-green-600"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abbas7Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline hover:text-green-600"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
