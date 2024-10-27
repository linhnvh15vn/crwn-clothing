import { type FormEvent, useState } from 'react';

import classNames from 'classnames/bind';

import styles from './sign-in.module.scss';

import Button from '@/components/button';
import Input from '@/components/input';
import { useUserStore } from '@/stores/user.store';
import {
  _signInWithEmailAndPassword,
  createUserDocument,
  signInWithGooglePopup,
} from '@/utils/firebase';

const cx = classNames.bind(styles);

interface FormValue {
  email: string;
  password: string;
}

const defaultValues: FormValue = {
  email: '',
  password: '',
};

export default function SignIn() {
  const { setUser } = useUserStore();
  const [formValue, setFormValue] = useState<FormValue>(defaultValues);

  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);

    setUser(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await _signInWithEmailAndPassword(
      formValue.email,
      formValue.password,
    );
    if (response) {
      setUser(response.user);
    }
  };

  return (
    <main className={cx('sign-in-container')}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formValue.email}
          required
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formValue.password}
          required
          onChange={handleChange}
        />

        <div className={cx('buttons-container')}>
          <Button type="submit">Log in</Button>
          <Button type="button" google onClick={logUserGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </main>
  );
}
