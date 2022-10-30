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
