import React from "react";

// Our Sites Footer with with developers name.
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center w-full p-1">
      <p className="text-sm">
        &copy; {currentYear} ALI ABBAS. All rights reserved.
      </p>
    </footer>
  );
};
