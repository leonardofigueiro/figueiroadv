'use client';
import Image from 'next/image';
import Trabalho from '../../public/images/index/Conteudo3/trabalho.webp';
import Sucessao from '../../public/images/index/Conteudo3/sucessao.webp';
import Contratos from '../../public/images/index/Conteudo3/contratos.webp';
import RespCivil from '../../public/images/index/Conteudo3/respcivil.webp';

import styled from '../../src/styles/Index/Conteudo3.module.scss';
import { useRouter } from 'next/navigation';


export default function Conteudo3() {
  const router = useRouter();
  return (
    <section className="bgSec container-fluid py-4 d-flex flex-column align-items-center justify-content-center gap-4">
      <h2 className='section__title'>Áreas de atuação</h2>

      <div className="d-flex justify-content-center gap-2 flex-wrap flex-lg-nowrap">

        <div 
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/areas/trabalhista')}
        >
          <Image className='img-fluid' src={Trabalho} alt="imagem de trabalhadores ao fundo" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h3 className={styled.card__titulo}>
              Direito do trabalho
            </h3>
            <span/>
          </div>
        </div>
        <div 
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/areas/sucessoes')}
        >
          <Image className='img-fluid' src={Sucessao} alt="Imagem de uma ampuleta, representando o tempo" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h3 className={styled.card__titulo}>
              Sucessões
            </h3>
            <span/>
          </div>
        </div>
        <div 
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/areas/contratos')}
        >
          <Image className='img-fluid' src={Contratos} alt="Imagem de pessoas assinando um contrato sobre a mesa" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h3 className={styled.card__titulo}>
              Contratos
            </h3>
            <span/>
          </div>
        </div>
        <div 
          className={`${styled.div__card} position-relative`}
          onClick={() => router.push('/areas/civil')}
        >
          <Image className='img-fluid' src={RespCivil} alt="Imagem de Themis, deusa grega da justiça" />
          <div className={`${styled.card} mb-3 p-3`}>
            <h3 className={styled.card__titulo}>
              Responsabilidade Civil
            </h3>
            <span/>
          </div>
        </div>

        

      </div>
    </section>
  );
}