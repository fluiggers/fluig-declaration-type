interface WorkflowProcessPK {
    companyId: number,
    processInstanceId: number
}

interface WorkflowProcess {
    workflowProcessPK: WorkflowProcessPK,
    processId: string,
    version: number,
    requesterId: string,
    active: boolean,
    attachmentSeqId: number,
    sourceProcess: number,
    sourceThreadSequence: number,
    UUID: string
}

interface colleaguePK {
    companyId: number,
    colleagueId: string
}

interface Colleague {
    colleaguePK: colleaguePK,
    userTenantId: number,
    colleagueName: string,
    mail: string,
    login: string,
    passwd: string,
    active: boolean ,
    adminUser: boolean ,
    groupId: string
}
