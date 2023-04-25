import React, { useCallback, useState } from 'react';
import {
  ContainerStyled,
  ImageStyled,
  ProjectPicsStyled,
  ProjectStyled,
  TextCont,
  TitleStyled,
  TitleStyledStroked,
} from './styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
type Props = {
  projectPictures: any[];
  projectTitle: string;
  about: { location: string; info: string };
};

const Project = ({ projectPictures, projectTitle, about }: Props) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  let startY = 0;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ y: '200%' }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.77, 0.16, 0.64, 0.91] }}
      onWheel={(e) => {
        if (window.scrollY === 0 && e.deltaY < 0) {
          navigate('/');
        }
      }}
      onTouchStart={(e) => {
        startY = e.changedTouches[0].pageY;
      }}
      onTouchEnd={(e) => {
        const distY = e.changedTouches[0].pageY - startY;
        if (distY > 0 && window.scrollY === 0) {
          navigate('/');
        }
      }}
    >
      <ProjectStyled className='mobileProject'>
        <TextCont>
          <div>Location: {about.location}</div>
          <div>Info: {about.info}</div>
        </TextCont>
      </ProjectStyled>
      <div
        style={{
          overflowY: 'hidden',
          overflowX: 'hidden',
          zIndex: '-1',
        }}
        className='mobileProject'
      >
        <TitleStyled>{projectTitle}</TitleStyled>
        <ImageStyled src={projectPictures[4]} alt='some project' />
        <TitleStyledStroked>{projectTitle}</TitleStyledStroked>
      </div>
      <ProjectPicsStyled>
        <ContainerStyled>
          {projectPictures.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item}
                onClick={() => openImageViewer(idx)}
                alt='project grid item'
              />
            );
          })}
        </ContainerStyled>
      </ProjectPicsStyled>
      {isViewerOpen && (
        <div style={{ zIndex: '3' }}>
          <ImageViewer
            src={projectPictures}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={true}
            closeComponent={<div></div>}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,0.9)',
            }}
            closeOnClickOutside={true}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Project;
