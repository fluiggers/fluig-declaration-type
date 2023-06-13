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
