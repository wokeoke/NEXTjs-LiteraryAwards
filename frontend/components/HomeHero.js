import { useState, useEffect } from 'react';
import { imageHero } from '@/helpers/links';

import Wrapper from '@/styles/HomeHero.styled';

export default function HomeHero() {
  const [heroes, setheroes] = useState(imageHero);
  const [index, setIndex] = useState(0);

  function prevSlide() {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = heroes.length - 1;
      }
      return index;
    });
  }

  function nextSlide() {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > heroes.length - 1) {
        index = 0;
      }
      return index;
    });
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > heroes.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 4500);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper>
      <div className="carousel">
        {heroes.map((hero, heroIndex) => {
          const { id, title, url } = hero;

          let position = 'next-slide';

          if (heroIndex === index) {
            position = 'active-slide';
          }

          if (
            heroIndex === index - 1 ||
            (index === 0 && heroIndex === heroes.length - 1)
          ) {
            position = 'last-slide';
          }

          return (
            <div key={id} className={`carousel-image ${position}`}>
              <img src={url} alt={title} />
            </div>
          );
        })}
        <div className="button-container">
          <button onClick={prevSlide}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
