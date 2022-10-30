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
