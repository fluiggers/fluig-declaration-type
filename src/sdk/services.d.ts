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
