declare namespace java.text {

    /**
     * Formatador de Datas
     *
     * @tutorial https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
     */
    declare class SimpleDateFormat {
        /**
         * Cria um novo formatador de datas com o padrão indicado
         *
         * Exemplos:
         *
         * - "dd/MM/yyyy" -> data no formato pt-BR
         * - "yyyy-MM-dd" -> data no formato ISO
         * - "HH:mm" -> Hora (24h) e minuto
         * - "yyyy-MM-dd'T'HH:mm:ss.SSSZ" -> Data completa (Ex: 2021-07-04T12:08:56.235-0700)
         *
         * @tutorial https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
         */
        constructor(formato: string);

        /**
         * Aplica o padrão de data de forma similar ao construtor
         */
        applyPattern(formato: string): void;

        /**
         * Retorna a data formatada conforme o padrão da formatação
         */
        format(data: java.util.Date): string;

        /**
         * Converte uma string, formatada como indicado no construtor, em um objeto Date
         */
        parse(dataFormatada: string): java.util.Date;
    }
}
