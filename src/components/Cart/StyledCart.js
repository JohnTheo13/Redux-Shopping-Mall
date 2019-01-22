import styled from 'styled-components';

const StyledCart = styled.div`
  > div {
    display: flex;
    justify-content: space-between;

    &:first-child {
      border-bottom: 1px solid ${({ theme: { dark } }) => dark};
      margin-bottom: ${({ theme: { whitespaceS } }) => whitespaceS};
    }

    &:last-child {
      display: block;
      text-align: right;
      margin-top: ${({ theme: { whitespaceS } }) => whitespaceS};
      
      > span {
        &:first-child {
          margin-right: ${({ theme: { whitespaceS } }) => whitespaceS};
        }
      }
    }
  }
`;

export default StyledCart;
