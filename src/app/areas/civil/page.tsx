import type { Metadata } from 'next';
import Contact from '../../../../public/icons/Areas/contact.svg';
import styled from '@/styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';

export const metadata: Metadata = {
  title: 'Responsabilidade Civil',
  description:
    'Responsabilidade civil e indenizações: quando buscar reparação por danos morais ou materiais.',
  alternates: { canonical: '/areas/civil' },
};



function Civil() {
  return (
    <>
      <section className={styled.section} style={{ backgroundImage: 'url(\'/bgs/areas/resp_civil.webp\')' }}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h1>Responsabilidade Civil / Indenizações</h1>
          <p>Saiba o que fazer alguém lhe causa dano</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h2 className="section__title">
            Quando entrar na justiça quando alguém nos causa danos?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Toda vez que alguém nos causa dano, seja moral ou físico, essa pessoa pode ser responsabilizada judicialmente. Essa responsabilidade judicial pode ir desde a
              aplicação de uma pena de prisão (responsabilidade penal), até a condenação em uma indenização por danos morais ou materiais (responsabilidade civil).
            </p>
            <p className="section__texto">
              Essa responsabilidade civil busca reparar os danos sofridos pela vítima, podendo esta receber uma indenização por danos materiais ou morais, a depender do caso.
            </p>
          </div>
          <h2 className="section__title">
            Qual é a diferença entre responsabilidade civil contratual e extracontratual?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              A responsabilidade civil contratual decorre de uma obrigação prevista em um contrato, enquanto a responsabilidade civil extracontratual decorre de uma
              obrigação não prevista em um contrato, mas imposta pela lei.
            </p>
          </div>
        </div>
        <div className={`${styled.formulario}`}>
          <div className='d-flex gap-2 align-items-center'>
            <Contact />
            <span>Converse com um advogado</span>
          </div>
          <p>Preencha o formulário abaixo e entraremos em contato:</p>

          <Form />

        </div>
      </section>
    </>
  );
}



export default Civil;