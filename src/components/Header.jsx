import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Travel Journey</h1>
      <nav className="space-x-6 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
    </div>
  </header>
);

export default Header;
