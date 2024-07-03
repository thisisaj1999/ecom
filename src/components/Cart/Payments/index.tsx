import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Card, Radio, Space } from "antd";
import styles from "./Payments.module.scss";
import Summary from "../Summary";

// SVG
import Cash from '../../../assets/payment/cash.svg'
import Paypal from '../../../assets/payment/paypal.svg'
import CardPay from '../../../assets/payment/card-pay.svg'
import ApplePay from '../../../assets/payment/apple-pay.svg'
import GooglePay from '../../../assets/payment/google-pay.svg'
import SamsungPay from '../../../assets/payment/samsung-pay.svg'


const index: React.FC = () => {
	const [value, setValue] = useState(1);

	const onChange = (e: RadioChangeEvent) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className={styles.PaymentMethodsMain}>
			<div className={styles.CartItemsMain}>
				<div className={styles.CartItemsStyles}>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical" style={{width: '100%'}}>
              <Card>        
                <Radio value={1}><img src={Paypal} alt="Paypal" width={25} />Paypal</Radio>
              </Card>
              <Card>
                <Radio value={2}><img src={CardPay} alt="CardPay" width={25} />Card</Radio>
              </Card>
              <Card>
                <Radio value={3}><img src={GooglePay} alt="GooglePay" width={25} />Google Pay</Radio>
              </Card>
              <Card>
                <Radio value={4}><img src={ApplePay} alt="ApplePay" width={25} />Apple Pay</Radio>
              </Card>
              <Card>
                <Radio value={5}><img src={SamsungPay} alt="SamsungPay" width={25} />Samsung Pay</Radio>
              </Card>
              <Card>
                <Radio value={6}><img src={Cash} alt="Cash" width={25} />Cash on delivery</Radio>
              </Card>
            </Space>
          </Radio.Group>
				</div>
			</div>
			<Summary />
		</div>
	);
};

export default index;
