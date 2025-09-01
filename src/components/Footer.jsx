import React from "react";
import '../App.css';
const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 p-4 mt-10" >
    <div className="container mx-auto text-center">
      <div>Connect with me:</div>
      <ul className="flex justify-center space-x-6 my-2">
        <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a></li>
      </ul>
      <div className="text-sm">&copy; 2025 My Travel Journey</div>
    </div>
  </footer>
);

export default Footer;
