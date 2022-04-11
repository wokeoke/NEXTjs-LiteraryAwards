import styled from 'styled-components';

const Wrapper = styled.div`
  .carousel {
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-image {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: all 0.75s ease;
  }

  .carousel-image.active-slide {
    opacity: 1;
    transform: translateX(0);
  }

  .carousel-image.last-slide {
    transform: translateX(-100%);
  }

  .carousel-image.next-slide {
    transform: translateX(100%);
  }

  .button-container {
    width: 90%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .button-container button {
    cursor: pointer;
    font-size: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Wrapper;
