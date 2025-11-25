import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

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

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>Cookies são pequenos arquivos de texto enviados e armazenados no seu navegador quando você visita um site. Eles permitem reconhecer seu dispositivo, armazenar preferências e melhorar a usabilidade da sua navegação.</p>
                
                <h2>2. Como usamos os cookies?</h2>
                <p>O site da <strong>adm-academia</strong> utiliza cookies para oferecer uma melhor experiência de navegação, entender como nossos visitantes interagem com nossos conteúdos e aprimorar constantemente nossos serviços e campanhas, especialmente durante a ação <strong>BLACK FRIDAY LENDÁRIA</strong>.</p>

                <h2>3. Tipos de Cookies que Usamos</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Necessários para que o site funcione corretamente, permitindo o acesso a áreas seguras e operações básicas.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações estatísticas sobre o uso do site, como páginas mais visitadas e tempo médio de navegação, ajudando-nos a entender o comportamento dos visitantes.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site memorize suas preferências (como idioma e configurações de exibição), proporcionando uma experiência personalizada.</li>
                    <li><strong>Cookies de Marketing e Publicidade:</strong> Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas, inclusive de tráfego pago direcionado à nossa landing page de vendas.</li>
                </ul>

                <h2>4. Gerenciamento de Cookies</h2>
                <p>Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador. Lembre-se de que a remoção ou bloqueio de determinados cookies pode afetar o funcionamento e desempenho do site.</p>

                <h2>5. Consentimento</h2>
                <p>Ao acessar e navegar pelo site <em>adm-academia.valoresdigitais.com</em>, você concorda com o uso dos cookies conforme esta Política. Após aceitar o aviso de cookies exibido no rodapé, sua preferência será salva enquanto o cookie de consentimento estiver ativo.</p>

                <h2>6. Alterações nesta Política</h2>
                <p>Poderemos atualizar esta Política de Cookies periodicamente para refletir mudanças tecnológicas, legais ou operacionais. A data da última atualização estará sempre informada no início desta página.</p>

                <h2>7. Contato</h2>
                <p>Em caso de dúvidas sobre esta política ou sobre o uso de seus dados, entre em contato com nossa equipe pelo e-mail: <a href="mailto:suporte@valoresdigitais.com">suporte@valoresdigitais.com</a>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
