'use client';
import Link from 'next/link';
import styled from '../../src/styles/Commons/OffCanvas.module.scss';
import { useEffect } from 'react';

export default function OffCanvas() {
  useEffect(() => {
    require('bootstrap/js/dist/collapse');
  },[]);
  return (
    <section className={`${styled.section} offcanvas mobile-toggler offcanvas-end w-75`} tabIndex={-1} id="menuLateral" aria-labelledby="menuLateralLabel" >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="menuLateralLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        <div data-bs-dismiss="offcanvas" className="item">
          <Link href={'/'} >Inicio</Link>
        </div>
        <div className="nav-item">
          <a href='#atuacao'
            data-bs-toggle="collapse" 
            role="button" 
            aria-expanded="false" 
            aria-controls="atuacao"
          >Áreas de atuação</a>
        </div>

        <ul className='collapse' id='atuacao'>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'/areas/trabalhista'} replace>Direito do trabalho</Link>
          </li>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'/areas/sucessoes'} replace>Sucessões</Link>
          </li>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'/areas/contratos'} replace>Contratos</Link>
          </li>
          <li data-bs-dismiss='offcanvas'>
            <Link href={'/areas/civil'} replace>Responsabilidade civil</Link>
          </li>
        </ul>


        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'/about'}>Quem somos</Link>
        </div>
        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'/contato'}>Contato</Link>
        </div>
        <div className="item" data-bs-dismiss="offcanvas">
          <Link  href={'/blog'}>Artigos</Link>
        </div>

      </div>
    </section>


  );
}