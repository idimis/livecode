"use client";

import { useState } from "react";
import { USERS } from "@/constants/users"; 
import Header from "@/components/Header";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; email: string; }[]
  >([]); 

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]); 
    } else {
      const filtered = USERS.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filtered); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Search Section */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="w-3/4 md:w-1/2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name or email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {searchQuery.trim() !== "" && (
            <ul className="mt-4 bg-white rounded-lg shadow">
              {searchResults.map((user) => (
                <li
                  key={user.id}
                  className="py-2 px-4 border-b border-gray-200 hover:bg-gray-50"
                >
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-600">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
          {searchQuery.trim() !== "" && searchResults.length === 0 && (
            <p className="mt-4 text-center text-gray-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;