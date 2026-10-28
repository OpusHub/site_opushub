import type { Metadata } from "next";
import Link from "next/link";
import { CompanyCard, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { company, legalUpdatedAt } from "@/lib/company";

export const metadata: Metadata = {
    title: "Política de Privacidade | Opus Hub",
    description:
        "Saiba como a Opus Hub trata dados pessoais, com quem compartilha, por quanto tempo guarda e como você pode exercer seus direitos pela LGPD.",
};

export default function PoliticaDePrivacidadePage() {
    const email = (
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>
    );

    return (
        <LegalPage title="Política de Privacidade" updatedAt={legalUpdatedAt}>
            <p className="text-base leading-relaxed text-white/80">
                Esta Política explica como a {company.tradeName} trata dados pessoais de quem visita o site, de quem pede
                uma demonstração e de quem contrata nossos serviços, de acordo com a Lei Geral de Proteção de Dados
                (LGPD, Lei nº 13.709/2018). Escrevemos em linguagem simples de propósito. Se algo não ficar claro, fale
                com a gente.
            </p>

            <LegalSection title="1. Quem é o responsável pelos seus dados">
                <p>
                    O responsável pelo tratamento dos dados coletados neste site é a <strong>{company.legalName}</strong>,
                    inscrita no CNPJ sob o nº <strong>{company.cnpj}</strong>, com sede na {company.address}.
                </p>
                <CompanyCard />
                <p>Este também é o nosso canal para assuntos de privacidade e de proteção de dados.</p>
            </LegalSection>

            <LegalSection title="2. Quais dados tratamos">
                <ul>
                    <li>
                        <strong>Dados do formulário de demonstração:</strong> nome completo, WhatsApp, e-mail
                        corporativo, nome da empresa, mercado em que atua, faixa de faturamento mensal e volume de
                        atendimentos ou leads por mês. Se você escolher “Outro” no campo de mercado, também o nicho
                        que descrever.
                    </li>
                    <li>
                        <strong>Dados de navegação:</strong> informações técnicas enviadas automaticamente pelo seu
                        navegador, como endereço IP, tipo de navegador e de dispositivo, páginas acessadas e data e
                        hora do acesso. Esses registros ficam com o provedor de hospedagem do site.
                    </li>
                    <li>
                        <strong>Dados de contratação:</strong> se você contratar, os dados cadastrais da empresa e de
                        quem a representa, dados de contato e as informações necessárias para cobrança e emissão de
                        documentos fiscais.
                    </li>
                    <li>
                        <strong>Dados de pagamento:</strong> a cobrança é feita por um gateway de pagamento de
                        terceiros. A {company.tradeName} não tem acesso aos dados do seu cartão, que são tratados pelo
                        gateway conforme a política de privacidade dele.
                    </li>
                </ul>
                <p>
                    Não pedimos dados pessoais sensíveis (como saúde, religião ou opinião política) em nenhum
                    formulário do site.
                </p>
            </LegalSection>

            <LegalSection title="3. Para que usamos seus dados">
                <ul>
                    <li>
                        Responder ao seu pedido de demonstração, falar com você por WhatsApp, e-mail ou videochamada e
                        preparar o diagnóstico do seu cenário. <strong>Base legal:</strong> procedimentos preliminares
                        de um contrato, a pedido do titular (LGPD, art. 7º, V).
                    </li>
                    <li>
                        Elaborar a proposta, contratar, cobrar, prestar os serviços e dar suporte.{" "}
                        <strong>Base legal:</strong> execução de contrato (art. 7º, V).
                    </li>
                    <li>
                        Emitir notas fiscais, guardar documentos e cumprir outras obrigações legais.{" "}
                        <strong>Base legal:</strong> cumprimento de obrigação legal ou regulatória (art. 7º, II).
                    </li>
                    <li>
                        Manter o site seguro, prevenir fraudes e abusos e melhorar nossos serviços.{" "}
                        <strong>Base legal:</strong> legítimo interesse (art. 7º, IX), sempre respeitando os seus
                        direitos.
                    </li>
                    <li>
                        Defender nossos direitos em processos judiciais, administrativos ou arbitrais.{" "}
                        <strong>Base legal:</strong> exercício regular de direitos (art. 7º, VI).
                    </li>
                </ul>
                <p>Não vendemos nem alugamos seus dados pessoais.</p>
            </LegalSection>

            <LegalSection title="4. Quando prestamos o serviço a um cliente">
                <p>
                    Quando operamos os agentes de IA no atendimento e no comercial de um cliente, tratamos também dados
                    das pessoas que conversam com a empresa dele. Nesse caso, a empresa contratante decide como esses
                    dados são usados, e a {company.tradeName} os trata em nome dela, seguindo o contrato e as
                    instruções recebidas.
                </p>
                <p>
                    Se você é cliente de uma empresa que usa a {company.tradeName} e quer exercer seus direitos,
                    procure primeiro essa empresa. Podemos ajudá-la a atender o seu pedido.
                </p>
            </LegalSection>

            <LegalSection title="5. Com quem compartilhamos seus dados">
                <p>Compartilhamos dados apenas quando isso é necessário para o site e os serviços funcionarem:</p>
                <ul>
                    <li>
                        <strong>FormSubmit (formsubmit.co):</strong> serviço que recebe o que você preenche no
                        formulário de demonstração e o encaminha por e-mail para a nossa equipe.
                    </li>
                    <li>
                        <strong>Vercel Inc.:</strong> empresa que hospeda o site e, por isso, recebe os registros
                        técnicos de acesso.
                    </li>
                    <li>
                        <strong>YouTube (Google):</strong> o site exibe um vídeo do YouTube. A imagem de capa é
                        carregada dos servidores do Google e, se você clicar para assistir, o player do YouTube também
                        é carregado. Nesses momentos o Google pode receber dados como o seu endereço IP e usar cookies,
                        conforme a política de privacidade dele.
                    </li>
                    <li>
                        <strong>Gateway de pagamento:</strong> empresa de terceiros que processa a cobrança no cartão
                        de crédito. Se você contratar e pagar com cartão, ela recebe os dados necessários para fazer a
                        cobrança e passa a tratá-los conforme a política de privacidade dela.
                    </li>
                    <li>
                        <strong>Autoridades públicas:</strong> quando a lei ou uma decisão judicial exigir.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="6. Transferência para fora do Brasil">
                <p>
                    Alguns desses provedores (como Vercel, FormSubmit e Google) podem tratar dados em servidores fora
                    do Brasil, inclusive nos Estados Unidos. Isso é feito nas hipóteses permitidas pelo art. 33 da
                    LGPD, por exemplo quando o provedor oferece garantias de cumprimento dos princípios e dos direitos
                    previstos na lei.
                </p>
            </LegalSection>

            <LegalSection title="7. Cookies">
                <p>
                    O site não usa cookies de publicidade nem ferramentas de análise de audiência ou de rastreamento. Ao
                    clicar para assistir ao vídeo do YouTube, o próprio YouTube pode usar cookies, conforme a política
                    dele. Se passarmos a usar ferramentas de análise ou de publicidade, vamos atualizar esta Política e
                    pedir o seu consentimento quando a lei exigir.
                </p>
            </LegalSection>

            <LegalSection title="8. Por quanto tempo guardamos seus dados">
                <ul>
                    <li>
                        <strong>Pedidos de demonstração que não viraram contrato:</strong> pelo tempo necessário para o
                        contato comercial, ou até você pedir a exclusão.
                    </li>
                    <li>
                        <strong>Contratos, cobranças e documentos fiscais:</strong> pelos prazos exigidos pela
                        legislação fiscal, contábil e civil.
                    </li>
                    <li>
                        <strong>Registros técnicos de acesso:</strong> pelo prazo definido pelo provedor de hospedagem
                        e pela legislação aplicável.
                    </li>
                </ul>
                <p>Depois disso, eliminamos os dados ou os tornamos anônimos, salvo quando a lei permitir guardá-los.</p>
            </LegalSection>

            <LegalSection title="9. Seus direitos">
                <p>A LGPD garante a você, entre outros, o direito de:</p>
                <ul>
                    <li>confirmar se tratamos seus dados e ter acesso a eles;</li>
                    <li>corrigir dados incompletos, errados ou desatualizados;</li>
                    <li>
                        pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados
                        em desacordo com a lei;
                    </li>
                    <li>pedir a portabilidade dos seus dados;</li>
                    <li>pedir a eliminação dos dados tratados com base no seu consentimento;</li>
                    <li>saber com quem compartilhamos seus dados;</li>
                    <li>saber que você pode não dar consentimento e quais são as consequências disso;</li>
                    <li>revogar o consentimento, quando essa for a base legal do tratamento;</li>
                    <li>se opor a um tratamento feito sem a base legal adequada.</li>
                </ul>
                <p>
                    Para exercer qualquer um desses direitos, escreva para {email}. Podemos pedir informações para
                    confirmar a sua identidade. Responderemos dentro dos prazos da LGPD. Você também pode reclamar à
                    Autoridade Nacional de Proteção de Dados (ANPD), em{" "}
                    <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
                        gov.br/anpd
                    </a>
                    .
                </p>
            </LegalSection>

            <LegalSection title="10. Segurança">
                <p>
                    Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado,
                    perda e uso indevido. O site usa conexão criptografada (HTTPS). Nenhum sistema é totalmente livre
                    de riscos. Se houver um incidente que possa causar risco relevante a você, vamos comunicar você e a
                    ANPD, como a lei determina.
                </p>
            </LegalSection>

            <LegalSection title="11. Crianças e adolescentes">
                <p>
                    O site e os serviços são voltados a empresas e a pessoas maiores de 18 anos. Não coletamos dados de
                    crianças e adolescentes de propósito. Se você acredita que isso aconteceu, avise para eliminarmos.
                </p>
            </LegalSection>

            <LegalSection title="12. Mudanças nesta Política">
                <p>
                    Podemos atualizar esta Política a qualquer momento. A versão em vigor é a publicada nesta página,
                    com a data da última atualização no topo. As regras de contratação e de reembolso estão nos nossos{" "}
                    <Link href="/termos-de-uso">Termos de Uso</Link>.
                </p>
            </LegalSection>

            <LegalSection title="13. Fale com a gente">
                <p>Dúvidas ou pedidos sobre privacidade: escreva para {email}.</p>
            </LegalSection>
        </LegalPage>
    );
}
