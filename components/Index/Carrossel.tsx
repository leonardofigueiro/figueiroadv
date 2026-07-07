'use client';
import Image from 'next/image';
import ImageOne from '../../public/images/carrossel/1.webp';
import ImageTwo from '../../public/images/carrossel/2.webp';
import ImageThree from '../../public/images/carrossel/3.webp';
import styled from '../../src/styles/Index/Carrossel.module.scss';
import { useEffect } from 'react';



export default function Carrossel() {
  useEffect(() => {
    require('bootstrap/js/dist/carousel');
  },[]);
  return (
    <section id="carouselExampleCaptions" data-bs-ride="carousel" className={`${styled.section} carousel slide`}>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={ImageOne} alt={'Imagem de pessoas escrevendo em uma mesa, na frente de um computador'} priority/>
          
          <div className={`${styled.carrossel} carousel-caption d-none d-md-block`}>
            <h1 className={styled.h5}>Inovador</h1>
            <p>Mais facilidade para esclarecer suas dúvidas e resolver seus problemas</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image src={ImageTwo} alt={'Imagem de uma tela de computador moderno'}/>
          
          <div className={`${styled.carrossel} carousel-caption d-none d-md-block`}>
            <h5 className={styled.h5}>Digital</h5>
            <p>Totalmente online, sem burocracia e complicações</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image src={ImageThree} alt={'Imagem de alguém com um lápis escrevendo em um caderno, sobre uma mesa'}/>
          
          <div className={`${styled.carrossel} carousel-caption d-none d-md-block`}>
            <h5 className={styled.h5}>Personalizado</h5>
            <p>Você pode utilizar os serviços de onde estiver, a qualquer hora!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>

  );
}