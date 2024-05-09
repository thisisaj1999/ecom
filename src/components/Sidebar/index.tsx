import React from 'react'
import styles from './Sidebar.module.scss'

const index:React.FC = () => {
  return (
    <div className={styles.SidebarMain}>
      <ul className={styles.MenuMain}>
        <li className={styles.MenuOpt}>Option1</li>
        <li className={styles.MenuOpt}>Opiton2</li>
        <li className={styles.MenuOpt}>Opiton3</li>
        <li className={styles.MenuOpt}>Opiton4</li>
      </ul>
    </div>
  )
}

export default index