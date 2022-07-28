import { useState } from 'react';

export const useWaitCursor = (ref: React.RefObject<HTMLElement>, defaultCursor: string) => {
  const [isWaiting, setIsWaiting] = useState(false);

  if (ref.current !== null) {
    if (isWaiting) {
      ref.current.style.cursor = 'wait';
    } else {
      ref.current.style.cursor = defaultCursor;
    }
  }

  return [isWaiting, setIsWaiting] as const;
};
