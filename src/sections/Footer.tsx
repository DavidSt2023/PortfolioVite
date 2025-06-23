import React from 'react';

function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {currentYear} Mein Portfolio. Entwickelt mit Leidenschaft.
        </p>
      </div>
    </footer>
  );
}

export default Footer;