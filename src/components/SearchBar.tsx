import { useState } from "react";
import { USERS } from "@/constants/users";


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(USERS);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
     
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by name or email"
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <ul className="mt-4">
        {searchResults.map((user) => (
          <li
            key={user.id}
            className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100"
          >
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
