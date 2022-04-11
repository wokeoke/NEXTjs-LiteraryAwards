import Link from 'next/link';
import { useEffect } from 'react';
import { headerLinks as links } from '@/helpers/links';
import Wrapper from '@/styles/Navbar.styled';

export default function Navbar() {
  useEffect(function () {
    let lastScroll = window.scrollY;

    function showNavigation() {
      const navbar = document.querySelector('.navbar');
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll <= 0) {
        navbar.classList.remove('show');
        navbar.classList.remove('hide');
      }

      if (currentScroll > 150 && !navbar.classList.contains('hide')) {
        navbar.classList.add('hide');
        navbar.classList.remove('show');
      }

      if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
        navbar.classList.add('show');
        navbar.classList.remove('hide');
      }
      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', showNavigation);

    return function () {
      window.removeEventListener('scroll', showNavigation);
    };
  }, []);

  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo"></div>
        <div className="links">
          <ul>
            {links.map((link) => {
              const { id, title, url } = link;
              return (
                <li key={id}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="user"></div>
      </div>
    </Wrapper>
  );
}
