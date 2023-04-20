/**
 * Adiciona um Filho ao Pai
 *
 * @param {String} tableName Nome da tabela
 * @returns {Number} Id do filho criado
*/
declare function wdkAddChild(tableName: string): number;

/**
 * Disponibiliza diversas funções para manipulação do formulário
 *
 * Usar em eventos do formulário (que recebem form como parâmetro).
 */
declare class FormController {

    /**
     * Retorna o ID da empresa
     */
    getCompanyId(): number;

    /**
     * Retorna o ID do documento (registro de formulário)
     */
    getDocumentId(): number;

    /**
     * Retorna a versão do documento (registro do formulário)
     */
    getVersion(): number;

    /**
     * Retorna o ID do formulário
     */
    getCardIndex(): number

    /**
     * Habilita/Desabilita a edição de um campo do formulário
     */
    setEnabled(nomeCampo: string, habilita: boolean, protegido: boolean): void;

    /**
     * Verifica se o campo do formulário está habilitado para edição
     */
    getEnabled(nomeCampo: string): boolean;

    /**
     * Atribui valor a um campo do formulário
     */
    setValue(nomeCampo: string, valor: string): void;

    /**
     * Pega o valor de um campo do formulário
     */
    getValue(nomeCampo: string): java.lang.String;

    /**
     * Deixa o campo invisível buscando pelo nome do campo
     */
    setVisible(nomeCampo: string, visible: boolean): void;

    /**
     * Deixa o campo invisível buscando pelo ID do campo
     */
    setVisibleById(idDoCampo: string, visible: boolean): void;

    /**
     * Se habilitado os campos são exibidos como input readonly
     */
    setShowDisabledFields(habilita: boolean): void;

    /**
     * Se habilitado o link "imprimir" é ocultado
     */
    setHidePrintLink(habilita: boolean): void;

    /**
     * Se habilitado o botão "excluir" é ocultado
     */
    setHideDeleteButton(habilita: boolean): void;

    /**
     * Se definido como true todos os campos desabilitados não terão seus valores salvos
     */
    setEnhancedSecurityHiddenInputs(proteger: boolean): void;

    /**
     * Retorna o Modo do formulário.
     *
     * Tipos possíveis:
     * - ADD: Criação
     * - MOD: Edição
     * - VIEW: Visualização
     * - NONE: Não há comunicação com formulário. Ocorre no momento da validação dos campos, por exemplo.
     */
    getFormMode(): string;

    /**
     * Desabilita o botão de imprimir
     */
    setHidePrintLink(hide: boolean): void;

    /**
     * Retorna se o botão de imprimir está oculto
     */
    isHidePrintLink(): boolean;

    /**
     * Retorna os campos filhos, e seus valores, de uma tabela pai.
     *
     * Retorna um objeto com a propriedade sendo o nome do campo e seus valores.
     */
    getChildrenFromTable(tableName: string): object;

    /**
     * Retorna os índices dos campos filhos de uma tabela pai.
     *
     * @see https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-getChildrenIndexes
     */
    getChildrenIndexes(tableName: string): number[];

    /**
     * Oculta o botão de apagar registro
     */
    setHideDeleteButton(hide: boolean): void;

    /**
     * Informa se o botão de apagar está oculto
     */
    isHideDeleteButton(): boolean;

    /**
     * Indica se está em mobile
     */
    getMobile(): boolean;

    /**
     * Indica se o campo está visível buscando pelo nome do campo
     */
    isVisible(nomeCampo: string): boolean;

    /**
     * Indica se o campo está visível buscando pelo ID do campo
     */
    isVisibleById(id: string): boolean;
};

/**
 * Disponibiliza funções para incluir conteúdo HTML no formulário
 */
declare class customHTML {

    /**
     * Adiciona conteúdo no final do HTML do formulário
     * @param html Conteúdo HTML a ser incluído
     */
    append(html: string): void;
};
