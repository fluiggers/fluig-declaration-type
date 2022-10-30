declare namespace javax.naming {
    /**
     * Inicia um Contexto
     */
    declare class InitialContext {

        /**
         * Recupera o DataSource do Banco de Dados
         *
         * @param {string} dataSource O nome do dataSource. Ex: /jdbc/PostgreSqlDS
         * @throws Exception
         */
        lookup(dataSource: string): javax.sql.DataSource;

        /**
         * Fecha o contexto ao invés de aguardar o coletor de lixo
         */
        close(): void;
    }
}
