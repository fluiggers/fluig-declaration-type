declare namespace java.lang {
    declare class Object {
        /**
         * Retorna o valor do objeto como uma string
         */
        toString(): String;
    }

    declare class String {
        constructor();
        constructor(original: string);

        /**
         * Pega o char da posição indicada.
         *
         * Importante: embora o método deva devolver um char o Fluig
         * trata como um número (provavelmente o código ASCII do char).
         *
         * Se precisar da letra utilize o método substring indicando índice
         * inicial e final ou converta utilizando a classe Character.
         *
         * @example
         * var str = new java.lang.String("texto");
         * str.substring(1, 2); // Retornará "e"
         *
         * var str = new java.lang.String("012");
         * Character.digit(str.charAt(2), 10); // Retornará número 2
         * Character.toString(str.charAt(2)); // Retornará string 2
         */
        charAt(index: number): number;

        /**
         * Compara duas strings
         *
         * Retorna 0 se as strings forem iguais, menor que zero se essa string
         * for menor do que a outra string ou maior que zero se essa string for
         * maior do que a outra.
         */
        compareTo(anotherString: string): number;

        /**
         * Compara duas strings ignorando as diferenças de maiúscula e minúscula
         *
         * Retorna 0 se as strings forem iguais, menor que zero se essa string
         * for menor do que a outra string ou maior que zero se essa string for
         * maior do que a outra.
         */
        compareToIgnoreCase(anotherString: string): number;

        /**
         * Retorna verdadeiro se essa string contém a string informada
         */
        contains(substring: string): boolean;

        /**
         * Retorna verdadeiro se essa string termina com a string informada
         */
        endsWith(suffix: string): boolean;

        /**
         * Retorna verdadeiro se essa string começa com a string informada
         */
        startsWith(prefix: string): boolean;

        /**
         * Retorna verdadeiro se ambas strings forem iguais ignorando case
         */
        equalsIgnoreCase(anotherString: string): boolean;

        /**
         * Retorna o índice da primeira ocorrência da string informada
         */
        indexOf(str: string): number;

        /**
         * Retorna o índice da primeira ocorrência da string informada a partir do índice indicado
         */
        indexOf(str: string, fromIndex: number): number;

        /**
         * Retorna o índice da última ocorrência da string informada
         */
        lastIndexOf(str: string): number;

        /**
         * Retorna o índice da última ocorrência da string informada a partir do índice indicado
         */
        lastIndexOf(str: string, fromIndex: number): number;

        /**
         * Retorna a quantidade de caracteres da string
         */
        length(): number;

        /**
         * Retorna verdadeiro se a string satisfaz a Expressão Regular
         */
        matches(regex: string): boolean;

        /**
         * Substitui nessa string todos os trechos que satisfaçam a string target
         *
         * Importante: esse método não aceita Expressão Regular.
         *
         * @param target Texto a procurar
         * @param replacement Texto a substituir
         */
        replace(target: string, replacement: string): String;

        /**
         * Substitui nessa string todos os trechos que satisfaçam a string de Expressão Regular
         *
         * @param regex String de Expressão Regular
         * @param replacement Texto a substituir
         */
        replaceAll(regex: string, replacement: string): String

        /**
         * Divide a string em arrays satisfazendo a Expressão Regular fornecida
         *
         * @param regex String de Expressão Regular
         */
        split(regex: string): String[];

        /**
         * Divide a string em arrays satisfazendo a Expressão Regular fornecida
         *
         * @param regex String de Expressão Regular
         * @param limit Número máximo de partes a dividir a string
         */
        split(regex: string, limit: number): String[];

        /**
         * Retorna uma substring iniciando no índice indicado até o final da string
         *
         * @param beginIndex Índice inicial, começando em 0
         */
        substring(beginIndex: number): String;

        /**
         * Retorna uma substring iniciando no índice indicado até o índice final
         *
         * @param beginIndex Índice inicial, começando em 0
         * @param endIndex Índice final, começando em 0
         */
        substring(beginIndex: number, endIndex: number): String;

        /**
         * Converte a string para letras minúsculas
         */
        toLowerCase(): String;

        /**
         * Converte a string para letras maiúsculas
         */
        toUpperCase(): String;

        /**
         * Remove espaços em branco do início e fim da string
         */
        trim(): String;
    }

    declare class Character {
        /**
         * Retorna o caractere como uma String
         *
         * @param c Código do CHAR
         */
        toString(c: number): String;

        /**
         * Converte o caractere em um número
         *
         * @param c Código do CHAR
         * @param radix Base a converter (normalmente 10 pra indicar que é decimal)
         */
        digit(c: number, radix: number): number;
    }
}
