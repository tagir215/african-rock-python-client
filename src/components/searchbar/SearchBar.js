import React, { useState } from "react";
import "./SearchBar.css";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <img className="search-button-img" src={process.env.PUBLIC_URL+"search-icon.png"}></img>
    </div>
  );
}
