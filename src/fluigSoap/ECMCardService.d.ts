declare namespace com.totvs.technology.ecm.dm.ws {

    /**
     * Serviço para tratar registros de formulários
     */
    declare class CardService {

        /**
         * Cria um registro de formulário
         */
        create(companyId: number, username: string, password: string, card: CardDtoArray): WebServiceMessageArray;

        /**
         * Atualiza o registro do formulário
         */
        updateCardData(companyId: number, username: string, password: string, cardId: number, cardData: CardFieldDtoArray): WebServiceMessageArray;

        /**
         * Apaga o registro do formulário
         */
        deleteCard(companyId: number, username: string, password: string, cardId: number): WebServiceMessageArray;
    }

    /**
     * Representa um Documento/Formulário
     */
    declare class CardDto {
        setUserNotify(notify: boolean): void;
        setInheritSecurity(inherit: boolean): void;
        setDocumentDescription(description: string): void;
        setParentDocumentId(parentId: number): void;
        getCardData(): java.util.List<CardFieldDto>;
    }

    /**
     * Representa um campo do Documento/Formulário
     */
    declare class CardFieldDto {
        setField(field: string): void;
        setValue(value: string): void;
    }

    /**
     * Representa um conjunto de Documentos/Formulários
     *
     * Utilizado ao criar um documento/formulário.
     */
    declare class CardDtoArray {
        getItem(): java.util.List<CardDto>;
    }

    /**
     * Representa um conjunto de campos do Documento/Formulário
     *
     * Utilizado ao editar um documento/formulário.
     */
    declare class CardFieldDtoArray {
        getItem(): java.util.List<CardFieldDto>;
    }
}
