declare namespace com.fluig.sdk.user {

    /**
     * Representa um colleague (que acho ser o mesmo que user, mas o Flug quis diferenciar)
     */
    declare class ColleagueVO {
        /**
         * Pega o e-mail
         */
        getEmail(): string

        /**
         * Pega o nome completo
         */
        getFullName(): string

        /**
         * Pega o primeiro nome
         */
        getFirstName(): string;

        /**
         * Pega o sobrenome
         */
        getLastName(): string;

        /**
         * Pega o login
         */
        getLogin(): string;

        /**
         * Pega o código
         */
        getCode(): string

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
        getEmail(): string

        /**
         * Pega o nome completo
         */
        getFullName(): string

        /**
         * Pega o primeiro nome
         */
        getFirstName(): string;

        /**
         * Pega o sobrenome
         */
        getLastName(): string;

        /**
         * Pega o login
         */
        getLogin(): string;

        /**
         * Pega o código
         */
        getCode(): string

        /**
         * Pega todos os dados extras
         */
        getExtData(): java.util.HashMap<string, object>;

        /**
         * Pega um dado extra
         */
        getExtraData(key: string): object;

        /**
         * Pega os grupos
         */
        getGroups(): java.util.List<string>;

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
        getTimezone(): string;

        /**
         * Pega os papéis
         */
        getRoles(): java.util.List<string>;

        /**
         * Pega o token de acesso
         */
        getTokenAccess(): string;

        /**
         * Pega a senha do token
         */
        getTokenSecret(): string;

        /**
         * Pega o UUID
         */
        getUserUUID(): string;

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
