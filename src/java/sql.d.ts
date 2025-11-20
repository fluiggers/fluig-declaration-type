declare namespace javax.sql {
    declare class DataSource {
        /**
         * Recupera a Conexão com o Banco de Dados
         *
         * @throws Exception
         */
        getConnection(): Connection;
    }

    /**
     * Conexão com o Banco de Dados
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/Connection.html
     */
    declare class Connection {
        /**
         * Cria o objeto que executará o SQL
         *
         * @throws Exception
         */
        createStatement(): Statement;

        /**
         * Cria o objeto para preparar e executar o SQL
         *
         * @throws Exception
         */
        prepareStatement(sql: string): PreparedStatement;

        /**
         * Encerra a conexão ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    /**
     * Objeto que executa uma instrução SQL
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/Statement.html
     */
    declare class Statement {
        /**
         * Executa um SQL que deve ser uma consulta (SELECT)
         *
         * @throws Exception
         */
        executeQuery(sql: string): ResultSet;

        /**
         * Executa um SQL que modifica algo no banco (INSERT, UPDATE ou DELETE)
         *
         * @returns {number} Quantidade de registros afetados
         * @throws Exception
         */
        executeUpdate(sql: string): number;

        /**
         * Executa um SQL árbitrário. Para pegar o resultado precisa utilizar
         *
         * Caso necessite do resultado deve-se utilizar os métodos getResultSet ou getUpdateCount para recuperar os valores,
         * e o método getMoreResults para pegar os demais resultados em consultas que retornam múltiplos resultados.
         *
         * Este método não pode ser chamado em uma PreparedStatement ou CallableStatement.
         *
         * @returns {boolean} true se o primeiro resultado for um ResultSet; false se for um contador de update ou sem resultado
         * @throws Exception
         */
        execute(sql: string): boolean;

        /**
         * Retorna o resultado atual
         *
         * @throws Exception
         */
        getResultSet(): ResultSet;

        /**
         * Retorna o contador de linhas atualizadas quando é um update
         *
         * @returns {number} Retornará -1 quando não há mais resultados
         * @throws Exception
         */
        getUpdateCount(): number;

        /**
         * Move para o próximo resultado indicando se conseguiu mover para o próximo
         *
         * Este método é utlizado quando há um retorno de múltiplos resultados. A cada chamada deste método ele avança para
         * o próximo resultado, que você poderá obter usando os métodos getResultSet e getUpdateCount.
         *
         * @example
         * while (stmt.getMoreResults() != false) {
         *     var result = stmt.getResultSet();
         * }
         *
         * @returns {boolean}
         * @throws Exception
         */
        getMoreResults(): boolean;

        /**
         * Libera os recursos da execução imediatamente ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    /**
     * Objeto que executa uma instrução SQL Preparada
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/PreparedStatement.html
     */
    declare class PreparedStatement extends Statement {
        /**
         * Executa um SQL Preparado que deve ser uma consulta (SELECT)
         *
         * @throws Exception
         */
        executeQuery(): ResultSet;

        /**
         * Executa um SQL Preparado que modifica algo no banco (INSERT, UPDATE ou DELETE)
         *
         * @returns {number} Quantidade de registros afetados
         * @throws Exception
         */
        executeUpdate(): number;

        setBoolean(parameterIndex: java.lang.Integer, x: boolean): void;
        setByte(parameterIndex: java.lang.Integer, x: java.lang.Byte): void;
        setBytes(parameterIndex: java.lang.Integer, x: java.lang.Byte[]): void;
        setDate(parameterIndex: java.lang.Integer, x: java.Sql.Date, cal: java.util.Calendar): void;
        setDouble(parameterIndex: java.lang.Integer, x: java.lang.Double): void;
        setFloat(parameterIndex: java.lang.Integer, x: java.lang.Float): void;
        setInt(parameterIndex: java.lang.Integer, x: java.lang.Integer): void;
        setLong(parameterIndex: java.lang.Integer, x: java.lang.Long): void;
        setShort(parameterIndex: java.lang.Integer, x: number): void;
        setString(parameterIndex: java.lang.Integer, x: string): void;
        setTime(parameterIndex: java.lang.Integer, x: java.sql.Time): void;
        setTime(parameterIndex: java.lang.Integer, x: java.sql.Time, cal: java.util.Calendar): void;
        setTimestamp(parameterIndex: java.lang.Integer, x: java.sql.Timestamp): void;
        setTimestamp(parameterIndex: java.lang.Integer, x: java.sql.Timestamp, cal: java.util.Calendar): void;

        /**
         * Seta o campo como nulo.
         *
         * O valor repassado a sqlType deve ser uma constante da classe java.sql.Types
         */
        setNull(parameterIndex: java.lang.Integer, sqlType: number);
    }

    /**
     * Representa o resultado de uma consulta SQL
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/sql/ResultSet.html
     */
    declare class ResultSet {

        /**
         * Move o cursor para o primeiro resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        first(): boolean;

        /**
         * Move o cursor para o último resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        last(): boolean;

        /**
         * Move o cursor para o próximo resultado da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        next(): boolean;

        /**
         * Move o cursor para o resultado anterior da consulta
         *
         * @returns {boolean} Retorna true se moveu o cursor
         */
        previous(): boolean;

        /**
         * Pega o número, tipos e propriedades das colunas retornadas na consulta
         */
        getMetaData(): ResultSetMetaData;

        /**
         * Retorna o valor da coluna como um Objeto Java
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getObject(columnIndex: number): java.lang.Object;
        getObject(columnLabel: string): java.lang.Object;

        /**
         * Retorna o valor da coluna como uma string
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getString(columnIndex: number): java.lang.String;
        getString(columnLabel: string): java.lang.String;

        /**
         * Retorna o valor da coluna como um boolean
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como java.sqlDate, byte, java.sql.Blob etc.
         */
        getBoolean(columnIndex: number): boolean;
        getBoolean(columnLabel: string): boolean;

        /**
         * Retorna o valor da coluna como objeto Date
         *
         * Esse método retorna um java.sql.Date que herda de java.util.Date.
         * Para evitar retrabalho deixei como java.util.Date mesmo.
         *
         * Há vários métodos get para obter o valor da coluna como objetos específicos
         * do Java, tais como byte, java.sql.Blob etc.
         */
        getDate(columnIndex: number): java.util.Date;
        getDate(columnLabel: string): java.util.Date;

        /**
         * Libera o resultado da consulta imediatamente ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }

    declare class ResultSetMetaData {
        /**
         * Pega o total de colunas da consulta
         */
        getColumnCount(): number;

        /**
         * Pega o Nome da Coluna (label)
         */
        getColumnName(column: number): java.lang.String;
    }
}

declare namespace java.sql {
    declare class Date extends java.util.Date {}
    declare class Time extends java.util.Date {}
    declare class Timestamp extends java.util.Date {}

    /**
     * Indica os possíveis tipos do SQL
     */
    declare abstract class Types {
        static const ARRAY: number;
        static const BIGINT: number;
        static const BINARY: number;
        static const BIT: number;
        static const BLOB: number;
        static const BOOLEAN: number;
        static const CHAR: number;
        static const CLOB: number;
        static const DATALINK: number;
        static const DATE: number;
        static const DECIMAL: number;
        static const DISTINCT: number;
        static const DOUBLE: number;
        static const FLOAT: number;
        static const INTEGER: number;
        static const JAVA_OBJECT: number;
        static const LONGNVARCHAR: number;
        static const LONGVARBINARY: number;
        static const LONGVARCHAR: number;
        static const NCHAR: number;
        static const NCLOB: number;
        static const NULL: number;
        static const NUMERIC: number;
        static const NVARCHAR: number;
        static const OTHER: number;
        static const REAL: number;
        static const REF: number;
        static const REF_CURSOR: number;
        static const ROWID: number;
        static const SMALLINT: number;
        static const SQLXML: number;
        static const STRUCT: number;
        static const TIME: number;
        static const TIME_WITH_TIMEZONE: number;
        static const TIMESTAMP: number;
        static const TIMESTAMP_WITH_TIMEZONE: number;
        static const TINYINT: number;
        static const VARBINARY: number;
        static const VARCHAR: number;
    }
}
