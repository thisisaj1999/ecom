import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { Modal } from "antd";
import { useModalStore } from "../../utils/store";
import CartCard from "../CartCard";

const index: React.FC = () => {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");

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
		setModalText("The modal will be closed after two seconds");
		setConfirmLoading(true);
		setTimeout(() => {
			Update.Modal.isOpen(false);
			Update.Modal.modalName("");
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		Update.Modal.isOpen(false);
		Update.Modal.modalName("");
	};

	return (
		<>
			<Modal
				centered
				title={State.Modal.modalName}
				open={State.Modal.isOpen}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				className={styles.ModalMainContainer}
				width={1000}
			>
				{State.Modal.modalName === "Cart" ? (
					<div className={styles.CartMainStyles}>
						<CartCard />
						<CartCard />
					</div>
				) : (
					<p>{modalText}</p>
				)}
			</Modal>
		</>
	);
};

export default index;
