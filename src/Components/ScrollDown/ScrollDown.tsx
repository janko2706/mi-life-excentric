import React from 'react';
import { AnimStyled } from './styles';

type Props = {
  className: string;
};
const ScrollDown = ({ className }: Props) => {
  return (
    <AnimStyled className={className}>
      <div className='mouse_scroll'>
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
        <div>
          <span className='m_scroll_arrows unu'></span>
          <span className='m_scroll_arrows doi'></span>
          <span className='m_scroll_arrows trei'></span>
        </div>
      </div>
    </AnimStyled>
  );
};

export default ScrollDown;
