import React from 'react'
import { Card } from "antd";
import styles from './Payments.module.scss'

const index:React.FC = () => {
  return (
    <div className={styles.CartItemsStyles}>
      <Card>
        <p>Payments</p>
      </Card>
    </div>
  )
}

export default index