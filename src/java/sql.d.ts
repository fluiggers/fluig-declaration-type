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
         * Libera os recursos da execução imediatamente ao invés de aguardar o coletor de lixo
         */
         close(): void;
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
