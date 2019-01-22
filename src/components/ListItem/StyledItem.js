import styled from 'styled-components';

const StyledItem = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-around;
  padding: 8px ${({ theme: { whitespaceS } }) => whitespaceS};
  line-height: 1.2;
  border-bottom: 1px solid #cccbcb;
  align-items: center;

  @media (max-width: 414px) {
    justify-content: space-between;
    > img {
      padding: ${({ theme: { whitespaceS } }) => whitespaceS};
      border-radius: 50%;
    }
  }

  > div {
    text-align: left;
    padding: 0 4px;

    &:first-child {
      width: 180px;
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        color: ${({ theme: { primary } }) => primary};
      }

      @media (max-width: 414px) {
        width: 35%;
      }
    }

    &:nth-child(2) {
      width:74px;
    }

    &:last-child {
      @media (max-width: 414px) {
        margin-left: -${({ theme: { whitespaceS } }) => whitespaceS};
      }
    }
  }

  > img {
    height: 4.6em
  }

  > i {
    cursor: pointer;
  }
`;

export default StyledItem;
