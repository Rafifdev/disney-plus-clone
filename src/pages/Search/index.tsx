import styles from "./index.module.css";
import { useState, type ChangeEvent } from "react";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../constatnts";
import useDebounce from "../../hooks/useDebounce";
import SearchMovie from "./SearchMovie";
import SearchTvSeries from "./SearchTvSeries";
import Trending from "./Trending";

function Search() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  // Fetching API
  const { data: movieData, loading: movieLoading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`
  );
  const { data: tvData, loading: tvloading } = useFetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${debouncedSearch}`
  );
  const { data: trendingData } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&query=${debouncedSearch}`
  );

  const isLoading = movieLoading || tvloading;
  const handleChage = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  // Function RenderSearch  
  const renderSearch = () => {
    if (isLoading) {
      return (
        <div>
          <h1 className={styles.loading}>Loading...</h1>
        </div>
      );
    }

    return (
      <>
        <SearchMovie movieData={movieData} />
        <SearchTvSeries tvData={tvData} />
      </>
    );
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <span className="material-symbols-outlined" style={{ color: "white" }}>
          search
        </span>
        <input
          type="text"
          value={search}
          onChange={handleChage}
          placeholder="Movies, Shows and More"
        />
      </div>
      {search ? renderSearch() : <Trending trendingData={trendingData} />}
    </div>
  );
}

export default Search;