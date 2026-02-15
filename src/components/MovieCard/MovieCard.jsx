import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { Heart } from 'lucide-react';

export default function MovieCard({ movie, isLiked, handleLike }) {
  return (
    <div className={styles.card}>
      {/* Оборачиваем контент в ссылку */}
      <Link to={`/movie/${movie.id}`} className={styles.link}>
        <img src={movie.image} alt={movie.title} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{movie.title}</h3>
          <div className={styles.meta}>
            <span>{movie.year}</span>
            <span>★ {movie.rating}</span>
          </div>
        </div>
      </Link>

      {/* Кнопка отдельно */}
      <button 
        className={styles.likebtn} 
        onClick={(e) => {
           e.preventDefault(); // На случай, если кнопка внутри ссылки (но лучше версткой разнести)
           handleLike();
        }}
      >
        <Heart className={`${styles.iconbtn} ${isLiked ? styles.liked : ''}`} />
      </button>
    </div>
  );
}