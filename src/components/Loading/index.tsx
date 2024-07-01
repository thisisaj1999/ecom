import React from 'react'
import Lottie from "lottie-react";
import Loading from "../../assets/loading.json"
import style from './Loading.module.scss'

interface LoadingProps {
  height?: string;
  width?: string
}

const index:React.FC<LoadingProps> = ({height, width}) => {
  return (
    <div 
      className={style.LoadingMain}
      style={{
        height: height,
      }}
    >
      <Lottie 
        style={{
          width: width
        }}
        animationData={Loading} 
      />
    </div>
  )
}

export default index