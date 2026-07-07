import type { Metadata } from 'next';
import Contact from '../../../../public/icons/Areas/contact.svg';
import styled from '@/styles/Areas/Commons.module.scss';
import Form from 'components/Commons/Form';

export const metadata: Metadata = {
  title: 'Direito do Trabalho',
  description:
    'Atuação em Direito do Trabalho: defesas, acidentes de trabalho, justa causa, horas extras, adicionais e reconhecimento de vínculo.',
  alternates: { canonical: '/areas/trabalhista' },
};



function Trabalhista() {
  return (
    <>
      <section className={styled.section} style={{ backgroundImage: 'url(\'/bgs/areas/work.webp\')' }}>
        <div className='d-flex flex-column container gap-3 py-5'>

          <h1>Direito do trabalho</h1>
          <p>Entenda os principais pontos de atuação de nossos especialistas em direito do trabalho</p>
        </div>
      </section>

      <section className='container d-flex py-5 flex-wrap flex-lg-nowrap gap-4'>
        <div className='container d-flex flex-column gap-4'>
          <h2 className="section__title">
            Somos um escritório de advocacia especializado em Direito Trabalhista
          </h2>
          <div className='d-flex flex-column gap-2'>

            <p className='section__texto'>
              O Direito do Trabalho é o ramo jurídico que se dedica a questões ligadas às relações trabalhistas.
              Uma de suas principais características é a existência de uma parte hipossuficiente nos casos, isto
              é, uma parte considerada mais frágil (trabalhador) frente ao poder de decisão da outra parte (empregador).
              Essa hipossuficiência atribuída ao trabalhador na relação empregatícia é fundamento da proteção legal aos
              trabalhadores, preconizada nos arts. 6º a 11º da Constituição Federal de 1988, que instituem os corolários
              a serem seguidos na legislação infraconstitucional que disciplina a matéria, ou seja, na Consolidação das
              Leis do Trabalho (CLT).
            </p>
            <p className="section__texto">
              Durante nossa trajetória, nosso escritório sempre buscou a aplicação de lagislação trabalhista de forma ética,
              seja ingressando com demandas para empregados que tiveram seus direitos suprimidos, seja atuando na defesa de empresas.
              Confira abaixo nossos principais ramos de atuação dentro do direito do trabalho.

            </p>
          </div>

          <h2 className="section__title">
            Responsabilidade civil por acidente de trabalho
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              O Brasil está entre os países que mais matam trabalhadores por acidente de trabalho. Todos os anos milhares de trabalhadores
              morrem ou ficam incapacitados por algum motivo ligado ao trabalho. Porém, responsabilizar os culpados é bem mais complicado
              do que muitos imaginam.
            </p>
            <p className="section__texto">
              Mesmo juristas e técnicos da área jurídica se confundem ao interpretar os dispositivos legais e constitucionais sobre o tema.
              Isto porque um acidente de trabalho pode provocar diversos impactos no direito (civil, constitucional, tributário, previdenciário, etc).

              Por isso, uma ação de reparação de danos por acidente de trabalho não passa, no fundo, da busca pela responsabilização civil do empregador.
              Em outras palavras: é uma ação civil julgada pela justiça do trabalho.
            </p>
            <p className="section__texto">
              Nesse sentido, é de extrema importância que o profissional que vai atuar em um processo dessa natureza, domine tanto o direito do trabalho
              como a responsabilidade civil, a fim de resguardar o cliente dos nuances de cada uma das áreas.
            </p>
          </div>
          <h2 className="section__title">
            Demissão por justa causa
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              A demissão por jusga causa é o meio pelo qual o empregador demite o empregado por alguma falta grave por ele cometida. Tal tipo de demissão
              se baseia na quebra de confiança e boa-fé, o que torna a relação empregatícia insustentável.
            </p>
            <p className="section__texto">
              São diversas as situações que podem provocar este tipo de demissão, todas muito bem especificadas em lei. É importante frisar que, exatamente
              por este motivo (previsão em lei), não pode o empregador criar novas formas de demissão por justa causa.

            </p>
            <p className="section__texto">
              Conforme o artigo 482 da CLT (Consolidação das Leis Trabalhistas), um empregado pode ser demitido por justa causa nas seguintes situações:
            </p>
            <ul className='section__lista'>
              <li>
                ato de improbidade;
              </li>
              <li>
                incontinência de conduta ou mau procedimento;
              </li>
              <li>
                negociação habitual por conta própria ou alheia sem permissão do empregador, e quando constituir ato de concorrência à empresa para a qual trabalha o empregado, ou for prejudicial ao serviço;
              </li>
              <li>
                condenação criminal do empregado, passada em julgado, caso não tenha havido suspensão da execução da pena;
              </li>
              <li>
                desídia no desempenho das respectivas funções;
              </li>
              <li>
                embriaguez habitual ou em serviço;
              </li>
              <li>
                violação de segredo da empresa;
              </li>
              <li>
                ato de indisciplina ou de insubordinação;
              </li>
              <li>
                abandono de emprego;
              </li>
              <li>
                ato lesivo da honra ou da boa fama praticado no serviço contra qualquer pessoa, ou ofensas físicas, nas mesmas condições, salvo em caso de legítima defesa, própria ou de outrem;
              </li>
              <li>
                ato lesivo da honra ou da boa fama ou ofensas físicas praticadas contra o empregador e superiores hierárquicos, salvo em caso de legítima defesa, própria ou de outrem;
              </li>
              <li>
                prática constante de jogos de azar.
              </li>
              <li>
                perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado.
              </li>
            </ul>
          </div>
          <h2 className="section__title">
            Adicional de periculosidade e insalubridade
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              A saúde do trabalhador é preocupação primária das legislações trabalhistas, sobretudo da Constituição Federal,
              que estabeleceu diretrizes mínimas a serem implementadas para tal finalidade. Entre essas diretrizes, a CF de 1988 trouxe
              a obrigação do pagamento dos adicionais de insalubridade e periculosidade.
            </p>
            <p className="section__texto">
              O pagamento desses adicionais ao empregado depende da atividade que este exerce na empresa. O próprio Ministério do Trabalho e Emprego (MTE)
              elenca as atividades que são consideradas perigosas ou insalubres, e os limites de tolerância.
            </p>
            <p className="section__texto">
              De uma maneira geral, quando o trabalhador é exporto à agentes nocivos à sua saúde, deve receber adicional de insalubridade. E quando é exposto
              a algum perigo à sua integridade física, o adicional é de periculosidade.
            </p>
          </div>
          <h2 className="section__title">
            Rescisão indireta
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              A rescisão indireta é a justa causa do empregado. Ou seja: ocorre quando o empregador não cumpre com suas obrigações, ou impõe esforços que vão além
              das obrigações assumidas pelo empregado.
            </p>
            <p className="section__texto">
              Embora a lei não fixe situações objetivas, como ocorre no artigo 482 da CLT, existem algumas causas comuns para a rescisão indireta: recolhimento irregular
              do FGTS, atrasos no pagamento de salário, assédio, constrangimentos, exigência de atividades diversas do contrato, rigor excessivo no tratamento, etc.
            </p>
            <p className="section__texto">
              De uma maneira geral, quando o trabalhador é exporto à agentes nocivos à sua saúde, deve receber adicional de insalubridade. E quando é exposto
              a algum perigo à sua integridade física, o adicional é de periculosidade.
            </p>
          </div>
          <h2 className="section__title">
            Hora Extra
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              O direito a hora extra surge quando o empregado trabalha além da sua jornada normal. Quando isto ocorre, tem direito ao recebimento de sua remuneração normal
              com um acréscimo de 50%, no mínimo.
            </p>
            <p className="section__texto">
              Existem, porém, casos em que o empregado terá direito a receber horas extras mesmo sem extrapolado sua jornada normal. É o caso, por exemplo, da supressão do
              horário intrajornada, ou hora da refeição.
            </p>
          </div>
          <h2 className="section__title">
            Reconhecimento de vínculo
          </h2>
          <div className='d-flex flex-column gap-2'>
            <p className='section__texto'>
              No Brasil, o reconhecimento de vínculo talvez seja o tipo de ação mais corriqueiro na justiça do trabalho. Apesar de ter uma legislação trabalhista extremamente
              rigorosa e pouco amigável com o empresário, muitos ainda deixam de registrar seus empregados a fim de economizar com os encargos trabalhistas.
            </p>
            <p className="section__texto">
              Um dos meios mais utilizados, atualmente, é o da pejotização: impor ao empregado que abra uma empresa e emita nota fiscal para recebimento de seu salário. Nestes casos,
              o juiz trabalhista buscará averiguar se na prática, este empregado era de fato um autônomo ou se era um empregado disfarçado.
            </p>
            <p className="section__texto">
              É evidente que os custos desses encargos são extremamente elevados, todavia, o caminho da informalidade de longe é o mais custoso. Defendemos a construçãod e uma jurisprudência
              que caminhe no sentido de reconhecer a autonomia dos empregados mais esclarecidos ao fixarem as regras de seu contrato, mas não recomendamos em hipótese alguma a mascaração do vínculo
              empregatício.
            </p>
            <p className="section__texto">
              Existem diversas maneiras jurídicas, dentro da legalidade, de diminuir os custos trabalhistas, e uma consultoria de nossa equipe pode ajudar sua empresa.
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


export default Trabalhista;