'use client';
import { useEffect, useRef, useState } from 'react';
import styled from './Header.module.scss';
import Menu from '../../public/icons/Commons/menu.svg';
import OffCanvas from './OffCanvas';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOnHoverOutside } from '@/Hooks/useOnHoverOutside';
import Logo from '../../public/logos/logo_1.svg';


export default function Header() {
  useEffect(() => {
    require('bootstrap/js/dist/offcanvas');
  }, []);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement | null>(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  const [small, setSmall] = useState(false);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  return (
    <header className={`${styled.header} fixed-top`}>
      <section className='container d-flex justify-content-between align-items-center'>
        <div className={small ? styled.logo_small : styled.logo}>

          <Logo width={small ? '40px' : '100px'} />


          <span>figueiró</span>
        </div>
        <nav className='d-none d-lg-block'>
          <ul className='gap-4 d-flex navb-items'>
            <li><Link className={pathname === '/' ? styled.link__ativo : ''} href="/">Inicio</Link></li>
            <li style={{ position: 'relative' }} ref={dropdownRef}><Link
              className={pathname === '/areas' ? styled.link__ativo : ''}
              href="/areas"
              onMouseOver={() => {
                setMenuDropDownOpen(true);
              }}
            >Áreas de atuação</Link>

            <div className={isMenuDropDownOpen ? styled.menuDropDown : styled.menuDropDownOff}>
              <ul>
                <li>
                  <Link href={'/areas/trabalhista'}> Direito do trabalho</Link>
                </li>
                <li>
                  <Link href={'/areas/sucessoes'}> Sucessões</Link>
                </li>
                <li>
                  <Link href={'/areas/contratos'}> Contratos</Link>
                </li>
                <li>
                  <Link href={'/areas/civil'}> Responsabilidade Civil</Link>
                </li>
              </ul>
            </div>


            </li>
            <li><Link className={pathname === '/about' ? styled.link__ativo : ''} href="/about">Quem somos</Link></li>
            <li><Link className={pathname === '/contato' ? styled.link__ativo : ''} href="/contato">Contato</Link></li>
            <li><Link className={pathname === '/blog' ? styled.link__ativo : ''} href="/blog">Artigos</Link></li>
          </ul>
        </nav>
        <div className='d-lg-none d-md-block'>
          <button data-bs-toggle="offcanvas" type='button' data-bs-target="#menuLateral" aria-controls="menuLateral" aria-label='Botão de menu'>
            <Menu />
          </button>
        </div>
        <OffCanvas />

      </section>

    </header>
  );
}
