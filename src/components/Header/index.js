import styled from 'styled-components';
import { Styled } from '../Icon';

const Header = styled.header`
  position: relative;
  background-color: ${({ theme: { primary } }) => primary};
  color: ${({ theme: { white } }) => white};
  text-align: center;
  font-size: 2.8em;
  line-height: 1.5;
  > span {
    &:last-child {
      position: absolute;
      right: ${({ theme: { whitespaceS } }) => whitespaceS};;
      ${Styled} {
        font-size: 44px;
        padding: 12px;
        @media (max-width: 414px) {
          font-size: 0.8em;
        }
      }
      > span {
        font-size: 20px;
        margin-left: -${({ theme: { whitespaceS } }) => whitespaceS};
        color: white;
      }
    }
  }

  @media (max-width: 414px) {
    font-size: 1.8em;
  }
`;

export default Header;
