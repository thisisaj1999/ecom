import React from 'react'
import { Card, Form, Input, Divider } from "antd";
import styles from './Address.module.scss'
import { formatNumberWithCommas } from '../../../utils/services/other';
import Summary from '../Summary'

const index:React.FC = () => {

  const onFinish = () => {}

  return (
    <div className={styles.CartItemsStyles}>
      <Card className={styles.CartItemAddressStyle}>
        <Form
          layout="vertical"
          style={{
            width: '100%'
          }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="First Name"
              name="fName"
              rules={[
                {
                  required: true,
                  message: 'Please input your First Name',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text" placeholder="John" />
            </Form.Item>

            <Form.Item
              style={{width: '100%'}}
              label="Last Name"
              name="lName"
              rules={[
                {
                  required: true,
                  message: 'Please input your Last Name',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text" placeholder="Doe" />
            </Form.Item>
          </div>

          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="Address Line 1"
              name="addressLine1"
              rules={[
                {
                  required: true,
                  message: 'Please input your Address',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text" placeholder="#123, ABC Building" />
            </Form.Item>
          </div>

          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="Address Line 2"
              name="addressLine2"
            >
              <Input style={{height: '40px'}} type="text" />
            </Form.Item>
          </div>

          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'Please input your City',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text"/>
            </Form.Item>

            <Form.Item
              style={{width: '100%'}}
              label="State"
              name="state"
              rules={[
                {
                  required: true,
                  message: 'Please input your state',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text"/>
            </Form.Item>
          </div>
         
          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: 'Please input your Country',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text"/>
            </Form.Item>

            <Form.Item
              style={{width: '100%'}}
              label="Pin Code"
              name="pincode"
              rules={[
                {
                  required: true,
                  message: 'Please input your Pin Code',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text"/>
            </Form.Item>
          </div>

        </Form>
      </Card>
      <Summary />
    </div>
  )
}

export default index