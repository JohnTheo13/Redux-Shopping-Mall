// @flow
import React from 'react';
import styled from 'styled-components';

type IconType = {
  name: string,
  size?: string,
  colorName?: string,
  onClick?: Function
};

const Styled = styled.i`
  color: ${({ theme, colorName }) => theme[colorName]}
  font-size: ${({ theme, size }) => theme[size]};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Icon = ({ name, ...props }: IconType) => (
  <Styled className="material-icons" {...props}>{name}</Styled>
);

export { Styled };
export default Icon;
