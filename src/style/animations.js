import { keyframes } from 'styled-components';

// анимация появления
export const fade_in = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// анимация прелоадера
export const fly = keyframes`
    0%
        {
            transform: rotate(0deg);
        }
    50%
        {
        transform: rotateY(45deg);
        }
    100%
        {
            transform: rotateY(0deg);
        }
`;
