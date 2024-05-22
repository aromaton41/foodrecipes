
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow p-4 mt-8">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Food Recipe App.</p>
        <p className="text-gray-600">Basic FullStack Development Course by Ajarn OAK</p>
      </div>
    </footer>
  );
};

export default Footer;