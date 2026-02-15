import React from 'react'
import styles from './Search.module.css'

export default function Search({value, onChange}) {
  return (
    <div className={styles.wrapper}>
        <input type="text"
            placeholder='Search movies...'
            className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}
