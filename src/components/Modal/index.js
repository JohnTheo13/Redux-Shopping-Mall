import React from 'react';
import ModalWraper from './Styled';

const modal = ({
  show,
  close,
  children,
  next,
  header
}) => (
  <ModalWraper show={show}>
    <div>
      <div>
        {header && <h3>{header}</h3>}
        <span onClick={close} onKeyDown={() => null}>×</span>
      </div>
      <div>
        {children}
      </div>
      <div>
        <button onClick={close} type="button">CLOSE</button>
        {next && <button type="button" onClick={next.click}>{next.title}</button>}
      </div>
    </div>
  </ModalWraper>
);


export default modal;