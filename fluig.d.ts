declare namespace com.totvs.technology.foundation.sdk.service.vo.common {
    declare class OrderParam {}

    declare class ResponseEnvelopeVO<T> {
        getItems(): java.util.ArrayList<T>;
        setItems(items: java.util.ArrayList<T>);
        isHasNext(): boolean;
        setHasNext(hasNext: boolean);
        getTotal(): number;
        setTotal(total: number);
    }
}

/**
 * Tipos de campo de um Dataset
 *
 * Usado na criação do Dataset, na função defineStructure.
 */
enum DatasetFieldType {
    NUMBER,
    STRING,
    TEXT,
    DATE,
    BOOLEAN,
}

/**
 * Cria uma coluna no dataset sincronizado
 */
declare function addColumn(coluna: string, tipo?: DatasetFieldType);

 /**
  * Cria a chave principal do dataset sincronizado
  *
  * Para uso dos métodos updateRecord, deleteRecord e addOrUpdate do dataset sincronizado.
  */
declare function setKey(chaves: string[]): void;

 /**
  * Cria um ou mais índices para maior performance na consulta do dataset sincronizado
  */
declare function addIndex(indices: string[]): void;

/**
 * Tipos de Filtros (constraint)
 *
 * Usado para criar os filtros que serão repassados ao método getDataset.
 * Usar nos eventos do Fluig ou na criação de Dataset customizado.
 */
enum ConstraintType {
    /**
     * Filtro: Deve Conter
     *
     * Interprete como o E lógico
     */
    MUST,

    /**
     * Filtro: Pode Conter
     *
     * Interprete como OU lógico
     */
    SHOULD,

    /**
     * Filtro: Não Deve Conter
     */
    MUST_NOT,
}

declare class Dataset {
    const rowsCount: number;

    /**
     * Retorna o valor de uma coluna (campo) em determinada linha (índice)
     */
    getValue(linha: number, coluna: string): string;

    /**
     * Cria uma coluna no Dataset
     *
     * @example
     * var dataset = DatasetBuilder().newDataset();
     * dataset.addColumn("coluna1");
     * dataset.addColumn("coluna2");
     * dataset.addRow(["valor coluna 1", "valor coluna 2"]);
     */
    addColumn(coluna: string): void;

    /**
     * Adicionar uma linha ao Dataset
     *
     * @example
     * var dataset = DatasetBuilder().newDataset();
     * dataset.addColumn("coluna1");
     * dataset.addColumn("coluna2");
     * dataset.addRow(["valor coluna 1", "valor coluna 2"]);
     */
    addRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que será persistida no cache de sincronização.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.updateRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    updateRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que será persistida no cache de sincronização.
     *
     * Caso o registro não exista ele será criado na base, caso contrário será atualizado.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.addOrUpdateRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    addOrUpdateRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que eliminará esses registros no cache de sincronização.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.deleteRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    deleteRow(valores: string[]|object[]): void;
}

/**
 * Resultado de uma consulta ao Dataset usando o WCM
 *
 * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
 */
interface DatasetWcmResult {
    /**
     * O nome das colunas
     */
    columns: string[];

    /**
     * As propriedades do objeto são os nomes das colunas
     */
    values: object[];
}

/**
 * Indicativo das restrições ao sincronizar dados em Mobile
 */
interface DatasetMobileSync {
    /**
     * As colunas (em letras maiúsculas) a serem salvas no Mobile
     */
    fields: string[];

    /**
     * Os filtros adicionais
     */
    constraints: Constraint[];

    /**
     * Campos da ordenação
     */
    sortFields: string[];
}

/**
 * Formato de Callback para consulta assíncrona ao Dataset usando o WCM
 *
 * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
 */
interface DatasetWcmCallback {
    /**
     * Função que será executada em caso de sucesso
     */
    success: function (DatasetWcmResult);

    /**
     * Função que será executada em caso de falha
     *
     * @param jqXHR Objeto da JQuery
     * @param textStatus
     * @param errorThrown
     */
    error: function (object, string, string): void;
}

declare class Constraint {
    fieldName: string;
    initialValue: string;
    finalValue: string;
    constraintType: ConstraintType;

    /**
     * Indica que a constraint fará uma busca usando LIKE ao invés de =
     */
    setLikeSearch(likeSearch: boolean): void;

    getFieldName(): string;
    getInitialValue(): string;
    getFinalValue(): string;
}

/**
 * Funções para manipulação de Dataset
 */
declare namespace DatasetFactory {
    /**
     * Retorna o nome dos datasets disponíveis
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     */
    declare function getAvailableDatasets(): string[];

    /**
     * Cria uma constraint para ser usada no método getDataset
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     * Para fazer uma pesquisa usando LIKE pelo formulário deve-se passar true no parâmetro searchLike ao invés de usar o método
     * setLikeSearch do objeto Constraint.
     */
    declare function createConstraint(fieldName: string, initialValue: string, finalValue: string, constraintType: ConstraintType): Constraint;
    declare function createConstraint(fieldName: string, initialValue: string, finalValue: string, constraintType: ConstraintType, searchLike: boolean): Constraint;

    /**
     * Pesquisa os dados de um dataset
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     *
     * @param nomeDataset O nome do Dataset.
     * @param campos Os campos que serão retornados.
     * @param constraints Os filtros aplicados ao dataset.
     * @param ordem Os campos que farão a ordenação do resultado. Pode-se acrescentar ;desc ao nome do campo para ordenar de forma decrescente.
     *
     * @example
     * var constraints = [
     *     DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT),
     *     DatasetFactory.createConstraint("valor", "100", "999", ConstraintType.MUST)
     * ];
     * var dataset = DatasetFactory.getDataset("colleague", ["colleagueName"], constraints);
     */
    declare function getDataset(nomeDataset: string, campos?: string[], constraints?: Constraint[], ordem?: string[]): Dataset;

    /**
     * Pesquisa os dados de um dataset de forma assíncrona
     *
     * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
     *
     * @example
     * var constraints = [
     *     DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT),
     *     DatasetFactory.createConstraint("valor", "100", "999", ConstraintType.MUST)
     * ];
     * var dataset = DatasetFactory.getDataset("colleague", ["colleagueName"], constraints);
     */
    declare function getDataset(nomeDataset: string, campos?: string[], constraints?: Constraint[], ordem?: string[], callback: DatasetWcmCallback): void;
}

/**
 * Funções para criação de Dataset
 */
declare namespace DatasetBuilder {
    /**
     * Cria um Dataset
     *
     * Usar somente ao criar datasets customizados.
     */
    declare function newDataset(): Dataset;
}

/**
 * Tipos de Documento
 *
 * Esse enum não existe no Fluig e foi criado somente para
 * facilitar a identificação dos tipos de documento.
 *
 * No Fluig utilize somente os valores ao fazer as comparações.
 */
enum DocumentTypeEnum {
    PASTA_RAIZ = '0',
    PASTA = '1',
    DOCUMENTO_NORMAL = '2',
    DOCUMENTO_EXTERNO = '3',
    FORMULARIO = '4',
    FICHA = '5',
    ANEXO_WORKFLOW = '7',
    NOVO_CONTEUDO = '8',
    APLICATIVO = '9',
    RELATORIO = '10',
    PASTA_SOCIAL = '15',
    SITE = 'portal',
    PAGINA_DE_SITE = 'portalPage',
}

/**
 * Entidade Documento Relacionado
 */
declare class RelatedDocumentDto {

    /**
     * Retorna o número do documento
     *
     * Usar em eventos do Fluig.
     */
    getDocumentId(): number;

    /**
     * Retorna o número do documento relacionado
     *
     * Usar em eventos do Fluig.
     */
    getRelatedDocumentId(): number;

    /**
     * Retorna a versão do documento
     *
     * Usar em eventos do Fluig.
     */
    getVersion(): number;

    /**
     * Retorna o código da empresa em que o documento foi publicado
     *
     * Usar em eventos do Fluig.
     */
    getCompanyId(): number;
}

/**
 * Funções relacionadas a Documentos
 *
 * Usar em qualquer evento.
 */
declare namespace docAPI {
    /**
     * Copia os arquivos físicos de um documento existente para a área de upload do usuário logado
     * @returns Nomes dos arquivos que foram disponibilizados na área de upload
     */
    declare function copyDocumentToUploadArea(documentId: number, version: number): string[];
}

/**
 * Entidade Aprovador
 */
declare class ApproverDto {
    /**
     * Retorna o número do documento
     */
    getDocumentId(): number;

    /**
     * Pega o número do aprovador
     */
    getapproverId(): number;

    /**
     * Pega a versão do aprovador
     */
    getVersion(): number;

    /**
     * Pega o código da empresa na qual o aprovador foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega a matrícula do colaborador que criou o aprovador
     */
    getColleagueId(): number;

    /**
     * Pega o tipo de aprovação Pode ser 0 para Colaborador ou 1 para Grupo
     */
    getApproverType(): number;

    /**
     * Pega o nível de aprovação no caso de aprovação em níveis
     */
    getLevelId(): number;
}

/**
 * Entidade Documento para usar nos Eventos
 */
declare class DocumentDto {

    /**
     * Pega o número do documento
     */
    getDocumentId(): number;

    /**
     * Pega a versão do documento
     */
    getVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega o UUID do documento
     */
    getUUID(): string;

    /**
     * Pega o tipo do arquivo físico. Se retornar em branco ou nulo é um tipo desconhecido
     */
    getDocumentTypeId(): string;

    /**
     * Pega o código do idioma do documento
     */
    getLanguageId(): string;

    /**
     * Pega o código do ícone do documento
     */
    getIconId(): number;

    /**
     * Pega o código do assunto do documento
     */
    getTopicId(): number;

    /**
     * Pega a matrícula do colaborador que criou o documento
     */
    getColleagueId(): string;

    /**
     * Pega a descrição do documento
     */
    getDocumentDescription(): string;

    /**
     * Pega os comentários adicionais do documento
     */
    getAdditionalComments(): string;

    /**
     * Pega o caminho físico do documento
     */
    getPhisicalFile(): string;

    /**
     * Pega a data de criação do documento
     */
    getCreateDate(): Date;

    /**
     * Pega a data de aprovação do documento
     */
    getApprovedDate(): Date;

    /**
     * Pega a data da última modificação do documento
     */
    getLastModifiedDate(): Date;

    /**
     * Pega a data da última modificação do documento
     */
    getExpirationDate(): Date;

    /**
     * Pega o tipo do documento
     */
    getDocumentType(): DocumentTypeEnum;

    /**
     * Pega o número da pasta/formulário pai
     */
    getParentDocumentId(): number;

    /**
     * Pega o nome do arquivo físico principal e anexos
     */
    getRelatedFiles(): number;

    /**
     * Verifica se o documento está ativo
     */
    getActiveVersion(): boolean;

    /**
     * Pega a descrição da versão
     */
    getVersionDescription(): string;

    /**
     * Verifica se o documento permite download
     */
    getDownloadEnabled(): boolean;

    /**
     * Verifica se o documento está em aprovação
     */
    getApproved(): boolean;

    /**
     * Pega a data a partir que o documento poderá ser visualizado
     */
    getValidationStartDate(): Date

    /**
     * Pega a matrícula do colaborador que publicou o documento
     */
    getPublisherId(): string;

    /**
     * Pega a descrição da ficha para documento do tipo 5
     */
    getCardDescription(): string;

    /**
     * Pega o formulário que foi usado como base para criação da ficha.
     *
     * Utilizado somente com documento do tipo 5.
     */
    getDocumentPropertyNumber(): number;

    /**
     * Pega a versão do formulário em que a ficha foi criada
     */
    getDocumentPropertyVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Verifica se o documento/pasta está abaixo de pasta particular
     */
    getPrivateDocument(): boolean;

    /**
     * Pega a matrícula do colaborador onde o documento particular está alocado
     */
    getPrivateColleagueId(): string;

    /**
     * Verifica se o arquivo foi indexado
     */
    getIndexed(): boolean;

    /**
     * Pega a prioridade do documento
     */
    getPriority(): number;

    /**
     * Verifica se notifica os usuários que tenham esse assunto de interesse
     */
    getUserNotify(): boolean;

    /**
     * Verifica se o documento está expirado
     */
    getExpires(): boolean;

    /**
     * Pega o volume onde o documento foi publicado. Se estiver em branco foi no volume pai.
     */
    getVolumeId(): string;

    /**
     * Verifica se herda segurança do pai
     */
    getInheritSecurity(): boolean;

    /**
     * Verifica se atualiza as propriedades da cópia controlada
     */
    getUpdateIsoProperties(): boolean;

    /**
     * Pega a hora da última modificação em milissegundos
     */
    getLastModifiedTime(): string;

    /**
     * Verifica se o documento está na lixeira
     */
    getDeleted(): boolean;

    /**
     * Pega o documento do dataset se o documento é um formulário
     */
    getDatasetName(): string;

    /**
     * Pega as palavras-chave do documento. Cada palavra é separada por vírgula.
     */
    getKeyWord(): string;

    /**
     * Verifica se a versão/revisão é inalterável
     */
    getImutable(): boolean;

    /**
     * Verifica se o documento está em edição, para documento do tipo "Novo Conteúdo"
     */
    getDraft(): boolean;

    /**
     * Verifica se utiliza visualizador interno
     */
    getInternalVisualizer(): boolean;

    /**
     * Pega o tamanho físico do documento principal e anexos
     */
    getPhisicalFileSize(): number;
};

/**
 * Representa as propriedades editáveis de um documento
 */
declare class DocumentEditDto {
    /**
     * Adiciona Palavras chaves no documento
     *
     * Cada palavra é separada por vírgula.
     */
    setKeyWord(keyWord: string): void;

    /**
     * Define se o documento deve expirar
     */
    setExpires(expires: boolean): void;

    /**
     * Define a data de expiração
     */
    setExpirationDate(expireAt: java.util.Date): void;

    /**
     * Define a data a partir da qual o documento poderá ser visualizado
     */
    setValidationStartDate(validatedAt: java.util.Date): void;
}

/**
 * Entidade Segurança do Documento
 */
declare class DocumentSecurityConfigDto {

    /**
     * Pega o número do documento
     */
    getDocumentId(): number;

    /**
     * Pega a versão do documento
     */
    getVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega a matrícula de um colaborador ou o código do grupo que está na segurança do documento
     *
     * É possível saber se vai retornar um colaborador ou um grupo pelo tipo da segurança.
     * Retorna em branco quando o tipo é todos os usuários
     */
    getAttributionValue(): string;

    /**
     * Verifica se é uma permissão
     *
     * Se não é uma permissão é uma restrição.
     */
    getPermission(): boolean;

    /**
     * Verifica se lista o conteúdo
     */
    getShowContent(): boolean;

    /**
     * Pega o nível de permissão/restrição.
     *
     * Tipos de permissão/restrição:
     * - -1: Sem permissão/restrição (nega acesso)
     * - 0: Leitura
     * - 1: Gravação
     * - 2: Modificação
     * - 3: Total
     */
    getAttributionType(): number;

    /**
     * Pega a sequência da permissão/restrição
     */
    getSequence(): number;

    /**
     * Verifica se ele utiliza a segurança desta versão nas demais
     */
    getSecurityVersion(): boolean;
};

/**
 * Helper para acessar serviços do Fluig
 */
 declare namespace fluigAPI {
    /**
     * Recupera serviço para tratar Notificações
     */
    declare function getAlertService(): com.fluig.sdk.service.AlertService;

    /**
     * Recupera serviço para tratar Artigos
     */
    declare function getArticleService(): com.fluig.sdk.service.ArticleService;

    /**
     * Recupera o serviço de autorização de cliente OAUTH
     */
    declare function getAuthorizeClientService(): com.fluig.sdk.service.AuthorizeClientSdkService;

    /**
     * Recupera o serviço para tratar Card Index
     */
    declare function getCardIndexService(): com.fluig.sdk.service.CardIndexService;

    /**
     * Recupera o serviço para tratar Cards
     */
    declare function getCardService(): com.fluig.sdk.service.CardService;

    /**
     * Recupera o serviço para tratar registros de formulário
     */
    declare function CardAPIService(): com.fluig.sdk.service.CardAPIService;

    /**
     * Recupera o serviço para tratar colaboradores
     */
    declare function getCollaborationService(): com.fluig.sdk.service.CollaborationSDKService;

    /**
     * Recupera serviço para tratar comentários
     */
    declare function getCommentService(): com.fluig.sdk.service.CommentService;

    /**
     * Recupera serviço para tratar Comunidades
     */
    declare function getCommunityService(): com.fluig.sdk.service.CommunityService;

    /**
     * Recupera o serviço para tratar Upload de arquivos
     */
    declare function getContentFilesService(): com.fluig.sdk.service.ContentFilesService;

    /**
     * Recupera o serviço para tratar Documentos
     */
    declare function getDocumentService(): com.fluig.sdk.service.DocumentService;

    /**
     * Recupera serviço para tratar Favoritos
     */
    declare function getFavoritesService(): com.fluig.sdk.service.FavoritesService;

    /**
     * Recupera o serviço do Filter
     */
    declare function getFilterService(): com.fluig.sdk.service.FilterAPIService;

    /**
     * Recupera o serviço para tratar Pastas de documentos
     */
    declare function getFolderDocumentService(): com.fluig.sdk.service.FolderDocumentService;

    /**
     * Recupera serviço para tratar parâmetros gerais
     */
    declare function getGlobalParameterService(): com.fluig.sdk.service.GlobalParameterService;

    /**
     * Recupera o serviço para tratar grupo
     */
    declare function getGroupService(): com.fluig.sdk.service.GroupService;

    declare function getHelpService(): com.fluig.sdk.service.DocumentationProxyServiceService;

    /**
     *Recupera o serviço para tratar feriados
     */
    declare function getHolidayService(): com.fluig.sdk.service.HolidayAPIService;

    /**
     * Recupera serviço para tratar linguagem
     */
    declare function getI18NService(): com.fluig.sdk.service.I18NService;

    declare function getIdentityService(): com.fluig.sdk.service.IdentityService;

    /**
     * Recupera serviço para Jobs do agendador de tarefas
     */
    declare function getJobService(): com.fluig.sdk.service.JobService;

    /**
     * Recupera o LocalAPIService
     */
    declare function getLocalService(): com.fluig.sdk.service.LocalAPIService;

    /**
     * Recupera serviço para tratar páginas
     */
    declare function getPageService(): com.fluig.sdk.service.PageService;

    /**
     * Recupera serviço para tratar página de widgets
     */
    declare function getPageWidgetService(): com.fluig.sdk.service.PageWidgetService;

    /**
     * Recupera serviço para tratar Post
     */
    declare function getPostService(): com.fluig.sdk.service.PostService;

    /**
     * Recupera serviço para efetuar pesquisas
     */
    declare function getSearchService(): com.fluig.sdk.service.SearchService;

    /**
     * Recupera o serviço de segurança
     */
    declare function getSecurityService(): com.fluig.sdk.service.SecurityService;

    /**
     * Recupera serviço para tratar Breadcrumb do Social
     */
    declare function getSocialBreadcrumbService(): com.fluig.sdk.service.SocialBreadcrumbService;

    /**
     * Recupera serviço do social
     */
    declare function getSocialService(): com.fluig.sdk.service.SocialSDKService;

    /**
     * Recupera o serviço de TagsCloud
     */
    declare function getTagsCloudService(): com.fluig.sdk.service.TagsCloudService;

    /**
     * Recupera serviço para tratar Tasks
     */
    declare function getTasksService(): com.fluig.sdk.service.TasksService;

    /**
     * Recupera o serviço para Tenant
     */
    declare function getTenantService(): com.fluig.sdk.service.TenantService;

    /**
     * Recupera o serviço para tratar Usuário
     */
    declare function getUserService(): com.fluig.sdk.service.UserService;

    /**
     * Recupera o serviço de widgets
     */
    declare function getWidgetService(): com.fluig.sdk.service.WidgetService;

    /**
     * Recupera o serviço para tratar Workflow
     */
    declare function getWorkflowService(): com.fluig.sdk.service.WorkflowAPIService;
}

declare type ErrorCallback = (error: ErrorData, data: object) => void;
declare type AutoCompleteOnTagCallback = (item: object, tag: object) => void;
declare type SimpleCallback = () => void;
declare type DataCallback = (data: object) => void;

/**
 * Callback de Modal
 *
 * @param error Indica se houve erro
 * @param data Todo o conteúdo da propriedade content da modal
 */
declare type ModalCallback = (error: boolean, data: string) => void;

/**
 * Callback de Inicialização do Botão Switch
 *
 * @param event Evento disparado
 * @this HTMLElement
 */
declare type SwitchInitCallback = (event: JQuery.Event) => void;

 /**
  * Callback de mudança de estado do Botão Switch
  *
  * @param event Evento disparado
  * @param checked Indica se está selecionado
  * @this HTMLElement
  */
declare type SwitchChangeCallback = (event: JQuery.Event, checked: boolean) => void;

/**
 * Callback da mensagem de Confirmação
 *
 * @param result Resultado da confirmação (True se clicou em Sim)
 * @param element Botão clicado
 * @param data Evento disparado
 */
declare type ConfirmCallback = (result: boolean, element: HTMLElement, event: Event) => void;

/**
 * Callback de mensagem
 *
 * @param element Botão clicado
 * @param data Evento disparado
 */
declare type MessageCallback = (element: HTMLElement, event: Event) => void;

interface AutoCompleteOptions {
    /**
     * Tipo do autocomplete
     *
     * Pode ser (padrão é tag):
     * - autocomplete
     * - tag
     * - tagAutocomplete
     */
    type?: string;

    /**
     * Item exibido na sugestão
     *
     * Obrigatório para autocomplete e tagAutocomplete
     */
    displayKey?: string;

    /**
     * Nome do dataset
     *
     * Opcional para autocomplete e tagAutocomplete
     */
    name?: string;

    /**
     * Determina o serviço utilizado para buscar as sugestões
     */
    source: {
        url: string;
        limit: 10,
        offset: 0,
        limitKey: string;
        patternKey: string;
        root: string;
    };

    /**
     * Coloca o texto em negrito quando efetua a busca
     */
    highlight?: boolean;

    /**
     * Mínimo de caracteres antes de iniciar a busca
     */
    minLength?: number;

    /**
     * Se falso não exibirá as opções retornadas da busca
     */
    hint?: boolean;

    /**
     * Tempo limite para obter um resultado da busca
     */
    searchTimeout?: number;

    /**
     * Nome da classe utilizada na tag
     */
    tagClass?: string;

    /**
     * Máximo de tags permitidas para selecionar
     */
    maxTags?: number;

    /**
     * Permite selecionar a mesma tag várias vezes
     */
    allowDuplicates?: boolean

    /**
     * Evento disparado quando tentar adicionar uma tag repetida
     */
    onTagExists?: AutoCompleteOnTagCallback;

    /**
     * Evento disparado ao atingir o limite de tags
     */
    onMaxTags?: AutoCompleteOnTagCallback;

    /**
     * Largura máxima da tag
     */
    tagMaxWidth?: number;

    /**
     * Template da dica
     */
    templates?: {
        tag: string;
        suggestion: string;
    };

    /**
     * Objeto com o CSS para formatar uma tag removida
     */
    tagRemoveCss?: {
        [property: string]: string;
    };

}

interface AutoCompleteTag {
    description: string;
}

declare class AutoComplete {
    /**
     * Adiciona uma tag
     *
     * Método para os tipos tag e tagAutocomplete
     */
    add(tag: AutoCompleteTag): void;

    /**
     * Atualiza uma tag para o tipo tag ou tagAutocomplete
     *
     * Método para os tipos tag e tagAutocomplete
     */
    update(tag: AutoCompleteTag): void;

    /**
     * Remove uma tag para o tipo tag ou tagAutocomplete
     *
     * Método para os tipos tag e tagAutocomplete
     */
    remove(tag: AutoCompleteTag): void;

    /**
     * Remove todas as tags
     *
     * Método para os tipos tag e tagAutocomplete
     */
    removeAll(): void;

    /**
     * Retorna todas as tags
     *
     * Método para os tipos tag e tagAutocomplete
     */
    items(): AutoCompleteTag[];

    /**
     * Abre a caixa de seleção
     *
     * Método para o tipo autocomplete
     */
    open(): void;

    /**
     * Fecha a caixa de seleção
     *
     * Método para o tipo autocomplete
     */
    close(): void;

    /**
     * Pega o valor do elemento
     *
     * Método para o tipo autocomplete
     */
    val(): string;

    /**
     * Atribui um valor ao elemento
     *
     * Método para o tipo autocomplete
     */
    val(value: string): void;


    /**
     * Coloca o foco no autocomplete
     */
    focus(): void;

    /**
     * Pega o elemento input do autocomplete
     */
    input(): HTMLElement;

    /**
     * Atualiza o autocomplete
     *
     * Útil para quando fizer mudanças manuais no elemento.
     */
    refresh(): void;

    /**
     * Destrói o autocomplete
     */
    destroy(): void;
}

interface FilterSourceSettings {
    /**
     * URL que trará os dados
     */
    url: string,

    /**
     * Tipo do conteúdo retornado. Ex: application/json
     */
    contentType: string,
    root: string,
    pattern: string,
    limit: number,
    offset: number,
    patternKey: string,
    limitKey: string,
    offsetKey: string
}

interface FilterStyleSettings {
    /**
     * The selector for the autocomplete tag template.
     */
    templateTag?: string,

    /**
     * The selector for the autocomplete suggestion template.
     */
    templateSuggestion?: string,

    /**
     * The selector for the autocomplete tip message template.
     */
    templateTipMessage?: string,

    /**
     * Class name for the tags. Padrão é tag-gray
     */
    autocompleteTagClass?: string,

    /**
     * CSS class used to table selected lines.
     */
    tableSelectedLineClass?: string,

    /**
     * Receives the waiting time to make the request. This is important not to open a request for each character typed.
     */
    tableStyle?: string,

    /**
     * Defines a CSS class to apply to the table. Padrão é fluigicon-zoom-in
     *
     * Ex .: 'table-hover table-bordered table-striped'.
     */
    filterIconClass?: string
}

interface FilterTableSettings {
    header: FilterTableHeader[],

    /**
     * Pode ser um array de chaves do objeto ou a classe CSS do template mustache.
     *
     * A sequência do array deve ser a mesma de header.
     */
    renderContent: string|string[],
    formatData?: function
}

interface FilterTableHeader {
    /**
     * Título da coluna
     */
    title?: string,

    /**
     * Atributo do objeto que será utilizado para ordenar essa coluna. Padrão é vazio.
     *
     * Caso não seja passado utilizará o conteúdo padrão da coluna que foi
     * indicado em renderContent da tabela.
     */
    dataorder?: string,

    /**
     * Indica se será a coluna ordenada por padrão. Padrão é false.
     */
    standard?: boolean,

    /**
     * Tamanho visual da coluna. Utiliza uma das classes CSS col-
     */
    size?: string,

    /**
     * Indica se a coluna deverá ser exibida. Padrão é true
     */
    display?: boolean
}

interface FilterSettings {
    /**
     * Campo que será exibido ao selecionar um valor
     */
    displayKey: string,

    /**
     * Configuração da fonte de dados
     */
    source: FilterSourceSettings,

    /**
     * Configuração da Tabela de exibição dos itens
     */
    table: FilterTableSettings,

    /**
     * Configuração dos estilos
     */
    style?: FilterStyleSettings,

    /**
     * Altura da tabela (preferencialmente em px). Padrão: 260px
     */
    tableHeight?: string,

    /**
     * Permite múltiplas seleções? Padrão: false
     */
    multiSelect?: boolean,

    /**
     * Tempo limite (em ms) da busca na fonte de dados. Padrão 200ms
     */
    searchTimeout?: number,

    /**
     * Quantidade mínima de caracteres antes de iniciar a busca. Padrão 1
     */
    minLength?: number,

    /**
     * Limite de caracteres exibidos no item selecionado. Padrão: 200
     */
    tagMaxWidth?: number
}

interface ToastSettings {
    /**
     * Título do Toast. Diferença é que fica em negrito.
     */
    title?: string,

    /**
     * Mensagem repassada
     */
    message?: string,

    /**
     * Tipos possíveis: success, danger, info and warning
     * Padrão: success
     */
    type?: string,

    /**
     * Tempo, em milissegundos, ou as strings slow ou fast.
     *
     * O tempo padrão são 4000 milissegundos.
     * slow representa 2000 e fast representa 6000.
     *
     * O Toast do tipo danger ignora o timeout.
     */
    timeout?: number|string
}

declare class FluigcFilter {
    getSelectedItems(): object[];
    add(item: object): void;
    removeAll(): void;

    /**
     * Escuta eventos do filtro.
     *
     * Importante: não coloque mais de um filtro em um mesmo pai, pois os eventos
     * serão escutados por todos os filtros irmãos.
     *
     * O filtro dispara os seguintes eventos:
     * - fluig.filter.load.complete => quando o filtro termina de carregar
     * - fluig.filter.item.added => quando um item é selecionado/adicionado
     *
     * @param event
     * @param callback
     */
    on(event: string, callback: SimpleCallback|DataCallback): void;
}

declare class FluigcModal {
    /**
     * Remove (fecha) a Modal
     */
    remove(): void;

    /**
     * Indica se a Modal está visível
     */
    isOpen(): boolean;
}

/**
 * Configuração dos botões da Modal
 */
interface ModalActionSettings {
    /**
     * Rótulo exibido
     */
    label: string;

    /**
     * Evento ouvido em bindings.global da SuperWidget
     *
     * Precisa ter o prefixo data-
     * Exemplo de valor: data-save-settings
     */
    bind?: string;

    /**
     * Estilo utilizado no botão
     *
     * Por padrão o primeiro botão recebe btn-primary
     * e os demais recebem btn-default
     */
    classType?: string;

    /**
     * Indica se o botão fechará a Modal
     *
     * Por padrão é false.
     *
     * IMPORTANTE: se for true ele não executará o bind registrado.
     */
    autoClose?: boolean;
}

/**
 * Configurações da Mensagem de Confirmação
 */
interface ConfirmSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Texto do Botão Sim
     *
     * Padrão: Sim
     */
    labelYes?: string;

    /**
     * Texto do Botão Não
     *
     * Padrão: Não
     */
    labelNo?: string;
}

/**
 * Configurações da Mensagem de Alerta
 */
interface AlertSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Texto do Botão Ok
     *
     * Padrão: OK
     */
    label?: string;
}

/**
 * Configurações da Mensagem de Erro
 */
interface ErrorSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Detalhes do erro
     *
     * Pode quebrar linha utilizando \n
     */
    details: string;
}

/**
 * Configurações da Modal
 */
interface ModalSettings {
    /**
     * Título exibido na modal
     */
    title: string;

    /**
     * Conteúdo da Modal
     *
     * Pode ser uma string HTML, template Mustache
     * ou retorno de uma chamada a WCMAPI.convertFtlAsync
     */
    content: string;

    /**
     * ID da Modal
     *
     * Por padrão é fluig-modal.
     * A cada chamada o elemento HTML da modal é construído e
     * então destruído quando a modal é fechada.
     */
    id?: string;

    /**
     * Tamanho da Modal
     *
     * Pode ser: small | large | full
     */
    size: string;

    /**
     * Botões da Modal
     */
    actions: ModalActionSettings[];
}

interface CalendarSettings {
    /**
     * Indica se exibirá a seleção de Data. Padrão true.
     */
    pickDate?: boolean;

    /**
     * Indica se exibirá a seleção de Tempo. Padrão false.
     */
    pickTime?: boolean;

    /**
     * Indica se usará minutos. Padrão true.
     */
    useMinutes?: boolean;

    /**
     * Indica se usará segundos. Padrão true.
     */
    useSeconds?: boolean;

    /**
     * Indica se selecionará automaticamente a data corrente. Padrão true
     */
    useCurrent?: boolean;

    /**
     * Valor a incrementar os minutos quando clicar nas setas de subir/descer
     */
    minuteStepping?: number;

    /**
     * Define uma data mínima selecionável
     */
    minDate?: string;

    /**
     * Define a data máxima selecionável
     */
    maxDate?: string;

    /**
     * Exibe o indicador do dia de hoje
     */
    showToday?: boolean;

    /**
     * Código do idioma. Padrão pt-br
     */
    language?: string;

    /**
     * Data padrão
     *
     * Aceita também data da Moment.js
     */
    defaultDate?: string|Date;

    /**
     * Datas que não podem ser selecionadas
     *
     * Aceita também data da Moment.js
     */
    disabledDates?: string[]|Date[];

    /**
     * Únicas datas que  podem ser selecionadas
     *
     * Aceita também data da Moment.js
     */
    enabledDates?: string[]|Date[];

    /**
     * Use "strict" quando validar datas. Padrão false
     */
    useStrict?: boolean;

    /**
     * Exibe a seleção de Tempo ao lado da seleção de Data. Padrão false.
     */
    sideBySide?: boolean;

    /**
     * Dias da semana que não pode ser selecionados
     *
     * Dia da semana inicia em 0, para domingo.
     */
    daysOfWeekDisabled?: number[];
}

declare class Calendar {
    /**
     * Configura a data mínima que pode ser selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setMinDate(date: string|Date): void;

    /**
     * Configura a data máxima que pode ser selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setMaxDate(date: string|Date): void;
    show(): void;
    disable(): void;
    enable(): void;

    /**
     * Atribui a data selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setDate(date: string|Date): void;

    /**
     * Pega a data como objeto moment (da lib momentjs)
     */
    getDate(): any;
}

interface LoadingSettings {
    /**
     * Mensagem exibida
     *
     * Padrão: "Loading..."
     */
    textMessage?: string,

    /**
     * Título exibido quando theme == true
     *
     * Padrão: ""
     */
    title?: string,

    /**
     * Estilo para o bloco de carregamento
     *
     * Objeto CSS aceito pela JQuery.
     *
     * Padrão: null
     */
    css?: object,

    /**
     * Estilo para o overlay
     *
     * Objeto CSS aceito pela JQuery.
     *
     * Padrão: null
     */
    overlayCSS?: object,

    /**
     * Estilo para o cursor antes de bloquear
     *
     * Padrão: ""
     */
    cursorReset?: string,

    /**
     * Índice Z-Index
     *
     * Padrão: null
     */
    baseZ?: number,

    /**
     * Indica se será centralizado na tela
     *
     * Padrão: true
     */
    centerX?: boolean,

    /**
     * Indica se será centralizado na tela
     *
     * Padrão: true
     */
    centerZ?: boolean,

    /**
     * Desabilita eventos de teclado e mouse
     *
     * Padrão: true
     */
    bindEvents?: boolean,

    /**
     * Tempo, em ms, do efeito de transição no bloqueio
     *
     * Se for 0 não terá efeito de transição.
     */
    fadeIn?: number,

    /**
     * Tempo, em ms, do efeito de transição no desbloqueio
     *
     * Se for 0 não terá efeito de transição.
     */
    fadeOut?: number,

    /**
     * Tempo, em ms, para aguardar antes de desbloquear
     *
     * Se for 0 vai desabilitar o auto desbloqueio.
     */
    timeout?: number,

    /**
     * Indica se será exibido o overlay
     *
     * Padrão: true
     */
    showOverlay?: boolean,

    /**
     * Função para ser executado após o efeito de transição do bloqueio
     */
    onBlock?: SimpleCallback,

    /**
     * Função para ser executado após o efeito de transição do desbloqueio
     *
     * O elemento desbloqueado será passado à função.
     */
    onUnBlock?: DataCallback,

    /**
     * Indica se vai ignorar um bloqueio quando já está bloqueado
     *
     * Padrão: false
     */
    ignoreIfBlocked?: boolean
}

declare class Loading {
    /**
     * Exibe a tela de carregamento
     */
    show(): void;

    /**
     * Esconde a tela de carregamento
     */
    hide(): void;
}

declare namespace FLUIGC {
    /**
     * Cria um campo com auto-complete
     *
     * Eventos disponíveis para autocomplete:
     * - fluig.autocomplete.cursorchanged
     * - fluig.autocomplete.opened
     * - fluig.autocomplete.closed
     * - fluig.autocomplete.selected
     * - fluig.autocomplete.autocompleted
     * - fluig.autocomplete.beforeItemAdd
     * - fluig.autocomplete.itemAdded
     * - fluig.autocomplete.beforeItemUpdate
     * - fluig.autocomplete.itemUpdated
     * - fluig.autocomplete.beforeItemRemove
     * - fluig.autocomplete.itemRemoved
     *
     * @param target Seletor utilizado na JQuery
     * @param options Opções adicionais para o autocomplete
     * @param callback Função executada após trazer as respostas para o auto-complete
     */
    declare function autocomplete(target: string, options: AutoCompleteOptions, callback: ErrorCallback): AutoComplete;

    /**
     * Cria um campo filter em um select (é o Zoom feito manualmente)
     *
     * Para usar em formulário deve-se incluir o css /style-guide/css/fluig-style-guide-filter.min.css
     * e o script /style-guide/js/fluig-style-guide-filter.min.js
     *
     * Para usar em Widget deve-se incluir a instrução application.resource.component.1=fluigfilter
     * (substituindo o 1 por um valor ainda não utilizado) no arquivo application.info
     *
     * @param target Seletor utilizado na JQuery
     * @param settings Configurações do filtro
     */
    declare function filter(target: string, settings: FilterSettings): FluigcFilter;

    /**
     * Cria uma caixa de seleção para tratar data e horário
     *
     * @param target Seletor utilizado na JQuery
     * @param settings Configurações do calendário
     */
    declare function calendar(target: string, settings: CalendarSettings): Calendar;

    /**
     * Exibe uma mensagem simples no topo da página.
     *
     * Muito utilizado para substituir alert do JS.
     */
    declare function toast(settings: ToastSettings): void;

    /**
     * Cria uma tela de carregamento em elemento específico ou na janela inteira
     *
     * Caso o objeto window seja passado a tela de carregamento ocupará a janela inteira.
     *
     * @param selector Uma string com seletor JQuery ou objeto window
     * @param settings Configurações possíveis para o Loading
     */
    declare function loading(selector: string|Window, settings: LoadingSettings): Loading;

    /**
     * Cria uma Modal
     *
     * @param settings Configurações
     * @param callback Função para executar após a criação da modal
     */
    declare function modal(settings: ModalSettings, callback: ModalCallback): FluigcModal;
}

/**
 * Botão Switch
 *
 * @see https://style.fluig.com/javascript.html#switch-button
 */
declare namespace FLUIGC.switcher {

    /**
     * Transforma um checkbox ou radio em um botão switch
     *
     * Ao inicializar o botão switch será feita a leitura das opções
     * do elemento HTML (os atributos do checkbox ou radio) para orientar
     * como o botão deve ser.
     *
     * As opções no checkbox/radio são:
     *
     * | Atributo | Valores | Padrão |
     * |----------|---------|--------|
     * | checked | true, false | false |
     * | data-size | null, 'mini', 'small', 'normal', 'large' | null|
     * | data-animate | true, false | true|
     * | disabled | true, false | false|
     * | readonly | true, false | false|
     * | data-on-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'primary'|
     * | data-off-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'default'|
     * | data-on-text |  | 'ON'|
     * | data-off-text |  | 'OFF'|
     *
     * @tutorial https://style.fluig.com/javascript.html#switch-button
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function init(element: string|JQuery): void;

    /**
     * Transforma todos os checkbox e radio de um container em botões switch
     *
     * Ao inicializar o botão switch será feita a leitura das opções
     * do elemento HTML (os atributos do checkbox ou radio) para orientar
     * como o botão deve ser.
     *
     * As opções no checkbox/radio são:
     *
     * | Atributo | Valores | Padrão |
     * |----------|---------|--------|
     * | checked | true, false | false |
     * | data-size | null, 'mini', 'small', 'normal', 'large' | null|
     * | data-animate | true, false | true|
     * | disabled | true, false | false|
     * | readonly | true, false | false|
     * | data-on-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'primary'|
     * | data-off-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'default'|
     * | data-on-text |  | 'ON'|
     * | data-off-text |  | 'OFF'|
     *
     * @tutorial https://style.fluig.com/javascript.html#switch-button
     *
     * @param parentElement Seletor JQuery, ou Objeto, do elemento pai
     * @param fieldName Nome do input deve iniciar com o valor indicado
     */
    declare function initAll(parentElement: string|JQuery, fieldName?: string): void;

    /**
     * Pega o estado do botão
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function getState(element: string|JQuery): boolean;

    /**
     * Configura o estado como checked
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function setTrue(element: string|JQuery): void;

    /**
     * Configura o estado como false (não selecionado)
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function setFalse(element: string|JQuery): void;

    /**
     * Alterna o estado do botão
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function toggleState(element: string|JQuery): void;

    /**
     * Habilita o botão (remove disabled do checkbox/radio)
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function enable(element: string|JQuery): void;

    /**
     * Desabilita o botão (coloca disabled no checkbox/radio)
     *
     * Cuidado: inputs desabilitados não são enviados pelo formulário.
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function disable(element: string|JQuery): void;

    /**
     * Indica se é para o botão ser somente leitura
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function isReadOnly(element: string|JQuery, readOnly: boolean): void;

    /**
     * Remove o botão switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function destroy(element: string|JQuery): void;

    /**
     * Evento disparado quando iniciar um botão Switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     * @param callback Função executada ao disparar o evento
     */
    declare function onInit(element: string|JQuery, callback: SwitchInitCallback): void;

    /**
     * Evento disparado houver mudança de estado do botão Switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     * @param callback Função executada ao disparar o evento
     */
    declare function onChange(element: string|JQuery, callback: SwitchChangeCallback): void;
}

declare namespace FLUIGC.message {
    /**
     * Cria uma Mensagem de Confirmação
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário responder a confirmação
     */
    declare function confirm(settings: ConfirmSettings, callback: ConfirmCallback): void;

    /**
     * Cria uma Mensagem de Alerta
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário fechar o alerta
     */
    declare function alert(settings: AlertSettings, callback: MessageCallback): void;

    /**
     * Cria uma Mensagem de Erro
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário fechar o erro
     */
    declare function error(settings: ErrorSettings, callback: MessageCallback): void;
}

declare namespace FLUIGC.calendar {
    /**
     * Formata uma data em uma string de acordo com a formatação indicada.
     *
     * @see https://style.fluig.com/javascript.html#fluig-calendar
     *
     * @param date Data a ser formatada
     * @param format Formatação
     * @param language Idioma (padrão pt-br)
     */
    declare function formatDate(date: Date, format: string, language?: string): string;
}

/**
 * Adiciona um Filho ao Pai
 *
 * @param {String} tableName Nome da tabela
 * @returns {Number} Id do filho criado
*/
declare function wdkAddChild(tableName: string): number;

/**
 * Disponibiliza diversas funções para manipulação do formulário
 *
 * Usar em eventos do formulário (que recebem form como parâmetro).
 */
declare class FormController {

    /**
     * Retorna o ID da empresa
     */
    getCompanyId(): number;

    /**
     * Retorna o ID do documento (registro de formulário)
     */
    getDocumentId(): number;

    /**
     * Retorna a versão do documento (registro do formulário)
     */
    getVersion(): number;

    /**
     * Retorna o ID do formulário
     */
    getCardIndex(): number

    /**
     * Habilita/Desabilita a edição de um campo do formulário
     */
    setEnabled(nomeCampo: string, habilita: boolean, protegido: boolean): void;

    /**
     * Verifica se o campo do formulário está habilitado para edição
     */
    getEnabled(nomeCampo: string): boolean;

    /**
     * Atribui valor a um campo do formulário
     */
    setValue(nomeCampo: string, valor: string): void;

    /**
     * Pega o valor de um campo do formulário
     */
    getValue(nomeCampo: string): java.lang.String;

    /**
     * Deixa o campo invisível buscando pelo nome do campo
     */
    setVisible(nomeCampo: string, visible: boolean): void;

    /**
     * Deixa o campo invisível buscando pelo ID do campo
     */
    setVisibleById(idDoCampo: string, visible: boolean): void;

    /**
     * Se habilitado os campos são exibidos como input readonly
     */
    setShowDisabledFields(habilita: boolean): void;

    /**
     * Se habilitado o link "imprimir" é ocultado
     */
    setHidePrintLink(habilita: boolean): void;

    /**
     * Se habilitado o botão "excluir" é ocultado
     */
    setHideDeleteButton(habilita: boolean): void;

    /**
     * Se definido como true todos os campos desabilitados não terão seus valores salvos
     */
    setEnhancedSecurityHiddenInputs(proteger: boolean): void;

    /**
     * Retorna o Modo do formulário.
     *
     * Tipos possíveis:
     * - ADD: Criação
     * - MOD: Edição
     * - VIEW: Visualização
     * - NONE: Não há comunicação com formulário. Ocorre no momento da validação dos campos, por exemplo.
     */
    getFormMode(): string;

    /**
     * Desabilita o botão de imprimir
     */
    setHidePrintLink(hide: boolean): void;

    /**
     * Retorna se o botão de imprimir está oculto
     */
    isHidePrintLink(): boolean;

    /**
     * Retorna os campos filhos, e seus valores, de uma tabela pai.
     *
     * Retorna um objeto com a propriedade sendo o nome do campo e seus valores.
     */
    getChildrenFromTable(tableName: string): object;

    /**
     * Retorna os índices dos campos filhos de uma tabela pai.
     *
     * @see https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-getChildrenIndexes
     */
    getChildrenIndexes(tableName: string): number[];

    /**
     * Oculta o botão de apagar registro
     */
    setHideDeleteButton(hide: boolean): void;

    /**
     * Informa se o botão de apagar está oculto
     */
    isHideDeleteButton(): boolean;

    /**
     * Indica se está em mobile
     */
    getMobile(): boolean;

    /**
     * Indica se o campo está visível buscando pelo nome do campo
     */
    isVisible(nomeCampo: string): boolean;

    /**
     * Indica se o campo está visível buscando pelo ID do campo
     */
    isVisibleById(id: string): boolean;
};

/**
 * Disponibiliza funções para incluir conteúdo HTML no formulário
 */
declare class customHTML {

    /**
     * Adiciona conteúdo no final do HTML do formulário
     * @param html Conteúdo HTML a ser incluído
     */
    append(html: string): void;
};

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

interface Task {
    name: string;

    /**
     * ID do usuário responsável
     */
    responsible: string;

    /**
     * Data no formato dd/mm/yyyy
     */
    dueDate: string;
}

/**
 * Indica a Data e Hora de um prazo
 */
interface DeadLineDate {
    /**
     * Data no formato dd/mm/yyyy
     */
    0: string;

    /**
     * Quantidade de segundos, a partir de 00:00:00, para alcançar determinada hora
     */
    1: number;
}

/**
 * Disponibiliza diversas funções para manipulação do processo
 *
 * Usar nos eventos do Processo.
 */
declare namespace hAPI {
    /**
     * Pega o valor de um campo do formulário
     */
    declare function getCardValue(nomeCampo: string): string;

    /**
     * Atribui valor a um campo do formulário
     */
    declare function setCardValue(nomeCampo: string, valor: string): string;

    /**
     * Adiciona um filho no formulário pai e filho do processo
     *
     * @param tableName Nome da tabela pai-filho
     * @param cardData Mapa com os campos e valores
     */
    declare function addCardChild(tableName: string, cardData: java.util.HashMap<string, string>): void;

    /**
     * Remove uma linha de uma tabela Pai X Filho
     *
     * Caso queira utilizar este método em um laço de repetição se atente a percorrer do
     * último registro para o primeiro, pois o método reordena os índices. Em uma tabela
     * com 3 linhas ao remover a linha 1 terá a linha 2 reordenada para 1, e a
     * linha 3 será reordenada para linha 2.
     *
     * @example
     * var indexes = hAPI.getChildrenIndexes("tableName");
     * for (var i = indexes.length - 1; i >= 0; --i) {
     *     hAPI.removeCardChild("tableName", indexes[i]);
     * }
     *
     * @param tableName Nome da tabela pai-filho
     * @param index Índice da linha a ser removida
     */
    declare function removeCardChild(tableName: string, index: number): void;

    /**
     * Encaminha o processo para uma determinada atividade
     *
     * Deve ser usado para tomar decisões em atividades automáticas de listener (AutomaticTasks).
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * hAPI.setAutomaticDecision(2, colaboradores, "Decisão Automática");
     */
    declare function setAutomaticDecision(taskNumber: number, responsible: java.util.ArrayList<string>, comment: string): void;

    /**
     * Pega todas as threads em execução de um processo
     *
     * @example
     * var threads = hAPI.getActiveStates();
     * log.info(threads.get(0));
     */
    declare function getActiveStates(): java.util.ArrayList<object>;

    /**
     * Pega o ID do processo Pai (caso de subprocesso)
     *
     * @param processInstanceId ID do processo
     */
    declare function getParentInstance(processInstanceId: number): number;

    /**
     * Pega uma lista dos processos que são filhos do processo indicado (subprocessos)
     *
     * @param processInstanceId ID do processo
     */
    declare function getChildrenInstances(processInstanceId: number): java.util.List<number>;

    /**
     * Altera o prazo de uma atividade do processo
     *
     * @example
     * var processo = new java.lang.Integer(getValue("WKNumProces"));
     * var data = new java.text.SimpleDateFormat("dd/MM/yyyy").parse("10/10/2010");
     * hAPI.setDueDate(processo, 0, "adm", data, 0);
     * // Define o prazo para Hoje ao meio dia
     * hAPI.setDueDate(1, 0, "adm", new java.util.Date(), 12 * 60 * 60);
     *
     * @param processId ID do Processo
     * @param numThread ID da Thread (geralmente 0). Usado para processos que possuem FORK
     * @param userId ID do responsável pela atividade
     * @param dueDate Data do prazo de encerramento
     * @param tempoSegundos Quantidade de segundos, a partir de 00:00:00, para alcançar determinada hora
     */
    declare function setDueDate(processId: number, numThread: number, userId: string, dueDate: Date, timeInSeconds: number): void;

    /**
     * Transfere o processo atual para outro(s) colaborador(es).
     * Usar em eventos do Processo.
     *
     * @example
     *  var colaboradores = new java.util.ArrayList();
     *  colaboradores.add("adm");
     *  hAPI.transferTask(colaboradores, "Tarefa Transferida", 0);
     *
     * @param users IDs dos usuários
     * @param comment
     * @param numThread ID da Thread. Normalmente 0
     */
    declare function transferTask(users: java.util.ArrayList<string>, comment: string, numThread?: number = 0): void;

    /**
     * Define uma observação para a atividade atual do processo.
     * Usar em eventos do Processo.
     *
     * @param userId Matrícula do Colaborador
     * @param processId ID do Processo
     * @param threadId ID da Thread (geralmente 0). Usado para processos que possuem FORK.
     * @param comment Comentário do processo para a atividade corrente
     */
    declare function setTaskComments(userId: string, processId: number, threadId: number, comment: string): void;

    /**
     * Retorna o valor de uma propriedade avançada do Processo.
     * Usar em eventos do Processo.
     */
    declare function getAdvancedProperty(nomePropriedade: string): string;


    /**
     * Retorna o HashMap com os valores do formulário do processo.
     * Usar em eventos do Processo.
     *
     * Para um formulário Pai e Filho os campos são identificados da seguinte forma:
     *  campo1___1, sendo campo1 o nome atribuído ao campo através da tag do campo HTML
     * +___(3 underlines) + número sequencial do registro.
     *
     * @example
     *  var card = declare function getCardData(getValue("WKNumProces"));
     *  log.info(card.get("campo1"));
     */
    declare function getCardData(numProcesso: number): java.util.HashMap<string, string>;

    /**
     * Inicia uma nova instância de um processo.
     * Usar em eventos do Processo.
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * var formData = new java.util.HashMap();
     * formData.put("nome_do_campo_1", "valor_do_campo_1");
     * var resposta = startProcess("Processo", 0, colaboradores, "Iniciado automaticamente", false, formData, false);
     * var numProcessoCriado = resposta.get("iProcess");
     *
     * @param processId Código do processo cadastrado no Fluig.
     * @param taskNumber Número da atividade de inicio do processo. Pode ser informado 0.
     * @param users Matrícula dos usuários que receberão a atividade.
     * @param comment Comentário para a atividade do processo.
     * @param taskFinished indica se a tarefa sera finalizada apás a criação do processo.
     * @param form HashMap representando propriedade/valor dos campos do formulário do processo.
     * @param managerMode indica se a tarefa sera inicializada com o modo gestor do Fluig ativo.
     * @returns HashMap com informações referentes ao processo criado
     */
    declare function startProcess(processId: string, taskNumber: number, users: java.util.ArrayList<string>, comment?: string, taskFinished?: boolean, form?: java.util.HashMap<string, string>, managerMode?: boolean): java.util.HashMap<string, string>;

    /**
     * Calcula um prazo
     *
     * Cálculo feito a partir de uma data, com base no expediente e feriados cadastrados no produto,
     * passando o prazo em horas.
     *
     * Importante: a Data retornada é formatada no padrão dd/mm/yyyy
     *
     * @example
     * var data = new Date();
     * var deadlineDate = hAPI.calculateDeadLineHours(data, 50000, 2, "Default");
     * var processo = getValue("WKNumProces");
     * hAPI.setDueDate(processo, 0, 'adm', deadlineDate[0], deadlineDate[1]);
     */
    declare function calculateDeadLineHours(deadlineDate: Date, seconds: number, deadlineInHours: number, periodId: string): DeadLineDate;

    /**
     * Calcula um prazo
     *
     * Cálculo feito a partir de uma data, com base no expediente e feriados cadastrados no produto,
     * passando o prazo em segundos.
     *
     * Importante: a Data retornada é formatada no padrão dd/mm/yyyy
     *
     * @example
     * var data = new Date();
     * var deadlineDate = hAPI.calculateDeadLineHours(data, 50000, 2, "Default");
     * var processo = getValue("WKNumProces");
     * hAPI.setDueDate(processo, 0, 'adm', deadlineDate[0], deadlineDate[1]);
     */
    declare function calculateDeadLineTime(deadlineDate: Date, seconds: number, deadlineInHours: number, periodId: string): DeadLineDate;

    /**
     * Atribui um usuário substituto para a atividade atual do processo.
     *
     * Usar em eventos do Processo.
     */
    declare function setColleagueReplacement(responsible: string): void;

    /**
     * Retorna o link para movimentação da solicitação.
     *
     * Usar em eventos do Processo.
     */
    declare function getUserTaskLink(numAtividade: number): string;

    /**
     * Pega o ID da Thread atual
     */
    declare function getActualThread(companyNumber, processNumber, activityNumber): number;

    /**
     * Permite a criação de atividades adhoc dentro dos eventos do Fluig
     *
     * @param processoId Número da Solicitação
     * @param sequenceId Código processstate da atividade que tem o processo ad-hoc
     * @param assunto Assunto
     * @param detalhamento Detalhamento
     * @param tarefas Lista de tarefas
     */
    declare function createAdHocTasks(processoId: number, sequenciaId: number, assunto: string, detalhamento: string, tarefas: Task[]): void;

    /**
     * Retorna a lista de anexos do processo
     *
     * Somente anexos do tipo GED e Workflow são retornados.
     */
    declare function listAttachments(): java.util.List<DocumentDto>;

    /**
     * Permite publicar anexo workflow da solicitação no GED
     *
     * É obrigatório informar a pasta destino através do método setParentDocumentId
     */
    declare function publishWorkflowAttachment(documentDto: DocumentDto): void;

    /**
     * Permite anexar documentos do GED à solicitação workflow
     *
     * @throws {Error}
     */
    declare function attachDocument(documentId: number): void;

    /**
     * Retorna os campos filhos, e seus valores, de uma tabela pai.
     *
     * Retorna um objeto Map com a propriedade seu valor.
     */
    declare function getChildrenFromTable(tableName: string): java.util.Map<string, string>;

    /**
     * Retorna os índices dos campos filhos de uma tabela pai.
     *
     * @see https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos#EventosdeProcessos-EventosdeFormul%C3%A1rioPaiFilho
     */
    declare function getChildrenIndexes(tableName: string): number[];

    /**
     *
     */
    declare function getAvailableStatesDetail(companyId: number, userId: string, processId: number, processInstanceId: number, threadSequenceId: number = 0);
};

/**
 * Envia mensagens ao Log do ECM Server
 */
declare namespace log {

    /**
     * Log com "criticidade" INFO
     */
    declare function info(message: string): void;

    /**
     * Log com "criticidade" WARNING
     */
    declare function warn(message: string): void;

    /**
     * Log com "criticidade" ERROR
     */
    declare function error(message: string): void;

    /**
     * Log com "criticidade" FATAL
     */
    declare function fatal(message: string): void;

    /**
     * Log com "criticidade" INFO para objetos ao invés de texto
     */
    declare function dir(item: object): void;
};

interface WorkflowProcessPK {
    companyId: number,
    processInstanceId: number
}

interface WorkflowProcess {
    workflowProcessPK: WorkflowProcessPK,
    processId: string,
    version: number,
    requesterId: string,
    active: boolean,
    attachmentSeqId: number,
    sourceProcess: number,
    sourceThreadSequence: number,
    UUID: string
}

interface colleaguePK {
    companyId: number,
    colleagueId: string
}

interface Colleague {
    colleaguePK: colleaguePK,
    userTenantId: number,
    colleagueName: string,
    mail: string,
    login: string,
    passwd: string,
    active: boolean ,
    adminUser: boolean ,
    groupId: string
}

/**
 * Configuração para uma requisição efetuada pelo método WCMAPI.Create
 */
interface WcmApiRequestSettings {
    url?: string;

    /**
     * Verbo HTTP utilizado na requisição (padrão é GET)
     */
    method?: string;

    /**
     * Tipo do envio.
     *
     * Pode ser:
     * - application/x-www-form-urlencoded (padrão)
     * - multipart/form-data (quando quer fazer envio de arquivos)
     * - text/plain
     */
    contentType?: string;

    /**
     * Tipo do resultado esperado da requisição.
     *
     * O resultado da requisição será convertido para o tipo especificado e então
     * enviado ao método success.
     *
     * Os tipos possíveis são:
     * - xml
     * - html
     * - script
     * - json
     * - jsonp
     * - text
     */
    dataType?: string;

    /**
     * Dados para enviar
     */
    data?: string|object;

    /**
     * Função que será executada em caso de sucesso
     *
     * @param data
     * @param textStatus
     * @param jqXHR Objeto da JQuery
     */
    success?: function (string|object, string, object): void;

    /**
     * Função que será executada em caso de falha
     *
     * @param jqXHR Objeto da JQuery
     * @param textStatus
     * @param errorThrown
     */
    error?: function (object, string, string): void;

    /**
     * Converter os dados para o padrão application/x-www-form-urlencoded
     *
     * Por padrão os dados são convertidos para application/x-www-form-urlencoded,
     * mas você pode desabilitar essa conversão para poder enviar um DOMDocument
     * ou outro tido de dado sem a conversão.
     */
    processData?: boolean;
}


/**
 * Consultar dados do ambiente da sessão via JS (Client Side)
 */
declare namespace WCMAPI {
    /**
     * Endereço do servidor (incluindo protocolo e porta)
     */
    const serverURL: string;

    /**
     * ID do tenant ao qual o usuário está conectado
     */
    const organizationId: string;

    /**
     * Indica se usuário está logado
     */
    const userIsLogged: boolean;

    /**
     * Nome do usuário logado
     */
    const user: string;

    /**
     * Login do usuário logado
     */
    const userLogin: string;

    /**
     * Código (matrícula) do usuário logado
     */
    const userCode: string;

    /**
     * E-mail do usuário logado
     */
    const userEmail: string;

    /**
     * Indica se a sessão está expirada
     */
    const sessExpired: boolean;

    /**
     * Versão do fluig
     */
    const version: string;

    /**
     * Código do tenant ao qual o usuário está conectado
     */
    const tenantCode: string;

    /**
     * Raíz da URL do portal da plataforma
     */
    const serverContextURL: string;

    /**
     * Pega o endereço do servidor (incluindo protocolo e porta)
     */
    declare function getServerURL(): string;

    /**
     * Pega o ID do tenant ao qual o usuário está conectado
     */
    declare function getOrganizationId(): string;

    /**
     * Pega o código do tenant ao qual o usuário está conectado
     */
    declare function getTenantCode(): string;

    /**
     * Retorna a raíz da URL do portal da plataforma
     */
    declare function getServerContextURL(): string;

    /**
     * Envia uma requisição ao servidor do Fluig
     *
     * A requisição é feita pela JQuery.
     * @see https://tdn.totvs.com/display/public/fluig/Consumo+de+um+WS+SOAP+de+um+Widget#ConsumodeumWSSOAPdeumWidget-ConsumirumWSSOAPdeumWidget
     */
    declare function Create(settings: WcmApiRequestSettings): void;

    /**
     * Encerra a sessão do usuário
     */
    declare function logoff(): void;
}

interface WidgetUpdatePreferences {
    /**
     * Indica se será uma chamada assíncrona
     */
    async: boolean;

    /**
     * Função executada em caso de sucesso
     *
     * @param data
     */
    success?: function (object): void;

    /**
     * Função executada em caso de falha
     *
     * @param jqXHR Objeto da JQuery
     * @param message Mensagem do erro
     * @param errorData Objeto retornado pelo erro
     */
    fail?: function (object, string, errorData): void;
}

declare namespace WCMSpaceAPI.PageService {
    declare function UPDATEPREFERENCES(settings: WidgetUpdatePreferences, instanceId: number, preferences: object): void;
}

declare namespace com.totvs.technology.ecm.dm.ws {

    /**
     * Serviço para tratar registros de formulários
     */
    declare class CardService {

        /**
         * Cria um registro de formulário
         */
        create(companyId: number, username: string, password: string, card: CardDtoArray): WebServiceMessageArray;

        /**
         * Atualiza o registro do formulário
         */
        updateCardData(companyId: number, username: string, password: string, cardId: number, cardData: CardFieldDtoArray): WebServiceMessageArray;

        /**
         * Apaga o registro do formulário
         */
        deleteCard(companyId: number, username: string, password: string, cardId: number): WebServiceMessageArray;
    }

    /**
     * Representa um Documento/Formulário
     */
    declare class CardDto {
        setUserNotify(notify: boolean): void;
        setInheritSecurity(inherit: boolean): void;
        setDocumentDescription(description: string): void;
        setParentDocumentId(parentId: number): void;
        getCardData(): java.util.List<CardFieldDto>;
    }

    /**
     * Representa um campo do Documento/Formulário
     */
    declare class CardFieldDto {
        setField(field: string): void;
        setValue(value: string): void;
    }

    /**
     * Representa um conjunto de Documentos/Formulários
     *
     * Utilizado ao criar um documento/formulário.
     */
    declare class CardDtoArray {
        getItem(): java.util.List<CardDto>;
    }

    /**
     * Representa um conjunto de campos do Documento/Formulário
     *
     * Utilizado ao editar um documento/formulário.
     */
    declare class CardFieldDtoArray {
        getItem(): java.util.List<CardFieldDto>;
    }
}

declare namespace com.totvs.technology.ecm.dm.ws {
    /**
     * Serviço para gerenciar os documentos via SOAP
     *
     * @example
     * var serviceHelper = ServiceManager.getService("ECMDocumentService").getBean();
     *
     * // Instanciando o objeto da classe DocumentService
     * var service = serviceHelper
     *     .instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService")
     *     .getDocumentServicePort()
     * ;
     */
    declare class DocumentService {
        /**
         * Cria um documento do jeito simplificado
         */
        createSimpleDocument(
            username: string,
            password: string,
            companyId: number,
            folderId: number,
            publisherCode: string,
            fileName: string,
            attachmentArray: AttachmentArray
        ): WebServiceMessageArray;

        /**
         * Pega o conteúdo de um arquivo do GED
         */
        getDocumentContent(
            username: string,
            password: string,
            companyId: number,
            documentId: number,
            userCode: string,
            version: number,
            documentDescription: string
        ): java.lang.Byte[];
    }

    declare class Attachment {
        setFileName(fileName: string): void;
        setFileSize(fileSize: number): void;
        setAttach(isAttach: boolean): void;
        setEditing(isEditing: boolean): void;
        setPrincipal(isPrincipal: boolean): void;

        /**
         * Configura o conteúdo do arquivo
         *
         * @param content Conteúdo em ByteArray
         *
         * @example
         * var serviceHelper = ServiceManager
         *     .getService("ECMDocumentService")
         *     .getBean()
         * ;
         *
         * var service = serviceHelper
         *     .instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService")
         *     .getDocumentServicePort()
         * ;
         *
         * var attachment = serviceHelper
         *     .instantiate("com.totvs.technology.ecm.dm.ws.Attachment")
         * ;
         *
         * // Inserindo conteúdo em Base64
         * attachment.setFileContent(java.util.Base64.getDecoder().decode(new java.lang.String("string em Base64").getBytes("UTF-8"))
         */
        setFilecontent(content: java.lang.Byte[]): void;
    }

    declare class AttachmentArray {
        getItem(): java.util.List<Attachment>;
    }
}

declare namespace com.totvs.technology.ecm.dm.ws {
    /**
     * Serviço para gerenciar as pastas via SOAP
     *
     * @example
     * var serviceHelper = ServiceManager.getService("ECMFolderService").getBean();
     *
     * // Instanciando o objeto da classe FolderService
     * var service = serviceHelper
     *     .instantiate("com.totvs.technology.ecm.dm.ws.ECMFolderServiceService")
     *     .getFolderServicePort()
     * ;
     */
    declare class FolderService {
        /**
         * Cria uma pasta de forma simplificada
         */
        createSimpleFolder(
            username: string,
            password: string,
            companyId: number,
            parentId: number,
            publisherCode: string,
            folderName: string
        ): com.totvs.technology.ecm.dm.ws.WebServiceMessageArray;

        /**
         * Pega todas as pastas filhas da pasta indicada em documentId
         */
        getSubFolders(
            username: string,
            password: string,
            colleagueCode: string,
            companyId: number,
            documentId: number
        ): DocumentDtoArray;
    }

    declare class DocumentDtoArray {
        getItem(): java.util.List<DocumentDto>;
    }

    declare class DocumentDto {
        getAccessCount(): java.lang.Integer;
        setAccessCount(value: java.lang.Integer): void;

        isActiveUserApprover(): boolean;
        setActiveUserApprover(value: boolean): void;

        isActiveVersion(): boolean;
        setActiveVersion(value: boolean): void;

        getAdditionalComments(): java.lang.String;
        setAdditionalComments(value: java.lang.String): void;

        isAllowMuiltiCardsPerUser(): boolean;
        setAllowMuiltiCardsPerUser(value: boolean): void;

        isApprovalAndOr(): boolean;
        setApprovalAndOr(value: boolean): void;

        isApproved(): boolean;
        setApproved(value: boolean): void;

        getApprovedDate(): java.util.Calendar;
        setApprovedDate(value: java.util.Calendar): void;

        getArticleContent(): java.lang.String;
        setArticleContent(value: java.lang.String): void;

        getAttachments(): java.util.List<Attachment>;

        getAtualizationId(): java.lang.Integer;
        setAtualizationId(value: java.lang.Integer): void;

        getBackgroundColor(): java.lang.String;
        setBackgroundColor(value: java.lang.String): void;

        getBackgroundImage(): java.lang.String;
        setBackgroundImage(value: java.lang.String): void;

        getBannerImage(): java.lang.String;
        setBannerImage(value: java.lang.String): void;

        getCardDescription(): java.lang.String;
        setCardDescription(value: java.lang.String): void;

        getColleagueId(): java.lang.String;
        setColleagueId(value: java.lang.String): void;

        getColleagueName(): java.lang.String;
        setColleagueName(value: java.lang.String): void;

        getCompanyId(): number;
        setCompanyId(value: number): void;

        getConvertDocumentType(): java.lang.Integer;
        setConvertDocumentType(value: java.lang.Integer): void;

        getCrc(): number;
        setCrc(value: number): void;

        getCreateDate(): java.util.Calendar;
        setCreateDate(value: java.util.Calendar): void;

        getCreateDateInMilliseconds(): number;
        setCreateDateInMilliseconds(value: number): void;

        getDatasetName(): java.lang.String;
        setDatasetName(value: java.lang.String): void;

        isDateFormStarted(): boolean;
        setDateFormStarted(value: boolean): void;

        isDeleted(): boolean;
        setDeleted(value: boolean): void;

        getDocumentDescription(): java.lang.String;
        setDocumentDescription(value: java.lang.String): void;

        getDocumentId(): java.lang.Integer;
        setDocumentId(value: java.lang.Integer): void;

        getDocumentKeyWord(): java.lang.String;
        setDocumentKeyWord(value: java.lang.String): void;

        getDocumentPropertyNumber(): java.lang.Integer;
        setDocumentPropertyNumber(value: java.lang.Integer): void;

        getDocumentPropertyVersion(): java.lang.Integer;
        setDocumentPropertyVersion(value: java.lang.Integer): void;

        getDocumentType(): java.lang.String;
        setDocumentType(value: java.lang.String): void;

        getDocumentTypeId(): java.lang.String;
        setDocumentTypeId(value: java.lang.String): void;

        isDownloadEnabled(): boolean;
        setDownloadEnabled(value: boolean): void;

        isDraft(): boolean;
        setDraft(value: boolean): void;

        getExpirationDate(): java.util.Calendar;
        setExpirationDate(value: java.util.Calendar): void;

        isExpiredForm(): boolean;
        setExpiredForm(value: boolean): void;

        isExpires(): boolean;
        setExpires(value: boolean): void;

        getExternalDocumentId(): java.lang.String;
        setExternalDocumentId(value: java.lang.String): void;

        isFavorite(): boolean;
        setFavorite(value: boolean): void;

        getFileURL(): java.lang.String;
        setFileURL(value: java.lang.String): void;

        getFolderId(): java.lang.Integer;
        setFolderId(value: java.lang.Integer): void;

        isForAproval(): boolean;
        setForAproval(value: boolean): void;

        getHashAnnotations(): java.lang.String;
        setHashAnnotations(value: java.lang.String): void;

        getIconId(): java.lang.Integer;
        setIconId(value: java.lang.Integer): void;

        getIconPath(): java.lang.String;
        setIconPath(value: java.lang.String): void;

        isImutable(): boolean;
        setImutable(value: boolean): void;

        isIndexed(): boolean;
        setIndexed(value: boolean): void;

        isInheritApprovers(): boolean;
        setInheritApprovers(value: boolean): void;

        isInheritSecurity(): boolean;
        setInheritSecurity(value: boolean): void;

        isInternalVisualizer(): boolean;
        setInternalVisualizer(value: boolean): void;

        isIsEncrypted(): boolean;
        setIsEncrypted(value: boolean): void;

        getKeyWord(): java.lang.String;
        setKeyWord(value: java.lang.String): void;

        getLanguageId(): java.lang.String;
        setLanguageId(value: java.lang.String): void;

        getLanguageIndicator(): java.lang.String;
        setLanguageIndicator(value: java.lang.String): void;

        getLastModifiedDate(): java.util.Calendar;
        setLastModifiedDate(value: java.util.Calendar): void;

        getLastModifiedTime(): java.lang.String;
        setLastModifiedTime(value: java.lang.String): void;

        getMetaListId(): java.lang.Integer;
        setMetaListId(value: java.lang.Integer): void;

        getMetaListRecordId(): java.lang.Integer;
        setMetaListRecordId(value: java.lang.Integer): void;

        isNewStructure(): boolean;
        setNewStructure(value: boolean): void;

        getNotificationDays(): java.lang.Integer;
        setNotificationDays(value: java.lang.Integer): void;

        isOnCheckout(): boolean;
        setOnCheckout(value: boolean): void;

        getParentDocumentId(): java.lang.Integer;
        setParentDocumentId(value: java.lang.Integer): void;

        getPdfRenderEngine(): java.lang.String;
        setPdfRenderEngine(value: java.lang.String): void;

        getPermissionType(): java.lang.Integer;
        setPermissionType(value: java.lang.Integer): void;

        getPhisicalFile(): java.lang.String;
        setPhisicalFile(value: java.lang.String): void;

        getPhisicalFileSize(): number;
        setPhisicalFileSize(value: number): void;

        getPriority(): java.lang.Integer;
        setPriority(value: java.lang.Integer): void;

        getPrivateColleagueId(): java.lang.String;
        setPrivateColleagueId(value: java.lang.String): void;

        isPrivateDocument(): boolean;
        setPrivateDocument(value: boolean): void;

        isProtectedCopy(): boolean;
        setProtectedCopy(value: boolean): void;

        isPublicDocument(): boolean;
        setPublicDocument(value: boolean): void;

        getPublisherId(): java.lang.String;
        setPublisherId(value: java.lang.String): void;

        getPublisherName(): java.lang.String;
        setPublisherName(value: java.lang.String): void;

        getQuota(): java.lang.Integer;
        setQuota(value: java.lang.Integer): void;

        getRelatedFiles(): java.lang.String;
        setRelatedFiles(value: java.lang.String): void;

        getRestrictionType(): java.lang.Integer;
        setRestrictionType(value: java.lang.Integer): void;

        getRowId(): java.lang.Integer
        setRowId(value: number): void;

        getSearchNumber(): java.lang.Integer;
        setSearchNumber(value: java.lang.Integer): void;

        getSecurityLevel(): java.lang.Integer
        setSecurityLevel(value: number): void;

        getSiteCode(): java.lang.String;
        setSiteCode(value: java.lang.String): void;

        getSociableDocumentDto(): SociableDocumentDto;
        setSociableDocumentDto(value: SociableDocumentDto): void;

        getSocialDocument(): java.lang.String;
        setSocialDocument(value: java.lang.String): void;

        isTool(): boolean;
        setTool(value: boolean): void;

        getTopicId(): java.lang.Integer;
        setTopicId(value: java.lang.Integer): void;

        isTranslated(): boolean;
        setTranslated(value: boolean): void;

        getUUID(): java.lang.String;
        setUUID(value: java.lang.String): void;

        isUpdateIsoProperties(): boolean;
        setUpdateIsoProperties(value: boolean): void;

        isUserAnswerForm(): boolean;
        setUserAnswerForm(value: boolean): void;

        isUserNotify(): boolean;
        setUserNotify(value: boolean): void;

        getUserPermission(): java.lang.Integer;
        setUserPermission(value: java.lang.Integer): void;

        getValidationStartDate(): java.util.Calendar;
        setValidationStartDate(value: java.util.Calendar): void;

        getVersion(): java.lang.Integer
        setVersion(value: number): void;

        getVersionDescription(): java.lang.String;
        setVersionDescription(value: java.lang.String): void;

        getVersionOption(): java.lang.String;
        setVersionOption(value: java.lang.String): void;

        getVisualization(): java.lang.String;
        setVisualization(value: java.lang.String): void;

        getVolumeId(): java.lang.String;
        setVolumeId(value: java.lang.String): void;

        getWatermarkId(): java.lang.Integer;
        setWatermarkId(value: java.lang.Integer): void;
    }

    declare class SociableDocumentDto {}
}


declare namespace com.totvs.technology.ecm.dm.ws {
    declare class WebServiceMessage {
        getCompanyId(): number;
        getDocumentDescription(): java.lang.String;
        getDocumentId(): java.lang.Integer;
        getVersion(): number;
        getWebServiceMessage(): java.lang.String;
    }

    declare class WebServiceMessageArray {
        getItem(): java.util.List<WebServiceMessage>;
    }
}

declare namespace java.lang {
    declare class Object {
        /**
         * Retorna o valor do objeto como uma string
         */
        toString(): String;
    }

    declare class String {
        constructor();
        constructor(original: string);

        /**
         * Pega o char da posição indicada.
         *
         * Importante: embora o método deva devolver um char o Fluig
         * trata como um número (provavelmente o código ASCII do char).
         *
         * Se precisar da letra utilize o método substring indicando índice
         * inicial e final ou converta utilizando a classe Character.
         *
         * @example
         * var str = new java.lang.String("texto");
         * str.substring(1, 2); // Retornará "e"
         *
         * var str = new java.lang.String("012");
         * Character.digit(str.charAt(2), 10); // Retornará número 2
         * Character.toString(str.charAt(2)); // Retornará string 2
         */
        charAt(index: number): number;

        /**
         * Compara duas strings
         *
         * Retorna 0 se as strings forem iguais, menor que zero se essa string
         * for menor do que a outra string ou maior que zero se essa string for
         * maior do que a outra.
         */
        compareTo(anotherString: string): number;

        /**
         * Compara duas strings ignorando as diferenças de maiúscula e minúscula
         *
         * Retorna 0 se as strings forem iguais, menor que zero se essa string
         * for menor do que a outra string ou maior que zero se essa string for
         * maior do que a outra.
         */
        compareToIgnoreCase(anotherString: string): number;

        /**
         * Retorna verdadeiro se essa string contém a string informada
         */
        contains(substring: string): boolean;

        /**
         * Retorna verdadeiro se essa string termina com a string informada
         */
        endsWith(suffix: string): boolean;

        /**
         * Retorna verdadeiro se essa string começa com a string informada
         */
        startsWith(prefix: string): boolean;

        /**
         * Retorna verdadeiro se ambas strings forem iguais ignorando case
         */
        equalsIgnoreCase(anotherString: string): boolean;

        /**
         * Retorna o índice da primeira ocorrência da string informada
         */
        indexOf(str: string): number;

        /**
         * Retorna o índice da primeira ocorrência da string informada a partir do índice indicado
         */
        indexOf(str: string, fromIndex: number): number;

        /**
         * Retorna o índice da última ocorrência da string informada
         */
        lastIndexOf(str: string): number;

        /**
         * Retorna o índice da última ocorrência da string informada a partir do índice indicado
         */
        lastIndexOf(str: string, fromIndex: number): number;

        /**
         * Retorna a quantidade de caracteres da string
         */
        length(): number;

        /**
         * Retorna verdadeiro se a string satisfaz a Expressão Regular
         */
        matches(regex: string): boolean;

        /**
         * Substitui nessa string todos os trechos que satisfaçam a string target
         *
         * Importante: esse método não aceita Expressão Regular.
         *
         * @param target Texto a procurar
         * @param replacement Texto a substituir
         */
        replace(target: string, replacement: string): String;

        /**
         * Substitui nessa string todos os trechos que satisfaçam a string de Expressão Regular
         *
         * @param regex String de Expressão Regular
         * @param replacement Texto a substituir
         */
        replaceAll(regex: string, replacement: string): String

        /**
         * Divide a string em arrays satisfazendo a Expressão Regular fornecida
         *
         * @param regex String de Expressão Regular
         */
        split(regex: string): String[];

        /**
         * Divide a string em arrays satisfazendo a Expressão Regular fornecida
         *
         * @param regex String de Expressão Regular
         * @param limit Número máximo de partes a dividir a string
         */
        split(regex: string, limit: number): String[];

        /**
         * Retorna uma substring iniciando no índice indicado até o final da string
         *
         * @param beginIndex Índice inicial, começando em 0
         */
        substring(beginIndex: number): String;

        /**
         * Retorna uma substring iniciando no índice indicado até o índice final
         *
         * @param beginIndex Índice inicial, começando em 0
         * @param endIndex Índice final, começando em 0
         */
        substring(beginIndex: number, endIndex: number): String;

        /**
         * Converte a string para letras minúsculas
         */
        toLowerCase(): String;

        /**
         * Converte a string para letras maiúsculas
         */
        toUpperCase(): String;

        /**
         * Remove espaços em branco do início e fim da string
         */
        trim(): String;
    }

    declare class Character {
        /**
         * Retorna o caractere como uma String
         *
         * @param c Código do CHAR
         */
        toString(c: number): String;

        /**
         * Converte o caractere em um número
         *
         * @param c Código do CHAR
         * @param radix Base a converter (normalmente 10 pra indicar que é decimal)
         */
        digit(c: number, radix: number): number;
    }

    declare class Integer extends Object {
        constructor(value: number);
        constructor(value: string);

        /**
         * Converte a String em Integer
         */
        static valueOf(value: String): Integer;

        /**
         * Converte a String em number
         */
        static parseInt(value: String): number;
    }

    declare class Long extends Object {
        constructor(value: number);
        constructor(value: string);

        /**
         * Converte a String em Integer
         */
        static valueOf(value: String): Long;

        /**
         * Converte a String em number
         */
        static parseLong(value: String): number;
    }

    declare class Boolean extends Object {
        /**
         * Cria um Boolean com valor true se a string não for vazia e for igual a "true" (case insensitive)
         */
        constructor(value: string);

        constructor(value: boolean);

        /**
         * Converte a String em boolean
         */
        static parseBoolean(value: string): boolean;

        /**
         * Converte a String em Boolean
         */
        static valueOf(value: string): Boolean;
    }

    declare class Byte extends Object {}
}

declare namespace javax.naming {
    /**
     * Inicia um Contexto
     */
    declare class InitialContext {

        /**
         * Recupera o DataSource do Banco de Dados
         *
         * @param {string} dataSource O nome do dataSource. Ex: /jdbc/PostgreSqlDS
         * @throws Exception
         */
        lookup(dataSource: string): javax.sql.DataSource;

        /**
         * Fecha o contexto ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }
}

declare namespace javax.sql {
    declare class DataSource {
        /**
         * Recupera a Conexão com o Banco de Dados
         *
         * @throws Exception
         */
        getConnection(): Connection;
    }

    /**
     * Conexão com o Banco de Dados
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/Connection.html
     */
    declare class Connection {
        /**
         * Cria o objeto que executará o SQL
         *
         * @throws Exception
         */
        createStatement(): Statement;

        /**
         * Encerra a conexão ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    /**
     * Objeto que executa uma instrução SQL
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/Statement.html
     */
    declare class Statement {
        /**
         * Executa um SQL que deve ser uma consulta (SELECT)
         *
         * @throws Exception
         */
        executeQuery(sql: string): ResultSet;

        /**
         * Executa um SQL que modifica algo no banco (INSERT, UPDATE ou DELETE)
         *
         * @returns {number} Quantidade de registros afetados
         * @throws Exception
         */
        executeUpdate(sql: string): number;

        /**
         * Executa um SQL árbitrário. Para pegar o resultado precisa utilizar
         *
         * Caso necessite do resultado deve-se utilizar os métodos getResultSet ou getUpdateCount para recuperar os valores,
         * e o método getMoreResults para pegar os demais resultados em consultas que retornam múltiplos resultados.
         *
         * Este método não pode ser chamado em uma PreparedStatement ou CallableStatement.
         *
         * @returns {boolean} true se o primeiro resultado for um ResultSet; false se for um contador de update ou sem resultado
         * @throws Exception
         */
        execute(sql: string): boolean;

        /**
         * Retorna o resultado atual
         *
         * @throws Exception
         */
        getResultSet(): ResultSet;

        /**
         * Retorna o contador de linhas atualizadas quando é um update
         *
         * @returns {number} Retornará -1 quando não há mais resultados
         * @throws Exception
         */
        getUpdateCount(): number;

        /**
         * Move para o próximo resultado indicando se conseguiu mover para o próximo
         *
         * Este método é utlizado quando há um retorno de múltiplos resultados. A cada chamada deste método ele avança para
         * o próximo resultado, que você poderá obter usando os métodos getResultSet e getUpdateCount.
         *
         * @example
         * while (stmt.getMoreResults() != false) {
         *     var result = stmt.getResultSet();
         * }
         *
         * @returns {boolean}
         * @throws Exception
         */
        getMoreResults(): boolean;

        /**
         * Libera os recursos da execução imediatamente ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    /**
     * Representa o resultado de uma consulta SQL
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/ResultSet.html
     */
    declare class ResultSet {

        /**
         * Move o cursor para o primeiro resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        first(): boolean;

        /**
         * Move o cursor para o último resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        last(): boolean;

        /**
         * Move o cursor para o próximo resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        next(): boolean;

        /**
         * Move o cursor para o resultado anterior da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        previous(): boolean;

        /**
         * Pega o número, tipos e propriedades das colunas retornadas na consulta
         */
        getMetaData(): ResultSetMetaData;

        /**
         * Retorna o valor da coluna como um Objeto Java
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getObject(columnIndex: number): java.lang.Object;
        getObject(columnLabel: string): java.lang.Object;

        /**
         * Retorna o valor da coluna como uma string
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getString(columnIndex: number): java.lang.String;
        getString(columnLabel: string): java.lang.String;

        /**
         * Retorna o valor da coluna como um boolean
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getBoolean(columnIndex: number): boolean;
        getBoolean(columnLabel: string): boolean;

        /**
         * Retorna o valor da coluna como objeto Date
         *
         * Esse método retorna um java.sql.Date que herda de java.util.Date.
         * Para evitar retrabalho deixei como java.util.Date mesmo.
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como byte, java.sql.Blob etc.
         */
        getDate(columnIndex: number): java.util.Date;
        getDate(columnLabel: string): java.util.Date;

        /**
         * Libera o resultado da consulta imediatamente ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    declare class ResultSetMetaData {
        /**
         * Pega o total de colunas da consulta
         */
        getColumnCount(): number;

        /**
         * Pega o Nome da Coluna (label)
         */
        getColumnName(column: number): java.lang.String;
    }
}

declare namespace java.text {

    /**
     * Formatador de Datas
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
     */
    declare class SimpleDateFormat {
        /**
         * Cria um novo formatador de datas com o padrão indicado
         *
         * Exemplos:
         *
         * - "dd/MM/yyyy" -> data no formato pt-BR
         * - "yyyy-MM-dd" -> data no formato ISO
         * - "HH:mm" -> Hora (24h) e minuto
         * - "yyyy-MM-dd'T'HH:mm:ss.SSSZ" -> Data completa (Ex: 2021-07-04T12:08:56.235-0700)
         *
         * @tutorial https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
         */
        constructor(formato: string);

        /**
         * Aplica o padrão de data de forma similar ao construtor
         */
        applyPattern(formato: string): void;

        /**
         * Retorna a data formatada conforme o padrão da formatação
         */
        format(data: java.util.Date): java.lang.String;

        /**
         * Converte uma string, formatada como indicado no construtor, em um objeto Date
         */
        parse(dataFormatada: string): java.util.Date;
    }
}

declare namespace java.util {
    declare abstract class Iterator<T> {
        /**
         * Indica se ainda há elementos a percorrer
         */
        hasNext(): boolean;

        /**
         * Pega o próximo elemento
         */
        next(): T;
    }

    declare abstract class Set<T> {
        /**
         * Adiciona um elemento ao conjunto
         */
        add(value: T): boolean;

        /**
         * Indica se o conjunto está vazio
         */
        isEmpty(): boolean;

        /**
         * Pega a quantidade de elementos do conjunto
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
        * Verifica se existe o elemento
        */
        contains(value: T): boolean;

        /**
         * Pega um iterator para percorrer o conjunto
         */
        iterator(): java.util.Iterator<T>;

        /**
         * Remove o elemento indicado
         */
        remove(value: T): boolean;

        /**
         * Retorna um array com todos os elementos
         */
        toArray(): T[];
    }

    declare abstract class List<T> {
        /**
         * Pega o elemento no índice indicado
         */
        get(index: number): T;

        /**
         * Adiciona um elemento à lista
         */
        add(value: T): void;

        /**
         * Adiciona todos os elementos da lista indicada para esta lista
         */
        addAll(l: java.util.List<T>): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
         * Verifica se existe o elemento
         */
        contains(value: T): boolean;

        /**
         * Indica se a lista está vazia
         */
        isEmpty(): boolean;

        /**
         * Pega um iterator para percorrer a lista
         */
        iterator(): java.util.Iterator<T>

        /**
         * Remove o elemento
         */
        remove(value: T): boolean;

        /**
         * Retorna um array com todos os elementos da lista
         */
        toArray(): T[];
    }

    declare class ArrayList<T> extends List<T> {
    }

    declare abstract class Map<K, V> {
        /**
         * Pega o elemento no índice indicado
         */
        get(name: K): V;

        /**
         * Adiciona um elemento
         */
        put(name: K, value: V): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
         * Copia todos os elementos do mapa indicado para este mapa
         */
        putAll(m: java.util.Map<K, V>): void;

        /**
         * Retorna um conjunto com as chaves do Mapa
         */
        keySet(): java.util.Set<K>;

        /**
         * Retorna verdadeiro se houver item para a chave indicada
         */
        containsKey(name: K): boolean;

        /**
         * Retorna verdadeiro se o mapa está vazio
         */
        isEmpty(): boolean;

        /**
         * Remove o elemento indicado pela chave
         */
        remove(name: K): V;
    }

    declare class HashMap<K, V> extends java.util.Map<K, V> {
    }

    declare class LinkedHashSet<T> extends java.util.Set<T> {
    }

    declare class LinkedHashMap<K, V> extends java.util.HashMap<K, V> {
    }

    declare class Date {

        /**
         * Inicializa com a data do momento que o objeto foi criado
         */
        constructor();

        /**
         * Inicializa com a data em milisegundos decorridos desde 1970-01-01 00:00:00 GMT
         */
        constructor(date: number);

        /**
         * Compara se essa data é posterior à data indicada
         */
        after(when: Date): boolean;

        /**
         * Compara se essa data é anterior à data indicada
         */
        before(when: Date): boolean;

        /**
         * Retorna o dia do mês
         *
         * @deprecated Usar Calendar.get(Calendar.DAY_OF_MONTH)
         */
        getDate(): number;

        /**
         * Retorna o dia da semana
         *
         * @deprecated Usar Calendar.get(Calendar.DAY_OF_WEEK)
         */
        getDay(): number;

        /**
         * Retorna a hora
         *
         * @deprecated Usar Calendar.get(Calendar.HOUR_OF_DAY)
         */
        getHours(): number;

        /**
         * Retorna os minutos
         *
         * @deprecated Usar Calendar.get(Calendar.MINUTE)
         */
        getMinutes(): number;

        /**
         * Retorna o mês
         *
         * @deprecated Usar Calendar.get(Calendar.MONTH)
         */
        getMonth(): number;

        /**
         * Retorna os segundos
         *
         * @deprecated Usar Calendar.get(Calendar.SECOND)
         */
        getSeconds(): number;

        /**
         * Retorna o ano
         *
         * @deprecated Usar Calendar.get(Calendar.YEAR) - 1900
         */
        getYear(): number;

        /**
         * Atribui o dia do mês
         *
         * @deprecated Usar Calendar.set(Calendar.DAY_OF_MONTH, dia)
         */
        setDate(): number;

        /**
         * Atribui a hora
         *
         * @deprecated Usar Calendar.get(Calendar.HOUR_OF_DAY, hora)
         */
        setHours(): number;

        /**
         * Atribui os minutos
         *
         * @deprecated Usar Calendar.set(Calendar.MINUTE, minutos)
         */
        setMinutes(): number;

        /**
         * Atribui o mês
         *
         * @deprecated Usar Calendar.set(Calendar.MONTH, mes)
         */
        setMonth(): number;

        /**
         * Atribui os segundos
         *
         * @deprecated Usar Calendar.set(Calendar.SECOND, segundos)
         */
        setSeconds(): number;

        /**
         * Atribui o ano
         *
         * @deprecated Usar Calendar.set(Calendar.YEAR, ano + 1900)
         */
        setYear(): number;
    }

    /**
     * A Classe Calendar não deve ser instanciada com operador new. Use sempre o método getInstance().
     *
     * Essa classe á abstrata e o Java normalmente vai instanciar um GregorianCalendar quando chamada a getInstance().
     */
    declare abstract class Calendar {
        /**
         * Cria uma instância de Calendário
         *
         * Essa classe é abstrata, por isso não é possível instanciá-la diretamente.
         */
        static getInstance(): Calendar;

        // Constantes indicando os valores dos meses

        /**
         * Indica o valor de Janeiro
         */
        static const JANUARY: number;

        /**
         * Indica o valor de Fevereiro
         */
        static const FEBRUARY: number;

        /**
         * Indica o valor de Março
         */
        static const MARCH: number;

        /**
         * Indica o valor de Abril
         */
        static const APRIL: number;

        /**
         * Indica o valor de Maio
         */
        static const MAY: number;

        /**
         * Indica o valor de Junho
         */
        static const JUNE: number;

        /**
         * Indica o valor de Julho
         */
        static const JULY: number;

        /**
         * Indica o valor de Agosto
         */
        static const AUGUST: number;

        /**
         * Indica o valor de Setembro
         */
        static const SEPTEMBER: number;

        /**
         * Indica o valor de Outubro
         */
        static const OCTOBER: number;

        /**
         * Indica o valor de Novembro
         */
        static const NOVEMBER: number;

        /**
         * Indica o valor de Dezembro
         */
        static const DECEMBER: number;

        // Constantes de horário

        /**
         * Indica que a hora é antes de meio dia
         */
        static const AM: number;

        /**
         * Indica que a hora é após meio dia
         */
        static const PM: number;

        // Constantes de dia da semana

        /**
         * Indica que é Domingo
         */
        static const SUNDAY: number;

        /**
         * Indica que é segunda-feira
         */
        static const MONDAY: number;

        /**
         * Indica que é terça-feira
         */
        static const TUESDAY: number;

        /**
         * Indica que é quarta-feira
         */
        static const WEDNESDAY: number;

        /**
         * Indica que é quinta-feira
         */
         static const THURSDAY: number;

        /**
         * Indica que é sexta-feira
         */
        static const FRIDAY: number;

        /**
         * Indica que é Sábado
         */
        static const SATURDAY: number;


        // Constantes de campo

        /**
         * Campo que indica se horário é antes ou depois do meio dia
         */
        static const AM_PM: number;

        /**
         * Campo que indica o dia do mês
         */
        static const DATE: number;

        /**
         * Campo que indica o dia do mês
         */
        static const DAY_OF_MONTH: number;

        /**
         * Campo que indica o dia da semana
         */
        static const DAY_OF_WEEK: number;

        /**
         * Campo que indica o dia do ano
         */
        static const DAY_OF_YEAR: number;

        /**
         * Campo que indica a hora antes ou depois do meio dia (12h)
         */
        static const HOUR: number;

        /**
         * Campo que indica a hora do dia (24h)
         */
        static const HOUR_OF_DAY: number;

        /**
         * Campo que indica os milissegundos
         */
        static const MILLISECOND: number;

        /**
         * Campo que indica os minutos
         */
        static const MINUTE: number;

        /**
         * Campo que indica o mês
         */
        static const MONTH: number;

        /**
         * Campo que indica os segundos
         */
        static const SECOND: number;

        /**
         * Campo que indica a semana do mês
         */
        static const WEEK_OF_MONTH: number;

        /**
         * Campo que indica a semana do ano
         */
        static const WEEK_OF_YEAR: number;

        /**
         * Campo que indica o ano
         */
        static const YEAR: number;

        /**
         * Retorna o valor do campo indicado
         *
         * @param {number} campo Uma das constantes da classe indicando o campo
         */
        get(campo: number): number;

        /**
         * Atribui o valor ao campo indicado
         *
         * @param {number} campo Uma das constantes da classe indicando o campo
         * @param {number} valor O valor que será atribuído ao campo
         */
        set(campo: number, valor: number): void;

        /**
         * Retorna o calendário como um objeto Date
         */
        getTime(): Date;

        /**
         * Configura o calendário usando um objeto Date
         */
        setTime(data: Date): void;

        /**
         * Compara se essa data é posterior à data indicada
         */
        after(data: Calendar): boolean;

        /**
         * Compara se essa data é anterior à data indicada
         */
        before(data: Calendar): boolean;

        /**
         * Configura o calendário com o Ano, Mês e Dia
         */
        set(ano: number, mes: number, dia: number): void;

        /**
         * Configura o calendário com o Ano, Mês, Dia, Hora e Minutos
         */
        set(ano: number, mes: number, dia: number, hora: number, minutos: number): void;

        /**
         * Configura o calendário com o Ano, Mês, Dia, Hora, Minutos e Segundos
         */
        set(ano: number, mes: number, dia: number, hora: number, minutos: number, segundos: number): void;

        /**
         * Adiciona ou Subtrai 1 unidade do campo indicado
         *
         * @param {number} campo Uma das constantes de campo
         * @param {boolean} aumentaValor Se for true aumentará o campo, senão ele será diminuído
         */
        roll(campo: number, aumentaValor: boolean): void;

        /**
         * Adiciona ou Subtrai unidades do campo indicado
         *
         * @param {number} campo Uma das constantes de campo
         * @param {boolean} valor Valor que será utilizado no cálculo. Se positivo aumentará, se negativo diminuirá
         */
        roll(campo: number, valor: number): void;

        /**
         * Adiciona ou subtrai a quantidade indicada do campo indicado
         *
         * @param campo Uma das constantes de campo
         * @param valor Valor que será utilizado no cálculo. Se negativo vai subtrair
         */
        add(campo: number, valor: number): void;
    }

    declare class UUID {
        /**
         * Cria um UUID tipo 4 (geração pseudo aleatória)
         */
        static randomUUID(): UUID;

        /**
         * Retorna uma string representando o UUID
         */
        toString(): java.lang.String;
    }
}

interface IwsConsultaSQL {
    /**
     * Realiza uma consulta a um SQL previamente cadastrado no BI do RM
     *
     * @param {string} sql Código (ID) do SQL cadastrado no RM
     * @param {number} coligadaNumber
     * @param {string} systemCode
     * @param {string} parameters Separe-os com ; e mantenha a sequência que o SQL pede. Ex: CODCOLIGADA=1;CODPROJ=00689
     */
    realizarConsultaSQL(sql:string, coligadaNumber:number, systemCode:string, parameters:string): string;

    /**
     * Realiza uma consulta a um SQL previamente cadastrado no BI do RM
     *
     * @param {string} sql Código (ID) do SQL cadastrado no RM
     * @param {number} coligadaNumber
     * @param {string} systemCode
     * @param {string} username
     * @param {string} password
     * @param {string} parameters Separe-os com ; e mantenha a sequência que o SQL pede. Ex: CODCOLIGADA=1;CODPROJ=00689
     */
    realizarConsultaSQLAuth(sql:string, coligadaNumber:number, systemCode:string, username:string, password:string, parameters:string): string;
}

declare namespace com.fluig.sdk.filter {
    declare class FilterFieldVO {}
    declare class FilterGroupResultVO {}
    declare class FilterGroupVO {}
    declare class FilterOrderVO {}
    declare class FilterResultVO {}
    declare class FilterVO {}
}

declare namespace com.fluig.sdk.identity {
    declare class UserAuthTokenSessionVO {}
}

declare namespace com.fluig.sdk.page {
    declare class PageMobileApiVO {}
    declare class PageWidgetMobileApiVO {}
    declare class PublicApiPageVO {}
}

/**
 * Serviços do Fluig
 */

declare namespace com.fluig.sdk.service {
    /**
     * Fornece acesso aos serviços de notificações
     */
    declare class AlertService {
        /**
         * Método que conta os alertas não lidos de um usuário.
         */
        countUnreadAlerts(receiverId: number): number;

        /**
         * Método que conta os alertas de um modulo não lidos de um usuário
         */
        countUnreadAlertsByModule(module: string, receiverId: number): number;

        /**
         * Get the number of notification in the tenant
         */
        getTenantTotalOfNotification(): number;

        /**
         * Busca os alertas com ação vinculada, do usuário logado ordenado pela data de criação.
         */
        listAlertsWithAction(limit: number, offset: number): java.util.List<com.fluig.sdk.api.alert.AlertVO>

        /**
         * Busca os alertas com nota, do usuário logado ordenado pela data de criação.
         */
        listAlertsWithNote(limit: number, offset: number): java.util.List<com.fluig.sdk.api.alert.AlertVO>

        /**
         * Retorna todas as notificações do usuário logado ordenadas pela data de criação.
         */
        listAllAlerts(limit: number, offset: number): java.util.List<com.fluig.sdk.api.alert.AlertVO>

        /**
         * Retorna todas as notificações de um usuário por um único módulo
         */
        listAllAlertsByModule(module: string, limit: number, offset: number): java.util.List<com.fluig.sdk.api.alert.AlertVO>

        /**
         * Método marca os alertas informados de um usuário também dado como lidos
         */
        markAlertAsRead(loginReceiver: string, alertsId: java.util.List<number>): void;

        /**
         * Método marca todos os alertas de um usuário como lidos.
         */
        markAllAlertsAsRead(loginReceiver: string): void;

        /**
         * Método que remove os alertas informados de um usuário também dado, esse método também é responsável por remover os senders, places e objects relacionado aos alertas
         */
        removeAlerts(loginSender: string, alertsId: java.util.List<number>): void;

        /**
         * Salva a configuração de um usuário para receber ou não alertas de um dado evento através de um dado aplicativo.
         */
        saveConfiguration(alertConfig: com.fluig.sdk.api.alert.AlertConfigVO): void;

        /**
         * Envia uma Notificação de Sistema e também um e-mail de notificação
         *
         * De acordo com o Evento disparado ele dispara e-mail específico da notificação,
         * podedendo gerar erro de disparo de e-mail por não ter os dados necessários ao template
         * do e-mail disparado. Não descobri como configurar template de e-mail para a notificação nem os dados.
         *
         * Usando o serviço AlertServiceRest da API REST (antiga) é possível listar os módulos e eventos disponíveis,
         * assim como criar novos módulos e eventos para facilitar o disparo de notificações.
         * @see https://api.fluig.com/old/resource_AlertServiceRest.html
         *
         * @example
         * var alertService = fluigAPI.getAlertService();
         *
         * var objeto = new com.totvs.technology.foundation.alert.GenericAlertObject(
         *     -1,
         *    "alertObjectClass",
         *    "Solicitação de Veículo",
         *    "2537",
         *    "",
         *    "/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=2537"
         * );
         *
         * alertService.sendNotification(
         *     "FROTA_REAGENDAR_VEICULO",
         *     null,
         *     "bruno.gasparetto",
         *     objeto,
         *     null,
         *     null,
         *     null
         * );
         *
         * @param eventKey Chave do Evento
         * @param loginSender Login de quem enviou a notificação
         * @param loginReceiver Login de quem receberá a notificação
         * @param object Objeto que identifica a notificação
         * @param place Objeto que identifica a origem da notificação
         * @param actions Ações
         * @param metadata Dados adicionais para tratamento em eventos de notificação
         */
        sendNotification(
            eventKey: string,
            loginSender:? string,
            loginReceiver: string,
            object: com.totvs.technology.foundation.alert.AlertObject,
            place:? com.totvs.technology.foundation.alert.AlertObject,
            actions:? java.util.List<com.totvs.technology.foundation.alert.AlertAction>,
            metadata:? java.util.HashMap<string, string>
        ): void;
    }

    declare class ArticleService {}

    /**
     * Cliente para requisições externas usando autenticação do Fluig
     */
    declare class AuthorizeClientSdkService {
        /**
         * Executa a chamada ao WS
         *
         * O parâmetro passado deve ser um objeto convertido em string (JSON.stringfy) com as seguintes propriedades:
         *
         * - companyId;
         * - serviceCode: ID do serviço cadastrado no Fluig;
         * - endpoint;
         * - method: Método HTTP (GET, POST, PUT, DELETE);
         * - timeoutService (em segundos);
         * - params: Objeto com os valores a serem enviados na requisição;
         * - headers: Objeto com os valores a serem enviados no cabeçalho;
         * - options: Objeto com as propriedades da requisição:
         *     - encoding (padrão UTF-8)
         *     - mediaType (padrão application/json)
         *     - useSSL (padrão false)
         *
         * @tutorial https://tdn.totvs.com/pages/releaseview.action?pageId=239041233#Autoriza%C3%A7%C3%A3oparaclientdeServi%C3%A7osREST-Consumindooservi%C3%A7ocomautentica%C3%A7%C3%A3oOAuth1,OAuth2,BasicAuthentication,CustomAuthenticationeNoneAuthentication
         */
        invoke(data: string): com.fluig.sdk.api.authorizeclient.AuthorizeClientSdkServiceVO;
    }


    /**
     * Serviço para tratar registros de formulários
     */
    declare class CardAPIService {
        /**
         * Cria um registro no formulário
         *
         * @param documentId ID do Formulário
         * @param cardFieldVOs Campos e Valores
         */
        create(documentId: number, cardFieldVOs: java.util.ArrayList<com.fluig.sdk.api.cardindex.CardFieldVO>);

        /**
         * Cria um registro pai filho no registro do formulário
         *
         * @param cardId ID do registro do formulário
         * @param cardFieldVOs Campos e Valores
         */
        createChild(cardId: number, cardFieldVOs: java.util.ArrayList<com.fluig.sdk.api.cardindex.CardFieldVO>): com.fluig.sdk.api.cardindex.CardChildrenVO;

        /**
         * Altera um registro do formulário
         *
         * @param cardId ID do registro do formulário
         * @param cardFieldVOs Campos e Valores
         */
        edit(cardId: number, cardFieldVOs: java.util.ArrayList<com.fluig.sdk.api.cardindex.CardFieldVO>): com.fluig.sdk.api.cardindex.CardFindFieldVO;

        /**
         * Altera um registro pai filho no registro do formulário
         *
         * @param cardId ID do registro do formulário
         * @param row Linha do filho na tabela Pai Filho
         * @param cardFieldVOs Campos e Valores
         */
        editChild(cardId: number, row: number, cardFieldVOs: java.util.ArrayList<com.fluig.sdk.api.cardindex.CardFieldVO>): com.fluig.sdk.api.cardindex.CardChildrenVO;

        /**
         * Procura os registros do formulário pelo número do formulário e número do registro
         *
         * @param documentId ID do Formulário
         * @param cardId ID do Registro
         */
        findById(documentId: number, cardId: number, fields: java.util.ArrayList<java.lang.String>, expandedFields: java.util.ArrayList<java.lang.String>): com.fluig.sdk.api.cardindex.CardFindFieldVO;

        /**
         * Procura os registros do formulário filho pelo numero do registro e linha
         *
         * @param cardId ID do Registro do Formulário
         * @param row Linha do filho na tabela Pai Filho
         */
        findChildByCardIdAndRow(cardId: number, row: number, fields: java.util.ArrayList<java.lang.String>): com.fluig.sdk.api.cardindex.CardChildrenVO;

        /**
         * Lista os registros do formulário filho
         *
         * @param cardId ID do Registro do Formulário
         * @param page Página
         * @param pageSize Tamanho da Página
         * @param fields Campos
         */
        findChildrenByCardId(cardId: number, page: number, pageSize: number, fields: java.util.ArrayList<java.lang.String>): com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<com.fluig.sdk.api.cardindex.CardChildrenVO>;

        /**
         * Remove um registro de formulário
         *
         * @param cardId ID do Registro do Formulário
         */
        remove(cardId: number): boolean;

        /**
         * Remove o registro pai filho do registro do formulário
         *
         * @param cardId ID do Registro do Formulário
         * @param row Linha do filho na tabela Pai Filho
         */
        removeChild(cardId: number, row: number): com.fluig.sdk.api.cardindex.CardChildrenVO;
    }

    declare class CardIndexService {}
    declare class CardService {}
    declare class CollaborationSDKService {}
    declare class CommentService {}
    declare class CommunityService {}
    declare class ContentFilesService {}
    /**
     * Fornece acesso aos serviços de documentos (GED)
     */
    declare class DocumentService {
        /**
         * Aprova ou reprova um documento.
         */
        approveDocument(documentId: number, version: number, approved: boolean, observation: string): void;

        /**
         * Copia o documento que esta na área de upload
         */
        copyDocumentToUploadArea(documentId: number): string[];

        /**
         * Cria o documento com permissões e aprovadores
         */
        createDocument(documentVO: com.fluig.sdk.api.document.DocumentVO): com.fluig.sdk.api.document.DocumentVO;

        /**
         * Cria uma documento privado
         */
        createPrivateDocument(companyId: number, userId: string, fileName: string, file: File): com.fluig.sdk.api.document.DocumentVO;

        /**
         * Cria uma documento privado
         */
        createPrivateDocument(companyId: number, userId: string, fileName: string, filePath: string): com.fluig.sdk.api.document.DocumentVO;

        /**
         * Remove o documento
         */
        deleteDocument(documentId: number): void;

        /**
         * Retorna o documento ativo passado o ID do mesmo.
         */
        getActive(documentId: number): com.fluig.sdk.api.document.DocumentVO

        /**
         * Retorna documento com as informações de checkout
         */
        getAllocatedDocument(documentId: number, version: number): com.fluig.sdk.api.document.AllocatedDocumentVO;

        getCurrentUserPermission(documentId: number): com.fluig.sdk.api.document.SolvedPermissionVO;

        /**
         * Return the approvement history of the document
         */
        getDocumentApprovalHistory(documentId: number): java.util.List<com.fluig.sdk.api.document.DocumentApprovementHistoryVO>;

        /**
         * Retrieve all document approvers and yours status.
         */
        getDocumentApprovers(documentId: number): java.util.List<com.fluig.sdk.api.document.DocumentApproverVO>;

        /**
         * Retorna as permissões do documento
         */
        getDocumentPermissions(documentId: number, version: number): java.util.List<com.fluig.sdk.api.document.DocumentPermissionVO>;

        /**
         * Retorna a url do documento
         */
        getDownloadURL(documentId: number): string;

        /**
         * Retorna a permissão do usuário em um documento.
         */
        getUserPermissions(documentId: number, version: number, user: string): number;

        /**
         * Set Approvers for a specific document
         */
        setDocumentApprovers(documentId: number, documentSecurityVO: com.fluig.sdk.api.document.DocumentSecurityVO): void;

        /**
         * Determina as permissões do documento
         */
        setDocumentPermissions(documentId: number, permissions: java.util.List<com.fluig.sdk.api.document.DocumentPermissionVO>): void;

        /**
         * Update file
         */
        updateFile(docVO: com.fluig.sdk.api.document.DocumentVO): com.fluig.sdk.api.document.DocumentVO;

        /**
         * Valida configurações de documento
         */
        validateDocumentPublicUrlConfiguration(tenantId: number, documentId: number, version: number): void;
    }
    declare class DocumentationProxyServiceService {}
    declare class FavoritesService {}
    declare class FilterAPIService {}

    /**
     * Fornece acesso aos serviços de pastas (GED)
     */
    declare class FolderDocumentService {
        /**
         * Criação de uma nova pasta
         */
        create(vo: com.fluig.sdk.api.document.FolderVO): com.fluig.sdk.api.document.FolderVO;

        /**
         * Recupera um documento através do id
         */
        get(documentId: number): com.fluig.sdk.api.document.DocumentVO;

        /**
         * Recupera lista de documentos através do id da pasta
         */
        list(folderId: number): java.util.List<com.fluig.sdk.api.document.DocumentVO>;

        /**
         * Recupera lista de documentos através do id da pasta
         */
        list(folderId: number, permission: number): java.util.List<com.fluig.sdk.api.document.DocumentVO>;

        /**
         * Retorna os documentos de uma pasta
         */
        listDocumentsByFolder(folderVO: com.fluig.sdk.api.document.FolderVO, limit: number, offset: number): java.util.List<com.fluig.sdk.api.document.DocumentVO>;

        /**
         * Atualiza documento ou pasta
         */
        updateDocumentDescription(companyId: number, documentId: number, description: string): com.fluig.sdk.api.document.DocumentVO;
    }
    declare class GlobalParameterService {}

    declare class GroupService {
        /**
         * Retorna os usuários de um grupo, mesmo que estejam dentro de subgrupo
         *
         * @param groupId Código do Grupo
         * @param pattern Não sei
         * @param limit Limite de usuários retornados (não pode ser 0 ou menor que 0)
         * @param offset A partir de qual índice retornará
         * @param order Ordem (não sei cmo utilizar)
         */
        findUsersByGroup(groupId: string, pattern: string, limit: number, offset: number, order: string): java.util.List<com.fluig.sdk.user.ColleagueVO>;
    }

    declare class HolidayAPIService {}
    declare class I18NService {}
    declare class IdentityService {}
    declare class JobService {}
    declare class LocalAPIService {}

    /**
     * Serviço para tratar páginas
     */
    declare class PageService {
        createPageDraftFromVersion(pageCode: string, pageVersion: number): void;
        disable(pageCode: string): void;
        enable(pageCode: string): void;

        /**
         * Retorna itens de menu da página
         */
        findMenuFromPage(pageCode: string): java.util.List<com.fluig.sdk.page.PublicApiPageVO>;

        /**
         * Consulta páginas do fluig
         */
        findPages(parentPageCode: string, isMobile: boolean, filter: string, start: number, size: number, searchLevel: number, internalPages: boolean): java.util.List<com.fluig.sdk.page.PublicApiPageVO>;
        findPages(parentPageCode: string, isMobile: boolean, filter: string, start: number, size: number, searchLevel: number, internalPages: boolean, codePage: string): java.util.List<com.fluig.sdk.page.PublicApiPageVO>;

        /**
         * Retorna a URL do servidor
         */
        getServerURL(): string;

        /**
         * Recupera os valores de preferências para uma instância de uma widget.
         */
        getWidgetPreferences(instanceId: number): java.util.HashMap<string, string>;

        mobileMapping(pageCode: string): com.fluig.sdk.page.PageMobileApiVO;

        hide(pageCode: string): void;

        publishPageDraft(pageCode: string, publicationDescription: string): void;

        pageHistory(pageCode: string): java.util.List<string>;

        /**
         * Recarrega o layout de uma página
         */
        reloadPageLayout(pageCode: string): void;

        /**
         * Seta o valor de uma preferência para uma instância de uma widget
         */
        setWidgetPreference(instanceId: number, key: string, value: string): void;

        show(pageCode: string): void;
    }

    declare class PageWidgetService {}
    declare class PostService {}
    declare class SearchService {}

    declare class SecurityService {
        /**
         * Verifica se o usuário logado possui determinada permissão no recurso informado
         */
        hasPermission(resource: string, permission: string): boolean;

        /**
         * Lista os recursos da categoria
         */
        listResourcesByCategory(category: string, filter: string, offset: number, limit: number): java.util.List<com.fluig.sdk.api.permission.PermissionAssetVO>

        /**
         * Lista as permissões do recurso informado
         */
        getPermissionsByResourceCode(resourceCode: string): java.util.List<com.fluig.sdk.api.permission.PermissionVO>

        /**
         * Crias as permissões para o recurso
         */
        createPermissions(resourceCode: string, permissions: java.util.List<com.fluig.sdk.api.permission.PermissionVO>): void;

        /**
         * Remove as permissões do recurso
         */
        deletePermissions(resourceCode: string, permissions: java.util.List<com.fluig.sdk.api.permission.PermissionVO>): void;

        /**
         * Recupera o Tenant corrente
         */
        getCurrentTenant(): com.fluig.sdk.tenant.TenantVO;
    }

    declare class SocialBreadcrumbService {}
    declare class SocialSDKService {}
    declare class TagsCloudService {}
    declare class TasksService {}
    declare class TenantService {}

    /**
     * Fornece acesso aos serviços de usuário
     */
    declare class UserService {

        /**
         * Ativa um usuário
         *
         * @param genericId login, userCode (matrícula) ou idpId
         */
        activateByCode(genericId: string): void

        /**
         * Desativa um usuário
         *
         * @param genericId login, userCode (matrícula) ou idpId
         */
        deactivateByCode(genericId: string): void

        /**
         * Adiciona um usuário a um grupo
         */
        addUserToGroup(tenantId: number, groupCode: string, userVO: com.fluig.sdk.user.UserVO): void;

        /**
         * Altera a senha
         */
        changeUserPassword(vo: com.fluig.sdk.user.UserPasswordVO): void;

        /**
         * Cria um novo usuário
         */
        create(vo: com.fluig.sdk.user.UserVO): com.fluig.sdk.user.UserVO;
        create(tenantId: number, vo: com.fluig.sdk.user.UserVO): com.fluig.sdk.user.UserVO;

        /**
         * Retorna o usuário pelo id
         */
        findById(id: number): com.fluig.sdk.user.UserVO

        /**
         * Retorna o usuário pelo login
         */
        findByLogin(login: string): com.fluig.sdk.user.UserVO

        /**
         * Retorna usuário pelo ID
         */
        findByUserCode(colleagueId: string): com.fluig.sdk.user.UserVO

        /**
         * Retorna o usuário corrente logado
         */
        getCurrent(): com.fluig.sdk.user.UserVO

        /**
         * Pesquisa por usuários baseado em um conjunto de parâmetros.
         */
        list(offset: number, limit: number): java.util.List<com.fluig.sdk.user.UserVO>;
        list(params: java.util.HashMap<string, object>, offset: number, limit: number): java.util.List<com.fluig.sdk.user.UserVO>;
        list(sortField: string, sortType: string, limit: number, offset: number, search: string): java.util.List<com.fluig.sdk.user.UserVO>;

        /**
         * Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros.
         */
        listAll(sortField: string, sortType: string, limit: number, offset: number, search: string): java.util.List<com.fluig.sdk.user.UserVO>;

        /**
         * Pega todos os dados do usuário especificado pelo login
         */
        listData(login: string): java.util.HashMap<string, string>;

        /**
         * Pega todos os grupos do usuário especificado pelo login
         */
        listGroups(login: string): java.util.List<string>;

        /**
         * Pega todos os papéis do usuário especificado pelo login
         */
        listRoles(login: string): java.util.List<string>;

        /**
         * Remove dados do usuário
         */
        removeUserData(alias: string, key: string): void;

        /**
         * Atualiza o usuário
         */
        updateUser(vo: com.fluig.sdk.user.UserVO): com.fluig.sdk.user.UserVO;

        /**
         * Atualiza os dados do usuário logado
         */
        updateUserData(data: java.util.HashMap<string, string>): boolean;

        /**
         * Atualiza os dados do usuário procurando pelo ID
         */
        updateUserDataById(data: java.util.HashMap<string, string>, userId: string): boolean;

        /**
         * Atualiza usuário mesmo que esteja desabilitado (inativo)
         */
        updateUserEvenDisabled(vo: com.fluig.sdk.user.UserVO): com.fluig.sdk.user.UserVO;
    }
    declare class WidgetService {}

    /**
     * Fornece acesso aos serviços de workflow
     */
    declare class WorkflowAPIService {
        /**
         * Faz com que o usuário repassado assuma a tarefa
         */
        assumeProcessTask(assumeProcessTaskVO: com.fluig.sdk.api.workflow.AssumeProcessTaskVO): com.fluig.sdk.api.workflow.AssumeProcessTaskResultVO;
        assumeProcessTask(companyId: number, userId: string, processInstanceId: number, movementSequence: number, replacementId: string): com.fluig.sdk.api.workflow.ProcessTaskVO;

        /**
         * Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos
         */
        assumeProcessTasks(assumeProcessTasksVO: com.fluig.sdk.api.workflow.AssumeProcessTasksVO): com.fluig.sdk.api.workflow.AssumeProcessTaskResultVO;

        cancelInstance(cancelInstanceVO: com.fluig.sdk.api.workflow.CancelInstanceVO): com.fluig.sdk.api.workflow.CancelInstanceResultVO;
        cancelInstances(cancelInstanceVO: com.fluig.sdk.api.workflow.CancelInstancesVO): com.fluig.sdk.api.workflow.CancelInstancesResultVO;

        /**
         * Insere um complemento em uma solicitação
         */
        createProcessObservation(processObservationVO: com.fluig.sdk.api.workflow.ProcessObservationVO): com.fluig.sdk.api.workflow.ProcessObservationVO;

        findAssignedToMeTasks(processId: string, initialStartDate: string, finalStartDate: string, requester: string, manager: string, page: string, pageSize: string, statusTypeTaskRequest: string, calculate: string, expand: string, cardFilters: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestProcessTaskVO>;

        findManagedByMeTasks(processId: string, initialStartDate: string, finalStartDate: string, assignee: string, requester: string, page: string, pageSize: string, statusTypeTaskRequest: string, calculate: string, expand: string, cardFilters: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestProcessTaskVO>;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante
         */
        findMyRequestsSLA(processes: string, cardFilters: string, statusRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, expand: string, assignee: string, manager: string, order: string, calculate: string, page: string, pageSize: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;

        findMyRequestsTasks(processId: string, initialStartDate: string, finalStartDate: string, assignee: string, manager: string, page: string, pageSize: string, statusTypeTaskRequest: string, calculate: string, expand: string, cardFilters: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestProcessTaskVO>;

        /**
         * Retorna a lista de complementos em uma solicitação
         */
        findObservations(processInstanceId: number, stateSequence: number, threadSequence: number): java.util.List<com.fluig.sdk.api.workflow.ProcessObservationVO>;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável
         */
        findRequestSLAByProcessInstanceId(processInstanceId: number, populateCurrentTasks: boolean, calculate: boolean, populateCardFields: boolean, populateLocals: boolean, assigneeLocals: boolean): com.fluig.sdk.api.workflow.RequestSLAVO;
        findRequestSLAByProcessInstanceId(processInstanceId: string, expand: string, calculate: string): com.fluig.sdk.api.workflow.RequestSLAVO;

        /**
         * Recupera uma lista das solicitações de SLA dos processos configurados
         */
        findRequestsSLA(): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>, statusRequiredList: java.util.List<string>): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>, statusRequiredList: java.util.List<string>, returnCurrentTasks: boolean): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string, string>, statusRequiredList: java.util.List<string>, returnCurrentTasks: boolean): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string, string>, statusRequiredList: java.util.List<string>, initialStartDate: Date, finalStartDate: Date, initialDeadlineDate: Date, finalDeadlineDate: Date, initialWarningDate: Date, finalWarningDate: Date, returnCurrentTasks: boolean, requester: string, assignee: string, manager: string, requesterLocals: java.util.List<string>, assigneeLocals: java.util.List<string>, orderParams: java.util.List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam>, calculate: boolean, page: number, pageSize: number, populateCardFields: boolean, populateLocalsValue: boolean, populateAssigneeLocalsValue: boolean): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: string, cardFilters: string, statusRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, expand: string, requester: string, assignee: string, manager: string, requesterLocals: string, assigneeLocals: string, order: string, calculate: string, page: string, pageSize: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável
         */
        findRequestsSLAAssignedToMe(processes: string, cardFilters: string, statusRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, expand: string, requester: string, manager: string, requesterLocals: string, assigneeLocals: string, order: string, calculate: string, page: string, pageSize: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor
         */
        findRequestsSLAManagedByMe(processes: string, cardFilters: string, statusRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, expand: string, requester: string, assignee: string, requesterLocals: string, assigneeLocals: string, order: string, calculate: string, page: string, pageSize: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;

        findSLATasks(processId: string, initialStartDate: string, finalStartDate: string, assignee: string, requester: string, manager: string, page: string, pageSize: string, statusTypeTaskRequest: string, calculate: string, expand: string, cardFilters: string): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestProcessTaskVO>;

        /**
         * Retorna uma lista das atividades pendentes de um processo
         */
        getActiveTasks(processInstanceId: number): com.fluig.sdk.api.workflow.ProcessInstanceInfoVO;

        /**
         * Retorna uma lista de processos disponíveis para o usuário
         */
        getAvailableProcess(tenantId: number, userId: string): java.util.List<com.fluig.sdk.api.workflow.ProcessVersionVO>;

        /**
         * Retorna a versão de um processo
         */
        getProcessVersion(processId: string): number;

        /**
         * Retorna todos os processos da empresa
         */
        listProcess(pattern: string, limit: number, offset: number): java.util.List<com.fluig.sdk.api.workflow.ProcessDefinitionVO>;

        /**
         * Retorna todos os processos da empresa
         */
        listSlaProcess(): java.util.List<com.fluig.sdk.api.workflow.ProcessDefinitionVO>;

        resumeAssignedToMeTasks(processId: string, startDate: string, endDate: string, requester: string, manager: string): com.fluig.sdk.api.workflow.ResumeProcessTaskVO;
        resumeManagedByMeTasks(processId: string, startDate: string, endDate: string, requester: string, assignee: string): com.fluig.sdk.api.workflow.ResumeProcessTaskVO;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante
         */
        resumeMyRequestsSLA(processes: string, cardFilters: string, countersRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, assignee: string, manager: string): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;

        resumeMyRequestsTasks(processId: string, startDate: string, endDate: string, assignee: string, manager: string): com.fluig.sdk.api.workflow.ResumeProcessTaskVO;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados
         */
        resumeRequestsSLA(): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string, string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string, string>, countersRequiredList: java.util.List<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string, string>, countersRequiredList: java.util.List<string>, initialStartDate: Date, finalStartDate: Date, initialDeadlineDate: Date, finalDeadlineDate: Date, initialWarningDate: Date, finalWarningDate: Date, requester: string, assignee: string, manager: string, requesterLocalsList: java.util.List<string>, assigneeLocalsList: java.util.List<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: string, cardFilters: string, countersRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, requester: string, assignee: string, manager: string, requesterLocals: string, assigneeLocals: string): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável
         */
        resumeRequestsSLAAssignedToMe(processes: string, cardFilters: string, countersRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, requester: string, manager: string, requesterLocals: string, assigneeLocals: string): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;

        /**
         * Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor
         */
        resumeRequestsSLAManagedByMe(processes: string, cardFilters: string, countersRequired: string, initialStartDate: string, finalStartDate: string, initialDeadlineDate: string, finalDeadlineDate: string, initialWarningDate: string, finalWarningDate: string, requester: string, assignee: string, requesterLocals: string, assigneeLocals: string): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;

        resumeSLATasks(processId: string, startDate: string, endDate: string, assignee: string, requester: string, manager: string): com.fluig.sdk.api.workflow.ResumeProcessTaskVO;
    }
}

declare namespace com.fluig.sdk.tenant {
    declare class AdminUserVO {
        /**
         * Recupera valor do code
         */
        getCode(): java.lang.String;

        /**
         * Recupera valor do email
         */
        getEmail(): java.lang.String;

        /**
         * Recupera valor do firstName
         */
        getFirstName(): java.lang.String;

        /**
         * Recupera valor do lastName
         */
        getLastName(): java.lang.String;

        /**
         * Recupera valor do login
         */
        getLogin(): java.lang.String;
    }

    declare class TenantVO {
        /**
         * Recupera valor do adminUser
         */
        getAdminUser(): AdminUserVO;

        /**
         * Recupera valor do Tenant Code
         */
        getCode(): java.lang.String;

        /**
         * Recupera valor do data
         */
        getData(): java.util.Map<java.lang.String, java.lang.String>

        /**
         * Recupera valor do description
         */
        getDescription(): java.lang.String;

        /**
         * Recupera valor do federalId
         */
        getFederalId(): java.lang.String;

        /**
         * Recupera valor do id
         */
        getId(): number;

        /**
         * Recupera valor do idpId
         */
        getIdpId(): java.lang.String;

        /**
         * Recupera valor do idpLogOff
         */
        getIdpLogOff(): boolean;

        /**
         * Recupera valor do organizationUrl
         */
        getOrganizationUrl(): java.lang.String;

        /**
         * Recupera valor do removeVolume
         */
        getRemoveVolume(): boolean;

        /**
         * Recupera o valor para tenantActive
         */
        getTenantActive(): boolean;

        /**
         * Recupera valor do thumbnailEnabled
         */
        getThumbnailEnabled(): boolean;

        /**
         * Recupera valor do volumeDir
         */
        getVolumeDir(): java.lang.String;
    }
}

declare namespace com.fluig.sdk.user {

    /**
     * Representa um colleague (que acho ser o mesmo que user, mas o Flug quis diferenciar)
     */
    declare class ColleagueVO {
        /**
         * Pega o e-mail
         */
        getEmail(): java.lang.String

        /**
         * Pega o nome completo
         */
        getFullName(): java.lang.String

        /**
         * Pega o primeiro nome
         */
        getFirstName(): java.lang.String;

        /**
         * Pega o sobrenome
         */
        getLastName(): java.lang.String;

        /**
         * Pega o login
         */
        getLogin(): java.lang.String;

        /**
         * Pega o código
         */
        getCode(): java.lang.String

        /**
         * Atribui o login
         */
        setLogin(login: string): void;

        /**
         * Atribui o primeiro nome
         */
        setFirstName(firstName: string): void;

        /**
         * Atribui o sobrenome
         */
        setLastName(lastName: string): void;

        /**
         * Atribui o nome completo
         */
        setFullName(fullName: string): void;

        /**
         * Atribui o código
         */
        setCode(code: string): void;

        /**
         * Atribui o e-mail
         */
        setEmail(email: string): void;
    }

    declare class UserPasswordVO {}

    /**
     * Representa um Usuário
     */
    declare class UserVO {
        /**
         * Pega o e-mail
         */
        getEmail(): java.lang.String

        /**
         * Pega o nome completo
         */
        getFullName(): java.lang.String

        /**
         * Pega o primeiro nome
         */
        getFirstName(): java.lang.String;

        /**
         * Pega o sobrenome
         */
        getLastName(): java.lang.String;

        /**
         * Pega o login
         */
        getLogin(): java.lang.String;

        /**
         * Pega o código
         */
        getCode(): java.lang.String

        /**
         * Pega todos os dados extras
         */
        getExtData(): java.util.HashMap<java.lang.String, object>;

        /**
         * Pega um dado extra
         */
        getExtraData(key: string): object;

        /**
         * Pega os grupos
         */
        getGroups(): java.util.List<java.lang.String>;

        /**
         * Pega o ID
         */
        getId(): number;

        /**
         * Informa se é um usuário Ativo
         */
        getIsActive(): boolean;

        /**
         * Pega a senha
         */
        getPassword(): string;

        /**
         * Pega o fuso horário
         */
        getTimezone(): java.lang.String;

        /**
         * Pega os papéis
         */
        getRoles(): java.util.List<java.lang.String>;

        /**
         * Pega o token de acesso
         */
        getTokenAccess(): java.lang.String;

        /**
         * Pega a senha do token
         */
        getTokenSecret(): java.lang.String;

        /**
         * Pega o UUID
         */
        getUserUUID(): java.lang.String;

        /**
         * Retorna objeto no mapa
         */
        getValueExtData(key: string): object;

                /**
         * Adiciona dados extras
         */
        addExtData(key: string, value: object): void;

        /**
         * Atribui o código
         */
        setCode(code: string): void;

        /**
         * Atribui o e-mail
         */
        setEmail(email: string): void;

        /**
         * Atribui os dados extras
         */
        setExtData(extData: java.util.HashMap<string, object>): void;

        /**
         * Atribui um valor para um dado extra
         */
        setExtraData(key: string, value: object): void;

        /**
         * Atribui o primeiro nome
         */
        setFirstName(firstName: string): void;

        /**
         * Atribui o sobrenome
         */
        setLastName(lastName: string): void;

        /**
         * Atribui o nome completo
         */
        setFullName(fullName: string): void;

        /**
         * Atribui os grupos
         */
        setGroups(groups: java.util.List<string>): void;

        /**
         * Atribui o ID
         */
        setId(id: number): void;

        /**
         * Atribui o status de Ativo
         */
        setIsActive(isActive: boolean): void;

        /**
         * Atribui o login
         */
        setLogin(login: string): void;

        /**
         * Atribui a senha
         */
        setPassword(password: string): void;

        /**
         * Atribui os papéis
         */
        setRoles(roles: java.util.List<string>): void;

        /**
         * Atribui o fuso horário
         */
        setTimezone(timezone: string): void;

        /**
         * Atribui o token de acesso
         */
        setTokenAccess(token: string): void;

        /**
         * Atribui a senha do token
         */
        setTokenSecret(tokenSecret: string): void;

        /**
         * Atribui o UUID
         */
        setUserUUID(userUUID: string): void;
    }
}

declare namespace com.fluig.sdk.api.alert {
    declare class AlertActionVO {}
    declare class AlertConfigVO {}
    declare class AlertEventVO {}
    declare class AlertModuleVO {}
    declare class AlertObjectVO {}
    declare class AlertSenderVO {}
    declare class AlertUserVO {}
    declare class AlertVO {
        getActions(): java.util.List<com.fluig.sdk.api.alert.AlertActionVO>;
        getCanRemove(): boolean;
        getCreationDate(): Date;
        getCreationDateTime(): number;
        getCurrentDate(): Date;
        getEvent(): com.fluig.sdk.api.alert.AlertObjectVO;
        getId(): number;
        getObject(): com.fluig.sdk.api.alert.AlertObjectVO;
        getPlace(): com.fluig.sdk.api.alert.AlertObjectVO;
        getPriority(): string;
        getRead(): boolean;
        getReceiver(): com.fluig.sdk.api.alert.AlertUserVO;
        getSenders(): java.util.List<com.fluig.sdk.api.alert.AlertSenderVO>;
        setActions(actions: java.util.List<com.fluig.sdk.api.alert.AlertActionVO>): void;
        setCanRemove(canRemove: boolean): void;
        setCreationDate(creationDate: Date): void;
        setCreationDateTime(creationDateTime: number): void;
        setCurrentDate(currentDate: Date): void;
        setEvent(event: com.fluig.sdk.api.alert.AlertEventVO): void;
        setId(id: number): void;
        setObject(object: com.fluig.sdk.api.alert.AlertObjectVO): void;
        setPlace(place: com.fluig.sdk.api.alert.AlertObjectVO): void;
        setPriority(priority: string): void;
        setRead(read: boolean): void;
        setReceiver(receiver: com.fluig.sdk.api.alert.AlertUserVO): void;
        setSenders(senders: java.util.List<com.fluig.sdk.api.alert.AlertSenderVO>): void;
    }
}

declare namespace com.totvs.technology.foundation.alert.enumeration {
    enum FDNAlertActionType {
        MAIN,
        DEFAULT,
    }

    enum FDNAlertIntegrationType {
        JMS,
        HTTP,
        NONE,
    }
}

declare namespace com.totvs.technology.foundation.alert {
    declare abstract class AlertObject {
        getAlertObjectId(): number;
        getAlertObjectClass(): java.lang.String;
        getAlertObjectTypeDescriptionKey(): java.lang.String;
        getAlertObjectDescription(): java.lang.String;
        getAlertObjectLink(): java.lang.String;
        getAlertObjectDetailKey(): java.lang.String;
        getAlertObjectNote(): java.lang.String;
        setAlertObjectNote(paramString: string): void;
    }

    declare class GenericAlertObject extends AlertObject {
        public GenericAlertObject();

        /**
         * Cria um novo objeto
         *
         * @param alertObjectId ID do objeto de alerta. Acredito que passar -1 crie um ID auto incrementado (igual ao RM faz)
         * @param alertObjectClass Nome da classe do Objeto. Não entendi como funciona, mas qualquer string faz funcionar
         * @param alertObjectTypeDescriptionKey Texto ou chave I18N. Informa a descrição do tipo da notificação
         * @param alertObjectDescription Texto ou chave I18N. Informa a descrição do objeto. Será o texto do link
         * @param alertObjectDetailKey Texto ou chave I18N. Informa os detalhes da notificação
         * @param alertObjectLink URL para encaminhar o usuário ao objeto da notificação. Começar com /
         * @param alertObjectNote Anotação do objeto
         */
        public GenericAlertObject(
            alertObjectId: number,
            alertObjectClass: string,
            alertObjectTypeDescriptionKey: string,
            alertObjectDescription: string,
            alertObjectDetailKey: string,
            alertObjectLink: string,
            alertObjectNote:? string = null
        );
    }

    declare abstract class AlertAction {
        getActionKey(): java.lang.String;
        getDescriptionKey(): java.lang.String;
        getDescriptionAfterExecKey(): java.lang.String;
        getHttpMethod(): java.lang.String;
        getUrl(): java.lang.String;
        getActionType(): com.totvs.technology.foundation.alert.enumeration.FDNAlertActionType;
        getIntegrationType(): com.totvs.technology.foundation.alert.enumeration.FDNAlertIntegrationType;
    }

    declare class GenericAlertAction extends AlertAction {
        GenericAlertAction();

        GenericAlertAction(
            actionKey: string,
            actionType: com.totvs.technology.foundation.alert.enumeration.FDNAlertActionType,
            descriptionKey: string,
            descriptionAfterExecKey: string,
            integrationType: com.totvs.technology.foundation.alert.enumeration.FDNAlertIntegrationType,
            httpMethod: string,
            url: string
        );
    }
}


declare namespace com.fluig.sdk.api.authorizeclient {
    declare class AuthorizeClientSdkServiceVO {
        /**
         * Pega o Resultado da Requisição
         *
         * Se for um JSON basta usar JSON.parse() para converter em objeto.
         */
        getResult(): string;
        getCompanyId(): number;
        getDescription(): string;
        getEndpoint(): string;
        getHeaders(): java.util.Map<string, string>;
        getHttpStatusResult(): number;
        getMethod(): string;
        getOptions(): java.util.Map<string, object>;
        getParams(): java.util.Map<string, object>;
        getServiceCode(): string;
        getStrParams(): string;
        getTimeoutService(): string;
    }
}

/**
 * Itens de formulário
 */
declare namespace com.fluig.sdk.api.cardindex {
    declare class CardFieldVO {
        getFieldId(): java.lang.String;
        getValue(): java.lang.String;
        setFieldId(fieldId: java.lang.String);
        setValue(value: java.lang.String);
    }

    declare class CardChildrenVO {
        getSerialVersionUID(): number;
        getValues(): java.util.ArrayList<CardFieldVO>;
        setValues(values: java.util.ArrayList<CardFieldVO>);
    }

    declare class CardFindFieldVO {
        getCardId(): number;
        getChildren(): java.util.ArrayList<CardChildrenVO>;
        getCompanyId(): number;
        getParentDocumentId(): number;
        getSerialVersionUID(): number;
        getValues(): java.util.ArrayList<CardFieldVO>;
        getVersion(): number;
        isActiveVersion(): boolean;
        setActiveVersion(activeVersion: boolean);
        setCardId(cardId: number);
        setChildren(children: java.util.ArrayList<CardChildrenVO>);
        setCompanyId(companyId: number);
        setParentDocumentId(parentDocumentId: number);
        setValues(values: java.util.ArrayList<CardFieldVO>);
        setVersion(version: number);
    }
}

declare namespace com.fluig.sdk.api.document {
    declare class AllocatedDocumentVO {}
    declare class DocumentApprovementHistoryVO {}
    declare class DocumentApproverVO {}
    declare class DocumentPermissionVO {}
    declare class DocumentRestrictionVO {}
    declare class DocumentSecurityConfigVO {}
    declare class DocumentSecurityVO {}
    declare class DocumentTaskVO {}

    /**
     * Representa um documento
     */
    declare class DocumentVO {
        /**
         * Recupera número de acessos
         */
        getAccessCount(): number;

        /**
         * Recupera versão ativa
         */
        getActiveVersion(): boolean;


        /**
         * Recupera o valor do comentário nas informações extras
         */
        getAdditionalComments(): java.lang.String;

        /**
         * Recupera valor, se documento permite multi card por usuário
         */
        getAllowMuiltiCardsPerUser(): boolean;

        /**
         * Recupera condição approvalAndOr
         */
        getApprovalAndOr(): boolean;

        /**
         * Recupera valor, se documento está aprovado
         */
        getApproved(): boolean;

        /**
         * Recupera valor da data de aprovação
         */
        getApprovedDate(): Date

        /**
         * Recupera id de atualização
         */
        getAtualizationId(): number;

        /**
         * Recupera descrição do card
         */
        getCardDescription(): java.lang.String;

        /**
         * Recupera id do colega
         */
        getColleagueId(): java.lang.String;

        /**
         * Recupera valor do crc
         */
        getCrc(): number;

        /**
         * Recupera valor para data de criação
         */
        getCreateDate(): Date

        /**
         * Recupera valor, se documento foi deletado
         */
        getDeleted(): boolean;

        /**
         * Recupera descrição do documento
         */
        getDocumentDescription(): java.lang.String;

        /**
         * Recupera valor do document Id
         */
        getDocumentId(): number;

        /**
         * Recupera número de propriedade do documento
         */
        getDocumentPropertyNumber(): number;

        /**
         * Recupera versão do documento
         */
        getDocumentPropertyVersion(): number;

        /**
         * Recupera valor do tipo de documento
         */
        getDocumentType(): DocumentTypeEnum;

        /**
         * Recupera valor do id do tipo de documento
         */
        getDocumentTypeId(): java.lang.String;

        /**
         * Recupera valor, se download é habilitado
         */
        getDownloadEnabled(): boolean;

        /**
         * Recupera valor de draft
         */
        getDraft(): boolean;

        /**
         * Recupera data de expiração
         */
        getExpirationDate(): Date

        /**
         * Recupera valor, se documento expira
         */
        getExpires(): boolean;

        /**
         * Recupera os dados extras
         */
        getExtData(): java.util.HashMap<java.lang.String, object>;

        /**
         * Recupera id documento externo
         */
        getExternalDocumentId(): java.lang.String;

        /**
         * Recupera os dados extras
         */
        getExtraData(key: string): object;

        /**
         * Recupera id do ícone
         */
        getIconId(): number;

        /**
         * Recupera valor do path do icon
         */
        getIconPath(): java.lang.String;

        /**
         * Recupera valor, se documento é imutável
         */
        getImutable(): boolean;

        /**
         * Recupera valor, se documento é indexado
         */
        getIndexed(): boolean;

        /**
         * Retorna se o documento herda as propriedades do parent
         */
        getInheritSecurity(): boolean;

        /**
         * Recupera valor, se documento pode ser visualizado internamente.
         */
        getInternalVisualizer(): boolean;

        /**
         * Recupera valor de palavra chave
         */
        getKeyWord(): java.lang.String;

        /**
         * Recupera id da linguagem
         */
        getLanguageId(): java.lang.String;

        /**
         * Recupera valor da última data de modificação
         */
        getLastModifiedDate(): Date

        /**
         * Recupera última data de modificação
         */
        getLastModifiedTime(): java.lang.String;

        /**
         * Recupera valor, se documento está em checkout
         */
        getOnCheckout(): boolean;

        /**
         * Recupera id do pai do documento
         */
        getParentDocumentId(): number;

        /**
         * Recupera o tipo de permissão
         */
        getPermissionType(): number;

        /**
         * Recupera arquivo físico
         */
        getPhisicalFile(): java.lang.String;

        /**
         * Recupera valor do tamanho do arquivo físico
         */
        getPhisicalFileSize(): number;

        /**
         * Recupera prioridade
         */
        getPriority(): number;

        /**
         * Recupera valor id privado do colega
         */
        getPrivateColleagueId(): java.lang.String;

        /**
         * Recupera valor, se documento é privado
         */
        getPrivateDocument(): boolean;

        /**
         * Recupera id do publicador
         */
        getPublisherId(): java.lang.String;

        /**
         * Recupera arquivos relacionados
         */
        getRelatedFiles(): java.lang.String;

        /**
         * Recupera tipo de restrição
         */
        getRestrictionType(): number;

        /**
         * Recupera valor do código do site
         */
        getSiteCode(): java.lang.String;

        /**
         * Recupera id do tenant
         */
        getTenantId(): number;

        /**
         * Recupera valor do id do tópico
         */
        getTopicId(): number;

        /**
         * Recupera valor, se documento é traduzido
         */
        getTranslated(): boolean;

        /**
         * Recupera updateIsoProperties
         */
        getUpdateIsoProperties(): boolean;

        /**
         * Recupera o identificador do upload
         */
        getUploadId(): java.lang.String;

        /**
         * Recupera valor, se usuário será notificado
         */
        getUserNotify(): boolean;

        /**
         * Recupera valor do UUID
         */
        getUUID(): java.lang.String;

        /**
         * Recupera data de inicio de validação
         */
        getValidationStartDate(): Date

        /**
         * Recupera valor da versão
         */
        getVersion(): number;

        /**
         * Recupera a ação que será realizada em relação a versão documento
         */
        getVersionAction(): java.lang.String;

        /**
         * Recupera descrição da versão
         */
        getVersionDescription(): java.lang.String;

        /**
         * Recupera visualização
         */
        getVisualization(): java.lang.String;

        /**
         * Recupera id do volume
         */
        getVolumeId(): java.lang.String;

        /**
         * Atribui valor para número de acessos
         */
        setAccessCount(accessCount: number): void;

        /**
         * Atribui valor para versão ativa
         */
        setActiveVersion(activeVersion: boolean): void;

        /**
         * Atribui o valor do comentário nas informações extras
         */
        setAdditionalComments(comments: string): void;

        /**
         * Atribui valor para allowMultiCardsPerUser
         */
        setAllowMuiltiCardsPerUser(allowMultiCardsPerUser: boolean): void;

        /**
         * Atribui valor para approvalAndOr
         */
        setApprovalAndOr(approvalAndOr: boolean): void;

        /**
         * Atribui valor, se documento está aprovado
         */
        setApproved(approved: boolean): void;

        /**
         * Atribui valor para data de aprovação
         */
        setApprovedDate(approvedDate: Date): void;

        /**
         * Atribui valor para id de atualização
         */
        setAtualizationId(actualizationId: number): void;

        /**
         * Atribui valor para descrição do card
         */
        setCardDescription(cardDescription: string): void;

        /**
         * Atribui valor para id do colega
         */
        setColleagueId(colleagueId: string): void;

        /**
         * Atribui valor para crc
         */
        setCrc(crc: number): void;

        /**
         * Atribui valor para data de criação
         */
        setCreateDate(createDate: Date): void;

        /**
         * Atribui valor, se documento foi deletado
         */
        setDeleted(deleted: boolean): void;

        /**
         * Atribui valor para descrição do documento
         */
        setDocumentDescription(documentDescription: string): void;

        /**
         * Atribui valor para id do documento
         */
        setDocumentId(documentId: number): void;

        /**
         * Atribui valor para número de propriedade do documento
         */
        setDocumentPropertyNumber(documentPropertyNumber: number): void;

        /**
         * Atribui versão de documento
         */
        setDocumentPropertyVersion(documentPropertyVersion: number): void;

        /**
         * Atribui valor para tipo de documento
         */
        setDocumentType(documentType: DocumentTypeEnum): void;

        /**
         * Atribui valor para id do tipo de documento
         */
        setDocumentTypeId(documentTypeId: string): void;

        /**
         * Atribui valor, se download é habilitado
         */
        setDownloadEnabled(downloadEnabled: boolean): void;

        /**
         * Atribui valor para draft
         */
        setDraft(draft: boolean): void;

        /**
         * Atribui valor para data de expiração
         */
        setExpirationDate(expirationDate: Date): void;

        /**
         * Atribui valor, se documento expira
         */
        setExpires(expires: boolean): void;

        /**
         * Atribui valor para id documento externo
         */
        setExternalDocumentId(externalDocumentId: string): void;

        /**
         * Atribui valores para os dados extras
         */
        setExtraData(key: string, value: object): void;

        /**
         * Atribui valor para id do ícone
         */
        setIconId(iconId: number): void;

        /**
         * Atribui valor do iconPath do arquivo
         */
        setIconPath(iconPath: string): void;

        /**
         * Atribui valor, se documento é imutável
         */
        setImutable(immutable: boolean): void;

        /**
         * Atribui valor, se documento é indexado
         */
        setIndexed(indexed: boolean): void;

        /**
         * Atribui se herda as propriedades de segurança do parent
         */
        setInheritSecurity(inheritSecurity: boolean): void;

        /**
         * Atribui valor, se documento pode ser visualizado internamente
         */
        setInternalVisualizer(internalVisualizer: boolean): void;

        /**
         * Atribui valor para palavra chave
         */
        setKeyWord(keyWord: string): void;

        /**
         * Atribui valor para id da linguagem
         */
        setLanguageId(languageId: string): void;

        /**
         * Atribui valor para última data de modificação
         */
        setLastModifiedDate(lastModifiedDate: Date): void;

        /**
         * Atribui valor a última data de modificação
         */
        setOnCheckout(onCheckout: boolean): void;

        /**
         * Atribui valor, se documento está em checkout
         */
        setLastModifiedTime(lastModifiedTime: string): void;

        /**
         * Atribui valor para id do documento pai
         */
        setParentDocumentId(parentDocumentId: number): void;

        /**
         * Atribui valor para tipo de permissão
         */
        setPermissionType(permissionType: number): void;

        /**
         * Atribui valor para arquivo físico
         */
        setPhisicalFile(physicalFile: string): void;

        /**
         * Atribui valor para o tamanho do arquivo físico
         */
        setPhisicalFileSize(physicalFileSize: number): void;

        /**
         * Atribui valor prioridade
         */
        setPriority(priority: number): void;

        /**
         * Atribui valor id privado do colega
         */
        setPrivateColleagueId(privateColleagueId: string): void;

        /**
         * Atribui valor, se documento é privado
         */
        setPrivateDocument(privateDocument: boolean): void;

        /**
         * Atribui valor para id do publicador
         */
        setPublisherId(publisherId: string): void;

        /**
         * Atribui valor para arquivos relacionados
         */
        setRelatedFiles(relatedFiles: string): void;

        /**
         * Atribui valor para tipo de restrição
         */
        setRestrictionType(restrictionType: number): void;

        /**
         * Atribui valor para código de site
         */
        setSiteCode(siteCode: string): void;

        /**
         * Atribui valor para id do tenant
         */
        setTenantId(tenantId: number): void;

        /**
         * Atribui valor para id do tópico
         */
        setTopicId(topicId: number): void;

        /**
         * Atribui valor, se documento é traduzido
         */
        setTranslated(translated: boolean): void;

        /**
         * Atribui valor para updateIsoProperties
         */
        setUpdateIsoProperties(updateIsoProperties: boolean): void;

        /**
         * Atribue o identificador do upload
         */
        setUploadId(uploadId: string): void;

        /**
         * Atribui valor se usuário será notificado
         */
        setUserNotify(userNotify: boolean): void;

        /**
         * Atribui valor para UUID
         */
        setUUID(uUID: string): void;

        /**
         * Atribui valor para data de início de validação
         */
        setValidationStartDate(validationStartDate: Date): void;

        /**
         * Atribui valor para versão
         */
        setVersion(version: number): void;

        /**
         * Atribue a ação que será realizada em relação a versão documento
         */
        setVersionAction(versionAction: string): void;

        /**
         * Atribui valor para descrição da versão
         */
        setVersionDescription(versionDescription: string): void;

        /**
         * Atribui valor para visualização
         */
        setVisualization(visualization: string): void;

        /**
         * Atribui valor ao id do volume
         */
        setVolumeId(volumeId: string): void;
    }

    /**
     * Representa uma pasta
     */
    declare class FolderVO {

        /**
         * Recupera comentário adicional
         */
        getAdditionalComments(): java.lang.String;

        /**
         * Recupera valor de approvalAndOr
         */
        getApprovalAndOr(): boolean;

        /**
         * Recupera valor do colleagueId
         */
        getColleagueId(): java.lang.String;

        /**
         * Recupera valor da data de criação
         */
        getCreateDate(): Date;

        /**
         * Recupera valor de descrição do documento
         */
        getDocumentDescription(): java.lang.String;

        /**
         * Recupera valor do documentoId
         */
        getDocumentId(): number;

        /**
         * Recupera id do tipo de documento
         */
        getDocumentTypeId(): java.lang.String;

        /**
         * Recupera os tipos de documento
         */
        getDocumentTypes(): java.util.List<DocumentTypeEnum>;

        /**
         * Recupera informação se download da pasta está disponível
         */
        getDownloadEnabled(): boolean;

        /**
         * Informa se a pasta pode expirar
         */
        getExpires(): boolean;

        /**
         * Recupera os filtros
         */
        getFilters(): java.util.HashMap<java.lang.String, object>;

        /**
         * Recupera valor do iconId
         */
        getIconId(): number;

        /**
         * Recupera boolean se pasta é imutável
         */
        getImutable(): boolean;

        /**
         * Recupera segurança herdada
         */
        getInheritSecurity(): boolean;

        /**
         * Recupera valor de visualizador interno
         */
        getInternalVisualizer(): boolean;

        /**
         * Recupera valor da palavra chave
         */
        getKeyWord(): java.lang.String;

        /**
         * Recupera boolean se usuário será notificado
         */
        getNotifyUser(): boolean;

        /**
         * Recupera valor do id da pasta pai
         */
        getParentFolderId(): number;

        /**
         * Recupera lista de permissões
         */
        getPermissions(): java.util.List<com.fluig.sdk.api.document.DocumentPermissionVO>;


        /**
         * Recupera tipo de permissão
         */
        getPermissionType(): number;

        /**
         * Recupera boolean se documento é privado
         */
        getPrivateDocument(): boolean;

        /**
         * Recupera lista de publicadores aprovadores
         */
        getPublisherApprovers(): java.util.List<com.fluig.sdk.api.document.DocumentApproverVO>;

        /**
         * Recupera id do publicador
         */
        getPublisherId(): java.lang.String;

        /**
         * Recupera lista de restrições de documentos
         */
        getRestrictions(): java.util.List<com.fluig.sdk.api.document.DocumentRestrictionVO>;

        /**
         * Recupera tipo de restrição
         */
        getRestrictionType(): number;

        /**
         * Recupera valor do tenantId
         */
        getTenantId(): number;

        /**
         * Recupera id do tópico
         */
        getTopicId(): number;

        /**
         * Recupera informação se update de iso properties é permitido
         */
        getUpdateIsoProperties(): boolean;

        /**
         * Recupera valor da versão
         */
        getVersion(): number;

        /**
         * Recupera valor da descrição da versão
         */
        getVersionDescription(): java.lang.String;

        /**
         * Recupera id do volume
         */
        getVolumeId(): java.lang.String;

        /**
         * Atribui valor para comentário adicional
         */
        setAdditionalComments(additionalComments: string): void;

        /**
         * Atribui valor para approvalAndOr
         */
        setApprovalAndOr(approvalAndOr: boolean): void;

        /**
         * Atribui valor para colleagueId
         */
        setColleagueId(colleagueId: string): void;

        /**
         * Atribui valor a data de criação
         */
        setCreateDate(createDate: Date): void;

        /**
         * Atribui valor para descrição do documento
         */
        setDocumentDescription(documentDescription: string): void;

        /**
         * Atribui valor para documentId
         */
        setDocumentId(documentId: number): void;

        /**
         * Atribui valor para documentTypeId
         */
        setDocumentTypeId(documentTypeId: string): void;

        /**
         * Atribui tipo de documentos
         */
        setDocumentTypes(documentTypes: java.util.List<DocumentTypeEnum>): void;

        /**
         * Atribui valor para informação se download de pasta está disponível
         */
        setDownloadEnabled(downloadEnabled: boolean): void;

        /**
         * Atribui valor para informar se a pasta pode expirar
         */
        setExpires(expires: boolean): void;

        /**
         * Atribui filtros
         */
        setFilters(filters: java.util.HashMap<string, object>): void;

        /**
         * Atribui valor para iconId
         */
        setIconId(iconId: number): void;

        /**
         * Atribui boolean se pasta será imutável
         */
        setImutable(immutable: boolean): void;

        /**
         * Atribui valor para segurança herdada
         */
        setInheritSecurity(inheritSecurity: boolean): void;

        /**
         * Atribui boolean se pasta possui visualizador interno
         */
        setInternalVisualizer(internalVisualizer: boolean): void;

        /**
         * Configura valor da palavra chave
         */
        setKeyWord(keyWord: string): void;

        /**
         * Atribui boolean se usuário será notificado
         */
        setNotifyUser(notifyUser: boolean): void;

        /**
         * Atribui valor para id da pasta pai
         */
        setParentFolderId(parentFolderId: number): void;

        /**
         * Atribui valor para lista de permissões
         */
        setPermissions(permissions: java.util.List<com.fluig.sdk.api.document.DocumentPermissionVO>): void;

        /**
         * Atribui valor ao tipo de permissão
         */
        setPermissionType(permissionType: number): void;

        /**
         * Atribui boolean se documento é privado
         */
        setPrivateDocument(privateDocument: boolean): void;

        /**
         * Atribui valor para publicadores aprovadores
         */
        setPublisherApprovers(publisherApprovers: java.util.List<com.fluig.sdk.api.document.DocumentApproverVO>): void;

        /**
         * Atribui valor para id do publicador
         */
        setPublisherId(publisherId: string): void;

        /**
         * Atribui valor para lista de restrições de documentos
         */
        setRestrictions(restrictions: java.util.List<com.fluig.sdk.api.document.DocumentRestrictionVO>): void;

        /**
         * Atribui valor para tipo de restrição
         */
        setRestrictionType(restrictionType: number): void;

        /**
         * Atribui valor para tenantId
         */
        setTenantId(tenantId: number): void;

        /**
         * Atribui valor para topicId
         */
        setTopicId(topicId: number): void;

        /**
         * Atribui permitir atualização de iso properties
         */
        setUpdateIsoProperties(updateIsoProperties: boolean): void;

        /**
         * Atribui valor para versão
         */
        setVersion(version: number): void;

        /**
         * Atribui valor para descrição da versão
         */
        setVersionDescription(versionDescription: string): void;

        /**
         * Atribui valor do id do volume
         */
        setVolumeId(volumeId: string): void;
    }
    declare class RelatedDocumentVO {}
    declare class SolvedPermissionVO {}
}

declare namespace com.fluig.sdk.api.ecm {
    declare class CollaborationAppVO {};
    declare class CollaborationVO {};
}

declare namespace com.fluig.sdk.api.enums {
    enum AssumeProcessTaskStatus {
        SUCCESS,
        ERROR,
    }
}

declare namespace com.fluig.sdk.api.group {
    declare class GroupVO {}
}

declare namespace com.fluig.sdk.api.holiday {
    declare class HolidayVO {}
}

declare namespace com.fluig.sdk.api.job {
    declare class JobVO {}
}

declare namespace com.fluig.sdk.api.job.JobVO {
    declare class IntervalType {}
}

declare namespace com.fluig.sdk.api.local {
    declare class LocalUserVO {}
    declare class LocalVO {}
}

declare namespace com.fluig.sdk.api.oauth {
    declare class OAuthSdkVO {}
}

declare namespace com.fluig.sdk.api.permission {
    declare class PermissionAssetVO {
        getId(): number;
        getCode(): string;
        getDescription(): string;
        getPageCode(): string;
        getTypeCode(): string;
        setId(id: number): void;
        setCode(code: string): void;
        setDescription(description: string): void;
        setPageCode(pageCode: string): void;
        setTypeCode(typeCode: string): void;
    }

    declare class PermissionVO {
        getCategory(): string;
        getCategoryCode(): string;
        getIsSelected(): boolean;
        getPermission(): string;
        getPermissionDescription(): string;
        setCategory(category: string): void;
        setCategoryCode(categoryCode: string): void;
        setIsSelected(isSelected: boolean): void;
        setPermission(permission: string): void;
        setPermissionDescription(permissionDescription: string): void;
    }
}

declare namespace com.fluig.sdk.api.search {
    declare class DefaultSearchRequest {}
    declare class DefaultSearchResponse{}
}

declare namespace com.fluig.sdk.api.social {
    declare class ArticleCoverVO {}
    declare class ArticleVO {}
    declare class CommentVO {}
    declare class CommunityVO {}
    declare class CropVO {}
    declare class MediaVO {}
    declare class PostVO {}
    declare class SociableVO {}
    declare class SocialBreadcrumbItemVO {}
    declare class SocialBreadcrumbVO {}
    declare class SocialVO {}
}

declare namespace com.fluig.sdk.api.task {
    declare class ResumedTasksVO {}
    declare class TaskKindEnum {}
    declare class TaskStatusEnum {}
}

declare namespace com.fluig.sdk.api.workflow {
    declare class AssumeProcessTaskResultVO {
        getColleagueId(): string;
        getComplement(): string;
        getErrorCode(): string;
        getMessage(): string;
        getMovementSequence(): number;
        getProcessInstanceId(): number;
        getStatus(): com.fluig.sdk.api.enums.AssumeProcessTaskStatus;
        getTenantId(): number;
        setColleagueId(colleagueId: string): void;
        setComplement(complement: string): void;
        setErrorCode(errorCode: string): void;
        setMessage(message: string): void;
        setMovementSequence(movementSequence: number): void;
        setProcessInstanceId(processInstanceId: number): void;
        setStatus(status: com.fluig.sdk.api.enums.AssumeProcessTaskStatus): void;
        setTenantId(tenantId: number): void;
    }

    declare class AssumeProcessTaskVO {
        getColleagueId(): string;
        getReplacementId(): string;
        getMovementSequence(): number;
        getProcessInstanceId(): number;
        setColleagueId(colleagueId: string): void;
        setReplacementId(replacementId: string): void;
        setMovementSequence(movementSequence: number): void;
        setProcessInstanceId(processInstanceId: number): void;
    }

    declare class AssumeProcessTasksResultVO {}
    declare class AssumeProcessTasksVO {}
    declare class AttachmentVO {}
    declare class CancelInstanceResultVO {}
    declare class CancelInstanceVO {}
    declare class CancelInstancesResultVO {}
    declare class CancelInstancesVO {}
    declare class CardIndexAttachmentVO {}
    declare class CardIndexVO {}
    declare class CardItemVO {}
    declare class ProcessAttachmentVO {}
    declare class ProcessDefinitionVO {}
    declare class ProcessDefinitionVersionVO {}
    declare class ProcessInstanceInfoVO {}
    declare class ProcessObservationVO {}
    declare class ProcessStateVO {}
    declare class ProcessTaskInfoVO {}

    declare class ProcessTaskVO {
        getColleagueId(): string;
        getComplement(): string;
        getSelectedColleagueId(): string;
        getCompanyId(): number;
        getMovementSequence(): number;
        getProcessInstanceId(): number;
        getTransferredSequence(): number;
        setColleagueId(colleagueId: string): void;
        setComplement(complement: string): void;
        setSelectedColleagueId(selectedColleagueId: string): void;
        setCompanyId(companyId: number): void;
        setMovementSequence(movementSequence: number): void;
        setProcessInstanceId(processInstanceId: number): void;
        setTransferredSequence(transferredSequence: number): void;
    }

    declare class ProcessVersionVO {}
    declare class RequestProcessTaskVO {}
    declare class RequestSLAVO {}
    declare class RequestTaskSLAVO {}
    declare class ResumeProcessTaskVO {}
    declare class ResumeRequestsSLAVO {}
    declare class WorkflowVO {}
}
