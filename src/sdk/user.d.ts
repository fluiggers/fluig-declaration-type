declare namespace com.fluig.sdk.user {

    /**
     * Representa um colleague (que acho ser o mesmo que user, mas o Flug quis diferenciar)
     */
    declare class ColleagueVO {
        /**
         * Pega o e-mail
         */
        getEmail(): java.lang.String

        /**
         * Pega o nome completo
         */
        getFullName(): java.lang.String

        /**
         * Pega o primeiro nome
         */
        getFirstName(): java.lang.String;

        /**
         * Pega o sobrenome
         */
        getLastName(): java.lang.String;

        /**
         * Pega o login
         */
        getLogin(): java.lang.String;

        /**
         * Pega o código
         */
        getCode(): java.lang.String

        /**
         * Atribui o login
         */
        setLogin(login: string): void;

        /**
         * Atribui o primeiro nome
         */
        setFirstName(firstName: string): void;

        /**
         * Atribui o sobrenome
         */
        setLastName(lastName: string): void;

        /**
         * Atribui o nome completo
         */
        setFullName(fullName: string): void;

        /**
         * Atribui o código
         */
        setCode(code: string): void;

        /**
         * Atribui o e-mail
         */
        setEmail(email: string): void;
    }

    declare class UserPasswordVO {}

    /**
     * Representa um Usuário
     */
    declare class UserVO {
        /**
         * Pega o e-mail
         */
        getEmail(): java.lang.String

        /**
         * Pega o nome completo
         */
        getFullName(): java.lang.String

        /**
         * Pega o primeiro nome
         */
        getFirstName(): java.lang.String;

        /**
         * Pega o sobrenome
         */
        getLastName(): java.lang.String;

        /**
         * Pega o login
         */
        getLogin(): java.lang.String;

        /**
         * Pega o código
         */
        getCode(): java.lang.String

        /**
         * Pega todos os dados extras
         */
        getExtData(): java.util.HashMap<java.lang.String, object>;

        /**
         * Pega um dado extra
         */
        getExtraData(key: string): object;

        /**
         * Pega os grupos
         */
        getGroups(): java.util.List<java.lang.String>;

        /**
         * Pega o ID
         */
        getId(): number;

        /**
         * Informa se é um usuário Ativo
         */
        getIsActive(): boolean;

        /**
         * Pega a senha
         */
        getPassword(): string;

        /**
         * Pega o fuso horário
         */
        getTimezone(): java.lang.String;

        /**
         * Pega os papéis
         */
        getRoles(): java.util.List<java.lang.String>;

        /**
         * Pega o token de acesso
         */
        getTokenAccess(): java.lang.String;

        /**
         * Pega a senha do token
         */
        getTokenSecret(): java.lang.String;

        /**
         * Pega o UUID
         */
        getUserUUID(): java.lang.String;

        /**
         * Retorna objeto no mapa
         */
        getValueExtData(key: string): object;

                /**
         * Adiciona dados extras
         */
        addExtData(key: string, value: object): void;

        /**
         * Atribui o código
         */
        setCode(code: string): void;

        /**
         * Atribui o e-mail
         */
        setEmail(email: string): void;

        /**
         * Atribui os dados extras
         */
        setExtData(extData: java.util.HashMap<string, object>): void;

        /**
         * Atribui um valor para um dado extra
         */
        setExtraData(key: string, value: object): void;

        /**
         * Atribui o primeiro nome
         */
        setFirstName(firstName: string): void;

        /**
         * Atribui o sobrenome
         */
        setLastName(lastName: string): void;

        /**
         * Atribui o nome completo
         */
        setFullName(fullName: string): void;

        /**
         * Atribui os grupos
         */
        setGroups(groups: java.util.List<string>): void;

        /**
         * Atribui o ID
         */
        setId(id: number): void;

        /**
         * Atribui o status de Ativo
         */
        setIsActive(isActive: boolean): void;

        /**
         * Atribui o login
         */
        setLogin(login: string): void;

        /**
         * Atribui a senha
         */
        setPassword(password: string): void;

        /**
         * Atribui os papéis
         */
        setRoles(roles: java.util.List<string>): void;

        /**
         * Atribui o fuso horário
         */
        setTimezone(timezone: string): void;

        /**
         * Atribui o token de acesso
         */
        setTokenAccess(token: string): void;

        /**
         * Atribui a senha do token
         */
        setTokenSecret(tokenSecret: string): void;

        /**
         * Atribui o UUID
         */
        setUserUUID(userUUID: string): void;
    }
}
