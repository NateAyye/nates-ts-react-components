import { keyframes } from 'styled-components';

export const ripple = keyframes`
  0% {
    width: 0;
    opacity: .3;
  }
  100% {
    width: 400%;
    opacity: 0;
  }
`;

export const createRipple = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  buttonRef: React.RefObject<HTMLButtonElement>,
) => {
  const span = document.createElement('span');

  span.style.top = e.pageY - e.currentTarget.offsetTop + 'px';
  span.style.left = e.pageX - e.currentTarget.offsetLeft + 'px';

  buttonRef.current?.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 500);
};
