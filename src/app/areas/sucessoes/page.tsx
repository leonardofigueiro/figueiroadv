import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '../../../../public/icons/Areas/contact.svg';
import styled from '@/styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';

export const metadata: Metadata = {
  title: 'Inventários e Sucessões',
  description:
    'Inventário (judicial e em cartório), testamento, partilha e planejamento sucessório.',
  alternates: { canonical: '/areas/sucessoes' },
};



function Sucessoes() {
  return (
    <>
      <section className={styled.section} style={{ backgroundImage: 'url(\'/bgs/areas/sucessoes.webp\')' }}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h1>Advogados especialistas em Intentários / Sucessões</h1>
          <p>Entenda o que é sucessão e como podemos ajudar</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h2 className="section__title">
            Qual é o papel de um inventário na partilha de bens?

          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Partilhar os bens entre os herdeiros é um processo complicado e demorado. A partilha dos bens depende de vários fatores, incluindo a documentação e as leis e regulamentos de herança do país. Embora alguns detalhes possam variar, é comum uma série de etapas que compõem o processo de partilha. Uma delas é o inventário. Neste artigo, vamos falar sobre o que é um inventário, seu papel na partilha de bens e como ele afeta a divisão dos ativos.
            </p>

          </div>
          <h2 className="section__title">
            O que é inventário?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Um inventário é uma lista oficial e detalhada dos bens e das dívidas de um falecido. Ele é usado como parte do processo de partilha de bens e normalmente é preparado pelo advogado do falecido. O inventário também detalha se há alguma dívida deixada para trás. Um inventário pode ser revisto por todos os herdeiros a fim de garantir que todos obtenham sua parte justa.</p>

            
          </div>
          <h2 className="section__title">
            Como o Inventário Ajuda na Partilha de Bens?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              O inventário ajuda a garantir que a partilha de bens seja feita justa e equitativamente. O inventário também pode ajudar a evitar disputas entre os herdeiros sobre o que cada um recebeu, pois o inventário detalha exatamente que bens foram deixados, bem como quais dívidas ainda precisam ser pagas.
            </p>

            <p className="section__texto">
              <Link href='http://www.figueiroadvocacia.com.br/blog/24'>Veja mais: Como fazer uma partilha de forma justa e eficiente</Link>
            </p>

          </div>
          <h2 className="section__title">
            Como Funciona o Processo de Criação de um Inventário?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              O processo de criação de um inventário é geralmente supervisionado por um advogado experiente. O inventário é feito com base na documentação fornecida por familiares e amigos do falecido. Os bens e dívidas são validados e incluídos no inventário. O inventário é então entregue aos herdeiros para que possam verificar se cada um recebeu sua parte justa.
            </p>
            <p className='section__texto'>
              <Link href='http://www.figueiroadvocacia.com.br/blog/36'>Veja mais: Como funciona um processo de inventário</Link>
            </p>
          </div>
          <h2 className="section__title">
            Quais São os Problemas Que Podem Ocorrer Durante o Processo de Partilha de Bens?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              É comum que os herdeiros não estejam de acordo com a divisão dos bens. Isso pode levar a litígios, problemas financeiros e outras complicações. No entanto, o inventário pode ajudar a evitar esses problemas, pois pode ser usado como referência ao qual todos os herdeiros podem recorrer para garantir que todos obtenham sua parte justa dos bens.
            </p>

          </div>
          <h2 className="section__title">
            Como é Feita a Divisão dos Bens?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Quando o inventário é concluído e entregue, os herdeiros começam a processo de divisão dos bens. Isso geralmente envolve negociações entre os herdeiros, com base na documentação fornecida pelo inventário e na lei de herança aplicável. Às vezes, os herdeiros precisam contratar um mediador para ajudar a equilibrar as negociações.
            </p>

          </div>
          <h2 className="section__title">
            Conclusão
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              Embora possa ser complicado, o processo de partilha dos bens deve ser encarado de forma responsável e com conhecimento de causa. O inventário ajuda a garantir que os bens sejam divididos de maneira justa entre os herdeiros, evitando problemas financeiros para todos. Preencha o formulário ao lado e converse com um especialista em inventário agora mesmo!
            </p>


            <p className="section__texto">
              <Link href='http://www.figueiroadvocacia.com.br/blog/21'>Veja mais: o que faz um advogado especialista em inventário?</Link>
            </p>
          </div>
        </div>
        <div className={styled.formulario}>
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



export default Sucessoes;