import styled from 'styled-components';
type StyleProps = {
  objectPosition: number;
  imageIsChoosen: boolean;
  randomNumberForDownAnim: number;
  randomNumberForXPosition: number;
};
export const ImageStyled = styled.img<StyleProps>`
  cursor: pointer;
  width: ${(props) => (props.imageIsChoosen ? '12vmin' : '32vmin')};
  height: ${(props) => (props.imageIsChoosen ? '6vmin' : '60vmin')};
  position: ${(props) => (props.imageIsChoosen ? 'absolute' : 'initial')};
  top: 90%;
  right: ${(props) => `${props.randomNumberForXPosition - 200}vmin`};
  object-fit: cover;
  user-select: none;
  animation-name: ${(props) => (props.imageIsChoosen ? `lower-scroll` : '')};
  animation-duration: ${(props) =>
    props.imageIsChoosen ? `${props.randomNumberForDownAnim}s ` : ''};
  animation-timing-function: ease;
  transition: ${(props) =>
    props.imageIsChoosen
      ? `none`
      : ' all 2s cubic-bezier(0, 1.02, 0.87, 0.94)'};
  object-position: ${(props) =>
    `${props.objectPosition + 100}% 50% !important`};
  @keyframes lower-scroll {
    from {
      transform: translateY(-200%) translateX(-200%);
    }
    to {
      transform: translateY(0%) translateX(0%);
    }
  }
`;
