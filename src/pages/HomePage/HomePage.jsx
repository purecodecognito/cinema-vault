import { moviesData } from '../../data/movies'
import MovieCard from '../../components/MovieCard/MovieCard'
import styles from './HomePage.module.css'


export default function HomePage({isLiked, handleLike}) {

  return (
    <div className={styles.grid}>
        {moviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isLiked={isLiked.includes(movie.id)} handleLike={() => handleLike(movie.id)}/>
        ))}
    </div>
  )
}