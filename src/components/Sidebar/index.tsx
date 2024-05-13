import React, { useMemo } from "react";
import styles from "./Sidebar.module.scss";

// ANTD
import { Menu } from "antd";

// Components or Layouts
import Options from './Options'

// Hooks
import { useGlobalStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/services/authentication";

// Other functions
import { pathSlugMaker, wordsToSlug } from "../../utils/services/other";

// Types
import type { MenuProps } from "antd";


const index: React.FC = () => {

	const memoizedOptions = useMemo(() => Options, []);
	const navigate = useNavigate()
	const Auth = useAuth();

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

	const onClick: MenuProps["onClick"] = async (e) => {
		if(e.key !== 'profile' && e.key !== 'logout' && e.key !== 'theme'){
			const pathSlug = pathSlugMaker(e.keyPath);
			const slug = wordsToSlug(e.key)
			Update.Global.currentPage(slug)
			navigate(`/${pathSlug}`)
		}
		if(e.key === 'logout'){
			await Auth.SignOut();
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
