import React, { useState } from 'react';
import style from './Stepper.module.scss'
import { Button, message, Steps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface StepperProps {
  FirstStep: React.FC;
  SecondStep: React.FC;
  ThirdStep: React.FC;
}

const index: React.FC<StepperProps> = ({FirstStep, SecondStep, ThirdStep}):any => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0);

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

  const items = steps.map((item) => ({ key: item.title, title: item.title }));


  return (
    <div className={style.CheckoutMain}>
      <div className={style.Checkout}>
        <Steps current={current} items={items} />
        <div className={style.CheckoutComponent}>{steps[current].content}</div>
        <div className={style.CheckoutFooter}>
          {current >= 0 && (
            <Button onClick={() => prev()}>
              Back
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;