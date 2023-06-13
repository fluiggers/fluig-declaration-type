declare namespace java.util {
    declare abstract class Iterator<T> {
        /**
         * Indica se ainda há elementos a percorrer
         */
        hasNext(): boolean;

        /**
         * Pega o próximo elemento
         */
        next(): T;
    }

    declare abstract class Set<T> {
        /**
         * Adiciona um elemento ao conjunto
         */
        add(value: T): boolean;

        /**
         * Indica se o conjunto está vazio
         */
        isEmpty(): boolean;

        /**
         * Pega a quantidade de elementos do conjunto
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
        * Verifica se existe o elemento
        */
        contains(value: T): boolean;

        /**
         * Pega um iterator para percorrer o conjunto
         */
        iterator(): java.util.Iterator<T>;

        /**
         * Remove o elemento indicado
         */
        remove(value: T): boolean;

        /**
         * Retorna um array com todos os elementos
         */
        toArray(): T[];
    }

    declare abstract class List<T> {
        /**
         * Pega o elemento no índice indicado
         */
        get(index: number): T;

        /**
         * Adiciona um elemento à lista
         */
        add(value: T): void;

        /**
         * Adiciona todos os elementos da lista indicada para esta lista
         */
        addAll(l: java.util.List<T>): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
         * Verifica se existe o elemento
         */
        contains(value: T): boolean;

        /**
         * Indica se a lista está vazia
         */
        isEmpty(): boolean;

        /**
         * Pega um iterator para percorrer a lista
         */
        iterator(): java.util.Iterator<T>

        /**
         * Remove o elemento
         */
        remove(value: T): boolean;

        /**
         * Retorna um array com todos os elementos da lista
         */
        toArray(): T[];
    }

    declare class ArrayList<T> extends List<T> {
    }

    declare abstract class Map<K, V> {
        /**
         * Pega o elemento no índice indicado
         */
        get(name: K): V;

        /**
         * Adiciona um elemento
         */
        put(name: K, value: V): void;

        /**
         * Indica o tamanho da lista
         */
        size(): number;

        /**
         * Remove todos os elementos
         */
        clear(): void;

        /**
         * Copia todos os elementos do mapa indicado para este mapa
         */
        putAll(m: java.util.Map<K, V>): void;

        /**
         * Retorna um conjunto com as chaves do Mapa
         */
        keySet(): java.util.Set<K>;

        /**
         * Retorna verdadeiro se houver item para a chave indicada
         */
        containsKey(name: K): boolean;

        /**
         * Retorna verdadeiro se o mapa está vazio
         */
        isEmpty(): boolean;

        /**
         * Remove o elemento indicado pela chave
         */
        remove(name: K): V;
    }

    declare class HashMap<K, V> extends java.util.Map<K, V> {
    }

    declare class LinkedHashSet<T> extends java.util.Set<T> {
    }

    declare class LinkedHashMap<K, V> extends java.util.HashMap<K, V> {
    }

    declare class Date {

        /**
         * Inicializa com a data do momento que o objeto foi criado
         */
        constructor();

        /**
         * Inicializa com a data em milisegundos decorridos desde 1970-01-01 00:00:00 GMT
         */
        constructor(date: number);

        /**
         * Compara se essa data é posterior à data indicada
         */
        after(when: Date): boolean;

        /**
         * Compara se essa data é anterior à data indicada
         */
        before(when: Date): boolean;

        /**
         * Retorna o dia do mês
         *
         * @deprecated Usar Calendar.get(Calendar.DAY_OF_MONTH)
         */
        getDate(): number;

        /**
         * Retorna o dia da semana
         *
         * @deprecated Usar Calendar.get(Calendar.DAY_OF_WEEK)
         */
        getDay(): number;

        /**
         * Retorna a hora
         *
         * @deprecated Usar Calendar.get(Calendar.HOUR_OF_DAY)
         */
        getHours(): number;

        /**
         * Retorna os minutos
         *
         * @deprecated Usar Calendar.get(Calendar.MINUTE)
         */
        getMinutes(): number;

        /**
         * Retorna o mês
         *
         * @deprecated Usar Calendar.get(Calendar.MONTH)
         */
        getMonth(): number;

        /**
         * Retorna os segundos
         *
         * @deprecated Usar Calendar.get(Calendar.SECOND)
         */
        getSeconds(): number;

        /**
         * Retorna o ano
         *
         * @deprecated Usar Calendar.get(Calendar.YEAR) - 1900
         */
        getYear(): number;

        /**
         * Atribui o dia do mês
         *
         * @deprecated Usar Calendar.set(Calendar.DAY_OF_MONTH, dia)
         */
        setDate(): number;

        /**
         * Atribui a hora
         *
         * @deprecated Usar Calendar.get(Calendar.HOUR_OF_DAY, hora)
         */
        setHours(): number;

        /**
         * Atribui os minutos
         *
         * @deprecated Usar Calendar.set(Calendar.MINUTE, minutos)
         */
        setMinutes(): number;

        /**
         * Atribui o mês
         *
         * @deprecated Usar Calendar.set(Calendar.MONTH, mes)
         */
        setMonth(): number;

        /**
         * Atribui os segundos
         *
         * @deprecated Usar Calendar.set(Calendar.SECOND, segundos)
         */
        setSeconds(): number;

        /**
         * Atribui o ano
         *
         * @deprecated Usar Calendar.set(Calendar.YEAR, ano + 1900)
         */
        setYear(): number;
    }

    /**
     * A Classe Calendar não deve ser instanciada com operador new. Use sempre o método getInstance().
     *
     * Essa classe á abstrata e o Java normalmente vai instanciar um GregorianCalendar quando chamada a getInstance().
     */
    declare abstract class Calendar {
        /**
         * Cria uma instância de Calendário
         *
         * Essa classe é abstrata, por isso não é possível instanciá-la diretamente.
         */
        static getInstance(): Calendar;

        // Constantes indicando os valores dos meses

        /**
         * Indica o valor de Janeiro
         */
        static const JANUARY: number;

        /**
         * Indica o valor de Fevereiro
         */
        static const FEBRUARY: number;

        /**
         * Indica o valor de Março
         */
        static const MARCH: number;

        /**
         * Indica o valor de Abril
         */
        static const APRIL: number;

        /**
         * Indica o valor de Maio
         */
        static const MAY: number;

        /**
         * Indica o valor de Junho
         */
        static const JUNE: number;

        /**
         * Indica o valor de Julho
         */
        static const JULY: number;

        /**
         * Indica o valor de Agosto
         */
        static const AUGUST: number;

        /**
         * Indica o valor de Setembro
         */
        static const SEPTEMBER: number;

        /**
         * Indica o valor de Outubro
         */
        static const OCTOBER: number;

        /**
         * Indica o valor de Novembro
         */
        static const NOVEMBER: number;

        /**
         * Indica o valor de Dezembro
         */
        static const DECEMBER: number;

        // Constantes de horário

        /**
         * Indica que a hora é antes de meio dia
         */
        static const AM: number;

        /**
         * Indica que a hora é após meio dia
         */
        static const PM: number;

        // Constantes de dia da semana

        /**
         * Indica que é Domingo
         */
        static const SUNDAY: number;

        /**
         * Indica que é segunda-feira
         */
        static const MONDAY: number;

        /**
         * Indica que é terça-feira
         */
        static const TUESDAY: number;

        /**
         * Indica que é quarta-feira
         */
        static const WEDNESDAY: number;

        /**
         * Indica que é quinta-feira
         */
         static const THURSDAY: number;

        /**
         * Indica que é sexta-feira
         */
        static const FRIDAY: number;

        /**
         * Indica que é Sábado
         */
        static const SATURDAY: number;


        // Constantes de campo

        /**
         * Campo que indica se horário é antes ou depois do meio dia
         */
        static const AM_PM: number;

        /**
         * Campo que indica o dia do mês
         */
        static const DATE: number;

        /**
         * Campo que indica o dia do mês
         */
        static const DAY_OF_MONTH: number;

        /**
         * Campo que indica o dia da semana
         */
        static const DAY_OF_WEEK: number;

        /**
         * Campo que indica o dia do ano
         */
        static const DAY_OF_YEAR: number;

        /**
         * Campo que indica a hora antes ou depois do meio dia (12h)
         */
        static const HOUR: number;

        /**
         * Campo que indica a hora do dia (24h)
         */
        static const HOUR_OF_DAY: number;

        /**
         * Campo que indica os milissegundos
         */
        static const MILLISECOND: number;

        /**
         * Campo que indica os minutos
         */
        static const MINUTE: number;

        /**
         * Campo que indica o mês
         */
        static const MONTH: number;

        /**
         * Campo que indica os segundos
         */
        static const SECOND: number;

        /**
         * Campo que indica a semana do mês
         */
        static const WEEK_OF_MONTH: number;

        /**
         * Campo que indica a semana do ano
         */
        static const WEEK_OF_YEAR: number;

        /**
         * Campo que indica o ano
         */
        static const YEAR: number;

        /**
         * Retorna o valor do campo indicado
         *
         * @param {number} campo Uma das constantes da classe indicando o campo
         */
        get(campo: number): number;

        /**
         * Atribui o valor ao campo indicado
         *
         * @param {number} campo Uma das constantes da classe indicando o campo
         * @param {number} valor O valor que será atribuído ao campo
         */
        set(campo: number, valor: number): void;

        /**
         * Retorna o calendário como um objeto Date
         */
        getTime(): Date;

        /**
         * Configura o calendário usando um objeto Date
         */
        setTime(data: Date): void;

        /**
         * Compara se essa data é posterior à data indicada
         */
        after(data: Calendar): boolean;

        /**
         * Compara se essa data é anterior à data indicada
         */
        before(data: Calendar): boolean;

        /**
         * Configura o calendário com o Ano, Mês e Dia
         */
        set(ano: number, mes: number, dia: number): void;

        /**
         * Configura o calendário com o Ano, Mês, Dia, Hora e Minutos
         */
        set(ano: number, mes: number, dia: number, hora: number, minutos: number): void;

        /**
         * Configura o calendário com o Ano, Mês, Dia, Hora, Minutos e Segundos
         */
        set(ano: number, mes: number, dia: number, hora: number, minutos: number, segundos: number): void;

        /**
         * Adiciona ou Subtrai 1 unidade do campo indicado
         *
         * @param {number} campo Uma das constantes de campo
         * @param {boolean} aumentaValor Se for true aumentará o campo, senão ele será diminuído
         */
        roll(campo: number, aumentaValor: boolean): void;

        /**
         * Adiciona ou Subtrai unidades do campo indicado
         *
         * @param {number} campo Uma das constantes de campo
         * @param {boolean} valor Valor que será utilizado no cálculo. Se positivo aumentará, se negativo diminuirá
         */
        roll(campo: number, valor: number): void;

        /**
         * Adiciona ou subtrai a quantidade indicada do campo indicado
         *
         * @param campo Uma das constantes de campo
         * @param valor Valor que será utilizado no cálculo. Se negativo vai subtrair
         */
        add(campo: number, valor: number): void;
    }

    declare class UUID {
        /**
         * Cria um UUID tipo 4 (geração pseudo aleatória)
         */
        static randomUUID(): UUID;

        /**
         * Retorna uma string representando o UUID
         */
        toString(): java.lang.String;
    }
}
