import React from 'react'
import styles from './MainPage.module.scss'
import { useGlobalStore } from '../../utils/store';

const index = () => {

	const State = {
		Global: {
			currentPage: useGlobalStore((State) => State.currentPage),
		},
	};

  console.log(State.Global.currentPage)

  return (
    <div>{State.Global.currentPage}</div>
  )
}

export default index