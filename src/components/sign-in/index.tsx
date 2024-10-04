import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './sign-in.module.scss';

import Button from '@/components/button';
import Input from '@/components/input';
import { createUserDocument, signInWithGooglePopup } from '@/utils/firebase';

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
  const [formFields, setFormFields] = useState<FormValue>(defaultValues);

  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <main className={cx('sign-in-container')}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formFields.email}
          required
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formFields.password}
          required
          onChange={handleChange}
        />
      </form>
      <div className={cx('buttons-container')}>
        <Button type="button" onClick={logUserGoogle}>
          Log in
        </Button>
        <Button type="button" google onClick={logUserGoogle}>
          Sign in with Google
        </Button>
      </div>
    </main>
  );
}
