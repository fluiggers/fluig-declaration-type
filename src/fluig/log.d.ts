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
