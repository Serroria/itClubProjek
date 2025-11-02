import React from "react";
import { useState } from "react";
import "./NavbarStyles.css";
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Kata kunci pencarian: ", searchTerm);
  };
  return (
    <nav className="navbar flex item-center w-full max-w-9 p-8">
      <div className="navbar-brand">Logo</div>
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-700 rounded-lg px-3 py-1"
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none text-white placeholder-gray-400 px-2"
        />
        <button type="submit" className="ml-2 text-gray-300 hover:text-white">
          🔍
        </button>
      </form>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
