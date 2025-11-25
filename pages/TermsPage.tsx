
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


const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso" lastUpdated="1 de Novembro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>
                Ao acessar ou utilizar o site adm-academia.valoresdigitais.com, o usuário declara que leu, compreendeu e 
                concorda integralmente com estes Termos de Uso, bem como com nossa Política de Privacidade. Caso não 
                concorde com qualquer das condições aqui descritas, o usuário deve se abster de utilizar este site e seus serviços.
            </p>

            <h2>2. Objeto do Serviço</h2>
            <p>
                O site oferece acesso à plataforma “Comunidade Lendár[IA]”, com conteúdos educacionais, mentorias e cursos voltados à 
                aplicação de Inteligência Artificial em negócios, conforme descrito nas páginas de oferta e materiais oficiais da marca Alan Nicolas.
            </p>

            <h2>3. Cadastro e Acesso</h2>
            <p>
                Para usufruir dos serviços, o usuário poderá criar uma conta fornecendo informações verídicas e atualizadas. 
                O usuário é responsável pela confidencialidade de suas credenciais de acesso, 
                bem como por todas as atividades realizadas sob sua conta.
            </p>

            <h2>4. Direitos do Usuário</h2>
            <p>
                O usuário tem direito ao acesso vitalício conforme os planos adquiridos durante a campanha promocional “BLACK FRIDAY LENDÁRIA”. 
                O conteúdo poderá ser atualizado, ampliado ou modificado sem aviso prévio para aprimorar a experiência e o valor entregue.
            </p>

            <h2>5. Garantias e Reembolsos</h2>
            <p>
                O site oferece uma garantia incondicional de 7 dias para reembolso completo em caso de insatisfação, conforme previsto pelo Código de Defesa do Consumidor. 
                Após este prazo, não serão aceitas solicitações de devolução.
            </p>

            <h2>6. Uso Permitido</h2>
            <p>
                É expressamente proibida a reprodução, distribuição, revenda ou disponibilização não autorizada dos conteúdos oferecidos 
                na plataforma, sob pena de responsabilização civil e criminal conforme a legislação brasileira.
            </p>

            <h2>7. Propriedade Intelectual</h2>
            <p>
                Todos os direitos autorais, marcas, logotipos, design e demais elementos pertencem à Alan Nicolas e à equipe da Comunidade Lendár[IA]. 
                Nenhum conteúdo poderá ser copiado, reproduzido ou distribuído sem autorização expressa por escrito.
            </p>

            <h2>8. Limitação de Responsabilidade</h2>
            <p>
                A adm-academia.valoresdigitais.com não se responsabiliza por perdas, danos ou prejuízos resultantes de 
                uso inadequado dos conteúdos, falhas de conexão, interrupções do serviço ou eventos fora de seu controle.
            </p>

            <h2>9. Alterações dos Termos</h2>
            <p>
                Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, publicando 
                a nova versão no site com a data de atualização correspondente. 
                O uso contínuo dos serviços após as alterações implica a aceitação dos novos termos.
            </p>

            <h2>10. Disposições Gerais</h2>
            <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer controvérsia será dirimida no foro da comarca de São Paulo/SP, 
                renunciando as partes a qualquer outro, por mais privilegiado que seja.
            </p>

            <p>
                Caso tenha dúvidas sobre estes Termos de Uso, entre em contato com nossa equipe 
                pelo e-mail: suporte@valoresdigitais.com.
            </p>
        </LegalPageLayout>
    );
};

export default TermsPage;
