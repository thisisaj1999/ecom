import React, { useEffect } from 'react'

// Hooks
import { useNavigate, useParams} from 'react-router-dom';

// State
import { useGlobalStore } from '../../utils/store';

// Other functions
import { slugToWords } from '../../utils/services/other';

const index: React.FC = () => {
	
	const { slug } = useParams()
	const navigate = useNavigate()

	const State = {
		Global: {
			currentPage: useGlobalStore((State) => State.currentPage),
		},
	};

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

	useEffect(() => {
		if(slug){
			Update.Global.currentPage(slug)
		}else{
			Update.Global.currentPage('Dashboard')
			navigate('/dashboard')
		}
	},[,slug])

  return (
    <div>{slugToWords(State.Global.currentPage)}</div>
  )
}

export default index