export enum EN_VIEW_TYPE {
    CODE = 'code',
    DATE = 'date',
    DATETIME = 'datetime',
    DECIMAL = 'decimal',
    ENUM = 'enum',
    MULTICODE = 'multicode',
    NUMERIC = 'numeric',
    BUTTON = 'button',
    TF = 'tf',
    TEXT = 'text',
}

export enum EN_LAYOUT_VIEW_TYPE {
    MENU = 'menu',

    LIST_GRID = 'list_grid',
    INPUT_GRID = 'input_grid',
    
    FORM = 'form',
    TOOLBAR = 'toolbar',
    TREE = 'tree',
    KANBAN = 'kanban',
    GANTT = 'gantt',
    
    HORIZONTAL_BAR_GRAPH = 'horizontal_bar_graph',
    VERTICAL_BAR_GRAPH = 'vertical_bar_graph',
    LINE_GRAPH = 'line_graph',
    PIE_GRAPH = 'pie_graph',

    EDITOR = 'editor',
}

export enum EN_BUTTON_TYPE {
    SAVE = 'save', //저장
    CANCEL = 'cancel', //취소
    DELETE = 'delete', //삭제
    REMOVE = 'remove', //제거
    ADD = 'add', //추가
    EDIT = 'edit', //수정
    APPLY = 'apply', //적용
    SEARCH = 'search', //검색
    PRINT = 'print', //인쇄
    UPLOAD = 'upload', //업로드
    SUBMIT = 'submit', //전송
    RESET = 'reset', //초기화
}

//#region format

export enum EN_DATE_FORMAT {
    YYYY = 'YYYY',
    MM = 'MM',
    DD = 'DD',
}

export enum EN_DATETIME_FORMAT {
    HOUR = 'HH',
    MINUTE = 'mm',
    SECOND = 'ss',
    MILLISECOND = 'sss',
}

//#endregion

export enum EN_DIRECTION {
    UP = 1,
    DOWN = 2,
    LEFT = 4,
    RIGHT = 8,
}
