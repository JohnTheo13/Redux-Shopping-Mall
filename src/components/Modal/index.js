// @flow
import React, { type Element } from 'react';
import ModalWraper from './Styled';

type ModalType = {
  show: boolean,
  close: Function,
  next?: {
    click: Function,
    title: string
  },
  header?: string,
  children: Element<any>
}

const Modal = ({
  show,
  close,
  children,
  next,
  header,
}: ModalType) => (
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


export default Modal;
