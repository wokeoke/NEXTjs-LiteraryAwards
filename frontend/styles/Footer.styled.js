import styled from 'styled-components';

const Wrapper = styled.footer`
  background: #333;
  width: 100%;
  height: var(--footer-height);
  position: fixed;
  bottom: 0;
  z-index: -99;

  .text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    color: #fff;
  }
`;

export default Wrapper;
