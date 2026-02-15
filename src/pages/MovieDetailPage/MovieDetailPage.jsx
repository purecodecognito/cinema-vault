import { useParams, useNavigate } from 'react-router-dom';
import { moviesData } from '../../data/movies';
import styles from './MovieDetailePage.module.css';

export default function MovieDetailPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    const movie = moviesData.find((m) => m.id ===Number(id))

    if (!movie) {
    return (
      <div className={styles.notFound}>
        <h2>Movie not found 😢</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }


  return (
    <div className={styles.page}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className={styles.content}>
        <img 
          src={movie.image} 
          alt={movie.title} 
          className={styles.image} 
        />
        
        <div className={styles.info}>
          <h1>{movie.title}</h1>
          <div className={styles.meta}>
            <span>Year: {movie.year}</span>
            <span>Rating: ★ {movie.rating}</span>
          </div>
          <p className={styles.description}>
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
}
