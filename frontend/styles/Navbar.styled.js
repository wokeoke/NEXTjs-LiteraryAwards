import styled from 'styled-components';

const Wrapper = styled.header`
  .navbar {
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    position: fixed;
    transition: all 0.3s ease;
  }

  .navbar.hide {
    transform: translateY(-3.2rem);
  }

  .navbar.show {
    background: #eee;
    transform: translateY(0);
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
  }

  a {
    text-transform: capitalize;
    font-size: 1rem;
    margin: 0 2rem;
    color: #333;
  }

  .user button {
    margin-left: 1rem;
  }
`;

export default Wrapper;
