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
