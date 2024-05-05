import React from "react";
import styles from "./Newsletter.module.scss";

// ANTD
import { Form, Input } from "antd";

// Images
import Newsletter from "../../../assets/newsletter.jpeg";

// Types
import type { FormProps } from "antd";
type FieldType = {
	email?: string;
};

const index: React.FC = () => {

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

	return (
		<section className={styles.NewsletterContainer}>
			<div className={styles.NewsletterImg}>
				<img src={Newsletter} />
				<div className={styles.NewsletterContent}>
					<p className={styles.NewsletterContentHeading}>
						Sign Up to Our Newsletter
					</p>
					<p className={styles.NewsletterContentSubHeading}>
						Get the Latest Beauty Secrets and Trends, Sign Up for
						Our Newsletter and Stay Informed About All Things Beauty
					</p>

					{/* Form */}

					<Form
						className={styles.NewsletterFrom}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item<FieldType> name="email">
							<Input />
						</Form.Item>

						<button className={styles.SubmitBtn} type="submit">
							Submit
						</button>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default index;
