import type { Metadata } from 'next';
import Contact from '../../../../public/icons/Areas/contact.svg';
import styled from '@/styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';

export const metadata: Metadata = {
  title: 'Contratos',
  description:
    'Elaboração, revisão e negociação de contratos com segurança jurídica.',
  alternates: { canonical: '/areas/contratos' },
};



function Contratos() {
  return (
    <>
      <section className={styled.section} style={{backgroundImage: 'url(\'/bgs/areas/contratos.webp\')'}}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h1>Contratos</h1>
          <p>A importância de consultar um especialista em contratos antes e durante qualquer negociação</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h2 className="section__title">
            Mas afinal, o que é um contrato?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            Um contrato é um acordo entre duas ou mais partes, que se comprometem a cumprir determinadas obrigações ou prestações. 
            É um instrumento jurídico que define as condições e obrigações dos envolvidos em uma transação comercial ou acordo.
            </p>
            <p className='section__texto'>
            Os contratos, de uma maneira geral, são regidos por um ramo do direito civil chamado Direito Contratual. Direito contratual 
            é o conjunto de normas jurídicas que regulam a formação, validade e execução de contratos. É o ramo do direito que se ocupa 
            da regulamentação dos acordos entre as partes, estabelecendo regras para a sua formação, validade, execução e extinção.
            </p>
          </div>
          <h2 className="section__title">
          Como redigir um contrato?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            Existem vários tipos de contrato, incluindo contrato de compra e venda, contrato de prestação de serviços, 
            contrato de prestação de serviços temporários, contrato de trabalho, contrato de fiança, entre outros. Cada um possui
            suas características e cláusulas próprias.
            </p>
            <p className='section__texto'>
            Para ser considerado válido, um contrato deve possuir as seguintes características: capacidade das partes, objeto lícito, 
            forma prescrita em lei, e consentimento livre e informado das partes.
            </p>
            <p className='section__texto'>
            Recomendamos fortemente que todo contrato seja redigido por um especialista, que pode averiguar as condições específicas de determinada
            negociação e evitar dúvidas futuras na interpretação do documento. EM HIPÓTESE ALGUMA utilize modelos prontos encontrados na internet!
            </p>
          </div>
          <h2 className="section__title">
          É necessário registrar um contrato?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            Não é obrigatório registrar um contrato, mas é recomendável para provar a existência do acordo e ter uma prova válida em caso de disputa ou litígio. 
            Alguns contratos, como os imobiliários, necessitam de registrap para terem validade.
            </p>
          </div>
          <h2 className="section__title">
          O que acontece se uma das partes não cumprir o contrato?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            Se uma das partes não cumprir o contrato, a outra parte pode buscar a aplicação de sanções previstas no acordo ou ingressar com ação judicial para a cobrança do cumprimento 
            do contrato.
            </p>
          </div>
          <h2 className="section__title">
          O que é cláusula abusiva em um contrato?
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
            Cláusula abusiva é uma disposição presente em um contrato que configura uma desvantagem excessiva para uma das partes, prejudicando-a em relação à outra. As cláusulas abusivas 
            podem ser anuladas ou consideradas nulas pelo Poder Judiciário.
            </p>
            <p className='section__texto'>
            Essas são apenas algumas das perguntas mais frequentes sobre contratos. É importante consultar um advogado ou especialista em direito para esclarecer dúvidas e ter segurança 
            na elaboração de um contrato.
            </p>
          </div>
        </div>
        <div className={styled.formulario}>
          <div className='d-flex gap-2 align-items-center'>
            <Contact/>
            <span>Converse com um advogado</span>
          </div>
          <p>Preencha o formulário abaixo e entraremos em contato:</p>

          <Form />

        </div>
      </section>
    </>
  );
}


export default Contratos;