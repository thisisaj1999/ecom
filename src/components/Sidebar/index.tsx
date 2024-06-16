import React, { useMemo } from "react";
import styles from "./Sidebar.module.scss";

// ANTD
import { Menu } from "antd";

// Components or Layouts
import Options from './Options'

// Hooks
import { useNavigate } from "react-router-dom";

// State
import { useDashboardStore, useGlobalStore, useModalStore } from "../../utils/store";

// Types
import type { MenuProps } from "antd";

// Other functions
import { pathSlugMaker, wordsToSlug } from "../../utils/services/other";
import { useAuth } from "../../utils/services/authentication";

const index: React.FC = () => {

	const Auth = useAuth()

	const State = {
		Dashboard: {
			cartItemsLength: useDashboardStore((State) => State.cartItemsLength)
		}
	}

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
		Modal: {
			isOpen: useModalStore((State) => State.setIsOpen),
			modalName: useModalStore((State) => State.setModalName),
		},
	};

	const memoizedOptions = useMemo(() => Options(State.Dashboard.cartItemsLength), [ , State.Dashboard.cartItemsLength]);
	const navigate = useNavigate()

	const onClick: MenuProps["onClick"] = async (e) => {
		if(e.key !== 'profile' && e.key !== 'logout'){
			const pathSlug = pathSlugMaker(e.keyPath);
			const slug = wordsToSlug(e.key)
			Update.Global.currentPage(slug)
			navigate(`/${pathSlug}`)
		}
		if(e.key === 'logout'){
			await Auth.SignOut();
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
