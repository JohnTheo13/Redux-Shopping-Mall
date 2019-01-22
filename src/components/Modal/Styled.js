import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0%;
  width: 100% !important;
  background: #f0f8ff6b;
  height: 100%;
  display: ${({ show }) => (show ? 'block' : 'none')};

  > div {
    background: ${({ theme: { textWhite } }) => textWhite};
    border: 1px solid ${({ theme: { darkWhite } }) => darkWhite};
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
    margin: 100px auto 0;
    transition: all .8s;
    width: 60%;
    transform: ${({ show }) => (show ? 'translateY(0vh)' : 'translateY(-100vh)')};
    opacity: ${({ show }) => (show ? '1' : '0')};

    @media (max-width: 414px) {
      width: 100%;
    }

    > div {

      &:first-child {
        background: ${({ theme: { dark } }) => dark};;
        height: 40px;
        line-height: 40px;
        padding: 5px 20px !important;
        text-align: right;
        
        h3 {
          color: ${({ theme: { textWhite } }) => textWhite};
          float: left;
          margin: 0;
          padding: 0;
        }

        span {
          color: ${({ theme: { textWhite } }) => textWhite};
          cursor: pointer;
          float: right;
          font-size: 30px;
          margin: 0;
          &:hover {
            color: black;
          }
        }
      }

      &:nth-child(2) { // children ==> modal content
        padding: 10px 15px;
        text-align: center;
      }

      &:last-child {
        background: ${({ theme: { dark } }) => dark};
        height: 35px;
        padding: 15px;

        button {
          border: none;
          color: ${({ theme: { textWhite } }) => textWhite};
          cursor: pointer;
          font-weight: bold;
          outline: none;
          padding: 10px;

          &:first-child {
            background-color: ${({ theme: { orange } }) => orange};
            float: left;
          }

          &:nth-child(2) {
            background-color: ${({ theme: { primary } }) => primary};
            float: right;
          }
        }
      }
    }
  }
`;

export default ModalWrapper;
