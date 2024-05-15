import React, { useMemo } from "react";
import styles from "./Sidebar.module.scss";

// ANTD
import { Menu } from "antd";

// Components or Layouts
import Options from './Options'

// Hooks
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/services/authentication";

// State
import { useGlobalStore, useModalStore } from "../../utils/store";

// Types
import type { MenuProps } from "antd";

// Other functions
import { pathSlugMaker, wordsToSlug } from "../../utils/services/other";

const index: React.FC = () => {

	const memoizedOptions = useMemo(() => Options, []);
	const navigate = useNavigate()
	const Auth = useAuth();

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
		Modal: {
			isOpen: useModalStore((State) => State.setIsOpen),
			modalName: useModalStore((State) => State.setModalName),
		},
	};

	const onClick: MenuProps["onClick"] = async (e) => {
		if(e.key !== 'profile' && e.key !== 'logout' && e.key !== 'cart'){
			const pathSlug = pathSlugMaker(e.keyPath);
			const slug = wordsToSlug(e.key)
			Update.Global.currentPage(slug)
			navigate(`/${pathSlug}`)
		}
		if(e.key === 'logout'){
			await Auth.SignOut();
		}

		if(e.key === 'cart'){
			Update.Modal.isOpen(true)
			Update.Modal.modalName("Cart")
		}
	
		if(e.key === 'profile'){
			Update.Modal.isOpen(true)
			Update.Modal.modalName("Profile")
		}
	};

	return (
		<div className={styles.SidebarMain}>
			<Menu
				onClick={onClick}
				className={styles.MenuCustomStyles}
				style={{ width: 256 }}
				mode="inline"
				items={memoizedOptions}
			/>
		</div>
	);
};

export default index;
