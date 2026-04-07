import { useState } from "react";
import './SearchFunctionality.css';

// This component allows users to search for anime using the Jikan API,
//  which provides data from MyAnimeList. Users can enter a query,
//  and the component will fetch and display relevant anime results,
//  including their images, titles, and scores.

export default function AnimeSearch() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);

  const searchAnime = async () => {
    if (!query) return;

    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=10`
    );
    const data = await res.json();
    setAnime(data.data);
  };
// The component consists of an input field for the search query and a button to trigger the search.
  return (
    <>  
      <div className="search-box">
        <input
          type="text"
          placeholder="Search anime..."
          value={query}
          // The onChange event updates the query state as the user types, allowing for dynamic search input.
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={searchAnime}>Search</button>
      </div>

        {/* Mal_id is practically a shortened term for MyAnimeList,
        it was apart of the API I am using for this application. */}
      <div className="results">
        {anime.map((item) => (
          <div key={item.mal_id} className="anime-card">
            <img src={item.images.jpg.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>⭐ {item.score || "N/A"}</p>
          </div>
        ))}
      </div>
    </>
  );
}
