import { moviesData } from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from '../HomePage/HomePage.module.css';

export default function FavoritePage({isLiked, handleLike}) {

  const favoriteMovies = moviesData.filter((movie) => 
    isLiked.includes(movie.id)
  );

  if (favoriteMovies.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No favorite movies yet 😔</h2>
        <p>Go back to Home and add some!</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {favoriteMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          // На этой странице мы знаем, что они все избранные, 
          // но лучше проверять для надежности:
          isLiked={isLiked.includes(movie.id)} 
          handleLike={() => handleLike(movie.id)}
        />
      ))}
    </div>
  )
}
