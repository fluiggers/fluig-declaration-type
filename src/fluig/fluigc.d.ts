declare type ErrorCallback = (error: ErrorData, data: object) => void;
declare type AutoCompleteOnTagCallback = (item: object, tag: object) => void;
declare type SimpleCallback = () => void;
declare type DataCallback = (data: object) => void;

/**
 * Callback de Modal
 *
 * @param error Indica se houve erro
 * @param data Todo o conteúdo da propriedade content da modal
 */
declare type ModalCallback = (error: boolean, data: string) => void;

/**
 * Callback de Inicialização do Botão Switch
 *
 * @param event Evento disparado
 * @this HTMLElement
 */
declare type SwitchInitCallback = (event: JQuery.Event) => void;

 /**
  * Callback de mudança de estado do Botão Switch
  *
  * @param event Evento disparado
  * @param checked Indica se está selecionado
  * @this HTMLElement
  */
declare type SwitchChangeCallback = (event: JQuery.Event, checked: boolean) => void;

/**
 * Callback da mensagem de Confirmação
 *
 * @param result Resultado da confirmação (True se clicou em Sim)
 * @param element Botão clicado
 * @param data Evento disparado
 */
declare type ConfirmCallback = (result: boolean, element: HTMLElement, event: Event) => void;

/**
 * Callback de mensagem
 *
 * @param element Botão clicado
 * @param data Evento disparado
 */
declare type MessageCallback = (element: HTMLElement, event: Event) => void;

interface AutoCompleteOptions {
    /**
     * Tipo do autocomplete
     *
     * Pode ser (padrão é tag):
     * - autocomplete
     * - tag
     * - tagAutocomplete
     */
    type?: string;

    /**
     * Item exibido na sugestão
     *
     * Obrigatório para autocomplete e tagAutocomplete
     */
    displayKey?: string;

    /**
     * Nome do dataset
     *
     * Opcional para autocomplete e tagAutocomplete
     */
    name?: string;

    /**
     * Determina o serviço utilizado para buscar as sugestões
     */
    source: {
        url: string;
        limit: 10,
        offset: 0,
        limitKey: string;
        patternKey: string;
        root: string;
    };

    /**
     * Coloca o texto em negrito quando efetua a busca
     */
    highlight?: boolean;

    /**
     * Mínimo de caracteres antes de iniciar a busca
     */
    minLength?: number;

    /**
     * Se falso não exibirá as opções retornadas da busca
     */
    hint?: boolean;

    /**
     * Tempo limite para obter um resultado da busca
     */
    searchTimeout?: number;

    /**
     * Nome da classe utilizada na tag
     */
    tagClass?: string;

    /**
     * Máximo de tags permitidas para selecionar
     */
    maxTags?: number;

    /**
     * Permite selecionar a mesma tag várias vezes
     */
    allowDuplicates?: boolean

    /**
     * Evento disparado quando tentar adicionar uma tag repetida
     */
    onTagExists?: AutoCompleteOnTagCallback;

    /**
     * Evento disparado ao atingir o limite de tags
     */
    onMaxTags?: AutoCompleteOnTagCallback;

    /**
     * Largura máxima da tag
     */
    tagMaxWidth?: number;

    /**
     * Template da dica
     */
    templates?: {
        tag: string;
        suggestion: string;
    };

    /**
     * Objeto com o CSS para formatar uma tag removida
     */
    tagRemoveCss?: {
        [property: string]: string;
    };

}

interface AutoCompleteTag {
    description: string;
}

declare class AutoComplete {
    /**
     * Adiciona uma tag
     *
     * Método para os tipos tag e tagAutocomplete
     */
    add(tag: AutoCompleteTag): void;

    /**
     * Atualiza uma tag para o tipo tag ou tagAutocomplete
     *
     * Método para os tipos tag e tagAutocomplete
     */
    update(tag: AutoCompleteTag): void;

    /**
     * Remove uma tag para o tipo tag ou tagAutocomplete
     *
     * Método para os tipos tag e tagAutocomplete
     */
    remove(tag: AutoCompleteTag): void;

    /**
     * Remove todas as tags
     *
     * Método para os tipos tag e tagAutocomplete
     */
    removeAll(): void;

    /**
     * Retorna todas as tags
     *
     * Método para os tipos tag e tagAutocomplete
     */
    items(): AutoCompleteTag[];

    /**
     * Abre a caixa de seleção
     *
     * Método para o tipo autocomplete
     */
    open(): void;

    /**
     * Fecha a caixa de seleção
     *
     * Método para o tipo autocomplete
     */
    close(): void;

    /**
     * Pega o valor do elemento
     *
     * Método para o tipo autocomplete
     */
    val(): string;

    /**
     * Atribui um valor ao elemento
     *
     * Método para o tipo autocomplete
     */
    val(value: string): void;


    /**
     * Coloca o foco no autocomplete
     */
    focus(): void;

    /**
     * Pega o elemento input do autocomplete
     */
    input(): HTMLElement;

    /**
     * Atualiza o autocomplete
     *
     * Útil para quando fizer mudanças manuais no elemento.
     */
    refresh(): void;

    /**
     * Destrói o autocomplete
     */
    destroy(): void;
}

interface FilterSourceSettings {
    /**
     * URL que trará os dados
     */
    url: string,

    /**
     * Tipo do conteúdo retornado. Ex: application/json
     */
    contentType: string,
    root: string,
    pattern: string,
    limit: number,
    offset: number,
    patternKey: string,
    limitKey: string,
    offsetKey: string
}

interface FilterStyleSettings {
    /**
     * The selector for the autocomplete tag template.
     */
    templateTag?: string,

    /**
     * The selector for the autocomplete suggestion template.
     */
    templateSuggestion?: string,

    /**
     * The selector for the autocomplete tip message template.
     */
    templateTipMessage?: string,

    /**
     * Class name for the tags. Padrão é tag-gray
     */
    autocompleteTagClass?: string,

    /**
     * CSS class used to table selected lines.
     */
    tableSelectedLineClass?: string,

    /**
     * Receives the waiting time to make the request. This is important not to open a request for each character typed.
     */
    tableStyle?: string,

    /**
     * Defines a CSS class to apply to the table. Padrão é fluigicon-zoom-in
     *
     * Ex .: 'table-hover table-bordered table-striped'.
     */
    filterIconClass?: string
}

interface FilterTableSettings {
    header: FilterTableHeader[],

    /**
     * Pode ser um array de chaves do objeto ou a classe CSS do template mustache.
     *
     * A sequência do array deve ser a mesma de header.
     */
    renderContent: string|string[],
    formatData?: function
}

interface FilterTableHeader {
    /**
     * Título da coluna
     */
    title?: string,

    /**
     * Atributo do objeto que será utilizado para ordenar essa coluna. Padrão é vazio.
     *
     * Caso não seja passado utilizará o conteúdo padrão da coluna que foi
     * indicado em renderContent da tabela.
     */
    dataorder?: string,

    /**
     * Indica se será a coluna ordenada por padrão. Padrão é false.
     */
    standard?: boolean,

    /**
     * Tamanho visual da coluna. Utiliza uma das classes CSS col-
     */
    size?: string,

    /**
     * Indica se a coluna deverá ser exibida. Padrão é true
     */
    display?: boolean
}

interface FilterSettings {
    /**
     * Campo que será exibido ao selecionar um valor
     */
    displayKey: string,

    /**
     * Configuração da fonte de dados
     */
    source: FilterSourceSettings,

    /**
     * Configuração da Tabela de exibição dos itens
     */
    table: FilterTableSettings,

    /**
     * Configuração dos estilos
     */
    style?: FilterStyleSettings,

    /**
     * Altura da tabela (preferencialmente em px). Padrão: 260px
     */
    tableHeight?: string,

    /**
     * Permite múltiplas seleções? Padrão: false
     */
    multiSelect?: boolean,

    /**
     * Tempo limite (em ms) da busca na fonte de dados. Padrão 200ms
     */
    searchTimeout?: number,

    /**
     * Quantidade mínima de caracteres antes de iniciar a busca. Padrão 1
     */
    minLength?: number,

    /**
     * Limite de caracteres exibidos no item selecionado. Padrão: 200
     */
    tagMaxWidth?: number
}

interface ToastSettings {
    /**
     * Título do Toast. Diferença é que fica em negrito.
     */
    title?: string,

    /**
     * Mensagem repassada
     */
    message?: string,

    /**
     * Tipos possíveis: success, danger, info and warning
     * Padrão: success
     */
    type?: string,

    /**
     * Tempo, em milissegundos, ou as strings slow ou fast.
     *
     * O tempo padrão são 4000 milissegundos.
     * slow representa 2000 e fast representa 6000.
     *
     * O Toast do tipo danger ignora o timeout.
     */
    timeout?: number|string
}

declare class FluigcFilter {
    getSelectedItems(): object[];
    add(item: object): void;
    removeAll(): void;

    /**
     * Escuta eventos do filtro.
     *
     * Importante: não coloque mais de um filtro em um mesmo pai, pois os eventos
     * serão escutados por todos os filtros irmãos.
     *
     * O filtro dispara os seguintes eventos:
     * - fluig.filter.load.complete => quando o filtro termina de carregar
     * - fluig.filter.item.added => quando um item é selecionado/adicionado
     *
     * @param event
     * @param callback
     */
    on(event: string, callback: SimpleCallback|DataCallback): void;
}

declare class FluigcModal {
    /**
     * Remove (fecha) a Modal
     */
    remove(): void;

    /**
     * Indica se a Modal está visível
     */
    isOpen(): boolean;
}

/**
 * Configuração dos botões da Modal
 */
interface ModalActionSettings {
    /**
     * Rótulo exibido
     */
    label: string;

    /**
     * Evento ouvido em bindings.global da SuperWidget
     *
     * Precisa ter o prefixo data-
     * Exemplo de valor: data-save-settings
     */
    bind?: string;

    /**
     * Estilo utilizado no botão
     *
     * Por padrão o primeiro botão recebe btn-primary
     * e os demais recebem btn-default
     */
    classType?: string;

    /**
     * Indica se o botão fechará a Modal
     *
     * Por padrão é false.
     *
     * IMPORTANTE: se for true ele não executará o bind registrado.
     */
    autoClose?: boolean;
}

/**
 * Configurações da Mensagem de Confirmação
 */
interface ConfirmSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Texto do Botão Sim
     *
     * Padrão: Sim
     */
    labelYes?: string;

    /**
     * Texto do Botão Não
     *
     * Padrão: Não
     */
    labelNo?: string;
}

/**
 * Configurações da Mensagem de Alerta
 */
interface AlertSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Texto do Botão Ok
     *
     * Padrão: OK
     */
    label?: string;
}

/**
 * Configurações da Mensagem de Erro
 */
interface ErrorSettings {
    /**
     * Título
     */
    title: string;

    /**
     * Mensagem
     */
    message: string;

    /**
     * Detalhes do erro
     *
     * Pode quebrar linha utilizando \n
     */
    details: string;
}

/**
 * Configurações da Modal
 */
interface ModalSettings {
    /**
     * Título exibido na modal
     */
    title: string;

    /**
     * Conteúdo da Modal
     *
     * Pode ser uma string HTML, template Mustache
     * ou retorno de uma chamada a WCMAPI.convertFtlAsync
     */
    content: string;

    /**
     * ID da Modal
     *
     * Por padrão é fluig-modal.
     * A cada chamada o elemento HTML da modal é construído e
     * então destruído quando a modal é fechada.
     */
    id?: string;

    /**
     * Tamanho da Modal
     *
     * Pode ser: small | large | full
     */
    size: string;

    /**
     * Botões da Modal
     */
    actions: ModalActionSettings[];
}

interface CalendarSettings {
    /**
     * Indica se exibirá a seleção de Data. Padrão true.
     */
    pickDate?: boolean;

    /**
     * Indica se exibirá a seleção de Tempo. Padrão false.
     */
    pickTime?: boolean;

    /**
     * Indica se usará minutos. Padrão true.
     */
    useMinutes?: boolean;

    /**
     * Indica se usará segundos. Padrão true.
     */
    useSeconds?: boolean;

    /**
     * Indica se selecionará automaticamente a data corrente. Padrão true
     */
    useCurrent?: boolean;

    /**
     * Valor a incrementar os minutos quando clicar nas setas de subir/descer
     */
    minuteStepping?: number;

    /**
     * Define uma data mínima selecionável
     */
    minDate?: string;

    /**
     * Define a data máxima selecionável
     */
    maxDate?: string;

    /**
     * Exibe o indicador do dia de hoje
     */
    showToday?: boolean;

    /**
     * Código do idioma. Padrão pt-br
     */
    language?: string;

    /**
     * Data padrão
     *
     * Aceita também data da Moment.js
     */
    defaultDate?: string|Date;

    /**
     * Datas que não podem ser selecionadas
     *
     * Aceita também data da Moment.js
     */
    disabledDates?: string[]|Date[];

    /**
     * Únicas datas que  podem ser selecionadas
     *
     * Aceita também data da Moment.js
     */
    enabledDates?: string[]|Date[];

    /**
     * Use "strict" quando validar datas. Padrão false
     */
    useStrict?: boolean;

    /**
     * Exibe a seleção de Tempo ao lado da seleção de Data. Padrão false.
     */
    sideBySide?: boolean;

    /**
     * Dias da semana que não pode ser selecionados
     *
     * Dia da semana inicia em 0, para domingo.
     */
    daysOfWeekDisabled?: number[];
}

declare class Calendar {
    /**
     * Configura a data mínima que pode ser selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setMinDate(date: string|Date): void;

    /**
     * Configura a data máxima que pode ser selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setMaxDate(date: string|Date): void;
    show(): void;
    disable(): void;
    enable(): void;

    /**
     * Atribui a data selecionada
     *
     * @param date Data como string (formato pt-br), Date ou moment
     */
    setDate(date: string|Date): void;

    /**
     * Pega a data como objeto moment (da lib momentjs)
     */
    getDate(): any;
}

interface LoadingSettings {
    /**
     * Mensagem exibida
     *
     * Padrão: "Loading..."
     */
    textMessage?: string,

    /**
     * Título exibido quando theme == true
     *
     * Padrão: ""
     */
    title?: string,

    /**
     * Estilo para o bloco de carregamento
     *
     * Objeto CSS aceito pela JQuery.
     *
     * Padrão: null
     */
    css?: object,

    /**
     * Estilo para o overlay
     *
     * Objeto CSS aceito pela JQuery.
     *
     * Padrão: null
     */
    overlayCSS?: object,

    /**
     * Estilo para o cursor antes de bloquear
     *
     * Padrão: ""
     */
    cursorReset?: string,

    /**
     * Índice Z-Index
     *
     * Padrão: null
     */
    baseZ?: number,

    /**
     * Indica se será centralizado na tela
     *
     * Padrão: true
     */
    centerX?: boolean,

    /**
     * Indica se será centralizado na tela
     *
     * Padrão: true
     */
    centerZ?: boolean,

    /**
     * Desabilita eventos de teclado e mouse
     *
     * Padrão: true
     */
    bindEvents?: boolean,

    /**
     * Tempo, em ms, do efeito de transição no bloqueio
     *
     * Se for 0 não terá efeito de transição.
     */
    fadeIn?: number,

    /**
     * Tempo, em ms, do efeito de transição no desbloqueio
     *
     * Se for 0 não terá efeito de transição.
     */
    fadeOut?: number,

    /**
     * Tempo, em ms, para aguardar antes de desbloquear
     *
     * Se for 0 vai desabilitar o auto desbloqueio.
     */
    timeout?: number,

    /**
     * Indica se será exibido o overlay
     *
     * Padrão: true
     */
    showOverlay?: boolean,

    /**
     * Função para ser executado após o efeito de transição do bloqueio
     */
    onBlock?: SimpleCallback,

    /**
     * Função para ser executado após o efeito de transição do desbloqueio
     *
     * O elemento desbloqueado será passado à função.
     */
    onUnBlock?: DataCallback,

    /**
     * Indica se vai ignorar um bloqueio quando já está bloqueado
     *
     * Padrão: false
     */
    ignoreIfBlocked?: boolean
}

declare class Loading {
    /**
     * Exibe a tela de carregamento
     */
    show(): void;

    /**
     * Esconde a tela de carregamento
     */
    hide(): void;
}

declare namespace FLUIGC {
    /**
     * Cria um campo com auto-complete
     *
     * Eventos disponíveis para autocomplete:
     * - fluig.autocomplete.cursorchanged
     * - fluig.autocomplete.opened
     * - fluig.autocomplete.closed
     * - fluig.autocomplete.selected
     * - fluig.autocomplete.autocompleted
     * - fluig.autocomplete.beforeItemAdd
     * - fluig.autocomplete.itemAdded
     * - fluig.autocomplete.beforeItemUpdate
     * - fluig.autocomplete.itemUpdated
     * - fluig.autocomplete.beforeItemRemove
     * - fluig.autocomplete.itemRemoved
     *
     * @param target Seletor utilizado na JQuery
     * @param options Opções adicionais para o autocomplete
     * @param callback Função executada após trazer as respostas para o auto-complete
     */
    declare function autocomplete(target: string, options: AutoCompleteOptions, callback: ErrorCallback): AutoComplete;

    /**
     * Cria um campo filter em um select (é o Zoom feito manualmente)
     *
     * Para usar em formulário deve-se incluir o css /style-guide/css/fluig-style-guide-filter.min.css
     * e o script /style-guide/js/fluig-style-guide-filter.min.js
     *
     * Para usar em Widget deve-se incluir a instrução application.resource.component.1=fluigfilter
     * (substituindo o 1 por um valor ainda não utilizado) no arquivo application.info
     *
     * @param target Seletor utilizado na JQuery
     * @param settings Configurações do filtro
     */
    declare function filter(target: string, settings: FilterSettings): FluigcFilter;

    /**
     * Cria uma caixa de seleção para tratar data e horário
     *
     * @param target Seletor utilizado na JQuery
     * @param settings Configurações do calendário
     */
    declare function calendar(target: string, settings: CalendarSettings): Calendar;

    /**
     * Exibe uma mensagem simples no topo da página.
     *
     * Muito utilizado para substituir alert do JS.
     */
    declare function toast(settings: ToastSettings): void;

    /**
     * Cria uma tela de carregamento em elemento específico ou na janela inteira
     *
     * Caso o objeto window seja passado a tela de carregamento ocupará a janela inteira.
     *
     * @param selector Uma string com seletor JQuery ou objeto window
     * @param settings Configurações possíveis para o Loading
     */
    declare function loading(selector: string|Window, settings: LoadingSettings): Loading;

    /**
     * Cria uma Modal
     *
     * @param settings Configurações
     * @param callback Função para executar após a criação da modal
     */
    declare function modal(settings: ModalSettings, callback: ModalCallback): FluigcModal;
}

/**
 * Botão Switch
 *
 * @see https://style.fluig.com/javascript.html#switch-button
 */
declare namespace FLUIGC.switcher {

    /**
     * Transforma um checkbox ou radio em um botão switch
     *
     * Ao inicializar o botão switch será feita a leitura das opções
     * do elemento HTML (os atributos do checkbox ou radio) para orientar
     * como o botão deve ser.
     *
     * As opções no checkbox/radio são:
     *
     * | Atributo | Valores | Padrão |
     * |----------|---------|--------|
     * | checked | true, false | false |
     * | data-size | null, 'mini', 'small', 'normal', 'large' | null|
     * | data-animate | true, false | true|
     * | disabled | true, false | false|
     * | readonly | true, false | false|
     * | data-on-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'primary'|
     * | data-off-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'default'|
     * | data-on-text |  | 'ON'|
     * | data-off-text |  | 'OFF'|
     *
     * @tutorial https://style.fluig.com/javascript.html#switch-button
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function init(element: string|JQuery): void;

    /**
     * Transforma todos os checkbox e radio de um container em botões switch
     *
     * Ao inicializar o botão switch será feita a leitura das opções
     * do elemento HTML (os atributos do checkbox ou radio) para orientar
     * como o botão deve ser.
     *
     * As opções no checkbox/radio são:
     *
     * | Atributo | Valores | Padrão |
     * |----------|---------|--------|
     * | checked | true, false | false |
     * | data-size | null, 'mini', 'small', 'normal', 'large' | null|
     * | data-animate | true, false | true|
     * | disabled | true, false | false|
     * | readonly | true, false | false|
     * | data-on-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'primary'|
     * | data-off-color | 'primary', 'info', 'success', 'warning', 'danger', 'default' | 'default'|
     * | data-on-text |  | 'ON'|
     * | data-off-text |  | 'OFF'|
     *
     * @tutorial https://style.fluig.com/javascript.html#switch-button
     *
     * @param parentElement Seletor JQuery, ou Objeto, do elemento pai
     * @param fieldName Nome do input deve iniciar com o valor indicado
     */
    declare function initAll(parentElement: string|JQuery, fieldName?: string): void;

    /**
     * Pega o estado do botão
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function getState(element: string|JQuery): boolean;

    /**
     * Configura o estado como checked
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function setTrue(element: string|JQuery): void;

    /**
     * Configura o estado como false (não selecionado)
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function setFalse(element: string|JQuery): void;

    /**
     * Alterna o estado do botão
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function toggleState(element: string|JQuery): void;

    /**
     * Habilita o botão (remove disabled do checkbox/radio)
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function enable(element: string|JQuery): void;

    /**
     * Desabilita o botão (coloca disabled no checkbox/radio)
     *
     * Cuidado: inputs desabilitados não são enviados pelo formulário.
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function disable(element: string|JQuery): void;

    /**
     * Indica se é para o botão ser somente leitura
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function isReadOnly(element: string|JQuery, readOnly: boolean): void;

    /**
     * Remove o botão switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     */
    declare function destroy(element: string|JQuery): void;

    /**
     * Evento disparado quando iniciar um botão Switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     * @param callback Função executada ao disparar o evento
     */
    declare function onInit(element: string|JQuery, callback: SwitchInitCallback): void;

    /**
     * Evento disparado houver mudança de estado do botão Switch
     *
     * @param element Seletor JQuery ou Objeto JQuery
     * @param callback Função executada ao disparar o evento
     */
    declare function onChange(element: string|JQuery, callback: SwitchChangeCallback): void;
}

declare namespace FLUIGC.message {
    /**
     * Cria uma Mensagem de Confirmação
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário responder a confirmação
     */
    declare function confirm(settings: ConfirmSettings, callback: ConfirmCallback): void;

    /**
     * Cria uma Mensagem de Alerta
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário fechar o alerta
     */
    declare function alert(settings: AlertSettings, callback: MessageCallback): void;

    /**
     * Cria uma Mensagem de Erro
     *
     * @param settings Configurações
     * @param callback Função para executar após o usuário fechar o erro
     */
    declare function error(settings: ErrorSettings, callback: MessageCallback): void;
}

declare namespace FLUIGC.calendar {
    /**
     * Formata uma data em uma string de acordo com a formatação indicada.
     *
     * @see https://style.fluig.com/javascript.html#fluig-calendar
     *
     * @param date Data a ser formatada
     * @param format Formatação
     * @param language Idioma (padrão pt-br)
     */
    declare function formatDate(date: Date, format: string, language?: string): string;
}
