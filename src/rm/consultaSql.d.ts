interface IwsConsultaSQL {
    /**
     * Realiza uma consulta a um SQL previamente cadastrado no BI do RM
     *
     * @param {string} sql Código (ID) do SQL cadastrado no RM
     * @param {number} coligadaNumber
     * @param {string} systemCode
     * @param {string} parameters Separe-os com ; e mantenha a sequência que o SQL pede. Ex: CODCOLIGADA=1;CODPROJ=00689
     */
    realizarConsultaSQL(sql:string, coligadaNumber:number, systemCode:string, parameters:string): string;

    /**
     * Realiza uma consulta a um SQL previamente cadastrado no BI do RM
     *
     * @param {string} sql Código (ID) do SQL cadastrado no RM
     * @param {number} coligadaNumber
     * @param {string} systemCode
     * @param {string} username
     * @param {string} password
     * @param {string} parameters Separe-os com ; e mantenha a sequência que o SQL pede. Ex: CODCOLIGADA=1;CODPROJ=00689
     */
    realizarConsultaSQLAuth(sql:string, coligadaNumber:number, systemCode:string, username:string, password:string, parameters:string): string;
}
