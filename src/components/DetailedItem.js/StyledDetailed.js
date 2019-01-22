import styled from 'styled-components';

const StyledDetailed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  > p {
    flex-basis: 60%;
  }

  @media (max-width: 414px) {
    display: block;
    text-align: left;
    > div {
      > div {
        display: inline-block;
        margin-right: 6px;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  
`;

export default StyledDetailed;
