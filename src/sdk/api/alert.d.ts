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
