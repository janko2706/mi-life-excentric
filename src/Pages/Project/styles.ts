import styled from 'styled-components';

export const ProjectStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--eggplant);
  position: relative;
  overflow: hidden;
  z-index: -1;
`;
export const ProjectPicsStyled = styled.div`
  background-color: var(--dark-eggplant);
  height: 100%;
  width: 100vw;
  overflow: auto;
`;
export const ContainerStyled = styled.div`
  overflow: auto;
  margin-top: 30vmin;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  gap: 1vmin;

  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
  & > img {
    object-fit: cover;
    width: 100%;
    max-width: 630px;
    max-height: 420px;
    height: 100%;
  }
`;
export const ImageStyled = styled.img`
  position: fixed;
  height: 100vh;
  top: 0vmin;
  left: 90vmin;
  object-fit: cover;
  z-index: -1;
  animation: fadein;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.77, 0.16, 0.64, 0.91);
  animation-iteration-count: 1;
  @keyframes fadein {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
export const TextCont = styled.div`
  position: absolute;
  top: 60vmin;
  left: 5vmin;
  width: 100%;
  padding-top: 2vmin;
  padding-bottom: 2vmin;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  font-size: 5vmin;
  animation: fadein3 1s;
  animation-timing-function: cubic-bezier(0.77, 0.16, 0.64, 0.91);
  animation-iteration-count: 1;
  @keyframes fadein3 {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;
export const TitleStyled = styled.div`
  position: absolute;
  top: 45vmin;
  left: 60vmin;
  font-size: 12vmin;
  color: whitesmoke;
  padding-bottom: 3vmin;
  font-weight: 500;
  text-transform: uppercase;
  z-index: -1;
`;
export const TitleStyledStroked = styled.div`
  color: transparent !important;
  -webkit-text-stroke: 2px white !important;
  position: absolute;
  top: 120vmin;
  left: 60vmin;
  font-size: 12vmin;
  padding-bottom: 3vmin;
  font-weight: 500;
  text-transform: uppercase;
  animation-duration: 3s;
  animation-name: rotate;
  animation-timing-function: linear;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -5s);
  transform: translate(0%, -75vmin);
  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 1;
  @keyframes rotate {
    to {
      transform: translate(0%, 0%);
    }
  }
`;
