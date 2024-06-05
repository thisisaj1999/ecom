import React  from "react";
import styles from "./Modal.module.scss";
import { Modal } from "antd";
import { useModalStore } from "../../utils/store";

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

	return (
		<>
			<Modal
				centered
				title={State.Modal.modalName}
				open={State.Modal.isOpen}
				onCancel={handleCancel}
				onOk={handleOk}
				className={styles.ModalMainContainer}
				width={1000}
			>
				<p>{'modalText'}</p>
			</Modal>
		</>
	);
};

export default index;
