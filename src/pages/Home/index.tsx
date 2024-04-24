import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { useGlobalStore } from '../../utils/store'
import { useLocation } from 'react-router-dom'
import homepageImg from '../../assets/homepageImg.jpg'
import Navbar from '../../components/Navbar'

const index: React.FC = () => {

  const location = useLocation();

  const Update = {
    Global: {
      currentPage: useGlobalStore((State) => State.setCurrentPage)
    }
  }

  useEffect(() => {
    if(location.pathname === '/'){
      Update.Global.currentPage('home')
    }
  },[location])

  const backgroundImageStyles = {
    filter: 'brightness(90%)',
    backgroundImage: `url(${homepageImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  }


  return (
    <div className={styles.HomeContainer} style={backgroundImageStyles}>
      <Navbar/>
      
    </div>
  )
}

export default index