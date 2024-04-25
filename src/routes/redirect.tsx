import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../utils/services/authentication'

const Redirect: React.FC = () => {

	const navigate = useNavigate();
	const Auth = useAuth()
	const {User} = Auth;
	
	useEffect(() => {
		navigate(User ? "/dashboard" : "/");
	}, [User]);

	return null;
};

export default Redirect;