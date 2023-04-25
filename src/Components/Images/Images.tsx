import React, { useRef } from 'react';
import { ImageStyled } from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  uniqueNumber: number;
  src: any;
  objectPosition: number;
  imageIsChoosen: boolean;
  isClickPossible: boolean;
  track: React.RefObject<HTMLDivElement>;
  setImageIsChoosen: (value: React.SetStateAction<boolean>) => void;
  title: string;
};

const Images = ({
  uniqueNumber,
  src,
  objectPosition,
  imageIsChoosen,
  track,
  isClickPossible,
  setImageIsChoosen,
  title,
}: Props) => {
  const ref = useRef(null);
  function randomNumberForAnim() {
    const number = Math.random() + Math.random();
    return number;
  }
  function randomNumberForXPosition() {
    const number = uniqueNumber * 15;
    return number;
  }
  const navigate = useNavigate();
  return (
    <ImageStyled
      randomNumberForXPosition={randomNumberForXPosition()}
      onClick={() => {
        if (track && track.current && isClickPossible && ref && ref.current) {
          const bgPictures = track.current.getElementsByClassName('bgToRemove');
          if (bgPictures.length) {
            for (let index = 0; index < bgPictures.length; index++) {
              track.current.removeChild(bgPictures[index]);
            }
          }
          setImageIsChoosen(true);
          track.current.style.transition = `none`;
          track.current.style.transform = `translate(0%, 0%)`;
          track.current.style.top = `0`;
          track.current.style.left = `0`;
          track.current.style.height = `100%`;
          track.current.style.width = `100%`;
          let bgPicture = document.createElement('img');
          let pictureText = document.createElement('div');
          let pictureTextCont = document.createElement('div');
          let bgCont = document.createElement('div');
          pictureText.innerHTML = title;
          bgPicture.src = src;
          pictureTextCont.appendChild(pictureText);
          bgCont.appendChild(pictureTextCont);
          bgCont.appendChild(bgPicture);
          pictureTextCont.classList.add('pictureTextCont');
          pictureText.classList.add('pictureText');
          bgCont.classList.add('selectedPictureCont');
          bgCont.classList.add('bgToRemove');
          bgPicture.classList.add('selectedPicture');
          bgCont.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
              navigate(`/${title}`);
            }
          });
          pictureText.addEventListener('click', (e) => {
            navigate(`/${title}`);
          });
          bgCont.addEventListener('touchstart', () => {
            navigate(`/${title}`);
          });
          track.current.append(bgCont);
        }
      }}
      ref={ref}
      randomNumberForDownAnim={imageIsChoosen ? randomNumberForAnim() : 0}
      objectPosition={objectPosition}
      imageIsChoosen={imageIsChoosen}
      key={uniqueNumber}
      src={src}
      alt='some project'
      draggable='false'
      className='image'
    />
  );
};

export default Images;
