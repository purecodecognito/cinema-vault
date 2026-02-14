import { moviesData } from '../../data/movies'
import MovieCard from '../../components/MovieCard/MovieCard'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.grid}>
        {moviesData.map((movie) => (
            // key должен быть здесь, в родительском элементе списка
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
  )
}