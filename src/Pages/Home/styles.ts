import styled from 'styled-components';

export const HomeStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--dark-eggplant);
  margin: 0rem;
  overflow: hidden !important;
`;
export const StyledImageTrack = styled.div`
  display: flex;
  gap: 2vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: all 2s cubic-bezier(0, 1.02, 0.87, 0.94);
  transform: translate(0%, -50%);

  & .selectedPicture {
    width: 100%;
    height: 100%;
    opacity: 1;
    align-self: bottom;
    object-fit: cover;
    animation-name: fade-in-picture;
    animation-duration: 2s;
    @keyframes fade-in-picture {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  & .selectedPictureCont {
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 100%;
    overflow: hidden;
  }
  & .pictureText {
    animation-name: fade-in-text;
    animation-duration: 2s;
    @keyframes fade-in-text {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
  & .pictureTextCont {
    position: absolute;
    overflow: hidden;
    font-size: 10vmin;
    color: white;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
  }
`;
