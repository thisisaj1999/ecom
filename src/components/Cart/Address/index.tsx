import React from 'react'
import { Card, Form, Input } from "antd";
import styles from './Address.module.scss'

const index:React.FC = () => {

  const onFinish = () => {}

  return (
    <div className={styles.CartItemsStyles}>
      <Card>
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
      <Card className={styles.ShowCartItem}>
        <div className={styles.Subtotal}>
          <h2>Subtotal:</h2>
          <h2>200$</h2>
        </div>
        <div className={styles.Breakdown}>
          <p>Service Charge:</p>
          <p>1.50$</p>
        </div>
      </Card>
    </div>
  )
}

export default index