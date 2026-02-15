import { moviesData } from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./HomePage.module.css";
import Search from "../../components/Search/Search";
import { useState } from "react";

export default function HomePage({ isLiked, handleLike }) {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviesData.filter((movie) => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search value={searchQuery} onChange={setSearchQuery}/>
      <div className={styles.grid}>
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isLiked={isLiked.includes(movie.id)}
            handleLike={() => handleLike(movie.id)}
          />
          ))}
      </div>
    </div>
  );
}
