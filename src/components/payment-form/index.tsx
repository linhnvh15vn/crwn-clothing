import { type FormEvent } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import classNames from 'classnames/bind';

import styles from './payment-form.module.scss';

import Button from '@/components/button';

const cx = classNames.bind(styles);

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  };

  return (
    <div className={cx('payment-form-container')}>
      <div className={cx('form-container')}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button type="button" inverted>
          Pay now
        </Button>
      </div>
    </div>
  );
}
