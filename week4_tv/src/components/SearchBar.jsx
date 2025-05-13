import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mt-10 mb-6">
      <input
        className="border px-4 py-2 w-64 rounded-l"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="영화 제목..."
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-r"
        onClick={handleSearch}
      >
        검색
      </button>
    </div>
  );
}
