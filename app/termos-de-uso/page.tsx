import type { Metadata } from "next";
import Link from "next/link";
import { CompanyCard, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { company, legalUpdatedAt } from "@/lib/company";

export const metadata: Metadata = {
    title: "Termos de Uso | Opus Hub",
    description:
        "Termos de uso do site e dos serviços da Opus Hub: contratação, tipo de cobrança (única ou recorrente) e política de arrependimento e reembolso de 7 dias.",
};

export default function TermosDeUsoPage() {
    const email = (
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>
    );

    return (
        <LegalPage title="Termos de Uso" updatedAt={legalUpdatedAt}>
            <p className="text-base leading-relaxed text-white/80">
                Estes Termos de Uso explicam as regras para usar o site {company.siteHost} e para contratar os
                serviços da {company.tradeName}. Ao usar o site ou contratar nossos serviços, você declara que leu e
                concorda com estas regras.
            </p>

            <aside className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 space-y-3">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Em resumo</p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-white/80">
                    <li>
                        <strong className="text-white">Quem somos:</strong> {company.legalName}, CNPJ {company.cnpj}{" "}
                        (<a href="#quem-somos" className="text-primary underline underline-offset-4">seção&nbsp;1</a>).
                    </li>
                    <li>
                        <strong className="text-white">Tipo de cobrança:</strong> única (plano anual, contrato de 12
                        meses) ou recorrente (plano mensal, que você pode cancelar a qualquer momento), conforme a
                        proposta que você aceitar (
                        <a href="#cobranca" className="text-primary underline underline-offset-4">seção&nbsp;5</a>).
                    </li>
                    <li>
                        <strong className="text-white">Arrependimento:</strong> você pode desistir em até 7 dias e
                        receber todo o valor pago de volta (
                        <a href="#arrependimento" className="text-primary underline underline-offset-4">seção&nbsp;6</a>).
                    </li>
                </ul>
            </aside>

            <LegalSection id="quem-somos" title="1. Quem somos">
                <p>
                    Este site e os serviços descritos nele são oferecidos pela <strong>{company.legalName}</strong>,
                    sociedade empresária limitada inscrita no CNPJ sob o nº <strong>{company.cnpj}</strong>, com sede
                    na {company.address} (neste documento, “{company.tradeName}” ou “nós”).
                </p>
                <CompanyCard />
            </LegalSection>

            <LegalSection title="2. O que a Opus Hub oferece">
                <p>
                    A {company.tradeName} é um ecossistema de agentes de inteligência artificial para o atendimento e o
                    comercial de empresas, que funciona 24 horas por dia e gera dados sobre a operação do cliente. A
                    implantação é feita pelo nosso time. O prazo informado no site é de 7 a 14 dias, contados do
                    contrato até a operação em funcionamento.
                </p>
                <p>
                    O escopo, as funcionalidades, o prazo e o valor de cada contratação constam da proposta comercial.
                </p>
                <p>A demonstração e o diagnóstico do seu cenário são gratuitos e não obrigam você a contratar.</p>
            </LegalSection>

            <LegalSection title="3. Uso do site">
                <p>Ao usar o site, você se compromete a:</p>
                <ul>
                    <li>informar dados verdadeiros e atualizados nos formulários;</li>
                    <li>não usar o site para fins ilegais ou que prejudiquem outras pessoas;</li>
                    <li>
                        não tentar acessar áreas restritas, derrubar ou sobrecarregar o site, nem copiar o conteúdo
                        dele por meios automáticos (robôs, programas de coleta etc.).
                    </li>
                </ul>
                <p>Podemos limitar ou bloquear o acesso de quem descumprir estas regras.</p>
            </LegalSection>

            <LegalSection title="4. Como funciona a contratação">
                <p>
                    A contratação é feita depois da demonstração, por meio de uma proposta comercial e de um contrato
                    (ou do aceite eletrônico da proposta). Neles constam o que será entregue, o valor, a forma de
                    pagamento, o tipo de cobrança e o prazo do contrato.
                </p>
                <p>
                    Os valores são informados na proposta, antes da contratação. Nenhuma cobrança é feita sem que você
                    tenha recebido e aceitado a proposta.
                </p>
            </LegalSection>

            <LegalSection id="cobranca" title="5. Pagamento e tipo de cobrança">
                <p>
                    O pagamento é feito por cartão de crédito ou por outra forma indicada na proposta. A {company.tradeName}{" "}
                    trabalha com dois tipos de cobrança. Qual deles vale para o seu contrato está escrito na proposta
                    que você aceita e é confirmado antes do primeiro pagamento.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-2">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary">Cobrança única</p>
                        <p className="text-white font-semibold">Plano anual (contrato de 12 meses)</p>
                        <p className="text-sm leading-relaxed">
                            O valor correspondente aos 12 meses do contrato é cobrado de uma só vez. Não há outras
                            cobranças automáticas durante o período contratado.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-2">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary">Cobrança recorrente</p>
                        <p className="text-white font-semibold">Plano mensal (cancelamento a qualquer momento)</p>
                        <p className="text-sm leading-relaxed">
                            O valor é cobrado todo mês, de forma automática, no cartão de crédito informado por você. Ao
                            aceitar a proposta, você autoriza essas cobranças mensais, que continuam todo mês até você
                            pedir o cancelamento. Você pode cancelar a qualquer momento.
                        </p>
                    </div>
                </div>

                <p>Em qualquer um dos dois tipos:</p>
                <ul>
                    <li>
                        a cobrança é feita por um gateway de pagamento de terceiros, e os dados do seu cartão são
                        informados diretamente no ambiente dele. A {company.tradeName} não tem acesso aos dados do
                        seu cartão. O gateway nos informa o resultado da cobrança (por exemplo, aprovada ou
                        recusada);
                    </li>
                    <li>
                        se uma cobrança for recusada pela administradora do cartão, entraremos em contato para
                        regularizar o pagamento. As consequências de um atraso estão previstas no contrato;
                    </li>
                    <li>
                        nos primeiros 7 dias você pode desistir e receber tudo de volta (veja a seção&nbsp;6).
                    </li>
                </ul>

                <p>
                    <strong>Como cancelar o plano mensal:</strong> você pode cancelar a qualquer momento, escrevendo
                    para {email}. Depois que confirmarmos o cancelamento, não haverá novas cobranças. O plano anual
                    segue as condições do contrato de 12 meses.
                </p>
            </LegalSection>

            <LegalSection id="arrependimento" title="6. Direito de arrependimento e reembolso (7 dias)">
                <p>
                    Você pode desistir da contratação em até <strong>7 (sete) dias corridos</strong>, contados da
                    assinatura do contrato ou do aceite da proposta, sem precisar explicar o motivo. Esse direito
                    segue o art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990) e vale para qualquer cliente
                    da {company.tradeName}, tanto na cobrança única quanto na recorrente.
                </p>

                <p>
                    <strong>Como pedir:</strong> escreva para {email} dizendo que quer desistir e informe o nome da
                    empresa e o CNPJ (ou CPF) de quem contratou. Confirmaremos o recebimento do seu pedido.
                </p>

                <p>
                    <strong>Como funciona o reembolso:</strong>
                </p>
                <ul>
                    <li>devolvemos o valor total que você pagou, sem descontos e sem taxas;</li>
                    <li>
                        a devolução é feita pelo mesmo meio de pagamento. No cartão de crédito, solicitamos o estorno ao
                        gateway de pagamento imediatamente depois de confirmar a desistência. O valor pode aparecer na fatura
                        atual ou em até duas faturas seguintes, conforme o prazo da administradora do cartão;
                    </li>
                    <li>na cobrança recorrente, a desistência dentro do prazo também cancela as cobranças futuras.</li>
                </ul>

                <p>
                    Passados os 7 dias, o plano mensal pode ser cancelado a qualquer momento (veja a seção&nbsp;5) e o
                    cancelamento do plano anual segue as condições previstas no contrato. Esta política não reduz
                    outros direitos que a lei garante a você.
                </p>
            </LegalSection>

            <LegalSection title="7. Propriedade intelectual">
                <p>
                    A marca {company.tradeName}, o logotipo, os textos, as imagens e os demais conteúdos do site
                    pertencem à {company.legalName} ou a quem nos autorizou a usá-los, e são protegidos pela
                    legislação. Não é permitido copiar, modificar ou usar esses conteúdos sem a nossa autorização por
                    escrito.
                </p>
            </LegalSection>

            <LegalSection title="8. Responsabilidades">
                <ul>
                    <li>
                        Trabalhamos para manter o site no ar e atualizado, mas não garantimos que ele funcionará sem
                        interrupções ou erros.
                    </li>
                    <li>
                        Os casos e números mostrados no site (como economia e receita recuperada) são exemplos de casos
                        específicos e não prometem o mesmo resultado para outros negócios. As simulações de retorno
                        (ROI) feitas na demonstração são estimativas.
                    </li>
                    <li>
                        O site pode ter links para sites de terceiros (como YouTube, LinkedIn e Instagram). Não
                        controlamos esses sites e não respondemos pelo conteúdo ou pelas regras de privacidade deles.
                    </li>
                    <li>Nada neste documento exclui ou limita direitos que a lei garante ao cliente.</li>
                </ul>
            </LegalSection>

            <LegalSection title="9. Privacidade">
                <p>
                    Explicamos como tratamos dados pessoais na nossa{" "}
                    <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
                </p>
            </LegalSection>

            <LegalSection title="10. Mudanças nestes Termos">
                <p>
                    Podemos atualizar estes Termos a qualquer momento. A versão em vigor é a publicada nesta página, com
                    a data da última atualização no topo. Contratos já firmados continuam seguindo a proposta e o
                    contrato assinados.
                </p>
            </LegalSection>

            <LegalSection title="11. Lei aplicável e foro">
                <p>
                    Estes Termos seguem as leis do Brasil. Fica eleito o foro da comarca de Barueri/SP para resolver
                    eventuais conflitos, ressalvado o direito do consumidor de acionar a Justiça no foro do seu
                    domicílio, quando a lei assim garantir.
                </p>
            </LegalSection>

            <LegalSection title="12. Fale com a gente">
                <p>Dúvidas, pedidos de desistência ou de cancelamento: escreva para {email}.</p>
            </LegalSection>
        </LegalPage>
    );
}
