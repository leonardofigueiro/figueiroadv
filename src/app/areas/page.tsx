import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Trabalho from '../../../public/images/index/Conteudo3/trabalho.webp';
import Sucessao from '../../../public/images/index/Conteudo3/sucessao.webp';
import Contratos from '../../../public/images/index/Conteudo3/contratos.webp';
import RespCivil from '../../../public/images/index/Conteudo3/respcivil.webp';
import styled from '../../styles/Areas/Areas.module.scss';

export const metadata: Metadata = {
  title: 'Áreas de atuação',
  description:
    'Atuação em Direito do Trabalho, Sucessões, Contratos e Responsabilidade Civil.',
  alternates: { canonical: '/areas' },
};

export default function AreasPage() {
  return (
    <section className="bgSec container-fluid py-4 d-flex flex-column align-items-center justify-content-center gap-4">
      <h1 className='section__title'>Áreas de atuação</h1>

      <div className="d-flex justify-content-center gap-2 flex-wrap flex-lg-nowrap">
        <div className={`${styled.div__card} position-relative`}>
          <Image className='img-fluid' src={Trabalho} alt="Direito do trabalho" />
          <div className={`${styled.card} mb-3 p-3 `}>
            <h2 className={styled.card__titulo}>Direito do trabalho</h2>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Defesas trabalhistas</li>
              <li>Atuação preventiva</li>
              <li>Consultoria</li>
            </ul>
            <Link href={'/areas/trabalhista'}>Clique para saber mais</Link>
          </div>
        </div>

        <div className={`${styled.div__card} position-relative`}>
          <Image className='img-fluid' src={Sucessao} alt="Sucessões" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h2 className={styled.card__titulo}>Sucessões</h2>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Inventários judiciais</li>
              <li>Inventários em cartório</li>
              <li>Testamentos</li>
              <li>Partilhas</li>
              <li>Cessões de direitos</li>
            </ul>
            <Link href={'/areas/sucessoes'}>Clique para saber mais</Link>
          </div>
        </div>

        <div className={`${styled.div__card} position-relative`}>
          <Image className='img-fluid' src={Contratos} alt="Contratos" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h2 className={styled.card__titulo}>Contratos</h2>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Elaboração de contratos e minutas</li>
              <li>Soluções em contratos digitais</li>
              <li>Revisão contratual</li>
              <li>Atuação preventiva</li>
              <li>Responsabilidade civil contratual</li>
            </ul>
            <Link href={'/areas/contratos'}>Clique para saber mais</Link>
          </div>
        </div>

        <div className={`${styled.div__card} position-relative`}>
          <Image className='img-fluid' src={RespCivil} alt="Responsabilidade Civil" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h2 className={styled.card__titulo}>Responsabilidade Civil</h2>
            <span />
          </div>
          <div className={styled.hovertext}>
            <ul className='d-flex flex-column gap-3'>
              <li>Ações indenizatórias</li>
              <li>Soluções preventivas</li>
              <li>Defesas em ações indenizatórias</li>
              <li>Duty to mitigate the loss</li>
            </ul>
            <Link href={'/areas/civil'}>Clique para saber mais</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
