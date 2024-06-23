import React from 'react'
import Lottie from "lottie-react";
import Loading from "../../assets/loading.json"
import style from './Loading.module.scss'

const index:React.FC = () => {
  return (
    <div 
      className={style.LoadingMain}
    >
      <Lottie 
        animationData={Loading} 
      />
    </div>
  )
}

export default index