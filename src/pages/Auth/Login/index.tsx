import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";

// ANTD
import { Button, Form, Input, Tooltip, Typography, Divider } from "antd";

// Hooks
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../utils/services/authentication';
import { useSnackbar } from 'notistack';

// Images
import GoogleLogo from "../../../assets/google-logo.svg";

// State
import { useGlobalStore } from "../../../utils/store";

// Types
import { ILoginDetails } from "../../../contracts/ILoginDetails";

// Other functions
import { getRandomColor } from "../../../utils/services/other";

const index:React.FC = () => {

  const Auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation()
  const navigate = useNavigate()

	const [isHovered, setIsHovered] = useState(false);
  
	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

  useEffect(()=>{
    if(location.pathname === '/login'){
      Update.Global.currentPage('login')
    }
  },[location])

	const hoveredStyle = {
		color: getRandomColor(),
		transition: "all 0.3s ease-in-out",
	};

	const notHoveredStyle = {
		color: "black",
		transition: "all 1s ease-in-out",
	};

	const navigateToRegister = () => {
		navigate("/register");	
	}

  const GoogleAuthentication = async () => {
    const Response = await Auth.SignInGoogle();

    if (Response) {
        navigate('/dashboard')
        enqueueSnackbar("Sign In successfull", { variant: 'success' });
      } else {
        enqueueSnackbar("Something went wrong", { variant: 'warning' });
    }
  };

  const onFinish = async (values:ILoginDetails) => {
    const Response = await Auth.SignIn(values.email, values.password)
		if(Response?.Success){
			navigate("/dashboard");
			enqueueSnackbar("Sign In successfull", { variant: 'success' });
		}else{
			if (Response?.Error && Response.Error.includes("invalid") && Response.Error.includes("credential")) {
				enqueueSnackbar("Invalid Credentials", { variant: 'warning' });
			}
		}
  };

	return (
    <div className={styles.AuthBgMain}>
      <div
        className={styles.AuthFormMain}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className={styles.AuthFormHeading}>
          Log{" "}
          <span style={isHovered ? hoveredStyle : notHoveredStyle}>
            In
          </span>
        </h1>

        <Form
          layout="vertical"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item className={styles.AuthFormOAuthBtns}>
              <Button
                className={styles.AuthFormGoogleBtn}
                type="primary"
                onClick={async () => await GoogleAuthentication()}
              >
                <img src={GoogleLogo} alt="GoogleLogo" /> Sign in with Google
              </Button>
          </Form.Item>

          <Divider>OR</Divider>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid Email',
              },
              {
                required: true,
                message: 'Please input your Email',
              },
            ]}
          >
            <Input style={{height: '40px'}} type="email" placeholder="johndoe@email.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{height: '40px'}}  />
          </Form.Item>

          <Form.Item>
            <Button className={styles.AuthFormSubmitBtn} type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>

          <div className={styles.AuthFormLink}>
            <Tooltip title="Sign Up">
              <Typography.Link onClick={navigateToRegister}>
                {"You don't have an account?"}
              </Typography.Link>
            </Tooltip>
          </div>
        </Form>
      </div>
    </div>
	);
};
export default index;