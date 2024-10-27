import { type FormEvent, useState } from 'react';

import classNames from 'classnames/bind';

import styles from './sign-up.module.scss';

import Button from '@/components/button';
import Input from '@/components/input';
import {
  _createUserWithEmailAndPassword,
  createUserDocument,
} from '@/utils/firebase';

const cx = classNames.bind(styles);

interface FormValue {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: FormValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUp() {
  const [formValue, setFormValue] = useState<FormValue>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValue.password !== !formValue.confirmPassword) {
      alert('');
    }
    const response = await _createUserWithEmailAndPassword(
      formValue.email,
      formValue.password,
    );
    if (response) {
      await createUserDocument(response?.user, {
        displayName: formValue.displayName,
      });
    }
  };

  return (
    <main className={cx('sign-up-container')}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          type="text"
          name="displayName"
          value={formValue.displayName}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formValue.confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </main>
  );
}
