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

declare namespace com.totvs.technology.foundation.alert.enumeration {
    enum FDNAlertActionType {
        MAIN,
        DEFAULT,
    }

    enum FDNAlertIntegrationType {
        JMS,
        HTTP,
        NONE,
    }
}

declare namespace com.totvs.technology.foundation.alert {
    declare abstract class AlertObject {
        getAlertObjectId(): number;
        getAlertObjectClass(): java.lang.String;
        getAlertObjectTypeDescriptionKey(): java.lang.String;
        getAlertObjectDescription(): java.lang.String;
        getAlertObjectLink(): java.lang.String;
        getAlertObjectDetailKey(): java.lang.String;
        getAlertObjectNote(): java.lang.String;
        setAlertObjectNote(paramString: string): void;
    }

    declare class GenericAlertObject extends AlertObject {
        public GenericAlertObject();

        /**
         * Cria um novo objeto
         *
         * @param alertObjectId ID do objeto de alerta. Acredito que passar -1 crie um ID auto incrementado (igual ao RM faz)
         * @param alertObjectClass Nome da classe do Objeto. Não entendi como funciona, mas qualquer string faz funcionar
         * @param alertObjectTypeDescriptionKey Texto ou chave I18N. Informa a descrição do tipo da notificação
         * @param alertObjectDescription Texto ou chave I18N. Informa a descrição do objeto. Será o texto do link
         * @param alertObjectDetailKey Texto ou chave I18N. Informa os detalhes da notificação
         * @param alertObjectLink URL para encaminhar o usuário ao objeto da notificação. Começar com /
         * @param alertObjectNote Anotação do objeto
         */
        public GenericAlertObject(
            alertObjectId: number,
            alertObjectClass: string,
            alertObjectTypeDescriptionKey: string,
            alertObjectDescription: string,
            alertObjectDetailKey: string,
            alertObjectLink: string,
            alertObjectNote:? string = null
        );
    }

    declare abstract class AlertAction {
        getActionKey(): java.lang.String;
        getDescriptionKey(): java.lang.String;
        getDescriptionAfterExecKey(): java.lang.String;
        getHttpMethod(): java.lang.String;
        getUrl(): java.lang.String;
        getActionType(): com.totvs.technology.foundation.alert.enumeration.FDNAlertActionType;
        getIntegrationType(): com.totvs.technology.foundation.alert.enumeration.FDNAlertIntegrationType;
    }

    declare class GenericAlertAction extends AlertAction {
        GenericAlertAction();

        GenericAlertAction(
            actionKey: string,
            actionType: com.totvs.technology.foundation.alert.enumeration.FDNAlertActionType,
            descriptionKey: string,
            descriptionAfterExecKey: string,
            integrationType: com.totvs.technology.foundation.alert.enumeration.FDNAlertIntegrationType,
            httpMethod: string,
            url: string
        );
    }
}
