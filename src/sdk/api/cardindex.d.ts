/**
 * Itens de formulário
 */
declare namespace com.fluig.sdk.api.cardindex {
    declare class CardFieldVO {
        getFieldId(): java.lang.String;
        getValue(): java.lang.String;
        setFieldId(fieldId: java.lang.String);
        setValue(value: java.lang.String);
    }

    declare class CardChildrenVO {
        getSerialVersionUID(): number;
        getValues(): java.util.ArrayList<CardFieldVO>;
        setValues(values: java.util.ArrayList<CardFieldVO>);
    }

    declare class CardFindFieldVO {
        getCardId(): number;
        getChildren(): java.util.ArrayList<CardChildrenVO>;
        getCompanyId(): number;
        getParentDocumentId(): number;
        getSerialVersionUID(): number;
        getValues(): java.util.ArrayList<CardFieldVO>;
        getVersion(): number;
        isActiveVersion(): boolean;
        setActiveVersion(activeVersion: boolean);
        setCardId(cardId: number);
        setChildren(children: java.util.ArrayList<CardChildrenVO>);
        setCompanyId(companyId: number);
        setParentDocumentId(parentDocumentId: number);
        setValues(values: java.util.ArrayList<CardFieldVO>);
        setVersion(version: number);
    }
}
