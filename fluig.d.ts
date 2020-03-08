/**
 * List é obtida no Fluig com: new java.util.ArrayList();
 */
class List {
    get(indice: number): object;
    add(valor: object): void;
}

/**
 * HashMap é obtido no Fluig com: new java.util.HashMap();
 */
class HashMap {
    get(campo: string): string;
    put(campo: string, valor: string): void;
}

/**
 * Entidade Aprovador
 */
class ApproverDto {

    /**
     * Pega o número do aprovador
     */
    getapproverId(): number;

    /**
     * Pega a versão do aprovador
     */
    getVersion(): number;

    /**
     * Pega o código da empresa na qual o aprovador foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega a matrícula do colaborador que criou o aprovador
     */
    getColleagueId(): number;

    /**
     * Pega o tipo de aprovação Pode ser 0 para Colaborador ou 1 para Grupo
     */
    getApproverType(): number;

    /**
     * Pega o nível de aprovação no caso de aprovação em níveis
     */
    getLevelId(): number;
}

/**
 * Permite a passagem de parâmetros entre os eventos do Workflow
 */
declare namespace globalVars {

    /**
     * Insere um valor nos parâmetros gerais
     */
    declare function put(name: string, value: object): void;

    /**
     * Pega um valor dos parâmetros gerais
     */
    declare function get(name: string): object
};


/**
 * Envia mensagens ao Log do ECM Server
 */
declare namespace log {

    /**
     * Log com "criticidade" INFO
     */
    declare function info(message: string): void;

    /**
     * Log com "criticidade" WARNING
     */
    declare function warn(message: string): void;

    /**
     * Log com "criticidade" ERROR
     */
    declare function error(message: string): void;

    /**
     * Log com "criticidade" FATAL
     */
    declare function fatal(message: string): void;
};


/**
 * Funções para o envio de e-mail
 */
declare namespace notifier {

    /**
     * Envia um e-mail personalizado
     *
     * Usar em eventos do Processo.
     *
     * @example
     * var parametros = new java.util.HashMap();
     * parametros.put("subject", "ASSUNTO");
     * parametros.put("NOME_USUARIO", "João");
     * parametros.put("CODIGO_USUARIO", "01");
     *
     * var usuarios = new java.util.ArrayList();
     * usuarios.add("adm");
     *
     * notifier.notify("adm", "mail1", parametros, usuarios, "text/html");
     *
     * @param from Matrícula do usuário que está enviando o e-mail
     * @param template Código do template de e-mail
     * @param parameters Map com os parâmetros do e-mail
     * @param to List com os destinatários do e-mail
     * @param mimeType Tipo do conteúdo do e-mail. Pode ser text/html ou text/plain
     *
     */
    declare function notify(from: string, template: string, parameters: object, to: object, mimeType: string): void;
};


/**
 * Funções para o uso dos serviços (Progress)
 *
 * Usar em qualquer evento.
 */
declare namespace ServiceManager {

    /**
     * Obtém o serviço especificado
     *
     * Normalmente utilizado para pegar o serviceHelper do serviço.
     *
     * @example
     * var service = ServiceManager.getService("ems2_v10");
     * var serviceHelper = service.getBean();
     */
    declare function getService(serviceId: string): object;
};

/**
 * Entidade Documento
 */
class DocumentDto {

    /**
     * Pega o número do documento
     */
    getDocumentId(): number;

    /**
     * Pega a versão do documento
     */
    getVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega o UUID do documento
     */
    getUUID(): string;

    /**
     * Pega o tipo do arquivo físico. Se retornar em branco ou nulo é um tipo desconhecido
     */
    getDocumentTypeId(): string;

    /**
     * Pega o código do idioma do documento
     */
    getLanguageId(): string;

    /**
     * Pega o código do ícone do documento
     */
    getIconId(): number;

    /**
     * Pega o código do assunto do documento
     */
    getTopicId(): number;

    /**
     * Pega a matrícula do colaborador que criou o documento
     */
    getColleagueId(): string;

    /**
     * Pega a descrição do documento
     */
    getDocumentDescription(): string;

    /**
     * Pega os comentários adicionais do documento
     */
    getAdditionalComments(): string;

    /**
     * Pega o caminho físico do documento
     */
    getPhisicalFile(): string;

    /**
     * Pega a data de criação do documento
     */
    getCreateDate(): Date;

    /**
     * Pega a data de aprovação do documento
     */
    getApprovedDate(): Date;

    /**
     * Pega a data da última modificação do documento
     */
    getLastModifiedDate(): Date;

    /**
     * Pega a data da última modificação do documento
     */
    getExpirationDate(): Date;

    /**
     * Pega o tipo do documento
     *
     * Tipos possíveis:
     * - 0: Pasta Raíz
     * - 1: Pasta
     * - 2: Documento Normal
     * - 3: Documento Externo
     * - 4: Formulário
     * - 5: Ficha
     * - 7: Anexo Workflow
     * - 8: Novo Conteúdo
     * - 9: Aplicativo
     * - 10: Relatório
     * - 15: Pasta Social
     * - portal: Site
     * - portalPage: Página de Site
     */
    getDocumentType(): string;

    /**
     * Pega o número da pasta/formulário pai
     */
    getParentDocumentId(): number;

    /**
     * Pega o nome do arquivo físico principal e anexos
     */
    getRelatedFiles(): number;

    /**
     * Verifica se o documento está ativo
     */
    getActiveVersion(): boolean;

    /**
     * Pega a descrição da versão
     */
    getVersionDescription(): string;

    /**
     * Verifica se o documento permite download
     */
    getDownloadEnabled(): boolean;

    /**
     * Verifica se o documento está em aprovação
     */
    getApproved(): boolean;

    /**
     * Pega a data a partir que o documento poderá ser visualizado
     */
    getValidationStartDate(): Date

    /**
     * Pega a matrícula do colaborador que publicou o documento
     */
    getPublisherId(): string;

    /**
     * Pega a descrição da ficha para documento do tipo 5
     */
    getCardDescription(): string;

    /**
     * Pega o formulário que foi usado como base para criação da ficha.
     *
     * Utilizado somente com documento do tipo 5.
     */
    getDocumentPropertyNumber(): number;

    /**
     * Pega a versão do formulário em que a ficha foi criada
     */
    getDocumentPropertyVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Verifica se o documento/pasta está abaixo de pasta particular
     */
    getPrivateDocument(): boolean;

    /**
     * Pega a matrícula do colaborador onde o documento particular está alocado
     */
    getPrivateColleagueId(): string;

    /**
     * Verifica se o arquivo foi indexado
     */
    getIndexed(): boolean;

    /**
     * Pega a prioridade do documento
     */
    getPriority(): number;

    /**
     * Verifica se notifica os usuários que tenham esse assunto de interesse
     */
    getUserNotify(): boolean;

    /**
     * Verifica se o documento está expirado
     */
    getExpires(): boolean;

    /**
     * Pega o volume onde o documento foi publicado. Se estiver em branco foi no volume pai.
     */
    getVolumeId(): string;

    /**
     * Verifica se herda segurança do pai
     */
    getInheritSecurity(): boolean;

    /**
     * Verifica se atualiza as propriedades da cópia controlada
     */
    getUpdateIsoProperties(): boolean;

    /**
     * Pega a hora da última modificação em milisegundos
     */
    getLastModifiedTime(): string;

    /**
     * Verifica se o documento está na lixeira
     */
    getDeleted(): boolean;

    /**
     * Pega o documento do dataset se o documento é um formulário
     */
    getDatasetName(): string;

    /**
     * Pega as palavras-chave do documento. Cada palavra é separada por vírgula.
     */
    getKeyWord(): string;

    /**
     * Verifica se a versão/revisão é inalterável
     */
    getImutable(): boolean;

    /**
     * Verifica se o documento está em edição, para documento do tipo "Novo Conteúdo"
     */
    getDraft(): boolean;

    /**
     * Verifica se utiliza visualizador interno
     */
    getInternalVisualizer(): boolean;

    /**
     * Pega o tamanho físico do documento principal e anexos
     */
    getPhisicalFileSize(): number;
};

/**
 * Lista de DocumentDto
 */
class ListDocumentDto {
    /**
     * Quantidade de elementos
     */
    size(): number;

    /**
     * Pega elemento no índice indicado
     */
    get(index: number): DocumentDto;
}

/**
 * Entidade Segurança do Documento
 */
class DocumentSecurityConfigDto {

    /**
     * Pega o número do documento
     */
    getDocumentId(): number;

    /**
     * Pega a versão do documento
     */
    getVersion(): number;

    /**
     * Pega o código da empresa em que o documento foi publicado
     */
    getCompanyId(): number;

    /**
     * Pega a matrícula de um colaborador ou o código do grupo que está na segurança do documento
     *
     * É possível saber se vai retornar um colaborador ou um grupo pelo tipo da segurança.
     * Retorna em branco quando o tipo é todos os usuários
     */
    getAttributionValue(): string;

    /**
     * Verifica se é uma permissão
     *
     * Se não é uma permissão é uma restrição.
     */
    getPermission(): boolean;

    /**
     * Verifica se lista o conteúdo
     */
    getShowContent(): boolean;

    /**
     * Pega o nível de permissão/restrição.
     *
     * Tipos de permissão/restrição:
     * - -1: Sem permissão/restrição (nega acesso)
     * - 0: Leitura
     * - 1: Gravação
     * - 2: Modificação
     * - 3: Total
     */
    getAttributionType(): number;

    /**
     * Pega a sequência da permissão/restrição
     */
    getSequence(): number;

    /**
     * Verifica se ele utiliza a segurança desta versão nas demais
     */
    getSecurityVersion(): boolean;
};

/**
 * Pega o valor das propriedades do Processo.
 *
 * Usar em eventos do processo e eventos de formulários de processo.
 *
 * Propriedades:
 * - WKDef: Código do processo
 * - WKVersDef: Versão do processo
 * - WKNumProces: Número do processo
 * - WKNumState: Número da atividade
 * - WKCompany: Número da Empresa
 * - WKUser: Usuário Corrente
 */
declare function getValue(nomePropriedade: string): string;

/**
 * Disponibiliza diversas funções para manipulação do formulário
 *
 * Usar em eventos do formulário (que recebem form como parâmetro).
 */
declare namespace Form {

    /**
     * Habilita/Desabilita a edição de um campo do formulário
     */
    declare function setEnabled(nomeCampo: string, habilita: boolean): void;

    /**
     * Verifica se o campo do formulário está habilitado para edição
     */
    declare function getEnabled(nomeCampo: string): boolean;

    /**
     * Atribui valor a um campo do formulário
     */
    declare function setValue(nomeCampo: string, valor: string): string;

    /**
     * Pega o valor de um campo do formulário
     */
    declare function getValue(nomeCampo: string): string;

    /**
     * Se habilitado os campos são exibidos como input readonly
     */
    declare function setShowDisabledFields(habilita: boolean = false): void;

    /**
     * Se habilitado o link "imprimir" é ocultado
     */
    declare function setHidePrintLink(habilita: boolean = false): void;

    /**
     * Se habilitado o botão "excluir" é ocultado
     */
    declare function setHideDeleteButton(habilita: boolean = false): void;
};

/**
 * Disponibiliza funções para incluir conteúdo HTML no formulário
 */
declare namespace customHTML {

    /**
     * Adiciona conteúdo no final do HTML do formulário
     * @param conteudo Conteúdo HTML a ser incluído
     */
    declare function append(conteudo: string): void;
};

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
     * Encaminha o processo para uma determinada atividade
     *
     * Deve ser usado para tomar decisões em atividades automáticas de listener (AutomaticTasks).
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * hAPI.setAutomaticDecision(2, colaboradores, "Decisão Automática");
     */
    declare function setAutomaticDecision(numAtividade: number, responsaveis: string[], comentario: string): void;

    /**
     * Pega todas as threads em execução de um processo
     *
     * @example
     * var threads = hAPI.getActiveStates();
     * log.info(threads.get(0));
     */
    declare function getActiveStates(): List;

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
     * @param numProcesso ID do Processo
     * @param numThread ID da Thread (geralmente 0). Usado para processos que possuem FORK
     * @param userId ID do responsável pela atividade
     * @param dataConclusao
     * @param tempoSegundos Quantidade de segundos, a partir de 00:00:00, para alcançar determinada hora
     */
    declare function setDueDate(numProcesso: number, numThread: number, userId: string, dataConclusao: Date, tempoSegundos: number): void;

    /**
     * Transfere o processo atual para outro(s) colaborador(es).
     * Usar em eventos do Processo.
     *
     * @example
     *  var colaboradores = new java.util.ArrayList();
     *  colaboradores.add("adm");
     *  hAPI.transferTask(colaboradores, "Tarefa Transferida", 0);
     *
     * @param usuarios IDs dos usuarios
     * @param comentario
     * @param numThread ID da Thread. Normalmente 0
     */
    declare function transferTask(usuarios: string[], comentario: string, numThread?: number = 0): void;

    /**
     * Define uma observação para a atividade atual do processo.
     * Usar em eventos do Processo.
     *
     * @param usuarioId Matrícula do Colaborador
     * @param numProcesso ID do Processo
     * @param numThread ID da Thread (geralmente 0). Usado para processos que possuem FORK.
     * @param comentario Comentário do processo para a atividade corrente
     */
    declare function setTaskComments(usuarioId: string, numProcesso: number, numThread: number, comentario: string): void;

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
     *  var card = declare function getCardData(186);
     *  log.info(card.get("campo1"));
     */
    declare function getCardData(numProcesso: number): HashMap;

    /**
     * Inicia uma nova instância de um processo.
     * Usar em eventos do Processo.
     *
     * @example
     * var colaboradores = new java.util.ArrayList();
     * colaboradores.add("adm");
     * var formData = new java.util.HashMap();
     * formData.put("nome_do_campo_1", "valor_do_campo_1");
     * var resposta = startProcess("ProcessoXPTO", 0, colaboradores, "Iniciado automaticamente", false, formData, false);
     * var numProcessoCriado = resposta.get("iProcess");
     *
     * @param idProcesso Código do processo cadastrado no Fluig.
     * @param atividadeDestino Número da atividade de inicio do processo. Pode ser informado 0.
     * @param usuarios Matrícula dos usuários que receberão a atividade.
     * @param comentario Comentário para a atividade do processo.
     * @param completaTarefa indica se a tarefa sera finalizada apás a criação do processo.
     * @param valoresForm HashMap representando propriedade/valor dos campos do formulário do processo.
     * @param modoGestor indica se a tarefa sera inicializada com o modo gestor do Fluig ativo.
     * @returns HashMap com informações referentes ao processo criado
     */
    declare function startProcess(idProcesso: string, atividadeDestino: number, usuarios: string[], comentario?: string, completaTarefa?: boolean, valoresForm?: HashMap, modoGestor?: boolean): HashMap;

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
    declare function calculateDeadLineHours(data: Date, segundos: number, prazo: number, periodoId: string): DeadLineDate;

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
    declare function calculateDeadLineTime(data: Date, segundos: number, prazo: number, periodoId: string): DeadLineDate;

    /**
     * Atribui um usuario substituto para a atividade atual do processo.
     *
     * Usar em eventos do Processo.
     */
    declare function setColleagueReplacement(novoResponsavel: string): void;

    /**
     * Retorna o link para movimentação da solicitação.
     *
     * Usar em eventos do Processo.
     */
    declare function getUserTaskLink(numAtividade: number): string;

    /**
     * Pega o ID da Thread atual
     */
    declare function getActualThread(numEmpresa, numProcesso, numAtiv): number;

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
    declare function listAttachments(): ListDocumentDto;
};

/**
 * Constantes globais para usar no HTML de Processo / Formulário.
 *
 * O arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
 */
declare namespace Global {
    /**
     * Último ID de um Filho (Cadastro Pai/Filho)
     *
     * Disponível quando o formulário possui um Pai/Filho padrão.
     */
    const newId: number;

    /**
     * Versão do Workflow.
     *
     * Só é preenchida em Processo
     */
    const WKVersDef: string;

    /**
     * ID da atividade atual do Workflow
     *
     * Só é preenchida em Processo
     */
    const WKNumState: string;
}

/**
 * Adiciona um Filho ao Pai
 *
 * @param {String} tablename Nome da tabela
 * @returns {Number} Id do filho criado
*/
declare function wdkAddChild(tablename: string): number;

/**
 * Pega os dados de um determinado Dataset ou Formulário
 *
 * Usar no HTML de qualquer formulário.
 *
 * @example
 * let filtro = {'colleaguePK.colleagueId': 'adm'};
 * let colaboradores = getDatasetValues('colleague', filtro);
 * console.log(colaboradores[0].colleagueName);
 */
declare function getDatasetValues(dataset: string, filtro: object[]): object[];

/**
 * Tipos de campo de um Dataset
 *
 * Usado na criação do Dataset, na função defineStructure.
 */
enum DatasetFieldType {
    NUMBER,
    STRING,
    TEXT,
    DATE,
    BOOLEAN,
}

/**
 * Tipos de Filtros (constraint)
 *
 * Usado para criar os filtros que serão repassados ao método getDataset.
 * Usar nos eventos do Fluig ou na criação de Dataset customizado.
 */
enum ConstraintType {
    /**
     * Filtro: Deve Conter
     *
     * Interprete como o E lógico
     */
    MUST,

    /**
     * Filtro: Pode Conter
     *
     * Inteprete como OU lógico
     */
    SHOULD,

    /**
     * Filtro: Não Deve Conter
     */
    MUST_NOT,
}

class Dataset {
    const rowsCount: number;

    /**
     * Retorna o valor de uma coluna (campo) em determinada linha (índice)
     */
    getValue(linha: number, coluna: string): string;

    /**
     * Cria uma coluna no Dataset
     *
     * @example
     * var dataset = DatasetBuilder().newDataset();
     * dataset.addColumn("coluna1");
     * dataset.addColumn("coluna2");
     * dataset.addRow(["valor coluna 1", "valor coluna 2"]);
     */
    addColumn(coluna: string): void;

    /**
     * Adicionar uma linha ao Dataset
     *
     * @example
     * var dataset = DatasetBuilder().newDataset();
     * dataset.addColumn("coluna1");
     * dataset.addColumn("coluna2");
     * dataset.addRow(["valor coluna 1", "valor coluna 2"]);
     */
    addRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que será persistida no cache de sincronização.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.updateRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    updateRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que será persistida no cache de sincronização.
     *
     * Caso o registro não exista ele será criado na base, caso contrário será atualizado.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.addOrUpdateRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    addOrUpdateRow(valores: string[]|object[]): void;

    /**
     * Adiciona uma linha à coleção que eliminará esses registros no cache de sincronização.
     *
     * Através dos campos da chave principal do Dataset (setKey) os registros
     * serão localizados e alterados conforme os dados enviados pela função.
     *
     * Esta função só funciona se implementado na função onSync.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.deleteRow(["Valor coluna 1", "Valor coluna 2"]);
     */
    deleteRow(valores: string[]|object[]): void;

    /**
     * Cria a chave principal
     *
     * Para uso dos métodos updateRecord, deleteRecord e addOrUpdate do dataset
     * sincronizado.
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.setKey(["Valor coluna 1", "Valor coluna 2"]);
     */
    setKey(valores: string[]|object[]): void;

    /**
     * Cria um ou mais índices para maior performance na consulta
     *
     * @example
     * var dataset = DatasetBuilder.newDataset();
     * dataset.addColumn("Coluna1");
     * dataset.addColumn("Coluna2");
     * dataset.addIndex(["Valor coluna 1", "Valor coluna 2"]);
     */
    addIndex(valores: string[]|object[]): void;
}

class Constraint {
    fieldName: string;
    initialValue: string;
    finalValue: string;

}

/**
 * Funções para manipulação de Dataset
 */
declare namespace DatasetFactory {
    /**
     * Retorna o nome dos datasets disponíveis
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     */
    declare function getAvailableDatasets(): string[];

    /**
     * Cria uma constraint para ser usada no método getDataset
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     */
    declare function createConstraint(fieldName: string, initialValue: string, finalValue: string, constraintType: ConstraintType): Constraint;

    /**
     * Pesquisa os dados de um dataset
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     *
     * @example
     * var constraints = [
     *     DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT),
     *     DatasetFactory.createConstraint("valor", "100", "999", ConstraintType.MUST)
     * ];
     * var dataset = DatasetFactory.getDataset("colleague", ["colleagueName"], constraints);
     */
    declare function getDataset(nomeDataset: string, campos?: string[], constraints?: Constraint[], ordem?: string[]): Dataset;
}

/**
 * Funções para criação de Dataset
 */
declare namespace DatasetBuilder {
    /**
     * Cria um Dataset
     *
     * Usar somente ao criar datasets customizados.
     */
    declare function newDataset(): Dataset;
}

/**
 * Entidade Documento Relacionado
 */
class RelatedDocumentDto {

    /**
     * Retorna o número do documento
     *
     * Usar em eventos do Fluig.
     */
    getDocumentId(): number;

    /**
     * Retorna o número do documento relacionado
     *
     * Usar em eventos do Fluig.
     */
    getRelatedDocumentId(): number;

    /**
     * Retorna a versão do documento
     *
     * Usar em eventos do Fluig.
     */
    getVersion(): number;

    /**
     * Retorna o código da empresa em que o documento foi publicado
     *
     * Usar em eventos do Fluig.
     */
    getCompanyId(): number;
}

interface RequestSettings {
    url?: string;

    /**
     * Verbo HTTP utilizado na requisição (padrão é GET)
     */
    method?: string;

    /**
     * Tipo do envio.
     *
     * Pode ser:
     * - application/x-www-form-urlencoded (padrão)
     * - multipart/form-data (quando quer fazer envio de arquivos)
     * - text/plain
     */
    contentType?: string;

    /**
     * Tipo do resultado esperado da requisição.
     *
     * O resultado da requisição será convertido para o tipo especificado e então
     * enviado ao método success.
     *
     * Os tipos possíveis são:
     * - xml
     * - html
     * - script
     * - json
     * - jsonp
     * - text
     */
    dataType?: string;

    /**
     * Dados para enviar
     */
    data?: string|object;

    /**
     * Função que será executada em caso de sucesso
     *
     * @param data
     * @param textStatus
     * @param jqXHR Objeto da JQuery
     */
    success?: function (string|object, string, object): void;

    /**
     * Função que será executada em caso de falha
     *
     * @param jqXHR Objeto da JQuery
     * @param textStatus
     * @param errorThrown
     */
    error?: function (object, string, string): void;

    /**
     * Converter os dados para o padrão application/x-www-form-urlencoded
     *
     * Por padrão os dados são convertidos para application/x-www-form-urlencoded,
     * mas você pode desabilitar essa conversão para poder enviar um DOMDocument
     * ou outro tido de dado sem a conversão.
     */
    processData?: boolean;
}

/**
 * Consultar dados do ambiente da sessão via JS (Client Side)
 */
declare namespace WCMAPI {
    const version: string;

    const serverURL: string;
    declare function getServerURL(): string;

    const tenantCode: string;
    declare function getTenantCode(): string;

    const serverContextURL: string;
    declare function getServerContextURL(): string;

    /**
     * Envia uma requisição ao servidor do Fluig
     *
     * A requisição é feita pela JQuery.
     */
    declare function Create(settings: RequestSettings): void;

    /**
     * Encerra a sessão do usuário
     */
    declare function logoff(): void;
}

/**
 * Funções relacionadas a Documentos
 *
 * Usar em qualquer evento.
 */
declare namespace docAPI {
    /**
     * Copia os arquivos físicos de um documento existente para a área de upload do usuário logado
     * @returns Nomes dos arquivos que foram disponibilizados na área de upload
     */
    declare function copyDocumentToUploadArea(documentId: number, version: number): string[];

    declare function createDocument(document: DocumentDto, )
}
