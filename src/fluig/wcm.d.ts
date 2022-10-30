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
