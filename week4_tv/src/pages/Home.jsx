import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

export default function Home() {
  const [shows, setShows] = useState([]);

  const handleSearch = async (item) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${item}`);
      const data = response.data.map(item => item.show);
      setShows(data);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shows.map(show => (
          <Cards key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}
