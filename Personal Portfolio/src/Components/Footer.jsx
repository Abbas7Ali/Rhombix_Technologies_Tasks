import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
       Design and Built by ALI ABBAS. &copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;