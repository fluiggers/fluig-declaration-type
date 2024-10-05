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

// Tipos disponíveis na função global getValue

type getValuePropertiesInteger =
    "WKNumState"
    | "WKNextState"
    | "WKNumProces"
    | "WKVersDef"
    | "WKCardId"
    | "maxResult"
    | "page"
;
type getValuePropertiesString =
    "WKUser"
    | "WKCompletTask"
    | "WKDef"
    | "WKFormId"
    | "WKIdentityCompany"
    | "WKReplacement"
    | "WKUserComment"
    | "WKUserLocale"
    | "order"
    | "taskType"
    | "taskUserId"
;
type getValuePropertiesBoolean =
    "WKIsTransfer"
    | "WKMobile"
    | "WKIsService"
    | "WKManagerMode"
    | "WKPrivateDocument"
;
type getValuePropertiesLong = "WKCompany";
type getValuePropertiesMapStringObject = "filter";
type getValuePropertiesDocumentDto = "WKDocument";
type getValuePropertiesDocumentEditDto = "WKDocumentEdit";
type getValuePropertiesListApproverDto = "WKListApprover";
type getValuePropertiesListDocumentSecurityConfigDto = "WKListSecurity";
type getValuePropertiesListRelatedDocumentDto = "WKListRelatedDocument";


/**
 * Pega o valor das propriedades do Processo.
 *
 * <strong>IMPORTANTE</strong>
 * Em eventos de formulários todos os valores de getValue são string,
 * então ao invés de comparar com true ou false deve-se comparar com "true" ou "false".
 *
 * Usar em eventos do processo e eventos de formulários de processo.
 * @see https://tdn.totvs.com/pages/releaseview.action?pageId=270919174
 *
 * Propriedades:
 * - WKCompany: Número da Empresa
 * - WKUser: Usuário Corrente
 * - WKNumState: Número da atividade
 * - WKNextState: Número da próxima atividade (destino)
 * - WKNumProces: Número do processo
 * - WKCardId: Código do registro de formulário do processo
 * - WKCompletTask: Indica se a tarefa foi completada (string "true" / "false")
 * - WKDef: Código do processo
 * - WKFormId: Código do formulário do processo
 * - WKIdentityCompany: Identificador da empresa selecionada para Experiências de uso TOTVS
 * - WKIsService: Identifica se a solicitação de cancelamento foi realizada através de um serviço. Esta variável só pode ser consultada nos eventos beforeCancelProcess e afterCancelProcess
 * - WKIsTransfer: Permite verificar se o usuário está ou não transferindo uma tarefa
 * - WKListApprover: Lista dos Aprovadores do documento
 * - WKListSecurity: Lista da Segurança do documento
 * - WKManagerMode: Identifica se o processo está sendo movimentado pela visão do gestor do processo ou não. Só funciona no Workflow
 * - WKMobile: Identifica se a ação foi realizada através de um dispositivo mobile
 * - WKPrivateDocument: Documento privado
 * - WKReplacement: Código do usuário substituto
 * - WKUserComment: Texto com as observações feitas pelos usuários na atividade corrente
 * - WKUserLocale: Identifica o idioma corrente do usuário
 * - WKVersDef: Versão do processo
 * - taskType: Indicador do tipo de tarefas que estão sendo exibidas, “open” tarefas a concluir e “requests” para minhas solicitações.
 * - taskUserId: Código do usuário substituído, em caso de visualização da central como substituto. Nos demais casos retorna o usuário logado.
 * - filter: Filtros utilizados
 * - maxResult: Número de resultados por página
 * - order: Ordenação aplicada
 * - page: Número da página atual
 */
declare function getValue(nomePropriedade: getValuePropertiesInteger): java.lang.Integer;
declare function getValue(nomePropriedade: getValuePropertiesLong): java.lang.Long;
declare function getValue(nomePropriedade: getValuePropertiesString): java.lang.String;
declare function getValue(nomePropriedade: getValuePropertiesBoolean): boolean;
declare function getValue(nomePropriedade: getValuePropertiesMapStringObject): java.util.Map<java.lang.String, java.lang.Object>;
declare function getValue(nomePropriedade: getValuePropertiesDocumentDto): DocumentDto;
declare function getValue(nomePropriedade: getValuePropertiesDocumentEditDto): WKDocumentEdit;
declare function getValue(nomePropriedade: getValuePropertiesListApproverDto): java.util.List<ApproverDto>;
declare function getValue(nomePropriedade: getValuePropertiesListDocumentSecurityConfigDto): java.util.List<DocumentSecurityConfigDto>;
declare function getValue(nomePropriedade: getValuePropertiesListRelatedDocumentDto): java.util.List<RelatedDocumentDto>;

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
    declare function getService(serviceId: string): ServiceInstantiate;
};

declare class ServiceInstantiate {
    /**
     * Pega o Helper para instanciar os objetos
     */
    getBean(): ServiceHelper;
}

/**
 * Classe para instanciar objetos do WS SOAP
 */
declare class ServiceHelper {
    /**
     * Instancia um objeto da classe indicada
     *
     * @param classPath Caminho da Classe
     *
     * @example
     * var serviceHelper = ServiceManager.getService("ECMCardService").getBean();
     * var cardDto = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardDto");
     */
    instantiate(classPath: string): object;

    /**
     * Instancia o serviço com autenticação Basic
     *
     * @param service Instância do serviço que será autenticado
     * @param classPath Caminho da Classe a ser instanciada
     * @param user Usuário da Autenticação
     * @param password Senha da Autenticação
     *
     * @example
     * var serviceHelper = ServiceManager
     *     .getService("RM_CONSULTA_SQL")
     *     .getBean()
     * ;
     *
     * var service = serviceHelper
     *     .instantiate("com.totvs.WsConsultaSQL")
     *     .getRMIwsConsultaSQL()
     * ;
     *
     * var serviceSqlAuthenticated = serviceHelper.getBasicAuthenticatedClient(
     *     service,
     *     "com.totvs.IwsConsultaSQL",
     *     "meuUsuário",
     *     "minhaSenha"
     * );
     */
    getBasicAuthenticatedClient(service: object, classPath: string, user: string, password: string): object;
}

/**
 * Métodos para aplicar internacionalização
 *
 * Páginas (Widgets e Layouts)
 * @see https://tdn.totvs.com/pages/releaseview.action?pageId=185738869
 *
 * Formulários
 * @see https://tdn.totvs.com/pages/releaseview.action?pageId=668197293
 *
 * Processos
 * @see https://tdn.totvs.com/pages/releaseview.action?pageId=160105353
 */
declare namespace i18n {
    /**
     * Pega a string correspondente para Formulário e Processos
     *
     * @param stringKey Chave da String no arquivo .properties com as traduções
     */
    declare function translate(stringKey: string): string;

    /**
     * Pega a string correspondente para Widgets e Layouts
     *
     * Ao utilizar no arquivo template (.ftl) é necessário aplicar o escape
     * para que o objeto de internacionalização seja chamado corretamente.
     *
     * @example
     * ${i18n.getTranslation("codigo_da_string")}
     *
     * @param stringKey Chave da String no arquivo .properties com as traduções
     */
    declare function getTranslation(stringKey: string): string;
}
