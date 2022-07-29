import React from 'react';
import './Spinner.css';

type SpinnerProps = {
  size?: 'small' | 'medium';
};

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  const classes = size === 'medium' ? 'spinner' : 'spinner spinner--small';
  return <div className={classes}></div>;
};

export default Spinner;
