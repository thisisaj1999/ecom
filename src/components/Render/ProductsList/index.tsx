import React from 'react'
import style from './ProductsList.module.scss'

const index: React.FC  = () => {
  return (
    <div className={style.ProductsListMain}>
      <h1 className={style.ProductsListMainHeading}>
				Products
			</h1>
    </div>
  )
}

export default index