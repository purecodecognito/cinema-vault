import styles from './MovieCard.module.css'

export default function MovieCard({movie}) {
  return (
    <div className={styles.card}>
        <img src={movie.image} alt={movie.title} className={styles.image}/>
        <div className={styles.content}>
            <h3 className={styles.title}>{movie.title}</h3>
            <div className={styles.meta}>
                <span>{movie.year}</span>
                <span>★ {movie.rating}</span>
            </div>
        </div>
    </div>
  )
}
