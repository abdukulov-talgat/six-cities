import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser, thunkLogin } from '../../store/userSlice';
import { thunkFetchPlaces } from '../../store/placesSlice';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [email, setEmail] = useState('example@mail.com');
  const [password, setPassword] = useState('123w');

  const isFormDisabled = user.isLoading;

  const handleFormSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!user.isLoading) {
      const userCredentials = { email, password };
      dispatch(thunkLogin(userCredentials));
      dispatch(thunkFetchPlaces());
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </div>
      <button className="login__submit form__submit button" type="submit" disabled={isFormDisabled}>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
