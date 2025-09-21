export enum EN_VIEW_TYPE {
    Code = 'code',
    Date = 'date',
    Datetime = 'datetime',
    Decimal = 'decimal',
    Enum = 'enum',
    Multicode = 'multicode',
    Numeric = 'numeric',
    Button = 'button',
    TF = 'tf',
    Text = 'text',
}

export enum EN_LAYOUT_VIEW_TYPE {
    Menu = 'menu',

    ListGrid = 'list_grid',
    InputGrid = 'input_grid',

    Form = 'form',
    Toolbar = 'toolbar',
    Tree = 'tree',
    Kanban = 'kanban',
    Gantt = 'gantt',

    HorizontalBarGraph = 'horizontal_bar_graph',
    VerticalBarGraph = 'vertical_bar_graph',
    LineGraph = 'line_graph',
    PieGraph = 'pie_graph',

    Editor = 'editor',
}

//#region format

export enum EN_DATE_FORMAT {
    Year = 'YYYY',
    Month = 'MM',
    Day = 'DD',
}

export enum EN_DATETIME_FORMAT {
    Hour = 'HH',
    Minute = 'mm',
    Second = 'ss',
    Millisecond = 'sss',
}

export enum EN_ATTR_TYPE {
    Initializer = 'initializer',
    Information = 'information',
    Renderer = 'renderer',
    Validator = 'validator',
}

//#endregion

export enum EN_DIRECTION {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

export enum EN_LAYOUT_DIRECTION {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}