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
 * Cria uma coluna no dataset sincronizado
 */
declare function addColumn(coluna: string, tipo?: DatasetFieldType);

 /**
  * Cria a chave principal do dataset sincronizado
  *
  * Para uso dos métodos updateRecord, deleteRecord e addOrUpdate do dataset sincronizado.
  */
declare function setKey(chaves: string[]): void;

 /**
  * Cria um ou mais índices para maior performance na consulta do dataset sincronizado
  */
declare function addIndex(indices: string[]): void;

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
     * Interprete como OU lógico
     */
    SHOULD,

    /**
     * Filtro: Não Deve Conter
     */
    MUST_NOT,
}

declare class Dataset {
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
}

/**
 * Resultado de uma consulta ao Dataset usando o WCM
 *
 * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
 */
interface DatasetWcmResult {
    /**
     * O nome das colunas
     */
    columns: string[];

    /**
     * As propriedades do objeto são os nomes das colunas
     */
    values: object[];
}

/**
 * Indicativo das restrições ao sincronizar dados em Mobile
 */
interface DatasetMobileSync {
    /**
     * As colunas (em letras maiúsculas) a serem salvas no Mobile
     */
    fields: string[];

    /**
     * Os filtros adicionais
     */
    constraints: Constraint[];

    /**
     * Campos da ordenação
     */
    sortFields: string[];
}

/**
 * Formato de Callback para consulta assíncrona ao Dataset usando o WCM
 *
 * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
 */
interface DatasetWcmCallback {
    /**
     * Função que será executada em caso de sucesso
     */
    success: function (DatasetWcmResult);

    /**
     * Função que será executada em caso de falha
     *
     * @param jqXHR Objeto da JQuery
     * @param textStatus
     * @param errorThrown
     */
    error: function (object, string, string): void;
}

declare class Constraint {
    fieldName: string;
    initialValue: string;
    finalValue: string;
    constraintType: ConstraintType;

    /**
     * Indica que a constraint fará uma busca usando LIKE ao invés de =
     */
    setLikeSearch(likeSearch: boolean): void;

    getFieldName(): string;
    getInitialValue(): string;
    getFinalValue(): string;
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
     * Para fazer uma pesquisa usando LIKE pelo formulário deve-se passar true no parâmetro searchLike ao invés de usar o método
     * setLikeSearch do objeto Constraint.
     */
    declare function createConstraint(fieldName: string, initialValue: string, finalValue: string, constraintType: ConstraintType): Constraint;
    declare function createConstraint(fieldName: string, initialValue: string, finalValue: string, constraintType: ConstraintType, searchLike: boolean): Constraint;

    /**
     * Pesquisa os dados de um dataset
     *
     * Para usar no HTML de formulário o arquivo vcXMLRPC.js precisa ser declarado: <script src="/webdesk/vcXMLRPC.js"></script>
     *
     * @param nomeDataset O nome do Dataset.
     * @param campos Os campos que serão retornados.
     * @param constraints Os filtros aplicados ao dataset.
     * @param ordem Os campos que farão a ordenação do resultado. Pode-se acrescentar ;desc ao nome do campo para ordenar de forma decrescente.
     *
     * @example
     * var constraints = [
     *     DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT),
     *     DatasetFactory.createConstraint("valor", "100", "999", ConstraintType.MUST)
     * ];
     * var dataset = DatasetFactory.getDataset("colleague", ["colleagueName"], constraints);
     */
    declare function getDataset(nomeDataset: string, campos?: string[], constraints?: Constraint[], ordem?: string[]): Dataset;

    /**
     * Pesquisa os dados de um dataset de forma assíncrona
     *
     * Disponível somente nas páginas que usam o arquivo /webdesk/vcXMLRPC.js.
     *
     * @example
     * var constraints = [
     *     DatasetFactory.createConstraint("colleaguePK.colleagueId", "adm", "adm", ConstraintType.MUST_NOT),
     *     DatasetFactory.createConstraint("valor", "100", "999", ConstraintType.MUST)
     * ];
     * var dataset = DatasetFactory.getDataset("colleague", ["colleagueName"], constraints);
     */
    declare function getDataset(nomeDataset: string, campos?: string[], constraints?: Constraint[], ordem?: string[], callback: DatasetWcmCallback): void;
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
