import React  from "react";
import styles from "./Modal.module.scss";
import { Modal, Avatar, Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useModalStore } from "../../utils/store";

import { IAddressValues } from "../../contracts/IAddressValues";

const index: React.FC = () => {

	const State = {
		Modal: {
			isOpen: useModalStore((State) => State.isOpen),
			modalName: useModalStore((State) => State.modalName),
		},
	};

	const Update = {
		Modal: {
			isOpen: useModalStore((State) => State.setIsOpen),
			modalName: useModalStore((State) => State.setModalName),
		},
	};

	const handleOk = () => {
		setTimeout(() => {
			Update.Modal.isOpen(false);
			Update.Modal.modalName("");
		}, 2000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		Update.Modal.isOpen(false);
		Update.Modal.modalName("");
	};

	const onValuesChange = (changedValues: Partial<IAddressValues>, allValues: IAddressValues) => {
    console.log('Form Values:', allValues);
  };

	return (
		<>
			<Modal
				centered
				title={State.Modal.modalName}
				open={State.Modal.isOpen}
				onCancel={handleCancel}
				onOk={handleOk}
				className={styles.ModalMainContainer}
				width={800}
			>
				
				<Form
          layout="vertical"
          style={{
            width: '90%'
          }}
          onValuesChange={onValuesChange}
          autoComplete="on"
        >

					<div className={styles.ProfileAvatarMain}>
						<Avatar className={styles.ProfileAvatar} icon={<UserOutlined />} />
					</div>
          
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email',
                  type: 'email'
                }
              ]}
            >
              <Input style={{height: '40px'}} type="email" placeholder="johndoe@example.com" />
            </Form.Item>

            <Form.Item
              style={{width: '100%'}}
              label="Phone"
              name="text"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text" placeholder="+1 234 5678 90" />
            </Form.Item>
          </div>

          <div className={styles.CardFieldsLayout}>
            <Form.Item
              style={{width: '100%'}}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email',
                  type: 'email'
                }
              ]}
            >
              <Input style={{height: '40px'}} type="email" placeholder="johndoe@example.com" />
            </Form.Item>

            <Form.Item
              style={{width: '100%'}}
              label="Phone"
              name="text"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone',
                },
              ]}
            >
              <Input style={{height: '40px'}} type="text" placeholder="+1 234 5678 90" />
            </Form.Item>
          </div>

        </Form>
			</Modal>
		</>
	);
};

export default index;
