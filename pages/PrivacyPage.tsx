import React from 'react';

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Novembro de 2024">
            <h2>1. Introdução</h2>
            <p>
                Bem-vindo à <strong>adm-academia.valoresdigitais.com</strong>. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as informações pessoais de nossos usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>

            <h2>2. Coleta de Dados</h2>
            <p>
                Coletamos dados pessoais quando você visita nosso site, se inscreve em nossas ofertas, adquire produtos ou interage com nossos conteúdos. Os tipos de dados coletados incluem:
            </p>
            <ul>
                <li>Nome completo;</li>
                <li>Endereço de e-mail e telefone;</li>
                <li>Informações de pagamento (processadas por plataformas seguras de checkout);</li>
                <li>Dados de navegação e interação com o site (cookies e analytics).</li>
            </ul>

            <h2>3. Uso das Informações</h2>
            <p>
                Utilizamos seus dados para:
            </p>
            <ul>
                <li>Processar compras e liberar acessos aos cursos;</li>
                <li>Enviar comunicações promocionais sobre a “BLACK FRIDAY LENDÁRIA” e outras campanhas;</li>
                <li>Melhorar nossos serviços e personalizar sua experiência;</li>
                <li>Cumprir obrigações legais e contratuais.</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
                Seus dados não são vendidos nem alugados. Podemos compartilhá-los apenas com parceiros estritamente necessários para processamento de pagamentos, hospedagem, plataformas de automação de marketing e suporte técnico, sempre sob cláusulas de confidencialidade.
            </p>

            <h2>5. Segurança</h2>
            <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger as informações de acessos não autorizados, perda, alteração ou divulgação indevida. O acesso aos dados é restrito a colaboradores devidamente autorizados.
            </p>

            <h2>6. Direitos do Usuário</h2>
            <p>
                De acordo com a LGPD, você tem direito de:
            </p>
            <ul>
                <li>Acessar e corrigir seus dados pessoais;</li>
                <li>Solicitar exclusão ou anonimização dos dados;</li>
                <li>Revogar consentimentos a qualquer momento;</li>
                <li>Solicitar portabilidade das informações.</li>
            </ul>

            <h2>7. Retenção e Exclusão de Dados</h2>
            <p>
                Os dados são mantidos enquanto necessários para cumprimento de fins contratuais, legais e regulatórios. Após este período, são anonimizados ou excluídos de forma segura.
            </p>

            <h2>8. Cookies e Tecnologias de Rastreamento</h2>
            <p>
                Utilizamos cookies para entender o comportamento de navegação, otimizar campanhas e melhorar a experiência do usuário. Você pode gerenciar suas preferências de cookies diretamente no navegador.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente. A data de última atualização será sempre informada no topo desta página.
            </p>

            <h2>10. Contato</h2>
            <p>
                Em caso de dúvidas ou solicitações relacionadas à proteção de dados, entre em contato com nosso time de privacidade por meio do e-mail: <a href="mailto:suporte@valoresdigitais.com">suporte@valoresdigitais.com</a>.
            </p>

            <p>
                Ao utilizar este site, você declara ter lido, compreendido e concordado com os termos desta Política de Privacidade.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
