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
