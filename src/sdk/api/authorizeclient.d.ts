
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
