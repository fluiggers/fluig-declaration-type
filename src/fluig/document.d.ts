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
