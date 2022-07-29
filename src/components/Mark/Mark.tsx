import React from 'react';

type MarkProps = {
  baseClass: string;
};

const Mark = ({ baseClass }: MarkProps) => (
  <div className={`${baseClass}__mark`}>
    <span>Premium</span>
  </div>
);

export default Mark;
