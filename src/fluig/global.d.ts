interface ErrorData {
    message?: string;
    responseText: object;
}

/**
 * Constantes globais para usar no HTML de Processo / Formulário.
 *
 * O arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
 */
declare namespace Global {
    /**
     * Último ID de um Filho (Cadastro Pai/Filho)
     *
     * Disponível quando o formulário possui um Pai/Filho padrão.
     */
    const newId: number;

    /**
     * Versão do Workflow.
     *
     * Só é preenchida em Processo
     */
    const WKVersDef: string;

    /**
     * ID da atividade atual do Workflow
     *
     * Só é preenchida em Processo
     */
    const WKNumState: string;
}

/**
 * Permite a passagem de parâmetros entre os eventos do Workflow
 */
declare namespace globalVars {

    /**
     * Insere um valor nos parâmetros gerais
     */
    declare function put(name: string, value: object): void;

    /**
     * Pega um valor dos parâmetros gerais
     */
    declare function get(name: string): object
};


/**
 * Pega o valor das propriedades do Processo.
 *
 * Usar em eventos do processo e eventos de formulários de processo.
 * @see https://tdn.totvs.com/pages/releaseview.action?pageId=270919174
 *
 * Propriedades:
 * - WKDef: Código do processo
 * - WKVersDef: Versão do processo
 * - WKNumProces: Número do processo
 * - WKNumState: Número da atividade
 * - WKCompany: Número da Empresa
 * - WKUser: Usuário Corrente
 * - WKUserComment: Texto com as observações feitas pelos usuários na atividade corrente
 * - WKCompletTask: Indica se a tarefa foi completada ("true" / "false")
 * - WKNextState: Número da próxima atividade (destino)
 * - WKCardId: Código do registro de formulário do processo
 * - WKFormId: Código do formulário do processo
 * - WKIdentityCompany: Identificador da empresa selecionada para Experiências de uso TOTVS
 * - WKMobile: Identifica se a ação foi realizada através de um dispositivo mobile
 * - WKIsService: Identifica se a solicitação de cancelamento foi realizada através de um serviço. Esta variável só pode ser consultada nos eventos beforeCancelProcess e afterCancelProcess
 * - WKUserLocale: Identifica o idioma corrente do usuário
 * - WKManagerMode: Identifica se o processo está sendo movimentado pela visão do gestor do processo ou não. Só funciona no Workflow
 * - WKReplacement: Código do usuário substituto
 * - WKIsTransfer: Permite verificar se o usuário está ou não transferindo uma tarefa
 * -
 */
declare function getValue(nomePropriedade: string): string;

/**
 * Funções para o envio de e-mail
 */
declare namespace notifier {

    /**
     * Envia um e-mail personalizado
     *
     * @example
     * var parameters = new java.util.HashMap();
     * parameters.put("subject", "Assunto");
     * parameters.put("NAME", "João");
     * parameters.put("CODE", "01");
     *
     * var users = new java.util.ArrayList();
     * users.add("adm");
     *
     * notifier.notify("adm", "mail1", parameters, users, "text/html");
     *
     * @param fromId Matrícula do usuário que está enviando o e-mail
     * @param templateId Código do template de e-mail
     * @param parameters java.util.HashMap<string, string> com os parâmetros do e-mail
     * @param to java.util.ArrayList<string> com os destinatários do e-mail
     * @param mimeType Tipo do conteúdo do e-mail. Pode ser text/html ou text/plain
     *
     */
    declare function notify(fromId: string, templateId: string, parameters: java.util.HashMap<string, string>, to: java.util.ArrayList<string>, mimeType: string): void;
};


/**
 * Funções para o uso dos serviços (Progress)
 *
 * Usar em qualquer evento.
 */
declare namespace ServiceManager {

    /**
     * Obtém o serviço especificado
     *
     * Normalmente utilizado para pegar o serviceHelper do serviço.
     *
     * @example
     * var service = ServiceManager.getService("ems2_v10");
     * var serviceHelper = service.getBean();
     */
    declare function getService(serviceId: string): object;
};
