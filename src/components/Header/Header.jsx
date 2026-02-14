import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <NavLink to='/'>Cinema Vault</NavLink>
            </div>
            <nav className={styles.nav}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.link}>Home</NavLink>
                <NavLink to='/favorites' className={({isActive}) => isActive ? styles.active : styles.link}>Favorite</NavLink>
            </nav>
        </div>
    </header>
  )
}
