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
         * Método que deve ser invocado por todos os módulos do sistema para enviar alertas.
         */
        sendNotification(eventKey: string, loginSender: string, loginReceiver: string, object: com.fluig.sdk.api.alert.AlertVO, place: com.fluig.sdk.api.alert.AlertVO, actions: java.util.List<com.fluig.sdk.api.alert.AlertActionVO>, metadata: java.util.HashMap<string>): void;
    }
    declare class ArticleService {}
    declare class AuthorizeClientSdkService {}
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
    declare class GroupService {}
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
        getWidgetPreferences(instanceId: number): java.util.HashMap<string>;

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
         * Adiciona um usuário a um grupo
         */
        addUserToGroup(tenantId: number, groupCode: string, userVO: com.fluig.sdk.user.UserVO): void;

        /**
         * Change the user password
         */
        changeUserPassword(vo: com.fluig.sdk.user.UserPasswordVO): void;

        /**
         * Cria um novo usuário
         */
        create(vo: com.fluig.sdk.user.UserVO): void;
        create(tenantId: number, vo: com.fluig.sdk.user.UserVO): void;

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
        list(params: java.util.HashMap<object>, offset: number, limit: number): java.util.List<com.fluig.sdk.user.UserVO>;
        list(sortField: string, sortType: string, limit: number, offset: number, search: string): java.util.List<com.fluig.sdk.user.UserVO>;

        /**
         * Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros.
         */
        listAll(sortField: string, sortType: string, limit: number, offset: number, search: string): java.util.List<com.fluig.sdk.user.UserVO>;

        /**
         * Pega todos os dados do usuário especificado pelo login
         */
        listData(login: string): java.util.HashMap<string>;

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
        updateUserData(data: java.util.HashMap<string>): boolean;

        /**
         * Atualiza os dados do usuário procurando pelo ID
         */
        updateUserDataById(data: java.util.HashMap<string>, userId: string): boolean;

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
        findRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string>, statusRequiredList: java.util.List<string>, returnCurrentTasks: boolean): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
        findRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string>, statusRequiredList: java.util.List<string>, initialStartDate: Date, finalStartDate: Date, initialDeadlineDate: Date, finalDeadlineDate: Date, initialWarningDate: Date, finalWarningDate: Date, returnCurrentTasks: boolean, requester: string, assignee: string, manager: string, requesterLocals: java.util.List<string>, assigneeLocals: java.util.List<string>, orderParams: java.util.List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam>, calculate: boolean, page: number, pageSize: number, populateCardFields: boolean, populateLocalsValue: boolean, populateAssigneeLocalsValue: boolean): java.util.LinkedHashSet<com.fluig.sdk.api.workflow.RequestSLAVO>;
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
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string>, countersRequiredList: java.util.List<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
        resumeRequestsSLA(processes: java.util.List<string>, cardFilters: java.util.HashMap<string>, countersRequiredList: java.util.List<string>, initialStartDate: Date, finalStartDate: Date, initialDeadlineDate: Date, finalDeadlineDate: Date, initialWarningDate: Date, finalWarningDate: Date, requester: string, assignee: string, manager: string, requesterLocalsList: java.util.List<string>, assigneeLocalsList: java.util.List<string>): com.fluig.sdk.api.workflow.ResumeRequestsSLAVO;
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

declare namespace com.fluig.sdk.api.authorizeclient {
    declare class AuthorizeClientSdkServiceVO {}
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
        getAdditionalComments(): string;

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
        getCardDescription(): string;

        /**
         * Recupera id do colega
         */
        getColleagueId(): string;

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
        getDocumentDescription(): string;

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
        getDocumentTypeId(): string;

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
        getExtData(): java.util.HashMap<object>;

        /**
         * Recupera id documento externo
         */
        getExternalDocumentId(): string;

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
        getIconPath(): string;

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
        getKeyWord(): string;

        /**
         * Recupera id da linguagem
         */
        getLanguageId(): string;

        /**
         * Recupera valor da última data de modificação
         */
        getLastModifiedDate(): Date

        /**
         * Recupera última data de modificação
         */
        getLastModifiedTime(): string;

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
        getPhisicalFile(): string;

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
        getPrivateColleagueId(): string;

        /**
         * Recupera valor, se documento é privado
         */
        getPrivateDocument(): boolean;

        /**
         * Recupera id do publicador
         */
        getPublisherId(): string;

        /**
         * Recupera arquivos relacionados
         */
        getRelatedFiles(): string;

        /**
         * Recupera tipo de restrição
         */
        getRestrictionType(): number;

        /**
         * Recupera valor do código do site
         */
        getSiteCode(): string;

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
        getUploadId(): string;

        /**
         * Recupera valor, se usuário será notificado
         */
        getUserNotify(): boolean;

        /**
         * Recupera valor do UUID
         */
        getUUID(): string;

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
        getVersionAction(): string;

        /**
         * Recupera descrição da versão
         */
        getVersionDescription(): string;

        /**
         * Recupera visualização
         */
        getVisualization(): string;

        /**
         * Recupera id do volume
         */
        getVolumeId(): string;

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
        getAdditionalComments(): string;

        /**
         * Recupera valor de approvalAndOr
         */
        getApprovalAndOr(): boolean;

        /**
         * Recupera valor do colleagueId
         */
        getColleagueId(): string;

        /**
         * Recupera valor da data de criação
         */
        getCreateDate(): Date;

        /**
         * Recupera valor de descrição do documento
         */
        getDocumentDescription(): string;

        /**
         * Recupera valor do documentoId
         */
        getDocumentId(): number;

        /**
         * Recupera id do tipo de documento
         */
        getDocumentTypeId(): string;

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
        getFilters(): java.util.HashMap<object>;

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
        getKeyWord(): string;

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
        getPublisherId(): string;

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
        getVersionDescription(): string;

        /**
         * Recupera id do volume
         */
        getVolumeId(): string;

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
        setFilters(filters: java.util.HashMap<object>): void;

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

declare namespace com.fluig.sdk.tenant {
    declare class AdminUserVO {}
    declare class TenantVO {}
}

declare namespace com.fluig.sdk.user {
    declare class ColleagueVO {}
    declare class UserPasswordVO {}

    /**
     * Representa um Usuário
     */
    declare class UserVO {
        /**
         * Pega o e-mail
         */
        getEmail(): string

        /**
         * Pega o nome completo
         */
        getFullName(): string

        /**
         * Pega o primeiro nome
         */
        getFirstName(): string;

        /**
         * Pega o sobrenome
         */
        getLastName(): string;

        /**
         * Pega o login
         */
        getLogin(): string;

        /**
         * Pega o código
         */
        getCode(): string

        /**
         * Pega todos os dados extras
         */
        getExtData(): java.util.HashMap<object>;

        /**
         * Pega um dado extra
         */
        getExtraData(key: string): object;

        /**
         * Pega os grupos
         */
        getGroups(): java.util.List<string>;

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
        getTimezone(): string;

        /**
         * Pega os papéis
         */
        getRoles(): java.util.List<string>;

        /**
         * Pega o token de acesso
         */
        getTokenAccess(): string;

        /**
         * Pega a senha do token
         */
        getTokenSecret(): string;

        /**
         * Pega o UUID
         */
        getUserUUID(): string;

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
        setExtData(extData: java.util.HashMap<object>): void;

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

declare namespace com.totvs.technology.foundation.sdk.service.vo.common {
    declare class OrderParam {}
}

class Iterator<T> {
    /**
     * Indica se ainda há elementos a percorrer
     */
    hasNext(): boolean;

    /**
     * Pega o próximo elemento
     */
    next(): T;
}

declare namespace java.util {
    declare class List<T> {
        /**
         * Pega o elemento no índice indicado
         */
        get(index: number): T;

        /**
         * Adiciona um elemento à lista
         */
        add(value: T): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Pega um iterator para percorrer a lista
         */
        iterator(): Iterator<T>
    }

    declare class ArrayList<T> {
        /**
         * Pega o elemento no índice indicado
         */
        get(index: number): T;

        /**
         * Adiciona um elemento à lista
         */
        add(value: T): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Pega um iterator para percorrer a lista
         */
        iterator(): Iterator<T>
    }

    declare class HashMap<T> {
        /**
         * Pega o elemento no índice indicado
         */
        get(name: string): T;

        /**
         * Adiciona um elemento
         */
        put(name: string, value: T): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Pega um iterator para percorrer o hash
         */
        iterator(): Iterator<T>
    }

    declare class LinkedHashSet<T> {
        /**
         * Adiciona um elemento ao hash
         */
        add(value: T): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Pega um iterator para percorrer o hash
         */
        iterator(): Iterator<T>
    }
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
};


/**
 * Funções para o envio de e-mail
 */
declare namespace notifier {

    /**
     * Envia um e-mail personalizado
     *
     * Usar em eventos do Processo.
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
     * @param parameters java.util.HashMap<string> com os parâmetros do e-mail
     * @param to java.util.ArrayList<string> com os destinatários do e-mail
     * @param mimeType Tipo do conteúdo do e-mail. Pode ser text/html ou text/plain
     *
     */
    declare function notify(fromId: string, templateId: string, parameters: java.util.HashMap<string>, to: java.util.ArrayList<string>, mimeType: string): void;
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
    setValue(nomeCampo: string, valor: string): string;

    /**
     * Pega o valor de um campo do formulário
     */
    getValue(nomeCampo: string): string;

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
    declare function addCardChild(tableName: string, cardData: java.util.HashMap<string>): void;

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
    declare function getCardData(numProcesso: number): java.util.HashMap<string>;

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
    declare function startProcess(processId: string, taskNumber: number, users: java.util.ArrayList<string>, comment?: string, taskFinished?: boolean, form?: java.util.HashMap<string>, managerMode?: boolean): java.util.HashMap<string>;

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
     * Retorna um objeto com a propriedade sendo o nome do campo e seus valores.
     */
    declare function getChildrenFromTable(tableName: string): object;

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
 * Adiciona um Filho ao Pai
 *
 * @param {String} tableName Nome da tabela
 * @returns {Number} Id do filho criado
*/
declare function wdkAddChild(tableName: string): number;

/**
 * Pega os dados de um determinado Dataset ou Formulário
 *
 * Usar no HTML de qualquer formulário.
 *
 * @example
 * let filtro = {'colleaguePK.colleagueId': 'adm'};
 * let colaboradores = getDatasetValues('colleague', filtro);
 * console.log(colaboradores[0].colleagueName);
 */
declare function getDatasetValues(dataset: string, filtro: object[]): object[];

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

    /**
     * Cria a chave principal
     *
     * Para uso dos métodos updateRecord, deleteRecord e addOrUpdate do dataset
     * sincronizado.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.setKey(["Valor coluna 1", "Valor coluna 2"]);
     */
    setKey(valores: string[]|object[]): void;

    /**
     * Cria um ou mais índices para maior performance na consulta
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.addIndex(["Valor coluna 1", "Valor coluna 2"]);
     */
    addIndex(valores: string[]|object[]): void;
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

declare type errorCallback = (error: ErrorData, data: object) => void;
declare type simpleCallback = () => void;
declare type dataCallback = (data: object) => void;

declare type autocompleteOnTagCallback = (item: object, tag: object) => void;

interface ErrorData {
    message?: string;
    responseText: object;
}

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
    onTagExists?: autocompleteOnTagCallback;

    /**
     * Evento disparado ao atingir o limite de tags
     */
    onMaxTags?: autocompleteOnTagCallback;

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
    onBlock?: simpleCallback,

    /**
     * Função para ser executado após o efeito de transição do desbloqueio
     *
     * O elemento desbloqueado será passado à função.
     */
    onUnBlock?: dataCallback,

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
    on(event: string, callback: simpleCallback|dataCallback): void;
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
    declare function autocomplete(target: string, options: AutoCompleteOptions, callback: errorCallback): AutoComplete;

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
     */
    declare function modal(settings: ModalSettings): FluigcModal;
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
}
