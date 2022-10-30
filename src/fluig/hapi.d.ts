interface Task {
    name: string;

    /**
     * ID do usuário responsável
     */
    responsible: string;

    /**
     * Data no formato dd/mm/yyyy
     */
    dueDate: string;
}

/**
 * Indica a Data e Hora de um prazo
 */
interface DeadLineDate {
    /**
     * Data no formato dd/mm/yyyy
     */
    0: string;

    /**
     * Quantidade de segundos, a partir de 00:00:00, para alcançar determinada hora
     */
    1: number;
}

/**
 * Disponibiliza diversas funções para manipulação do processo
 *
 * Usar nos eventos do Processo.
 */
declare namespace hAPI {
    /**
     * Pega o valor de um campo do formulário
     */
    declare function getCardValue(nomeCampo: string): string;

    /**
     * Atribui valor a um campo do formulário
     */
    declare function setCardValue(nomeCampo: string, valor: string): string;

    /**
     * Adiciona um filho no formulário pai e filho do processo
     *
     * @param tableName Nome da tabela pai-filho
     * @param cardData Mapa com os campos e valores
     */
    declare function addCardChild(tableName: string, cardData: java.util.HashMap<string, string>): void;

    /**
     * Encaminha o processo para uma determinada atividade
     *
     * Deve ser usado para tomar decisões em atividades automáticas de listener (AutomaticTasks).
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * hAPI.setAutomaticDecision(2, colaboradores, "Decisão Automática");
     */
    declare function setAutomaticDecision(taskNumber: number, responsible: java.util.ArrayList<string>, comment: string): void;

    /**
     * Pega todas as threads em execução de um processo
     *
     * @example
     * var threads = hAPI.getActiveStates();
     * log.info(threads.get(0));
     */
    declare function getActiveStates(): java.util.ArrayList<object>;

    /**
     * Pega o ID do processo Pai (caso de subprocesso)
     *
     * @param processInstanceId ID do processo
     */
    declare function getParentInstance(processInstanceId: number): number;

    /**
     * Pega uma lista dos processos que são filhos do processo indicado (subprocessos)
     *
     * @param processInstanceId ID do processo
     */
    declare function getChildrenInstances(processInstanceId: number): java.util.List<number>;

    /**
     * Altera o prazo de uma atividade do processo
     *
     * @example
     * var processo = new java.lang.Integer(getValue("WKNumProces"));
     * var data = new java.text.SimpleDateFormat("dd/MM/yyyy").parse("10/10/2010");
     * hAPI.setDueDate(processo, 0, "adm", data, 0);
     * // Define o prazo para Hoje ao meio dia
     * hAPI.setDueDate(1, 0, "adm", new java.util.Date(), 12 * 60 * 60);
     *
     * @param processId ID do Processo
     * @param numThread ID da Thread (geralmente 0). Usado para processos que possuem FORK
     * @param userId ID do responsável pela atividade
     * @param dueDate Data do prazo de encerramento
     * @param tempoSegundos Quantidade de segundos, a partir de 00:00:00, para alcançar determinada hora
     */
    declare function setDueDate(processId: number, numThread: number, userId: string, dueDate: Date, timeInSeconds: number): void;

    /**
     * Transfere o processo atual para outro(s) colaborador(es).
     * Usar em eventos do Processo.
     *
     * @example
     *  var colaboradores = new java.util.ArrayList();
     *  colaboradores.add("adm");
     *  hAPI.transferTask(colaboradores, "Tarefa Transferida", 0);
     *
     * @param users IDs dos usuários
     * @param comment
     * @param numThread ID da Thread. Normalmente 0
     */
    declare function transferTask(users: java.util.ArrayList<string>, comment: string, numThread?: number = 0): void;

    /**
     * Define uma observação para a atividade atual do processo.
     * Usar em eventos do Processo.
     *
     * @param userId Matrícula do Colaborador
     * @param processId ID do Processo
     * @param threadId ID da Thread (geralmente 0). Usado para processos que possuem FORK.
     * @param comment Comentário do processo para a atividade corrente
     */
    declare function setTaskComments(userId: string, processId: number, threadId: number, comment: string): void;

    /**
     * Retorna o valor de uma propriedade avançada do Processo.
     * Usar em eventos do Processo.
     */
    declare function getAdvancedProperty(nomePropriedade: string): string;


    /**
     * Retorna o HashMap com os valores do formulário do processo.
     * Usar em eventos do Processo.
     *
     * Para um formulário Pai e Filho os campos são identificados da seguinte forma:
     *  campo1___1, sendo campo1 o nome atribuído ao campo através da tag do campo HTML
     * +___(3 underlines) + número sequencial do registro.
     *
     * @example
     *  var card = declare function getCardData(getValue("WKNumProces"));
     *  log.info(card.get("campo1"));
     */
    declare function getCardData(numProcesso: number): java.util.HashMap<string, string>;

    /**
     * Inicia uma nova instância de um processo.
     * Usar em eventos do Processo.
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * var formData = new java.util.HashMap();
     * formData.put("nome_do_campo_1", "valor_do_campo_1");
     * var resposta = startProcess("Processo", 0, colaboradores, "Iniciado automaticamente", false, formData, false);
     * var numProcessoCriado = resposta.get("iProcess");
     *
     * @param processId Código do processo cadastrado no Fluig.
     * @param taskNumber Número da atividade de inicio do processo. Pode ser informado 0.
     * @param users Matrícula dos usuários que receberão a atividade.
     * @param comment Comentário para a atividade do processo.
     * @param taskFinished indica se a tarefa sera finalizada apás a criação do processo.
     * @param form HashMap representando propriedade/valor dos campos do formulário do processo.
     * @param managerMode indica se a tarefa sera inicializada com o modo gestor do Fluig ativo.
     * @returns HashMap com informações referentes ao processo criado
     */
    declare function startProcess(processId: string, taskNumber: number, users: java.util.ArrayList<string>, comment?: string, taskFinished?: boolean, form?: java.util.HashMap<string, string>, managerMode?: boolean): java.util.HashMap<string, string>;

    /**
     * Calcula um prazo
     *
     * Cálculo feito a partir de uma data, com base no expediente e feriados cadastrados no produto,
     * passando o prazo em horas.
     *
     * Importante: a Data retornada é formatada no padrão dd/mm/yyyy
     *
     * @example
     * var data = new Date();
     * var deadlineDate = hAPI.calculateDeadLineHours(data, 50000, 2, "Default");
     * var processo = getValue("WKNumProces");
     * hAPI.setDueDate(processo, 0, 'adm', deadlineDate[0], deadlineDate[1]);
     */
    declare function calculateDeadLineHours(deadlineDate: Date, seconds: number, deadlineInHours: number, periodId: string): DeadLineDate;

    /**
     * Calcula um prazo
     *
     * Cálculo feito a partir de uma data, com base no expediente e feriados cadastrados no produto,
     * passando o prazo em segundos.
     *
     * Importante: a Data retornada é formatada no padrão dd/mm/yyyy
     *
     * @example
     * var data = new Date();
     * var deadlineDate = hAPI.calculateDeadLineHours(data, 50000, 2, "Default");
     * var processo = getValue("WKNumProces");
     * hAPI.setDueDate(processo, 0, 'adm', deadlineDate[0], deadlineDate[1]);
     */
    declare function calculateDeadLineTime(deadlineDate: Date, seconds: number, deadlineInHours: number, periodId: string): DeadLineDate;

    /**
     * Atribui um usuário substituto para a atividade atual do processo.
     *
     * Usar em eventos do Processo.
     */
    declare function setColleagueReplacement(responsible: string): void;

    /**
     * Retorna o link para movimentação da solicitação.
     *
     * Usar em eventos do Processo.
     */
    declare function getUserTaskLink(numAtividade: number): string;

    /**
     * Pega o ID da Thread atual
     */
    declare function getActualThread(companyNumber, processNumber, activityNumber): number;

    /**
     * Permite a criação de atividades adhoc dentro dos eventos do Fluig
     *
     * @param processoId Número da Solicitação
     * @param sequenceId Código processstate da atividade que tem o processo ad-hoc
     * @param assunto Assunto
     * @param detalhamento Detalhamento
     * @param tarefas Lista de tarefas
     */
    declare function createAdHocTasks(processoId: number, sequenciaId: number, assunto: string, detalhamento: string, tarefas: Task[]): void;

    /**
     * Retorna a lista de anexos do processo
     *
     * Somente anexos do tipo GED e Workflow são retornados.
     */
    declare function listAttachments(): java.util.List<DocumentDto>;

    /**
     * Permite publicar anexo workflow da solicitação no GED
     *
     * É obrigatório informar a pasta destino através do método setParentDocumentId
     */
    declare function publishWorkflowAttachment(documentDto: DocumentDto): void;

    /**
     * Permite anexar documentos do GED à solicitação workflow
     *
     * @throws {Error}
     */
    declare function attachDocument(documentId: number): void;

    /**
     * Retorna os campos filhos, e seus valores, de uma tabela pai.
     *
     * Retorna um objeto com a propriedade sendo o nome do campo e seus valores.
     */
    declare function getChildrenFromTable(tableName: string): object;

    /**
     * Retorna os índices dos campos filhos de uma tabela pai.
     *
     * @see https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos#EventosdeProcessos-EventosdeFormul%C3%A1rioPaiFilho
     */
    declare function getChildrenIndexes(tableName: string): number[];

    /**
     *
     */
    declare function getAvailableStatesDetail(companyId: number, userId: string, processId: number, processInstanceId: number, threadSequenceId: number = 0);
};
