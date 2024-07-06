import React, { useState } from 'react';
import style from './Stepper.module.scss'
import { Button, Steps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { emptyCartFn } from '../../utils/services/other';
import { useAuth } from '../../utils/services/authentication';
import { useSnackbar } from 'notistack';

interface StepperProps {
  FirstStep: React.FC;
  SecondStep: React.FC;
  ThirdStep: React.FC;
}

const index: React.FC<StepperProps> = ({FirstStep, SecondStep, ThirdStep}):any => {
  
  const Auth = useAuth();
	const Uid = Auth.User?.uid;
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  const [current, setCurrent] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const steps = [
    {
      title: 'Cart',
      content: <FirstStep/>,
    },
    {
      title: 'Address',
      content: <SecondStep/>,
    },
    {
      title: 'Payment',
      content: <ThirdStep/>,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    if(current === 0){
      navigate('/dashboard')
    }else{
      setCurrent(current - 1);
    }
  };

  const done = async () => {
    try {
      setPaymentLoading(true);

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setPaymentLoading(false);
          enqueueSnackbar("Order Confirmed!", {variant: "success"});
          emptyCartFn(Uid)
          resolve();

        }, 2000);
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));


  return (
    <div className={style.CheckoutMain}>
      <div className={style.Checkout}>
        <Steps current={current} items={items} />
        <div className={style.CheckoutComponent}>{steps[current].content}</div>
        <div className={style.CheckoutFooter}>
          {current >= 0 && (
            <Button onClick={prev}>
              Back
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={done} loading={paymentLoading}>
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;