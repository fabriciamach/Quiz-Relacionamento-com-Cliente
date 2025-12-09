import '../Styles/QuizData.css';

export const quizQuestions = [
    {
        id: 1,
        question: "Qual é a definição mais abrangente de CRM segundo o material?",
        options: [
            { id: 'A', text: "Um software de armazenamento de dados instalado pelo TI.", isCorrect: false, feedback: "CRM não é apenas tecnologia; é uma estratégia. A tecnologia é apenas um meio." },
            { id: 'B', text: "Um departamento focado apenas em atender reclamações (Call Center).", isCorrect: false, feedback: "O Call Center (CCC) foca no atendimento, enquanto o CRM envolve toda a empresa." },
            { id: 'C', text: "Uma estratégia de negócio para entender e antecipar necessidades dos clientes.", isCorrect: true, feedback: "Parabéns! O CRM é, acima de tudo, uma estratégia focada no cliente." },
            { id: 'D', text: "Um sistema de gestão empresarial focado em processos internos (ERP).", isCorrect: false, feedback: "O ERP foca em fatores internos (recursos), já o CRM foca no cliente e fatores externos." },
        ],
    },
    {
        id: 2,
        question: "Quais são os 4 passos básicos para implementação do Marketing One-to-One?",
        options: [
            { id: 'A', text: "Identificar, Diferenciar, Interagir e Personalizar.", isCorrect: true, feedback: "Exato! Estes são os pilares da criação de relacionamento individualizado." },
            { id: 'B', text: "Planejar, Executar, Verificar e Agir.", isCorrect: false, feedback: "Esta é a metodologia de ciclo PDCA da qualidade, não de CRM." },
            { id: 'C', text: "Atrair, Converter, Vender e Encantar.", isCorrect: false, feedback: "Esta é a metodologia de Inbound Marketing." },
            { id: 'D', text: "Analisar, Processar, Arquivar e Deletar.", isCorrect: false, feedback: "O objetivo do CRM é criar relacionamento e memória, não 'deletar' ou apenas 'arquivar'." },
        ],
    },
    {
        id: 3,
        question: "O que caracteriza o 'CRM Operacional'?",
        options: [
            { id: 'A', text: "A análise de lucros e perdas no Back Office.", isCorrect: false, feedback: "Estudar dados e lucros é função do CRM Analítico." },
            { id: 'B', text: "A ação no 'Front Office' (vendas, suporte e automação de marketing).", isCorrect: true, feedback: "Correto! O CRM Operacional é a parte da ação e execução." },
            { id: 'C', text: "A integração entre departamentos diferentes.", isCorrect: false, feedback: "Integrar equipes é função do CRM Colaborativo." },
            { id: 'D', text: "A análise da concorrência e mercado.", isCorrect: false, feedback: "Analisar concorrência é função do CRM Estratégico." },
        ],
    },
    {
        id: 4,
        question: "Qual a principal função do 'CRM Analítico'?",
        options: [
            { id: 'A', text: "Atender o telefone e registrar pedidos.", isCorrect: false, feedback: "O atendimento direto é parte do CRM Operacional." },
            { id: 'B', text: "Estudar dados para desenhar a persona e analisar investimentos.", isCorrect: true, feedback: "Certo! O CRM Analítico transforma dados brutos em inteligência de negócio." },
            { id: 'C', text: "Enviar e-mails automáticos para clientes.", isCorrect: false, feedback: "A automação de envio é uma ação do CRM Operacional." },
            { id: 'D', text: "Instalar o servidor físico na empresa.", isCorrect: false, feedback: "Instalação física refere-se ao tipo de hospedagem (CRM Local)." },
        ],
    },
    {
        id: 5,
        question: "O que define o Valor Vitalício (LTV) de um cliente?",
        options: [
            { id: 'A', text: "O valor da última compra realizada.", isCorrect: false, feedback: "Olhar apenas a última compra ignora o histórico de relacionamento." },
            { id: 'B', text: "A receita total, sem descontar os custos.", isCorrect: false, feedback: "A receita sozinha não é adequada; deve-se olhar a lucratividade (lucro)." },
            { id: 'C', text: "O lucro que o cliente gera em toda sua história com a empresa.", isCorrect: true, feedback: "Exato! O LTV mede o lucro total esperado ao longo de todo o relacionamento." },
            { id: 'D', text: "O valor que a empresa gasta para adquirir o cliente (CAC).", isCorrect: false, feedback: "Isso é o Custo de Aquisição (CAC), o oposto do valor gerado pelo cliente." },
        ],
    },
    {
        id: 6,
        question: "Quem são os clientes classificados como 'BZs' (Below Zeros)?",
        options: [
            { id: 'A', text: "Clientes novos que ainda não compraram.", isCorrect: false, feedback: "Estes são 'Prospects' (Potenciais), não BZs." },
            { id: 'B', text: "Clientes VIPs que compram muito.", isCorrect: false, feedback: "Clientes VIPs são chamados de CMV (Clientes de Maior Valor)." },
            { id: 'C', text: "Clientes que dão prejuízo financeiro para a empresa.", isCorrect: true, feedback: "Correto! BZ representa clientes que custam mais do que geram em lucro." },
            { id: 'D', text: "Clientes que reclamam nas redes sociais.", isCorrect: false, feedback: "Reclamar não define prejuízo; um cliente que reclama pode ser lucrativo se comprar muito." },
        ],
    },
    {
        id: 7,
        question: "Qual a ação recomendada para lidar com clientes 'BZ' (que dão prejuízo)?",
        options: [
            { id: 'A', text: "Cobrar o valor real dos serviços e tirá-los de listas de marketing.", isCorrect: true, feedback: "Esta é a melhor estratégia: reduzir custos e garantir que eles paguem o valor justo para sair do prejuízo." },
            { id: 'B', text: "Deletar o nome deles do banco de dados imediatamente.", isCorrect: false, feedback: "Não se deve eliminar o nome do banco de dados, para evitar recapturá-los por engano." },
            { id: 'C', text: "Oferecer brindes e descontos para agradá-los.", isCorrect: false, feedback: "Dar brindes aumentaria o custo e o prejuízo com esse cliente." },
            { id: 'D', text: "Tratá-los igual aos clientes VIPs.", isCorrect: false, feedback: "Tratar todos igual é o oposto da estratégia One-to-One ('tratar clientes diferentes de forma diferente')." },
        ],
    },
    {
        id: 8,
        question: "Para que serve o 'CRM Colaborativo'?",
        options: [
            { id: 'A', text: "Para espionar a concorrência.", isCorrect: false, feedback: "Espionagem ou análise de mercado é CRM Estratégico." },
            { id: 'B', text: "Para instalar o software na nuvem.", isCorrect: false, feedback: "Isso se refere a 'CRM na Nuvem' (tecnologia), não ao tipo colaborativo." },
            { id: 'C', text: "Para integrar Marketing, Vendas e SAC no compartilhamento de informações.", isCorrect: true, feedback: "Perfeito! A colaboração entre áreas é o foco principal deste tipo de CRM." },
            { id: 'D', text: "Para o cliente se autoatender sozinho.", isCorrect: false, feedback: "Autoatendimento é uma tática, não a definição de colaboração entre áreas internas." },
        ],
    },
    {
        id: 9,
        question: "Qual é uma regra de ouro na etapa de 'Interação' com o cliente?",
        options: [
            { id: 'A', text: "Perguntar sempre os mesmos dados para confirmar.", isCorrect: false, feedback: "Pedir o que já se sabe irrita o cliente e mostra desorganização." },
            { id: 'B', text: "Não pedir informações que a empresa já tem.", isCorrect: true, feedback: "Correto! Evitar retrabalho e mostrar que a empresa 'tem memória' melhora a experiência." },
            { id: 'C', text: "Ligar a qualquer horário para vender.", isCorrect: false, feedback: "Deve-se ser sensível ao tempo do cliente e perguntar 'quando' ele quer ser contatado." },
            { id: 'D', text: "Começar a conversa do zero a cada contato.", isCorrect: false, feedback: "A conversa deve continuar de onde a última terminou, independente do canal." },
        ],
    },
    {
        id: 10,
        question: "Qual a diferença entre 'Satisfazer' e 'Encantar' o cliente?",
        options: [
            { id: 'A', text: "Nenhuma, são sinônimos.", isCorrect: false, feedback: "Satisfazer é o básico (normal); Encantar é o diferencial." },
            { id: 'B', text: "Satisfazer é dar desconto; Encantar é dar brinde.", isCorrect: false, feedback: "O encantamento vem da atitude e serviço, não necessariamente de brindes financeiros." },
            { id: 'C', text: "Satisfazer é atingir o padrão; Encantar é fazer 'aquele algo mais'.", isCorrect: true, feedback: "Exato! Encantar é superar as expectativas do cliente." },
            { id: 'D', text: "Só é possível encantar clientes antigos.", isCorrect: false, feedback: "O encantamento deve ser buscado em qualquer etapa do relacionamento." },
        ],
    },
];