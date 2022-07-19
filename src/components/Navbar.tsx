import React from 'react'
import styles from 'styles/Navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
        <Link className={styles.navbar__link} to='/create-post'>Create post</Link>
        <Link className={styles.navbar__link} to='/posts'>Post list</Link>
        <Link className={styles.navbar__link} to='/todos'>Todo list</Link>
    </div>
  )
}

export default Navbar