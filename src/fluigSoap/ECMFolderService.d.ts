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

