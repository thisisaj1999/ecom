import React from 'react';

// ANTD
import { Drawer } from 'antd';

// Hooks
import { useGlobalStore } from '../../utils/store';

const index: React.FC = () => {

  const State = {
		Global: {
			isDrawerOpen: useGlobalStore((State) => State.isDrawerOpen),
		},
	};

	const Update = {
		Global: {
			isDrawerOpen: useGlobalStore((State) => State.setIsDrawerOpen),
		},
	};

  const onClose = () => {
    Update.Global.isDrawerOpen(false);
  };

  return (
    <>
      <Drawer size={"large"} title="Basic Drawer" onClose={onClose} open={State.Global.isDrawerOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default index;